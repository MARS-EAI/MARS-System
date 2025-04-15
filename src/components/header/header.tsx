import styles from './header.module.less';
import { NavLink, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { InfoContext } from '@/provider/global-provider';
import Lang from '../lang/lang';
import HeaderLogo from '@/assets/header-logo.svg';
import LogoEn from '@/assets/ai45-logo-en.svg';
import HeaderLogoNew from '@/assets/output.png';

const Header = () => {
    const { pathname } = useLocation();

    const { locale, lang } = useContext(InfoContext);

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <NavLink to="/">
                    {/* <img src={lang === 'en-US' ? LogoEn : HeaderLogo} alt="" /> */}
                    <img src={lang === 'en-US' ? HeaderLogoNew : HeaderLogoNew} alt="" style={{ height: '40px', objectFit: 'contain' }}/>
                </NavLink>
            </div>
            <div className={styles.headerNav}>
                <NavLink to="/base" className={pathname === '/base' ? styles.active : ''}>
                    {locale['nav.safeBaseNew']}
                </NavLink>
                <NavLink to="/tech" className={pathname === '/tech' ? styles.active : ''}>
                    {locale['nav.safeTechNew']}
                </NavLink>
                <NavLink to="/eval" className={pathname === '/eval' ? styles.active : ''}>
                    {locale['nav.safeEvalNew']}
                </NavLink>
                <NavLink
                    to="/service"
                    className={pathname === '/service' ? styles.active : ''}
                >
                    {locale['nav.safeServiceNew']}
                </NavLink>
            </div>
            <Lang />
        </div>
    );
};

export default Header;
