import styles from "../../styles.module.css";

const CircleBar = ({ valueInPercent, withValue }: any) => {
    return <div className={withValue ? styles.progressInfoValueLine : styles.progressInfo}>Circle Bar</div>;
};

export default CircleBar;
