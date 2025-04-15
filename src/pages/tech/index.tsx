import styles from './index.module.less';
import { useContext } from 'react';
import Banner from '@/components/banner';
import Panel from '@/components/panel';
import CommonCard from '@/components/card';
import { InfoContext } from '@/provider/global-provider';
import TechBannerPic from '@/assets/pics/tech-banner.jpg';
import TechCardAsset1 from '@/assets/pics/tech-asset-1.png';
import TechCardAsset2 from '@/assets/pics/tech-asset-2.jpg';
import TechCardAsset3 from '@/assets/pics/tech-asset-3.jpg';
import TechCardAsset4 from '@/assets/pics/tech-asset-4.jpg';
import TechM2CardAsset1 from '@/assets/pics/tech-module2-card1-asset.jpg';
import TechM2CardAsset2 from '@/assets/pics/tech-module2-card2-asset.jpg';
import TechM2CardAsset3 from '@/assets/pics/tech-module2-card3-asset.jpg';
import CardHoverBg1 from '@/assets/pics/tech-card-hover-bg.jpg';
import CardHoverBg2 from '@/assets/pics/tech-module2-card-hoverbg.jpg';
import classNames from 'classnames';

const Tech = () => {
    const { locale } = useContext(InfoContext);

    const module1CardList = [
        {
            imgUrl: TechCardAsset1,
            title: locale['tech.module1.card1.title'],
            desc: locale['tech.module1.card1.desc'],
            path: 'https://github.com/AI45Lab/TracingLLM',
        },
        {
            imgUrl: TechCardAsset2,
            title: locale['tech.module1.card2.title'],
            desc: locale['tech.module1.card2.desc'],
            path: 'https://github.com/AI45Lab/DEAN',
        },
        {
            imgUrl: TechCardAsset3,
            title: locale['tech.module1.card3.title'],
            desc: locale['tech.module1.card3.desc'],
            path: 'https://github.com/AI45Lab/Persafety',
        },
    ];

    const module2CardList = [
        {
            title: locale['tech.module2.card1.title'],
            desc: locale['tech.module2.card1.desc'],
            imgUrl: TechM2CardAsset1,
            path: 'https://github.com/AI45Lab/weak-to-strong-search',
        },
        {
            title: locale['tech.module2.card2.title'],
            desc: locale['tech.module2.card2.desc'],
            imgUrl: TechM2CardAsset2,
            tags: ['ACL2024 Outstanding Paper'],
            path: 'https://github.com/AI45Lab/emulated-disalignment',
        },
        {
            title: locale['tech.module2.card3.title'],
            desc: locale['tech.module2.card3.desc'],
            imgUrl: TechM2CardAsset3,
            path: 'https://github.com/AI45Lab/IVG',
        },
    ];

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
                    <div className={styles.cardList}>
                        {
                            module1CardList.map((item, index) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <CommonCard
                                    type="tech"
                                    {...item}
                                    key={`tech-module1-card-${index}`}
                                    hoverBg={CardHoverBg1}
                                />
                            ))
                        }
                    </div>
                </Panel>
                <Panel
                    title={locale['tech.module2.titleNew']}
                    desc={locale['tech.module2.descNew']}
                >
                    <div className={styles.cardList}>
                        {
                            module2CardList.map((item) => (
                                <CommonCard
                                    type="tech"
                                    {...item}
                                    key={`tech-module1-card-${item.title}`}
                                    height="440px"
                                    hoverBg={CardHoverBg2}
                                />
                            ))
                        }
                    </div>
                </Panel>
                <Panel
                    title={locale['tech.module3.titleNew']}
                >
                    <div className={classNames(styles.inner, styles.bgWhite)}>
                        <div className={styles.innerLeft}>
                            <img src={TechCardAsset4} />
                        </div>
                        <div className={styles.innerDivider} />
                        <div className={styles.innerRight}>
                            <div className={styles.title}>
                                {locale['tech.module3.card.title']}
                            </div>
                            <div className={styles.desc}>
                                {locale['tech.module3.card.desc']}
                            </div>
                            <div className={styles.github} onClick={() => { handleLink('https://arxiv.org/html/2411.11581v1'); }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M8 1.33325C4.31905 1.33325 1.33334 4.39327 1.33334 8.16853C1.33334 11.1885 3.24381 13.7505 5.89238 14.6543C6.22572 14.7181 6.33334 14.5057 6.33334 14.3257V13.0533C4.47905 13.4666 4.09238 12.2466 4.09238 12.2466C3.78953 11.4562 3.35238 11.2466 3.35238 11.2466C2.74762 10.8219 3.3981 10.8314 3.3981 10.8314C4.06762 10.879 4.42 11.5362 4.42 11.5362C5.01429 12.5809 5.97905 12.279 6.36 12.1038C6.41905 11.6628 6.59238 11.3609 6.78381 11.1895C5.30286 11.0162 3.74572 10.4304 3.74572 7.81233C3.74572 7.06471 4.00667 6.45614 4.43238 5.97709C4.36381 5.8047 4.13524 5.10946 4.4981 4.16755C4.4981 4.16755 5.0581 3.98469 6.33143 4.86851C6.87471 4.71701 7.436 4.6398 8 4.63898C8.56463 4.63986 9.12654 4.71707 9.67048 4.86851C10.9429 3.98469 11.5019 4.1685 11.5019 4.1685C11.8638 5.10946 11.6352 5.80566 11.5676 5.97804C11.9952 6.45614 12.2533 7.06566 12.2533 7.81233C12.2533 10.4371 10.6943 11.0152 9.20953 11.1838C9.44762 11.3962 9.66667 11.8124 9.66667 12.4505V14.3267C9.66667 14.5076 9.77334 14.7209 10.1114 14.6543C12.7591 13.7495 14.6667 11.1876 14.6667 8.16853C14.6667 4.39327 11.6819 1.33325 8 1.33325Z" fill="#464A53" />
                                </svg>
                                GitHub
                            </div>
                        </div>
                    </div>
                </Panel>
            </div>
        </div>
    );
};

export default Tech;
