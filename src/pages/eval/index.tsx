import styles from './index.module.less';
import { useContext } from 'react';
import Banner from '@/components/banner';
import Panel from '@/components/panel';
import CommonCard from '@/components/card';
import SliderModule from './slider-module';
import { InfoContext } from '@/provider/global-provider';
import EvalBannerPic from '@/assets/pics/eval-banner.jpg';
import EvalAsset1 from '@/assets/pics/eval-asset-1.jpg';
import EvalAsset1En from '@/assets/pics/eval-asset-1-en.png';
import EvalAsset2 from '@/assets/pics/eval-asset-2.jpg';
import EvalAsset3 from '@/assets/pics/eval-asset-3.jpg';
import EvalAsset4 from '@/assets/pics/eval-asset-4.jpg';
import EvalCardHoverBg1 from '@/assets/pics/eval-card-hover-bg-1.jpg';
import EvalCardHoverBg2 from '@/assets/pics/eval-card-hover-bg-2.jpg';
import EvalSmallCard from './eval-small-card';

const Eval = () => {
    const { lang, locale } = useContext(InfoContext);

    const module3CardList = [
        {
            imgUrl: EvalAsset2,
            title: locale['eval.module3.card1.title'],
            desc: locale['eval.module3.card1.desc'],
            path: 'https://github.com/AI45Lab/CredID',
        },
        {
            imgUrl: EvalAsset3,
            title: locale['eval.module3.card2.title'],
            desc: locale['eval.module3.card2.desc'],
            path: 'https://github.com/AI45Lab/REEF',
        },
        {
            imgUrl: EvalAsset4,
            title: locale['eval.module3.card3.title'],
            desc: locale['eval.module3.card3.desc'],
            path: 'https://github.com/AI45Lab/AIGC_detection',
        },
    ];

    const module4CardList = [
        {
            title: locale['eval.module4.card1.title'],
            desc: locale['eval.module4.card1.desc'],
            github: 'https://github.com/AI45Lab/CodeAttack',
            path: 'https://renqibing.github.io/CodeAttackWeb/',
        },
        {
            title: locale['eval.module4.card2.title'],
            desc: locale['eval.module4.card2.desc'],
            github: 'https://github.com/AI45Lab/ActorAttack',
            path: 'https://huggingface.co/datasets/SafeMTData/SafeMTData',
        },
    ];

    return (
        <div className={styles.eval}>
            <Banner
                imgUrl={EvalBannerPic}
                title={locale['eval.banner.titleNew']}
                subTitle={locale['eval.banner.subTitleNew']}
                desc={locale['eval.banner.descNew']}
            />
            <div className="container">
                <Panel
                    title={locale['eval.module1.titleNew']}
                >
                    <div className={styles.inner}>
                        <img src={lang === 'en-US' ? EvalAsset1En : EvalAsset1} alt="eval-asset-1" />
                    </div>
                </Panel>
                <Panel
                    title={locale['eval.module2.titleNew']}
                >
                    <SliderModule />
                </Panel>
                <Panel
                    title={locale['eval.module3.titleNew']}
                >
                    <div className={styles.cardList}>
                        {
                            module3CardList.map((item) => (
                                <CommonCard
                                    type="eval"
                                    hoverBg={EvalCardHoverBg1}
                                    {...item}
                                    key={`tech-module1-card-${item.title}`}
                                    height="550px"
                                />
                            ))
                        }
                    </div>
                </Panel>
                <Panel
                    title={locale['eval.module4.titleNew']}
                    desc={locale['eval.module4.desc']}
                >
                    <div className={styles.cardList}>
                        {
                            module4CardList.map((item) => (
                                <EvalSmallCard
                                    key={`eval-module4-${item.title}`}
                                    hoverBg={EvalCardHoverBg2}
                                    {...item}
                                />
                            ))
                        }
                    </div>
                </Panel>
            </div>
        </div>
    );
};

export default Eval;
