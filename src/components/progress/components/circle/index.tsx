import { useMemo } from "react";
import styles from "../../styles.module.css";
import { TCircle } from "../../type";
import { getCircleParams } from "./helpers";

const CircleBar = ({ valueInPercent, withValue, stroke = 10, width = 110, height = 110 }: TCircle) => {
    const { r, h, w, cy, cx } = useMemo(() => getCircleParams({ stroke, width, height }), [stroke, width, height]);
    return (
        <div className={styles.circleProgress} style={{ width: w, height: h }}>
            <svg className={styles.circleSvg} height={h} width={w}>
                <circle
                    className="progress-ring__circle"
                    strokeWidth={stroke}
                    stroke="red"
                    fill="transparent"
                    r={r}
                    cx={cx}
                    cy={cy}
                />
            </svg>
            {withValue && <div className={styles.circleValuePercent}>{valueInPercent}</div>}
        </div>
    );
};

export default CircleBar;
