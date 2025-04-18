import styles from './index.module.less';
import { useContext } from 'react';
import Banner from '@/components/banner';
import Panel from '@/components/panel';
import { InfoContext } from '@/provider/global-provider';
import TechBannerPic from '@/assets/pics/tech-banner.jpg';
import Image11 from '@/assets/picsNew/tech-1.png';
import Image21 from '@/assets/picsNew/tech-2.png';
import Image31 from '@/assets/picsNew/tech-3.png';
import classNames from 'classnames';

const Tech = () => {
    const { locale } = useContext(InfoContext);

    const handleLink = (path: string) => {
        window.open(path);
    };

    return (
        <div className={styles.tech}>
            <Banner
                imgUrl={TechBannerPic}
                title={locale['tech.banner.titleNew']}
                subTitle={locale['tech.banner.subTitleNew']}
                desc={locale['tech.banner.descNew']}
            />
            <div className={classNames(styles.baseModule, 'container')}>
                <Panel
                    title={locale['tech.module1.titleNew']}
                >
                    <div className={styles.inner}>
                        <img src={Image11} alt="eval-asset-1" />
                    </div>
                </Panel>
                <Panel
                    title={locale['tech.module2.titleNew']}
                    desc={locale['tech.module2.descNew']}
                >
                    <div className={styles.inner}>
                        <img src={Image21} alt="eval-asset-1" />
                    </div>
                </Panel>
                <Panel
                    title={locale['tech.module3.titleNew']}
                >
                    <div className={styles.inner}>
                        <img src={Image31} alt="eval-asset-1" />
                    </div>
                </Panel>
            </div>
        </div>
    );
};

export default Tech;
