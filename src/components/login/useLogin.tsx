import { useState } from "react";
import {
  IGetUserRes,
  doAuth,
  getAuthCode,
  getUser,
  loginOut,
} from "./login-service";
import Cookies from "js-cookie";
import { TOKEN_COOKIE_KEY } from "@/config/storage";
import { goLogin } from "./login-util";

const useLogin = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<IGetUserRes>({});

  const initUser = async () => {
    if (isLogin && userInfo.ssoUid) return;
    const code = getAuthCode();
    const token = Cookies.get(TOKEN_COOKIE_KEY);
    console.log("[global-provider] code & token", token, code);

    if (!token) {
      if (code) {
        console.log(
          "[global-provider] start to auth",
          Cookies.get(TOKEN_COOKIE_KEY),
        );
        const sucess = await doAuth();
        console.log(
          "[global-provider] auth res",
          sucess,
          Cookies.get(TOKEN_COOKIE_KEY),
        );
        if (window.location.href.includes("?code")) {
          history.pushState("", "", window.location.href.split("?code=")[0]);
        } else if (window.location.href.includes("&code")) {
          history.pushState("", "", window.location.href.split("&code=")[0]);
        }
        if (!sucess) {
          goLogin();
        }
      } else {
        goLogin();
      }
    }
    if (Cookies.get(TOKEN_COOKIE_KEY)) {
      const data = await getUser();
      console.log("[global-provider] user", data);
      if (data) {
        setIsLogin(true);
        setUserInfo(data);
      } else {
        goLogin();
      }
    }
  };

  const doLoginOut = async () => {
    const suc = await loginOut();
    if (suc) {
      setIsLogin(false);
      setUserInfo({});
      goLogin();
    }
  };

  return {
    doLoginOut,
    initUser,
    isLogin,
    userInfo,
  };
};

export default useLogin;
