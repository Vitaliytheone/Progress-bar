import { useMemo } from "react";
import styles from "../../styles.module.css";
import { TCircle } from "../../type";
import { getCircleParams } from "./helpers";

const CircleBar = ({ valueInPercent, withValue, stroke = 10, width = 110, height = 110 }: TCircle) => {
    const { radius, circumference, h, w, cy, cx } = useMemo(
        () => getCircleParams({ stroke, width, height }),
        [stroke, width, height],
    );
    const offset = circumference - (parseFloat(valueInPercent) / 100) * circumference;

    return (
        <div className={styles.circleProgress} style={{ width: w, height: h }}>
            <svg height={h} width={w}>
                <circle r={radius} cx={cx} cy={cy} fill="none" stroke="#5f9ea047" strokeWidth={stroke} />
                <circle
                    className={styles.svgFigure}
                    strokeWidth={stroke}
                    strokeDasharray={`${circumference}`}
                    style={{ strokeDashoffset: offset }}
                    stroke="#4daca3"
                    fill="transparent"
                    r={radius}
                    cx={cx}
                    cy={cy}
                />
            </svg>
            {withValue && <div className={styles.circleValuePercent}>{valueInPercent}</div>}
        </div>
    );
};

export default CircleBar;
