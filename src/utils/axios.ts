import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { message } from "antd";
import { isInWhiteList } from "./tools";
import { detector } from "@easycode/client-detector";
import { LANG_STORE_KEY, TOKEN_COOKIE_KEY } from "@/config/storage";
import Locale, { DEFAULT_LANG } from "@/locale/index";
import { goLogin } from "@/components/login/login-util";
import Cookies from "js-cookie";
import { AUTH } from "@/config/cgi";

interface MyResponse<T> {
  msg: string;
  code?: number;
  success?: boolean;
  data: T;
}
interface MyRequest<U> extends AxiosRequestConfig {
  data?: U; // post传参
  params?: U; // get传参
  timeout?: number; // 接口timeout
  forbidMsg?: boolean; // 是否屏蔽消息
}

class Http {
  timeout = 7000;
  baseURL = "";
  forbidMsg = false; // 主动屏蔽消息
  forbidLoginCheckWhiteList: string[] = [AUTH]; // token登录鉴权的接口白名单

  getCurLang() {
    const cache = localStorage.getItem(LANG_STORE_KEY) || "";
    return Object.keys(Locale).includes(cache) ? cache : DEFAULT_LANG;
  }

  getCurLocale() {
    return Locale[this.getCurLang()];
  }

  mergeOptions(options: AxiosRequestConfig) {
    return {
      timeout: this.timeout,
      baseURL: this.baseURL,
      forbidMsg: this.forbidMsg,
      ...options,
    };
  }

  setInterceptor(instance: AxiosInstance) {
    instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      const exConfig: InternalAxiosRequestConfig = Object.assign(config, {});

      // header塞入语言类型，方便后台返回对应的msg
      if (exConfig?.headers) {
        exConfig.headers.lang = this.getCurLang();
      }

      const token = Cookies.get(TOKEN_COOKIE_KEY);
      const url = config?.url || "";
      // token鉴权的接口：带上headers，没有token则跳转去登录
      if (!isInWhiteList(url, this.forbidLoginCheckWhiteList)) {
        if (token) {
          if (exConfig?.headers) {
            exConfig.headers.Authorization = `Bearer ${Cookies.get(TOKEN_COOKIE_KEY)}`;
          }
        } else {
          goLogin();
        }
      }

      return exConfig;
    });
    instance.interceptors.response.use(
      (res: AxiosResponse) => {
        if (res.status === 200) {
          const ifFail =
            res?.data?.success !== undefined
              ? !res.data.success
              : res.data.code !== 0;
          if (ifFail) {
            if (!this.forbidMsg) {
              message.error(res.data?.msg); // 注意中英文，如果要用msg，需要后台返回对应语言的msg
            }
            return Promise.resolve(res.data);
          }
          return Promise.resolve(res.data);
        } else {
          try {
            const resp = res.data;
            if (resp && resp.code !== 0) {
              const err = new Error(JSON.stringify(resp));
              detector.sendError2(err, res.request.responseURL);
            }
          } catch (err) {
            detector.sendError2(err as Error, res.request.responseURL);
          }
        }
        return Promise.resolve(res.data);
      },
      (err: AxiosError) => {
        try {
          const error = new Error(JSON.stringify(err?.response?.data));
          detector.sendError2(error, err.request.responseURL);
        } catch (error) {
          detector.sendError2(error as Error, err.request.responseURL);
        }

        const status = err?.response?.status;
        const locale = this.getCurLocale();

        if (!this.forbidMsg) {
          if (status === 401) {
            message.warning(locale?.["err.overdue"]);
          } else {
            message.warning(err?.message || locale?.["err.fail"]);
          }
        }

        if (status === 401) {
          setTimeout(() => {
            goLogin();
          }, 200);
        }

        return Promise.resolve({
          code: 9999,
          data: null,
        });
      },
    );
  }

  request<U, T>(options: MyRequest<U>): Promise<MyResponse<T>> {
    this.timeout = options.timeout || this.timeout;
    this.forbidMsg = options.forbidMsg || false;
    const opts = this.mergeOptions(options);
    const axiosInstance: AxiosInstance = axios.create();
    this.setInterceptor(axiosInstance);
    return axiosInstance(opts);
  }

  get<U, T>(url: string, config: MyRequest<U> = {}): Promise<MyResponse<T>> {
    return this.request<U, T>({
      url,
      method: "get",
      ...config,
    });
  }

  post<U, T>(url: string, config: MyRequest<U> = {}): Promise<MyResponse<T>> {
    return this.request<U, T>({
      url,
      method: "post",
      ...config,
    });
  }

  put<U, T>(url: string, config: MyRequest<U> = {}): Promise<MyResponse<T>> {
    return this.request<U, T>({
      url,
      method: "put",
      ...config,
    });
  }

  delete<U, T>(url: string, config: MyRequest<U> = {}): Promise<MyResponse<T>> {
    return this.request<U, T>({
      url,
      method: "delete",
      ...config,
    });
  }
}

export default new Http();
