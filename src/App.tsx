import { Home } from "pages/Home";
import { Container } from "components/Container";
import styles from "./styles/App.module.css"

function App() {
    return (
        <div className={styles.app}>
            <Container>
                <Home />
            </Container>
        </div>
    );
}

export default App;
