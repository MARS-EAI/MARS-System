import styles from './index.module.less';
import { useContext, useState } from 'react';
import Banner from '@/components/banner';
import Panel from '@/components/panel';
import { InfoContext } from '@/provider/global-provider';
import CommonCard from '@/components/card';
import ServiceCard from './components/service-card';
import TabCard from './components/tab-card';
import ServiceBannerPic from '@/assets/pics/service-banner.jpg';
import EduHoverBg from '@/assets/pics/edu-card-bg.jpg';
import MedHoverBg from '@/assets/pics/medi-card-bg.jpg';
import FinHoverBg from '@/assets/pics/fin-card-bg.jpg';
import ManuHoverBg from '@/assets/pics/manu-card-bg.jpg';
import CityHoverBg from '@/assets/pics/city-card-bg.jpg';
import MediaHoverBg from '@/assets/pics/media-card-bg.jpg';
import M2Asset1 from '@/assets/pics/service-m2-asset-1.jpg';
import M2Asset2 from '@/assets/pics/service-m2-asset-2.jpg';
import M2Asset3 from '@/assets/pics/service-m2-asset-3.jpg';
import M2Asset4 from '@/assets/pics/service-m2-asset-4.jpg';
import ServiceM1HoverBg from '@/assets/pics/service-m1-card-hover.jpg';
import classNames from 'classnames';

export const typeMap: any = {
    all: 'tab.all',
    tool: 'tab.tool',
    data: 'tab.data',
};

const Service = () => {
    const { locale } = useContext(InfoContext);

    const module1CardList = [
        {
            title: 'service.module1.card.ADCE.title',
            desc: 'service.module1.card.ADCE.desc',
            types: ['tool'],
            path: 'https://github.com/AI45Lab/ADCE',
        },
        {
            title: 'service.module1.card.ActorAttack.title',
            desc: 'service.module1.card.ActorAttack.desc',
            types: ['tool'],
            path: 'https://github.com/renqibing/ActorAttack',
        },
        {
            title: 'service.module1.card.CodeAttack.title',
            desc: 'service.module1.card.CodeAttack.desc',
            types: ['tool'],
            path: 'https://github.com/renqibing/CodeAttack',
        },
        {
            title: 'service.module1.card.CELLO.title',
            desc: 'service.module1.card.CELLO.desc',
            types: ['data'],
            path: 'https://github.com/AI45Lab/CELLO',
        },
        {
            title: 'service.module1.card.CredID.title',
            desc: 'service.module1.card.CredID.desc',
            types: ['tool'],
            path: 'https://github.com/AI45Lab/CredID',
        },
        {
            title: 'service.module1.card.CaLM.title',
            desc: 'service.module1.card.CaLM.desc',
            types: ['data'],
            path: 'https://github.com/AI45Lab/CaLM',
        },
        {
            title: 'service.module1.card.DEAN.title',
            desc: 'service.module1.card.DEAN.desc',
            types: ['tool'],
            path: 'https://github.com/ChnQ/DEAN',
        },
        {
            title: 'service.module1.card.ESCEval.title',
            desc: 'service.module1.card.ESCEval.desc',
            types: ['data', 'tool'],
            path: 'https://github.com/AI45Lab/ESC-Eval',
        },
        {
            title: 'service.module1.card.Emulated.title',
            desc: 'service.module1.card.Emulated.desc',
            types: ['tool'],
            path: 'https://github.com/AI45Lab/emulated-disalignment',
        },
        {
            title: 'service.module1.card.FLAMES.title',
            desc: 'service.module1.card.FLAMES.desc',
            types: ['data', 'tool'],
            path: 'https://github.com/AI45Lab/Flames',
        },
        {
            title: 'service.module1.card.Fake.title',
            desc: 'service.module1.card.Fake.desc',
            types: ['data', 'tool'],
            path: 'https://github.com/AI45Lab/Fake-Alignment',
        },
        {
            title: 'service.module1.card.MLLMGuard.title',
            desc: 'service.module1.card.MLLMGuard.desc',
            types: ['data', 'tool'],
            path: 'https://github.com/AI45Lab/MLLMGuard',
        },
        {
            title: 'service.module1.card.MMSafetyBench.title',
            desc: 'service.module1.card.MMSafetyBench.desc',
            types: ['data'],
            path: 'https://github.com/AI45Lab/MM-SafetyBench',
        },
        {
            title: 'service.module1.card.MODPO.title',
            desc: 'service.module1.card.MODPO.desc',
            types: ['tool'],
            path: 'https://github.com/AI45Lab/modpo',
        },
        {
            title: 'service.module1.card.MORE.title',
            desc: 'service.module1.card.MORE.desc',
            types: ['data', 'tool'],
            path: 'https://github.com/OpenCausaLab/MORE',
        },
        {
            title: 'service.module1.card.MDJudge.title',
            desc: 'service.module1.card.MDJudge.desc',
            types: ['tool'],
            path: 'https://huggingface.co/OpenSafetyLab/MD-Judge-v0_2-internlm2_7b',
        },
        {
            title: 'service.module1.card.Persafety.title',
            desc: 'service.module1.card.Persafety.desc',
            types: ['tool'],
            path: 'https://github.com/tmylla/Persafety',
        },
        {
            title: 'service.module1.card.ReflectionBench.title',
            desc: 'service.module1.card.ReflectionBench.desc',
            types: ['data'],
            path: 'https://github.com/AI45Lab/Reflection-Bench',
        },
        {
            title: 'service.module1.card.REEF.title',
            desc: 'service.module1.card.REEF.desc',
            types: ['tool'],
            path: 'https://github.com/tmylla/REEF',
        },
        {
            title: 'service.module1.card.SALADBENCH.title',
            desc: 'service.module1.card.SALADBENCH.desc',
            types: ['data'],
            path: 'https://github.com/AI45Lab/SALAD-BENCH',
        },
        {
            title: 'service.module1.card.SelfConsciousness.title',
            desc: 'service.module1.card.SelfConsciousness.desc',
            types: ['data', 'tool'],
            path: 'https://github.com/AI45Lab/SelfConsciousness',
        },
        {
            title: 'service.module1.card.SEER.title',
            desc: 'service.module1.card.SEER.desc',
            types: ['tool'],
            path: 'https://github.com/AI45Lab/SEER',
        },
        {
            title: 'service.module1.card.T2ISafety.title',
            desc: 'service.module1.card.T2ISafety.desc',
            types: ['data'],
            path: 'https://github.com/AI45Lab/T2ISafety',
        },
        {
            title: 'service.module1.card.TraceLLM.title',
            desc: 'service.module1.card.TraceLLM.desc',
            types: ['tool'],
            path: 'https://github.com/AI45Lab/TracingLLM',
        },
        {
            title: 'service.module1.card.VLSBench.title',
            desc: 'service.module1.card.VLSBench.desc',
            types: ['data'],
            path: 'https://github.com/AI45Lab/VLSBench',
        },
        {
            title: 'service.module1.card.Weak-to-Strong.title',
            desc: 'service.module1.card.Weak-to-Strong.desc',
            types: ['tool'],
            path: 'https://github.com/AI45Lab/weak-to-strong-search',
        },
    ];

    const module2CardList = [
        {
            imgUrl: M2Asset1,
            title: locale['service.module2.card1.title'],
            desc: locale['service.module2.card1.desc'],
        },
        {
            imgUrl: M2Asset2,
            title: locale['service.module2.card2.title'],
            desc: locale['service.module2.card2.desc'],
        },
        {
            imgUrl: M2Asset3,
            title: locale['service.module2.card3.title'],
            desc: locale['service.module2.card3.desc'],
        },
        {
            imgUrl: M2Asset4,
            title: locale['service.module2.card4.title'],
            desc: locale['service.module2.card4.desc'],
        },
    ];

    const module3CardList = [
        {
            title: locale['service.module3.card1.titleNew'],
            desc: locale['service.module3.card1.descNew'],
            hoverBg: MedHoverBg,
        },
        {
            title: locale['service.module3.card2.titleNew'],
            desc: locale['service.module3.card2.descNew'],
            hoverBg: EduHoverBg,
        },
        {
            title: locale['service.module3.card3.titleNew'],
            desc: locale['service.module3.card3.descNew'],
            hoverBg: MediaHoverBg,
        },
        {
            title: locale['service.module3.card4.titleNew'],
            desc: locale['service.module3.card4.descNew'],
            hoverBg: FinHoverBg,
        },
        {
            title: locale['service.module3.card5.titleNew'],
            desc: locale['service.module3.card5.descNew'],
            hoverBg: ManuHoverBg,
        },
        {
            title: locale['service.module3.card6.titleNew'],
            desc: locale['service.module3.card6.descNew'],
            hoverBg: CityHoverBg,
        },
    ];

    const tabs = ['all', 'tool', 'data'];
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
        <div className={styles.service}>
            <Banner
                imgUrl={ServiceBannerPic}
                title={locale['service.banner.titleNew']}
                subTitle={locale['service.banner.subTitleNew']}
                desc={locale['service.banner.descNew']}
            />
            <div className={classNames(styles.baseModule, 'container')}>
                {/* <Panel
                    title={locale['service.module1.title']}
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
                                    key={`service-module1-${item.title}`}
                                    hoverBg={ServiceM1HoverBg}
                                />
                            ))
                        }
                    </div>
                </Panel> */}
                {/* <Panel
                    title={locale['service.module2.title']}
                >
                    <div className={styles.cardList}>
                        {
                            module2CardList.map((item) => (
                                <CommonCard
                                    {...item}
                                    key={`service-module2-${item.title}`}
                                    type="service-m2"
                                />
                            ))
                        }
                    </div>
                </Panel> */}
                <Panel
                    title={locale['service.module3.titleNew']}
                >
                    <div className={styles.cardList}>
                        {
                            module3CardList.map((item) => (
                                <ServiceCard
                                    key={`eval-module4-${item.title}`}
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

export default Service;
