import { Progress, Control } from "./components";
import styles from "./assets/styles.module.css";

function App() {
    return (
        <>
            <div className={styles.title}>Progress bars</div>
            <div className={styles.wrap}>
                <Progress variant="line" label="Line bar" />
                <Progress variant="line" label="Circle bar" />
            </div>
            <Control />
        </>
    );
}

export default App;
