import styles from "./styles.module.css";
import { TControl } from "./type";

const Control = ({ value, maxValue, withValue, onChangeCheckbox, onChange, onClick }: TControl) => {
    return (
        <div>
            <div className={styles.inputWrap}>
                <label htmlFor="input-max" className={styles.labelInput}>
                    Max value
                </label>
                <input id="input-max" className={styles.mr4} value={maxValue} onChange={onChange} />
            </div>
            <div className={styles.inputWrap}>
                <label htmlFor="input-current" className={styles.labelInput}>
                    Enter the value
                </label>
                <input id="input-current" className={styles.mr4} value={value} onChange={onChange} />
            </div>
            <button className={styles.button} onClick={onClick("decr")}>
                -
            </button>
            <button className={styles.button} onClick={onClick("incr")}>
                +
            </button>
            <input
                id="checkbox"
                type="checkbox"
                className={styles.checkbox}
                checked={withValue}
                onChange={onChangeCheckbox}
            />
            <label htmlFor="checkbox" className={styles.labelCheckbox}>
                With value
            </label>
        </div>
    );
};

export default Control;
