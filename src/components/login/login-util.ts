import { filterParamsInUrl, isDeveloping } from "@/utils/tools";
import Cookies from "js-cookie";
import { TOKEN_COOKIE_KEY } from "@/config/storage";

// 跳转类型：登录 | 注册 | 个人中心
export enum LoginUrlType {
  login = "authentication",
  userCenter = "usercenter",
}

// 登录跳转
export const goLogin = (urlType: LoginUrlType = LoginUrlType.login) => {
  if (isDeveloping()) return;

  // 个人中心跳转时打开新标签页，登录、注册原地跳转
  const openType = urlType === LoginUrlType.userCenter ? "_blank" : "_self";
  const targetUrl = filterParamsInUrl(["code"]);
  const target = `${import.meta.env.VITE_SSO_URL}/${urlType}?redirect=${targetUrl}&clientId=${import.meta.env.VITE_CLIENT_ID}`;
  if (urlType === LoginUrlType.login) {
    clearCookie();
  }
  target && window.open(target, openType);
};

// 清除cookie
export const clearCookie = () => {
  const cache = Cookies.get();
  if (cache && Object.keys(cache)?.length) {
    const { host } = window.location;
    const targetDomain = host?.split(".")?.slice(1)?.join(".");
    Cookies.remove(TOKEN_COOKIE_KEY, { path: "/", domain: targetDomain });
    Cookies.remove(TOKEN_COOKIE_KEY, { path: "/", domain: `.${targetDomain}` });
    Cookies.remove(TOKEN_COOKIE_KEY, { path: "/", domain: "" });
    Cookies.remove(TOKEN_COOKIE_KEY, { path: "/", domain: host });
    Cookies.remove(TOKEN_COOKIE_KEY, { path: "/", domain: `.${host}` });
  }
};
