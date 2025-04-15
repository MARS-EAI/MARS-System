import styles from './index.module.less';
import { useContext } from 'react';
import { InfoContext } from '@/provider/global-provider';
import Logo from '@/assets/header-logo.svg';
import LogoEn from '@/assets/ai45-logo-en.svg';

const Footer = () => {
    const { lang } = useContext(InfoContext);
    return (
        <div className={styles.footer}>
            <div className={styles.pic}>
                <img src={lang === 'en-US' ? LogoEn : Logo} alt="logo" />
            </div>
            <div className={styles.icp}>
                © All Rights Reserved.
                <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">沪ICP备2021009351号-1</a>
            </div>
        </div>
    );
};

export default Footer;
