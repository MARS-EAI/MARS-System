import styles from './index.module.less';
import { useNavigate } from 'react-router';

const Card = ({ imgUrl, title, desc, path }: any) => {
    const navigate = useNavigate();

    const lineToPage = () => {
        navigate(path);
    };

    return (
        <div className={styles.card} onClick={lineToPage}>
            <div className={styles.pic}>
                <img src={imgUrl} alt="" />
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.desc}>
                    {desc}
                </div>
            </div>
        </div>
    );
};

export default Card;
