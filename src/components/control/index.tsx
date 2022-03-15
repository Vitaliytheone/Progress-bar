import styles from "./styles.module.css";
import { TBtn, TControl, TFields } from "./type";
import { inputsData, buttonsData } from "./data";

const Control = ({ curValue, maxValue, withValue, onChangeCheckbox, onChange, onClick }: TControl) => {
    return (
        <div>
            {inputsData({ curValue, maxValue }).map((item, idx) => {
                const { id, label, value, type } = item;
                return (
                    <div key={idx} className={styles.inputWrap}>
                        <label htmlFor={id} className={styles.labelInput}>
                            {label}
                        </label>
                        <input id={id} className={styles.mr4} value={value} onChange={onChange(type as TFields)} />
                    </div>
                );
            })}
            {buttonsData.map((item, idx) => (
                <button key={idx} className={styles.button} onClick={onClick(item.type as TBtn)}>
                    {item.value}
                </button>
            ))}
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
