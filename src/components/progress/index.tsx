import { TProgress } from "./type";
import styles from "./styles.module.css";

const Progress = ({ variant, label, withValue, maxValue, value }: TProgress) => {
    const isLine = variant === "line";
    const width = value <= maxValue ? `${(value * 100) / maxValue}%` : maxValue;
    return (
        <div>
            <label className={styles.label}>{label}</label>
            <div className={styles.progressInfo}>
                <div className={styles.lineBar}>
                    <div className={styles.lineProgress} style={{ width }}></div>
                </div>
                {withValue && <div className={styles.progressValue}>50%</div>}
            </div>
        </div>
    );
};

export default Progress;
