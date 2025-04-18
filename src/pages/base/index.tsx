import styles from './index.module.less';
import { useContext } from 'react';
import Banner from '@/components/banner';
import Panel from '@/components/panel';
import { InfoContext } from '@/provider/global-provider';
// import CommonCard from '@/components/card';
import CommonCard from '@/components/cardbase';
import BaseBannerPic from '@/assets/pics/base-banner.jpg';
// import BaseCardAsset1 from '@/assets/pics/base-card-asset-1.jpg';
// import BaseCardAsset2 from '@/assets/pics/base-card-asset-2.jpg';
// import BaseCardAsset3 from '@/assets/pics/base-card-asset-3.jpg';
import BaseCardAsset11 from '@/assets/picsNew/base-card-asset-1-1.png';
import BaseCardAsset12 from '@/assets/picsNew/base-card-asset-1-2.png';
import BaseCardAsset21 from '@/assets/picsNew/base-card-asset-2-1.png';
import BaseCardAsset22 from '@/assets/picsNew/base-card-asset-2-2.png';
import BaseCardAsset31 from '@/assets/picsNew/base-card-asset-3-1.png';
import BaseCardAsset32 from '@/assets/picsNew/base-card-asset-3-2.png';
import CardHoverBg from '@/assets/pics/base-card-hover-bg.jpg';

const Content = () => {
    const { locale, lang } = useContext(InfoContext);

    const cardList = [
        {
            imgUrl: BaseCardAsset11,
            title: locale['base.module1.card1.titleNew'],
            desc: locale['base.module1.card1.descNew'],
            path: 'https://github.com/AI45Lab/CELLO',
        },
        {
            imgUrl: BaseCardAsset12,
            title: locale['base.module1.card2.titleNew'],
            desc: locale['base.module1.card2.descNew'],
            path: 'https://github.com/OpenCausaLab/MORE',
        },
    ];

    const cardList2 = [
        {
            imgUrl: BaseCardAsset21,
            title: locale['base.module2.card1.titleNew'],
            desc: locale['base.module2.card1.descNew'],
            path: 'https://github.com/AI45Lab/CELLO',
        },
        {
            imgUrl: BaseCardAsset22,
            title: locale['base.module2.card2.titleNew'],
            desc: locale['base.module2.card2.descNew'],
            path: 'https://github.com/OpenCausaLab/MORE',
        },
    ];

    const cardList3 = [
        {
            imgUrl: BaseCardAsset31,
            title: locale['base.module3.card1.titleNew'],
            desc: locale['base.module3.card1.descNew'],
            path: 'https://github.com/AI45Lab/CELLO',
        },
        {
            imgUrl: BaseCardAsset32,
            title: locale['base.module3.card2.titleNew'],
            desc: locale['base.module3.card2.descNew'],
            path: 'https://github.com/OpenCausaLab/MORE',
        },
    ];

    return (
        <div className={styles.base}>
            <Banner
                imgUrl={BaseBannerPic}
                title={locale['base.banner.titleNew']}
                subTitle={locale['base.banner.subTitleNew']}
                desc={locale['base.banner.descNew']}
            />
            <div className="container">
                <Panel
                    title={locale['base.module1.titleNew']}
                    desc={locale['base.module1.descNew']}
                >
                    <div className={styles.cardList}>
                        {
                            cardList.map((item, index) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <CommonCard
                                    type="base"
                                    {...item}
                                    key={`base-card-${index}`}
                                    hoverBg={CardHoverBg}
                                    height={lang === 'en-US' ? '' : ''}
                                />
                            ))
                        }
                    </div>
                </Panel>
                <Panel
                    title={locale['base.module2.titleNew']}
                    desc={locale['base.module2.descNew']}
                >
                    <div className={styles.cardList}>
                        {
                            cardList2.map((item, index) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <CommonCard
                                    type="base"
                                    {...item}
                                    key={`base-card-${index}`}
                                    hoverBg={CardHoverBg}
                                    height={lang === 'en-US' ? '' : ''}
                                />
                            ))
                        }
                    </div>
                </Panel>
                <Panel
                    title={locale['base.module3.titleNew']}
                    desc={locale['base.module3.descNew']}
                >
                    <div className={styles.cardList}>
                        {
                            cardList3.map((item, index) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <CommonCard
                                    type="base"
                                    {...item}
                                    key={`base-card-${index}`}
                                    hoverBg={CardHoverBg}
                                    height={lang === 'en-US' ? '' : ''}
                                />
                            ))
                        }
                    </div>
                </Panel>
            </div>
        </div>
    );
};

export default Content;
