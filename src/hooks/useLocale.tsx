// import { LANG_STORE_KEY } from '@/config/storage';
import Locale, { DEFAULT_LANG } from '@/locale/index';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useLocale = () => {
    const { pathname } = useLocation();
    const [lang, setLang] = useState<string>(pathname === '/en' ? 'en-US' : DEFAULT_LANG);

    const initLang = () => {
        // const langCache = localStorage.getItem(LANG_STORE_KEY) || 'zh-CN';
        const langCache = pathname === '/en' ? 'en-US' : DEFAULT_LANG;
        if (
            langCache &&
            langCache !== lang &&
            Object.keys(Locale).indexOf(langCache) >= 0
        ) {
            setLang(langCache);
        }
    };

    const setLocale = (slang: string) => {
        const curLang =
            Object.keys(Locale).indexOf(slang) >= 0 ? slang : DEFAULT_LANG;
        setLang(curLang);
        // localStorage.setItem(LANG_STORE_KEY, curLang);
    };

    useEffect(() => {
        initLang();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        lang,
        locale: Locale[lang],
        setLocale,
    };
};

export default useLocale;
