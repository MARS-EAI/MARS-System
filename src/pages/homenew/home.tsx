import { useContext } from 'react';
import { Carousel } from 'antd';
import { InfoContext } from '@/provider/global-provider';
import styles from './home.module.less';
import Banner from '@/components/banner';
import Card from './components/card';
import classNames from 'classnames';
import HomeBanner from '@/assets/home-bannernew.png';
import Panel from '@/components/panel';
import Block1Pic from '@/assets/picsNew/home-block1-img.png';
import Block1PicEn from '@/assets/picsNew/home-block1-img-en.png';
import Block2Pic from '@/assets/picsNew/home-block2-img.png';
import Block2PicEn from '@/assets/picsNew/home-block2-img-en.png';
import baseCardPic from '@/assets/picsNew/safe-base.png';
import techCardPic from '@/assets/picsNew/safe-tech.png';
import evalCardPic from '@/assets/picsNew/safe-eval.png';
import platformCardPic from '@/assets/picsNew/safe-platform.png';
import HomeSlider1 from '@/assets/picsNew/home-slider-1.jpg';
import HomeSlider2 from '@/assets/picsNew/home-slider-2.jpg';

const Home = () => {
    const { locale, lang } = useContext(InfoContext);
    const cardList = [
        {
            imgUrl: baseCardPic,
            title: locale['nav.safeBaseNew'],
            desc: locale['home.block2.base.descNew'],
            path: '/base',
        },
        {
            imgUrl: techCardPic,
            title: locale['nav.safeTechNew'],
            desc: locale['home.block2.tech.descNew'],
            path: '/tech',
        },
        {
            imgUrl: evalCardPic,
            title: locale['nav.safeEvalNew'],
            desc: locale['home.block2.eval.descNew'],
            path: '/eval',
        },
        {
            imgUrl: platformCardPic,
            title: locale['nav.safeServiceNew'],
            desc: locale['home.block2.service.descNew'],
            path: '/service',
        },
    ];

    const sliders = [
        {
            imgUrl: HomeSlider1,
            title: locale['home.slider1.titleNew'],
            desc: locale['home.slider1.descNew'],
            url: 'https://icml-mfm-eai.github.io/',
        },
        {
            imgUrl: HomeSlider2,
            title: locale['home.slider2.titleNew'],
            desc: locale['home.slider2.descNew'],
            url: 'https://mas-2025.github.io/MAS-2025/',
        },
        // {
        //     imgUrl: HomeSlider1,
        //     title: locale['home.slider1.title'],
        //     desc: locale['home.slider1.desc'],
        //     url: 'https://www.shlab.org.cn/news/5443947',
        // },
        // {
        //     imgUrl: HomeSlider2,
        //     title: locale['home.slider2.title'],
        //     desc: locale['home.slider2.desc'],
        //     url: '/base',
        // },
        // {
        //     imgUrl: HomeSlider3,
        //     title: locale['home.slider3.title'],
        //     desc: locale['home.slider3.desc'],
        //     url: 'https://mp.weixin.qq.com/s/RttBDbijeFVkFAs4f7pPfQ',
        // },
        // {
        //     imgUrl: HomeSlider4,
        //     title: locale['home.slider4.title'],
        //     desc: locale['home.slider4.desc'],
        //     url: '',
        // },
        // {
        //     imgUrl: HomeSlider5,
        //     title: locale['home.slider5.title'],
        //     desc: locale['home.slider5.desc'],
        //     url: 'https://www.openeglab.org.cn/#/collaborations-achievements/achievement7',
        // },
        // {
        //     imgUrl: HomeSlider6,
        //     title: locale['home.slider6.title'],
        //     desc: locale['home.slider6.desc'],
        //     url: 'https://www.shlab.org.cn/event/detail/59',
        // },
    ];

    const handleClickSlider = (url: string) => {
        window.open(url);
    };

    return (
        <div className={styles.homePage}>
            <Banner imgUrl={HomeBanner} isHome />
            <div className="container">
                <Panel
                    title={locale['home.block1.titleNew']}
                    desc={locale['home.block1.descNew']}
                >
                    <div className={classNames(styles.inner, styles.bgWhite1, styles[lang])}>
                        <div className={classNames(styles.innerLeft, styles[lang])}>
                            <img src={lang === 'en-US' ? Block1PicEn : Block1Pic} alt="home-module1-asset-1" />
                        </div>
                        <div className={styles.innerDivider} />
                        <div className={classNames(styles.innerRight, styles[lang])}>
                            <div className={styles.title}>
                                {locale['home.block1.inner1.titleNew']}
                            </div>
                            <div className={styles.content}>
                                <p>
                                    {locale['home.block1.inner1.content.p1New']}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={classNames(styles.inner, styles.bgWhite2, styles[lang])}>
                        <div className={classNames(styles.innerLeft, styles.text)}>
                            <div className={styles.title}>
                                {locale['home.block1.inner2.titleNew']}
                            </div>
                            <div className={styles.content}>
                                {locale['home.block1.inner2.contentNew']}
                            </div>
                        </div>
                        <div className={styles.innerDivider} />
                        <div className={styles.innerRight2}>
                            <img src={lang === 'en-US' ? Block2PicEn : Block2Pic} alt="home-module1-asset-2" />
                        </div>
                    </div>
                </Panel>
                <Panel
                    title={locale['home.block2.titleNew']}
                >
                    <div className={styles.inner}>
                        {
                            cardList.map((item) => (
                                <Card {...item} key={`home-card-${item.title}`} />
                            ))
                        }
                    </div>
                </Panel>

                <Panel
                    title={locale['home.block3.titleNew']}
                >
                    <div className={classNames(styles.inner, styles.column, styles.bgWhite, styles.open)}>
                        <div className={styles.line}>
                            <div className={styles.topic}>
                                {locale['home.block3.dataNew']}
                            </div>
                            <div className={styles.data}>
                                <div className={styles.dataItem}>
                                    <p className={classNames(styles.num, styles.gradientText)}> ∞ +</p>
                                    <p className={styles.text}>
                                        {locale['home.block3.data.textNew']}
                                    </p>
                                </div>
                                <div className={styles.dataItem}>
                                    <p className={classNames(styles.num, styles.gradientText)}> ∞ +</p>
                                    <p className={styles.text}>
                                        {locale['home.block3.data.imgNew']}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.diliverHorizontal} />
                        <div className={styles.line}>
                            <div className={classNames(
                                styles.topic,
                                lang === 'en-US' ? styles.en : '',
                            )}
                            >
                                {locale['home.block3.toolNew']}
                            </div>
                            {/* <div className={styles.desc}> */}
                            <div className={classNames(styles.desc, lang === 'en-US' ? styles.en : '')}>
                                <div className={classNames(styles.descItem, lang === 'en-US' ? styles.en : '')}>
                                    {
                                        lang === 'zh-CN' ? (
                                            <p className={classNames(styles.text, styles.gradientText)}>
                                                机器人操控
                                            </p>
                                        ) :
                                            (
                                                <p className={classNames(styles.text, styles.gradientText, styles.en)}>
                                                    Robot Manipulation
                                                </p>
                                            )
                                    }
                                </div>
                                <div className={classNames(styles.descPlus, lang === 'en-US' ? styles.en : '')}>
                                    <span className={classNames(styles.text, styles.gradientText)}>+</span>
                                </div>
                                <div className={classNames(styles.descItem, lang === 'en-US' ? styles.en : '')}>
                                    {
                                        lang === 'zh-CN' ? (
                                            <p className={classNames(styles.text, styles.gradientText)}>
                                                机器人导航
                                            </p>
                                        ) :
                                            (
                                                <p className={classNames(styles.text, styles.gradientText, styles.en)}>
                                                    Robot Navigation
                                                </p>
                                            )
                                    }
                                </div>
                                <div className={classNames(styles.descPlus, lang === 'en-US' ? styles.en : '')}>
                                    <span className={classNames(styles.text, styles.gradientText)}>+</span>
                                </div>
                                <div className={classNames(styles.descItem, lang === 'en-US' ? styles.en : '')}>
                                    {
                                        lang === 'zh-CN' ? (
                                            <p className={classNames(styles.text, styles.gradientText)}>
                                                具身规划
                                            </p>
                                        ) :
                                            (
                                                <p className={classNames(styles.text, styles.gradientText, styles.en)}>
                                                    Embodied Planning
                                                </p>
                                            )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Panel>
            </div >
            <Carousel
                autoplay
                style={{ marginBottom: '80px' }}
            >
                {
                    sliders.map((item) => (
                        <div
                            className={styles.sliderItem}
                            key={`slider-item-${item.title}`}
                        >
                            <img src={item.imgUrl} alt="" />
                            <div className={styles.con}>
                                <div className={styles.title}>{item.title}</div>
                                <div className={styles.desc}>{item.desc}</div>
                                {
                                    item.url && (
                                        <div className={styles.learnMore} onClick={() => { handleClickSlider(item.url); }}>
                                            <span>{locale['home.slider.learnMore']}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M9.81597 2.873L14.4716 7.5286C14.7319 7.78895 14.7319 8.21106 14.4716 8.47141L9.81597 13.127C9.55562 13.3874 9.13351 13.3874 8.87316 13.127C8.61281 12.8667 8.61281 12.4445 8.87316 12.1842L12.3907 8.66667H2.00016C1.63197 8.66667 1.3335 8.3682 1.3335 8.00001C1.3335 7.63182 1.63197 7.33334 2.00016 7.33334H12.3907L8.87316 3.81581C8.61281 3.55546 8.61281 3.13335 8.87316 2.873C9.13351 2.61265 9.55562 2.61265 9.81597 2.873Z" fill="white" fillOpacity="0.75" />
                                            </svg>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div >
    );
};

export default Home;
