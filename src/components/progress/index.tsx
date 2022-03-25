import { TProgress } from "./type";
import styles from "./styles.module.css";
import { LineBar, CircleBar } from "./components";

const Progress = ({ variant, label, withValue, maxValue, value }: TProgress) => {
    const isLine = variant === "line";
    const number = { v: Number(value), m: Number(maxValue) };
    const valueInPercent = `${number.m > 0 ? ((number.v * 100) / number.m).toFixed(0) : 0}%`;
    // const width = number.v <= number.m ? valueInPercent : number.m;

    return (
        <div>
            <label className={styles.label}>{label}</label>
            {isLine ? (
                <LineBar withValue={withValue} valueInPercent={valueInPercent} />
            ) : (
                <CircleBar withValue={withValue} valueInPercent={valueInPercent} />
            )}
        </div>
    );
};

export default Progress;
