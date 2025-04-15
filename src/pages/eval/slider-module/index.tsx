import styles from './index.module.less';
import { useState, useRef, useContext } from 'react';
import { InfoContext } from '@/provider/global-provider';
import { Carousel } from 'antd';
import classNames from 'classnames';
import ModelIcon from '@/assets/pics/ModelOutlined.svg';
import FlamesAsset from '@/assets/pics/eval-asset-flames.png';
import FakeAlignmentAsset from '@/assets/pics/eval-asset-fakeAlignment.jpg';
import SaladBenchAsset from '@/assets/pics/eval-asset-saladBench.jpg';
import MDJudgeAsset from '@/assets/pics/eval-asset-MD-Judge.jpg';
import MLLMGuardAsset from '@/assets/pics/eval-asset-MLLMGuard.jpg';
import VLSBenchAsset from '@/assets/pics/eval-asset-VLSBench.jpg';
import MMSafeyBenchAsset from '@/assets/pics/eval-asset-MM-SafetyBench.jpg';
import T2ISafetyAsset from '@/assets/pics/eval-asset-T2ISafety.jpg';


const SliderModule = () => {
    const [activeSlider, setActiveSlider] = useState(0);
    const sliderRef1: any = useRef(null);
    const sliderRef2: any = useRef(null);
    const { locale } = useContext(InfoContext);

    const slider1Module1Links = [
        {
            title: 'FLAMES',
            path: 'https://github.com/AI45Lab/Flames',
        },
        {
            title: 'Fake Alignment',
            path: 'https://github.com/AI45Lab/Fake-Alignment',
        },
        {
            title: 'SALAD-BENCH',
            path: 'https://github.com/AI45Lab/SALAD-BENCH',
        },
    ];

    const slider1Module2Links = [
        {
            title: 'MD-Judge-v0.2-internlm2_7b',
            path: 'https://huggingface.co/OpenSafetyLab/MD-Judge-v0_2-internlm2_7b',
        },
    ];

    const slider2Module1Links = [
        {
            title: 'MLLMGuard',
            path: 'https://github.com/AI45Lab/MLLMGuard',
        },
        {
            title: 'VLSBench',
            path: 'https://github.com/AI45Lab/VLSBench',
        },
        {
            title: 'MM-Safetybench',
            path: 'https://github.com/AI45Lab/MM-SafetyBench',
        },
    ];

    const slider2Module2Links = [
        {
            title: 'T2ISafety',
            path: 'https://github.com/AI45Lab/T2ISafety',
        },
    ];

    const innerSlider1 = [
        {
            title: 'FLAMES',
            desc: locale['eval.module2.tabModule1.innerSlider1.item1.desc'],
            imgUrl: FlamesAsset,
            intro: locale['eval.module2.tabModule1.innerSlider1.item1.intro'],
        },
        {
            title: 'Fake Alignment',
            desc: locale['eval.module2.tabModule1.innerSlider1.item2.desc'],
            imgUrl: FakeAlignmentAsset,
            intro: locale['eval.module2.tabModule1.innerSlider1.item2.intro'],
        },
        {
            title: 'SALAD-BENCH',
            desc: locale['eval.module2.tabModule1.innerSlider1.item3.desc'],
            imgUrl: SaladBenchAsset,
            intro: locale['eval.module2.tabModule1.innerSlider1.item3.intro'],
        },
    ];

    const innerSlider2 = [
        {
            title: 'MD-Judge-v0.2-internlm2_7b',
            desc: locale['eval.module2.tabModule1.innerSlider2.item1.desc'],
            imgUrl: MDJudgeAsset,
            intro: locale['eval.module2.tabModule1.innerSlider2.item1.intro'],
        },
    ];

    const slider2InnerSlider1 = [
        {
            title: 'MLLMGuard',
            desc: locale['eval.module2.tabModule2.innerSlider1.item1.desc'],
            imgUrl: MLLMGuardAsset,
            intro: locale['eval.module2.tabModule2.innerSlider1.item1.intro'],
        },
        {
            title: 'VLSBench',
            desc: locale['eval.module2.tabModule2.innerSlider1.item2.desc'],
            imgUrl: VLSBenchAsset,
            intro: locale['eval.module2.tabModule2.innerSlider1.item2.intro'],
        },
        {
            title: 'MM-Safetybench',
            desc: locale['eval.module2.tabModule2.innerSlider1.item3.desc'],
            imgUrl: MMSafeyBenchAsset,
            intro: locale['eval.module2.tabModule2.innerSlider1.item3.intro'],
        },
    ];

    const slider2InnerSlider2 = [
        {
            title: 'T2ISafety',
            desc: locale['eval.module2.tabModule2.innerSlider2.item1.desc'],
            imgUrl: T2ISafetyAsset,
            intro: locale['eval.module2.tabModule2.innerSlider2.item1.intro'],
        },
    ];

    return (
        <>
            <div className={styles.modelModule}>
                <div className={styles.moduleHeader}>
                    <div className={styles.moduleTitle}>
                        <img src={ModelIcon} alt="ModelIcon" />
                        {locale['eval.module2.tabModule1.title']}
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.tabs}>
                        <div
                            className={classNames(styles.tabsItem,
                                activeSlider === 0 && styles.active)}
                            onClick={() => { sliderRef1.current.goTo(0); }}
                        >
                            {locale['eval.module2.tabModule1.tab1']}
                        </div>
                        <div
                            className={classNames(styles.tabsItem,
                                activeSlider === 1 && styles.active)}
                            onClick={() => { sliderRef1.current.goTo(1); }}
                        >
                            {locale['eval.module2.tabModule1.tab2']}
                        </div>
                    </div>
                </div>
                <div className={styles.moduleTabs}>
                    <Carousel
                        ref={sliderRef1}
                        arrows
                        infinite={false}
                        dots={false}
                        afterChange={(current: number) => { setActiveSlider(current); }}
                    >
                        <div className={styles.tabSliderItem}>
                            <div className={styles.left}>
                                <div className={styles.tabSliderItemTitle}>
                                    {locale['eval.module2.tabModule1.tab1.title']}
                                </div>
                                <div className={styles.tabSliderItemDesc}>
                                    {locale['eval.module2.tabModule1.tab1.desc']}
                                </div>
                                <div className={styles.tabSliderItemLinks}>
                                    {
                                        slider1Module1Links.map((item) => (
                                            <a
                                                href={item.path}
                                                target="_blank"
                                                rel="noreferrer"
                                                key={item.title}
                                            >
                                                {item.title}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M9.81597 2.873L14.4716 7.5286C14.7319 7.78895 14.7319 8.21106 14.4716 8.47141L9.81597 13.127C9.55562 13.3874 9.13351 13.3874 8.87316 13.127C8.61281 12.8667 8.61281 12.4445 8.87316 12.1842L12.3907 8.66667H2.00016C1.63197 8.66667 1.3335 8.3682 1.3335 8.00001C1.3335 7.63182 1.63197 7.33334 2.00016 7.33334H12.3907L8.87316 3.81581C8.61281 3.55546 8.61281 3.13335 8.87316 2.873C9.13351 2.61265 9.55562 2.61265 9.81597 2.873Z" fill="#121316" fillOpacity="0.6" />
                                                </svg>
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={styles.right}>
                                <Carousel
                                    arrows
                                    infinite={false}
                                    dots={false}
                                >
                                    {
                                        innerSlider1.map((item) => (
                                            <div className={styles.innerSliderItem}>
                                                <div className={styles.pic}>
                                                    <img src={item.imgUrl} alt="eval-slider-asset" />
                                                    <div className={styles.mask}>
                                                        {item.intro}
                                                    </div>
                                                </div>
                                                <p>{item.desc}</p>
                                            </div>
                                        ))
                                    }
                                </Carousel>
                            </div>
                        </div>
                        <div className={styles.tabSliderItem}>
                            <div className={styles.left}>
                                <div className={styles.tabSliderItemTitle}>
                                    {locale['eval.module2.tabModule1.tab2.title']}
                                </div>
                                <div className={styles.tabSliderItemDesc}>
                                    {locale['eval.module2.tabModule1.tab2.desc']}
                                </div>
                                <div className={styles.tabSliderItemLinks}>
                                    {
                                        slider1Module2Links.map((item) => (
                                            <a
                                                href={item.path}
                                                target="_blank"
                                                rel="noreferrer"
                                                key={item.title}
                                            >
                                                {item.title}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M9.81597 2.873L14.4716 7.5286C14.7319 7.78895 14.7319 8.21106 14.4716 8.47141L9.81597 13.127C9.55562 13.3874 9.13351 13.3874 8.87316 13.127C8.61281 12.8667 8.61281 12.4445 8.87316 12.1842L12.3907 8.66667H2.00016C1.63197 8.66667 1.3335 8.3682 1.3335 8.00001C1.3335 7.63182 1.63197 7.33334 2.00016 7.33334H12.3907L8.87316 3.81581C8.61281 3.55546 8.61281 3.13335 8.87316 2.873C9.13351 2.61265 9.55562 2.61265 9.81597 2.873Z" fill="#121316" fillOpacity="0.6" />
                                                </svg>
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={styles.right}>
                                <Carousel
                                    arrows={false}
                                    infinite={false}
                                    dots={false}
                                >
                                    {
                                        innerSlider2.map((item) => (
                                            <div className={styles.innerSliderItem}>
                                                <div className={styles.pic}>
                                                    <img src={item.imgUrl} alt="eval-slider-asset" />
                                                    <div className={styles.mask}>
                                                        {item.intro}
                                                    </div>
                                                </div>
                                                <p>{item.desc}</p>
                                            </div>
                                        ))
                                    }
                                </Carousel>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>

            <div className={styles.modelModule}>
                <div className={styles.moduleHeader}>
                    <div className={styles.moduleTitle}>
                        <img src={ModelIcon} alt="ModelIcon" />
                        {locale['eval.module2.tabModule2.title']}
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.tabs}>
                        <div
                            className={classNames(styles.tabsItem,
                                activeSlider === 0 && styles.active)}
                            onClick={() => { sliderRef2.current.goTo(0); }}
                        >
                            {locale['eval.module2.tabModule2.tab1']}
                        </div>
                        <div
                            className={classNames(styles.tabsItem,
                                activeSlider === 1 && styles.active)}
                            onClick={() => { sliderRef2.current.goTo(1); }}
                        >
                            {locale['eval.module2.tabModule2.tab2']}
                        </div>
                    </div>
                </div>
                <div className={styles.moduleTabs}>
                    <Carousel
                        ref={sliderRef2}
                        arrows
                        infinite={false}
                        dots={false}
                        afterChange={(current: number) => { setActiveSlider(current); }}
                    >
                        <div className={styles.tabSliderItem}>
                            <div className={styles.left}>
                                <div className={styles.tabSliderItemTitle}>
                                    {locale['eval.module2.tabModule2.tab1.title']}
                                </div>
                                <div className={styles.tabSliderItemDesc}>
                                    {locale['eval.module2.tabModule2.tab1.desc']}
                                </div>
                                <div className={styles.tabSliderItemLinks}>
                                    {
                                        slider2Module1Links.map((item) => (
                                            <a
                                                href={item.path}
                                                target="_blank"
                                                rel="noreferrer"
                                                key={item.title}
                                            >
                                                {item.title}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M9.81597 2.873L14.4716 7.5286C14.7319 7.78895 14.7319 8.21106 14.4716 8.47141L9.81597 13.127C9.55562 13.3874 9.13351 13.3874 8.87316 13.127C8.61281 12.8667 8.61281 12.4445 8.87316 12.1842L12.3907 8.66667H2.00016C1.63197 8.66667 1.3335 8.3682 1.3335 8.00001C1.3335 7.63182 1.63197 7.33334 2.00016 7.33334H12.3907L8.87316 3.81581C8.61281 3.55546 8.61281 3.13335 8.87316 2.873C9.13351 2.61265 9.55562 2.61265 9.81597 2.873Z" fill="#121316" fillOpacity="0.6" />
                                                </svg>
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={styles.right}>
                                <Carousel
                                    arrows
                                    infinite={false}
                                    dots={false}
                                >
                                    {
                                        slider2InnerSlider1.map((item) => (
                                            <div className={styles.innerSliderItem}>
                                                <div className={styles.pic}>
                                                    <img src={item.imgUrl} alt="eval-slider-asset" />
                                                    <div className={styles.mask}>
                                                        {item.intro}
                                                    </div>
                                                </div>
                                                <p>{item.desc}</p>
                                            </div>
                                        ))
                                    }
                                </Carousel>
                            </div>
                        </div>
                        <div className={styles.tabSliderItem}>
                            <div className={styles.left}>
                                <div className={styles.tabSliderItemTitle}>
                                    {locale['eval.module2.tabModule2.tab2.title']}
                                </div>
                                <div className={styles.tabSliderItemDesc}>
                                    {locale['eval.module2.tabModule2.tab2.desc']}
                                </div>
                                <div className={styles.tabSliderItemLinks}>
                                    {
                                        slider2Module2Links.map((item) => (
                                            <a
                                                href={item.path}
                                                target="_blank"
                                                rel="noreferrer"
                                                key={item.title}
                                            >
                                                {item.title}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M9.81597 2.873L14.4716 7.5286C14.7319 7.78895 14.7319 8.21106 14.4716 8.47141L9.81597 13.127C9.55562 13.3874 9.13351 13.3874 8.87316 13.127C8.61281 12.8667 8.61281 12.4445 8.87316 12.1842L12.3907 8.66667H2.00016C1.63197 8.66667 1.3335 8.3682 1.3335 8.00001C1.3335 7.63182 1.63197 7.33334 2.00016 7.33334H12.3907L8.87316 3.81581C8.61281 3.55546 8.61281 3.13335 8.87316 2.873C9.13351 2.61265 9.55562 2.61265 9.81597 2.873Z" fill="#121316" fillOpacity="0.6" />
                                                </svg>
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={styles.right}>
                                <Carousel
                                    arrows={false}
                                    infinite={false}
                                    dots={false}
                                >
                                    {
                                        slider2InnerSlider2.map((item) => (
                                            <div className={styles.innerSliderItem}>
                                                <div className={styles.pic}>
                                                    <img src={item.imgUrl} alt="eval-slider-asset" />
                                                    <div className={styles.mask}>
                                                        {item.intro}
                                                    </div>
                                                </div>
                                                <p>{item.desc}</p>
                                            </div>
                                        ))
                                    }
                                </Carousel>
                            </div>
                        </div>
                    </Carousel>
                </div >
            </div >
        </>
    );
};

export default SliderModule;
