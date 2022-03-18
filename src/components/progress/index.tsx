import { TProgress } from "./type";
import styles from "./styles.module.css";

const Progress = ({ variant, label, withValue, maxValue, value }: TProgress) => {
    const isLine = variant === "line";
    const valueInPercent = `${((value * 100) / maxValue).toFixed(0)}%`;
    const width = value <= maxValue ? valueInPercent : maxValue;
    console.info(valueInPercent);
    console.info(width);

    return (
        <div>
            <label className={styles.label}>{label}</label>
            <div className={isLine && withValue ? styles.progressInfoValueLine : styles.progressInfo}>
                <div className={styles.lineBar}>
                    <div className={styles.lineProgress} style={{ width }}></div>
                </div>
                {withValue && <div className={styles.progressValue}>{valueInPercent}</div>}
            </div>
        </div>
    );
};

export default Progress;
