import styles from './index.module.less';
import classNames from 'classnames';
import { useContext } from 'react';
import { InfoContext } from '@/provider/global-provider';

interface ICommonCard {
    imgUrl?: string;
    title: string;
    desc: string;
    path?: string | undefined;
    type: string;
    width?: string;
    height?: string;
    hoverBg?: string;
    tags?: string[];
    showCorner?: boolean;
}

const CommonCard = ({ hoverBg, imgUrl, title, desc, path, type, width, height, showCorner = true, tags }: ICommonCard) => {
    const { lang } = useContext(InfoContext);
    const handleLink = () => {
        window.open(path);
    };

    return (
        <div
            className={classNames(styles.card, styles[type])}
            style={height ? { height, width } : {}}
        >
            {
                hoverBg && (
                    <div className={styles.hoverBg}>
                        <img src={hoverBg} alt="card-bg" />
                    </div>
                )
            }
            <div className={styles.info}>
                <div className={classNames(styles.title, lang === 'en-US' && styles.en)}>
                    {title}
                </div>
                {
                    imgUrl && (
                        <div className={styles.pic}>
                            <img src={imgUrl} alt={title} />
                        </div>
                    )
                }
                <div className={classNames(styles.desc, lang === 'en-US' && styles.en)}>
                    {desc}
                </div>
                {
                    tags?.length && (
                        <div className={styles.tags}>
                            {
                                tags.map((tag) => (
                                    <div className={styles.tagItem} key={tag}>
                                        {tag}
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
                {
                    path && (
                        <div className={styles.github} onClick={handleLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 1.33325C4.31905 1.33325 1.33334 4.39327 1.33334 8.16853C1.33334 11.1885 3.24381 13.7505 5.89238 14.6543C6.22572 14.7181 6.33334 14.5057 6.33334 14.3257V13.0533C4.47905 13.4666 4.09238 12.2466 4.09238 12.2466C3.78953 11.4562 3.35238 11.2466 3.35238 11.2466C2.74762 10.8219 3.3981 10.8314 3.3981 10.8314C4.06762 10.879 4.42 11.5362 4.42 11.5362C5.01429 12.5809 5.97905 12.279 6.36 12.1038C6.41905 11.6628 6.59238 11.3609 6.78381 11.1895C5.30286 11.0162 3.74572 10.4304 3.74572 7.81233C3.74572 7.06471 4.00667 6.45614 4.43238 5.97709C4.36381 5.8047 4.13524 5.10946 4.4981 4.16755C4.4981 4.16755 5.0581 3.98469 6.33143 4.86851C6.87471 4.71701 7.436 4.6398 8 4.63898C8.56463 4.63986 9.12654 4.71707 9.67048 4.86851C10.9429 3.98469 11.5019 4.1685 11.5019 4.1685C11.8638 5.10946 11.6352 5.80566 11.5676 5.97804C11.9952 6.45614 12.2533 7.06566 12.2533 7.81233C12.2533 10.4371 10.6943 11.0152 9.20953 11.1838C9.44762 11.3962 9.66667 11.8124 9.66667 12.4505V14.3267C9.66667 14.5076 9.77334 14.7209 10.1114 14.6543C12.7591 13.7495 14.6667 11.1876 14.6667 8.16853C14.6667 4.39327 11.6819 1.33325 8 1.33325Z" fill="#464A53" />
                            </svg>
                            GitHub
                        </div>
                    )
                }

                {
                    showCorner && (
                        <div className={styles.corner} />
                    )
                }

            </div>
        </div>
    );
};
export default CommonCard;
