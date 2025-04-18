import styles from './index.module.less';
import { useContext } from 'react';
import Banner from '@/components/banner';
import Panel from '@/components/panel';
import { InfoContext } from '@/provider/global-provider';
import ServiceBannerPic from '@/assets/pics/service-banner.jpg';
import classNames from 'classnames';
import NewsImage from '@/assets/picsNew/serv-1.png';
import logo1 from '@/assets/picsNew/school1.png';
import logo2 from '@/assets/picsNew/school2.png';
import logo3 from '@/assets/picsNew/school3.png';
import logo4 from '@/assets/picsNew/school4.png';
import logo5 from '@/assets/picsNew/school5.png';
import logo6 from '@/assets/picsNew/school6.png';
import logo7 from '@/assets/picsNew/school7.png';
import logo8 from '@/assets/picsNew/school8.png';
import logo9 from '@/assets/picsNew/school9.png';
import logo10 from '@/assets/picsNew/school10.png';
import logo11 from '@/assets/picsNew/school11.png';
import logo12 from '@/assets/picsNew/school12.png';
import logo13 from '@/assets/picsNew/school13.png';
import logo14 from '@/assets/picsNew/school14.png';


export const typeMap: any = {
    all: 'tab.all',
    tool: 'tab.tool',
    data: 'tab.data',
};

const academicLogos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7,
    logo8, logo9, logo10, logo11, logo12, logo13, logo14,
];


const Service = () => {
    const { locale } = useContext(InfoContext);
    const { lang } = useContext(InfoContext);

    return (
        <div className={styles.service}>
            <Banner
                imgUrl={ServiceBannerPic}
                title={locale['service.banner.titleNew']}
                subTitle={locale['service.banner.subTitleNew']}
                desc={locale['service.banner.descNew']}
            />
            <div className={classNames(styles.baseModule, 'container')}>
                <Panel
                    title={locale['service.module3.titleNew']}
                >
                    <div className={styles.newsItem}>
                        <img src={NewsImage} alt="采访图片" className={styles.newsImage} />
                        <div className={styles.newsContent}>
                            <h3 className={styles.newsTitle}>
                                {locale['service.module3.New1']}
                            </h3>
                            <p className={styles.newsSubtitle}>Dr. Zaibin Zhang, a core member of MARS, shared his vision of future robots during an interview with a CCTV reporter.</p>
                            <a
                                href="https://www.bilibili.com/video/BV1S9oLY3EAj/?spm_id_from=333.337.search-card.all.click&vd_source=6342c9a59d2588b2f4b5294ccaf7a8b1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.moreButton}
                            >
                                {lang === 'en-US' ? 'Learn More' : '了解更多'}
                            </a>
                        </div>
                    </div>

                    <div className={styles.comingSoon}>
                        Coming Soon...
                    </div>
                </Panel>
            </div>
            <div className={classNames(styles.baseModule, 'container')}>
                <Panel
                    title={locale['service.module3.titleSchool']}
                >
                    <div className={styles.academicPartnersGrid}>
                        {academicLogos.map((logo, index) => (
                            <div key={index} className={styles.logoItem}>
                                <img src={logo} alt={`partner-logo-${index}`} />
                            </div>
                        ))}
                    </div>
                </Panel>
            </div>
        </div>
    );
};

export default Service;
