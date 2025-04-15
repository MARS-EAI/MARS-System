import { GET_USER_INFO, LOGIN_OUT, AUTH } from "@/config/cgi";
import { TOKEN_COOKIE_KEY } from "@/config/storage";
import Http from "@/utils/axios";
import { getQueryString } from "@/utils/tools";
import Cookies from "js-cookie";

export interface IGetUserRes {
  ssoUid?: string;
  avatar?: string;
  username?: string;
  nickname?: string;
  githubAccount?: string;
  email?: string;
  phone?: string;
}

// 获取链接中的code
export const getAuthCode = () => {
  return getQueryString(window.location.search, "code");
};

// 登录鉴权，获取token
export const doAuth = async () => {
  const authCode = getAuthCode();
  const { code, data } = await Http.post<{ code: string }, { token: string }>(
    AUTH,
    {
      data: {
        code: authCode,
      },
    },
  );
  console.log("auth res token", data?.token || "");
  return code === 0 && Boolean(data?.token);
};

// 获取用户信息
export const getUser = async () => {
  const { code, data } = await Http.post<{ jwt: string }, IGetUserRes>(
    GET_USER_INFO,
    {
      data: {
        jwt: Cookies.get(TOKEN_COOKIE_KEY) || "",
      },
    },
  );
  if (code === 0 && data) {
    return data;
  }
  return null;
};

// 登出
export const loginOut = async () => {
  const { code } = await Http.post<{ jwt: string }, null>(LOGIN_OUT, {
    data: {
      jwt: Cookies.get(TOKEN_COOKIE_KEY) || "",
    },
  });
  return code === 0;
};
