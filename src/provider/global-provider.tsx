import { createContext, ReactNode, useMemo } from 'react';
import useLocale from '@/hooks/useLocale';
import useLogin from '@/components/login/useLogin';
import { IGetUserRes } from '@/components/login/login-service';

export const InfoContext = createContext(
    {} as {
        lang: string;
        locale: any;
        setLocale: (lang: string) => void;

        isLogin: boolean;
        userInfo: IGetUserRes;
        initUser: () => void;
        loginOut: () => void;
    },
);

const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const { lang, locale, setLocale } = useLocale();

    const { isLogin, userInfo, initUser, doLoginOut } = useLogin();

    const context = useMemo(() => {
        return {
            lang,
            locale,
            setLocale,

            isLogin,
            userInfo,
            initUser,
            loginOut: doLoginOut,
        };
    }, [lang, locale, setLocale, isLogin, userInfo, initUser, doLoginOut]);

    return (
        <InfoContext.Provider value={context}>{children}</InfoContext.Provider>
    );
};

export default GlobalProvider;
