import { TProgress } from "./type";
import styles from "./styles.module.css";

const Progress = ({ variant, label, withValue }: TProgress) => {
    const isLine = variant === "line";
    return (
        <div>
            <label className={styles.label}>{label}</label>
            <div className={styles.progressInfo}>
                <div className={styles.lineBar}>
                    <div className={styles.lineProgress}></div>
                </div>
                <div className={styles.progressValue}>50%</div>
            </div>
        </div>
    );
};

export default Progress;
