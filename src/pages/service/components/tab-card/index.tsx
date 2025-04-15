import styles from './index.module.less';
import classNames from 'classnames';
import { typeMap } from '../../index';
import { InfoContext } from '@/provider/global-provider';
import { useContext } from 'react';

interface ITabCard {
    title: string;
    desc: string;
    path?: string | undefined;
    hoverBg?: string;
    types?: string[];
}

const TabCard = ({ hoverBg, title, desc, path, types }: ITabCard) => {
    const { locale } = useContext(InfoContext);
    const handleLink = () => {
        window.open(path);
    };

    return (
        <div
            className={classNames(styles.card)}
            onClick={handleLink}
        >
            {
                hoverBg && (
                    <div className={styles.hoverBg}>
                        <img src={hoverBg} alt="card-bg" />
                    </div>
                )
            }
            <div className={styles.info}>
                <div className={styles.title}>
                    {locale[title]}
                </div>
                <div className={styles.desc}>
                    {locale[desc]}
                </div>
                {
                    types?.length && (
                        <div className={styles.types}>
                            {
                                types.map((item) => (
                                    <div className={styles.typeItem} key={item}>
                                        {locale[typeMap[item]]}
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
                <div className={styles.corner} />
            </div>
        </div>
    );
};

export default TabCard;

