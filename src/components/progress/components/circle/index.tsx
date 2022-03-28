import styles from "../../styles.module.css";

const CircleBar = ({ valueInPercent, withValue }: any) => {
    return (
        <div className={styles.circleProgress}>
            <svg className={styles.circleSvg} height="120px" width="120px">
                <circle
                    className="progress-ring__circle"
                    stroke-width="10"
                    stroke="white"
                    fill="transparent"
                    r="30"
                    cx="50"
                    cy="50"
                />
            </svg>
        </div>
    );
};

export default CircleBar;
