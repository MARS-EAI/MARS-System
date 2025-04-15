import styles from './index.module.less';
import { useContext } from 'react';
import BannerLogo from '@/assets/ai45-logo.svg';
import Header from '@/components/header/header';
import classNames from 'classnames';
import { InfoContext } from '@/provider/global-provider';

interface BannerProps {
    imgUrl: string;
    isHome?: boolean;
    title?: string;
    subTitle?: string;
    desc?: string;
}

const Banner = ({ imgUrl, isHome = false, title, subTitle, desc }: BannerProps) => {
    const { locale } = useContext(InfoContext);
    return (
        <div
            className={classNames(styles.banner,
                isHome ? styles.homeBanner : '')}
        >
            <Header />
            <img src={imgUrl} alt="banner" />
            {
                isHome ? (
                    <div className={classNames(styles.inner, styles.home)}>
                        {/* <div className={styles.logo}>
                            <img src={BannerLogo} alt="logo" />
                        </div> */}
                        <p className={styles.desc}>
                            {locale['home.banner.descNew']}
                        </p>
                    </div>
                ) : (
                    <div className={styles.inner}>
                        <div className={styles.mainTitle}>
                            {title}
                        </div>
                        <div className={styles.subTitle}>
                            {subTitle}
                        </div>
                        <div className={styles.desc}>
                            {desc}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Banner;
