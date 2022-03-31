import styles from "../../styles.module.css";
import { TCircle } from "../../type";
import { getCircleParams } from "./helpers";

const CircleBar = ({ valueInPercent, withValue, stroke = 10, width = 110, height = 110 }: TCircle) => {
    const { r, h, w, cy, cx } = getCircleParams({ stroke, width, height });
    return (
        <div className={styles.circleProgress} style={{ width: w, height: h }}>
            <svg className={styles.circleSvg} height={h} width={w}>
                <circle
                    className="progress-ring__circle"
                    stroke-width={stroke}
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
