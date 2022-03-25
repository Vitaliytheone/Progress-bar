import styles from "../../styles.module.css";
import { TBar } from "../../type";

const LineBar = ({ valueInPercent, withValue }: TBar) => {
    return (
        <div className={withValue ? styles.progressInfoValueLine : styles.progressInfo}>
            <div className={styles.lineBar}>
                <div className={styles.lineProgress} style={{ width: valueInPercent }}></div>
            </div>
            {withValue && <div className={styles.progressValue}>{valueInPercent}</div>}
        </div>
    );
};

export default LineBar;
