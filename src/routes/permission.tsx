import { InfoContext } from "@/provider/global-provider";
import { ReactElement, useContext, useEffect, useRef } from "react";

const Permission = ({ element }: { element: ReactElement }) => {
  const loginFlagRef = useRef<boolean>(false);
  const { isLogin, userInfo, initUser } = useContext(InfoContext);

  const checkIfNeedLogin = async () => {
    if (!isLogin || !userInfo.ssoUid) {
      if (loginFlagRef.current) return;
      loginFlagRef.current = true;
      await initUser();
    }
  };

  useEffect(() => {
    checkIfNeedLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (userInfo.ssoUid ? element : <></>) as ReactElement;
};

export default Permission;
