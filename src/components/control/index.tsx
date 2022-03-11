import { memo } from "react";
import styles from "./styles.module.css";
import { TControl } from "./type";

const Control = ({ value, withValue, onChangeCheckbox, onClick }: TControl) => {
    return (
        <div>
            <label htmlFor="input" className={styles.labelInput}>
                Enter the value
            </label>
            <input id="input" className={styles.mr4} value={value} />
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

export default memo(Control);
