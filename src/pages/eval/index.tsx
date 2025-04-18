import styles from './index.module.less';
import { useContext, useState } from 'react';
import Banner from '@/components/banner';
import Panel from '@/components/panel';
import CommonCard from '@/components/card';
import TabCard from './components/tab-card';
import { InfoContext } from '@/provider/global-provider';
import EvalBannerPic from '@/assets/pics/eval-banner.jpg';
import classNames from 'classnames';
import ServiceM1HoverBg from '@/assets/pics/service-m1-card-hover.jpg';


export const typeMap: any = {
    all: 'tab.all',
    control: 'tab.control',// 机器人操控
    navigation: 'tab.navigation', // 机器人导航
    worldModel: 'tab.worldModel', // 世界模型
    trustworthy: 'tab.trustworthy', // 可信具身
};

const Eval = () => {
    const { lang, locale } = useContext(InfoContext);

    const module1CardList = [
        // 机器人操控
        {
            title: 'eval.module1.card.RoboFactory.title',
            desc: 'eval.module1.card.RoboFactory.desc',
            types: ['control'],
            path: 'https://iranqin.github.io/robofactory/',
        },
        {
            title: 'eval.module1.card.CAM.title',
            desc: 'eval.module1.card.CAM.desc',
            types: ['control'],
            path: 'https://zhoues.github.io/Code-as-Monitor/',
        },
        {
            title: 'eval.module1.card.RH20T-P.title',
            desc: 'eval.module1.card.RH20T-P.desc',
            types: ['control'],
            path: 'https://sites.google.com/view/rh20t-primitive/main',
        },
        {
            title: 'eval.module1.card.UGP.title',
            desc: 'eval.module1.card.UGP.desc',
            types: ['control'],
            path: '',
        },
        {
            title: 'eval.module1.card.CDP.title',
            desc: 'eval.module1.card.CDP.desc',
            types: ['control'],
            path: '',
        },
        {
            title: 'eval.module1.card.ReSo.title',
            desc: 'eval.module1.card.ReSo.desc',
            types: ['control'],
            path: 'https://arxiv.org/pdf/2503.02390',
        },

        // 机器人导航
        {
            title: 'eval.module1.card.NavigateDiff.title',
            desc: 'eval.module1.card.NavigateDiff.desc',
            types: ['navigation'],
            path: 'https://21styouth.github.io/NavigateDiff/',
        },
        {
            title: 'eval.module1.card.MP5.title',
            desc: 'eval.module1.card.MP5.desc',
            types: ['navigation'],
            path: 'https://iranqin.github.io/MP5.github.io/',
        },

        // 世界模型
        {
            title: 'eval.module1.card.WorldSimBench.title',
            desc: 'eval.module1.card.WorldSimBench.desc',
            types: ['worldModel'],
            path: 'https://arxiv.org/pdf/2410.18072',
        },
        {
            title: 'eval.module1.card.MineDreamer.title',
            desc: 'eval.module1.card.MineDreamer.desc',
            types: ['worldModel'],
            path: 'https://sites.google.com/view/minedreamer/main',
        },
        {
            title: 'eval.module1.card.GameFactory.title',
            desc: 'eval.module1.card.GameFactory.desc',
            types: ['worldModel'],
            path: 'https://yujiwen.github.io/gamefactory/',
        },

        // 可信具身
        {
            title: 'eval.module1.card.SafeDiff.title',
            desc: 'eval.module1.card.SafeDiff.desc',
            types: ['trustworthy'],
            path: 'https://arxiv.org/pdf/2412.10349',
        },
    ];

    // const tabs = ['all', 'tool', 'data'];
    const tabs = ['all', 'control', 'navigation', 'worldModel', 'trustworthy'];
    const [currentTab, setCurrentTab] = useState('all');
    const [tabList, setTabList] = useState(module1CardList);


    const handleTabChange = (tab: string) => {
        setCurrentTab(tab);
        if (tab === 'all') {
            setTabList(module1CardList);
        } else {
            setTabList(module1CardList.filter((item) => item.types?.includes(tab)));
        }
    };


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
                    title={locale['eval.titleNew']}
                >
                    <div className={styles.tabs}>
                        {
                            tabs.map((item) => (
                                <div
                                    className={classNames(styles.tabsItem, {
                                        [styles.active]: currentTab === item,
                                    })}
                                    key={item}
                                    onClick={() => handleTabChange(item)}
                                >
                                    {locale[typeMap[item]]}
                                </div>
                            ))
                        }
                    </div>
                    <div className={styles.cardList}>
                        {
                            tabList.map((item) => (
                                <TabCard
                                    {...item}
                                    key={`eval-module1-${item.title}`}
                                    hoverBg={ServiceM1HoverBg}
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
