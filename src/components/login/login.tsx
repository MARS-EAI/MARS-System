import { useContext, useState } from "react";
import classNames from "classnames";
import style from "./login.module.less";
import { InfoContext } from "@/provider/global-provider";
import { LoginUrlType, goLogin } from "@/components/login/login-util";
import { Popover } from "antd";

const Login = () => {
  const { userInfo, locale, loginOut } = useContext(InfoContext);
  const [open, setOpen] = useState<boolean>(false);

  if (!userInfo?.ssoUid) {
    return <></>;
  }

  return (
    <div className={style.login}>
      <Popover
        open={open}
        arrow={false}
        title={<></>}
        placement={"rightBottom"}
        trigger={["click"]}
        overlayInnerStyle={{
          padding: 0,
          boxShadow: "none",
          background: "transparent",
        }}
        content={
          <div className={style.loginMenu}>
            {userInfo.username && (
              <div className={style.loginMenuUser}>{userInfo.username}</div>
            )}
            <div
              className={classNames(style.loginMenuItem, style.loginMenuCenter)}
              onClick={() => goLogin(LoginUrlType.userCenter)}
            >
              {locale.userCenter}
            </div>
            <div
              className={classNames(style.loginMenuItem, style.loginMenuQuit)}
              onClick={loginOut}
            >
              {locale.loginout}
            </div>
          </div>
        }
        onOpenChange={(sopen: boolean) => setOpen(sopen)}
      >
        <div className={style.loginUser}>
          {userInfo.avatar && <img alt="" src={userInfo.avatar} />}
          {!userInfo.avatar && userInfo.username && (
            <div className={style.loginUserName}>
              {userInfo.username.substring(0, 1)}
            </div>
          )}
        </div>
      </Popover>
    </div>
  );
};

export default Login;
