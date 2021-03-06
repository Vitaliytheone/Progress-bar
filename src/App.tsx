import { Progress, Control } from "./components";
import styles from "./assets/styles.module.css";
import { useState } from "react";
import { data, validRegexp } from "./data";
import { TBtn, TFields } from "./components/control/type";
import useDebounce from "./hooks/useDebounceValue";

function App() {
    const [curValue, setValue] = useState(0);
    const [maxValue, setMaxValue] = useState(10);
    const [withValue, setWithValue] = useState(false);
    const debouncedMaxValue = useDebounce({ value: maxValue });

    const onChangeWithValueParam = () => {
        setWithValue((prev) => !prev);
    };

    const onClickBtn = (v: TBtn) => () => {
        if (v === "incr") {
            setValue((prev) => (prev !== maxValue ? Number(prev) + 1 : maxValue));
        } else {
            setValue((prev) => prev && prev - 1);
        }
    };

    const onChangeValue = (t: TFields) => (e: any) => {
        let { value } = e.target;
        if (!validRegexp.test(value)) {
            value = "";
        } else {
            switch (t) {
                case "cur":
                    if (Number(value) <= Number(maxValue)) {
                        setValue(value);
                    }
                    break;
                case "max":
                    setMaxValue(value);
                    setValue(0);
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <>
            <div className={styles.title}>Progress bars</div>
            <div className={styles.wrap}>
                {data.map((item, idx) => {
                    const { label, variant } = item;
                    return (
                        <Progress
                            key={idx}
                            variant={variant}
                            label={label}
                            maxValue={Number(debouncedMaxValue)}
                            value={Number(curValue)}
                            withValue={withValue}
                        />
                    );
                })}
            </div>
            <Control
                curValue={curValue}
                maxValue={maxValue}
                withValue={withValue}
                onClick={onClickBtn}
                onChangeCheckbox={onChangeWithValueParam}
                onChange={onChangeValue}
            />
        </>
    );
}

export default App;
