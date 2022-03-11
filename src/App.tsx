import { Progress, Control } from "./components";
import styles from "./assets/styles.module.css";
import { useState } from "react";
import { data } from "./data";
import { TBtn } from "./components/control/type";

function App() {
    const [value, setValue] = useState(0);
    const [withValue, setWithValue] = useState(false);

    const onChangeWithValueParam = () => {
        setWithValue((prev) => !prev);
    };

    const onClickBtn = (v: TBtn) => () => {
        setValue((prev) => (v === "incr" ? prev + 1 : prev === 0 ? 0 : prev - 1));
    };

    const onChangeValue = (e: any) => {
        console.info(e.target.value);
    };

    return (
        <>
            <div className={styles.title}>Progress bars</div>
            <div className={styles.wrap}>
                {data.map((item, idx) => {
                    const { label, variant } = item;
                    return <Progress key={idx} variant={variant} label={label} withValue={withValue} />;
                })}
            </div>
            <Control
                value={value}
                withValue={withValue}
                onClick={onClickBtn}
                onChangeCheckbox={onChangeWithValueParam}
            />
        </>
    );
}

export default App;
