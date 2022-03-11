import styles from "./styles.module.css";

const Control = () => {
    return (
        <div>
            <label htmlFor="input" className={styles.labelInput}>
                Enter the value
            </label>
            <input id="input" className={styles.mr4} />
            <button className={styles.button}>-</button>
            <button className={styles.button}>+</button>
            <input id="checkbox" type="checkbox" className={styles.checkbox} />
            <label htmlFor="checkbox" className={styles.labelCheckbox}>
                With value
            </label>
        </div>
    );
};

export default Control;
