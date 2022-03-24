import { TProgress } from "./type";
import styles from "./styles.module.css";

const Progress = ({ variant, label, withValue, maxValue, value }: TProgress) => {
    const isLine = variant === "line";
    const number = { v: Number(value), m: Number(maxValue) };
    const valueInPercent = `${number.m > 0 ? ((number.v * 100) / number.m).toFixed(0) : 0}%`;
    const width = number.v <= number.m ? valueInPercent : number.m;

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
