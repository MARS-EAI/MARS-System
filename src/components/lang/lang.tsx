import styles from './lang.module.less';
import { useContext } from 'react';
import { InfoContext } from '@/provider/global-provider';
import classNames from 'classnames';

const Lang = () => {
    const { lang, setLocale } = useContext(InfoContext);
    return (
        <div className={styles.lang}>
            <div className={classNames(styles.langBtn, lang === 'zh-CN' ? styles.active : '')} onClick={() => setLocale('zh-CN')}>
                中
            </div>
            /
            <div className={classNames(styles.langBtn, lang === 'en-US' ? styles.active : '')} onClick={() => setLocale('en-US')}>
                EN
            </div>
        </div>
    );
};

export default Lang;
