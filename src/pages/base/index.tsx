import styles from './index.module.less';
import { useContext } from 'react';
import Banner from '@/components/banner';
import Panel from '@/components/panel';
import { InfoContext } from '@/provider/global-provider';
import CommonCard from '@/components/card';
import BaseBannerPic from '@/assets/pics/base-banner.jpg';
import BaseCardAsset1 from '@/assets/pics/base-card-asset-1.jpg';
import BaseCardAsset2 from '@/assets/pics/base-card-asset-2.jpg';
import BaseCardAsset3 from '@/assets/pics/base-card-asset-3.jpg';
import CardHoverBg from '@/assets/pics/base-card-hover-bg.jpg';

const Content = () => {
    const { locale, lang } = useContext(InfoContext);

    const cardList = [
        {
            imgUrl: BaseCardAsset1,
            title: locale['base.module1.card1.title'],
            desc: locale['base.module1.card1.desc'],
            path: 'https://github.com/AI45Lab/CELLO',
        },
        {
            imgUrl: BaseCardAsset2,
            title: locale['base.module1.card2.title'],
            desc: locale['base.module1.card2.desc'],
            path: 'https://github.com/OpenCausaLab/MORE',
        },
        {
            imgUrl: BaseCardAsset3,
            title: locale['base.module1.card3.title'],
            desc: locale['base.module1.card3.desc'],
            path: 'https://github.com/AI45Lab/SelfConsciousness',
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
                                    height={lang === 'en-US' ? '600px' : ''}
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
                            cardList.map((item, index) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <CommonCard
                                    type="base"
                                    {...item}
                                    key={`base-card-${index}`}
                                    hoverBg={CardHoverBg}
                                    height={lang === 'en-US' ? '600px' : ''}
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
                            cardList.map((item, index) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <CommonCard
                                    type="base"
                                    {...item}
                                    key={`base-card-${index}`}
                                    hoverBg={CardHoverBg}
                                    height={lang === 'en-US' ? '600px' : ''}
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
