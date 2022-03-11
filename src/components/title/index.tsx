import styles from "./styles.module.css";

const Title = ({ children }: any) => {
    return <div className={styles.title}>{children}</div>;
};

export default Title;
