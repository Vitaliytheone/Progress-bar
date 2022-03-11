import { Progress, Title } from "./components";

function App() {
    return (
        <>
            <Title>Progress bars</Title>
            <Progress variant="line" label="Line bar" />
            <Progress variant="line" label="Circle bar" />
        </>
    );
}

export default App;
