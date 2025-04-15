import styles from './index.module.less';

interface PanelProps {
    children?: React.ReactNode;
    title: string;
    desc?: string;
}

const Panel = ({ children, title, desc }: PanelProps) => {
    return (
        <div className={styles.panel}>
            <div className={styles.blockTitle}>
                <span className={styles.inner}>
                    {title}
                </span>
            </div>
            {
                desc && (
                    <div className={styles.blockDesc}>
                        {desc}
                    </div>
                )
            }
            <div className={styles.content}>
                {children}
            </div>
        </div >
    );
};

export default Panel;
