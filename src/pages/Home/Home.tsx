import { Input } from "components/Input/Input";
import { Cards } from "components/Cards/Cards";
import { useCards } from "hooks/useCard";
import styles from "./Home.module.css";

export const Home = () => {
    const { cards, loading, isEmpty, foundCount, setInputValue, inputValue } = useCards();
    return (
        <div className={styles.home}>
            <div className={styles.inputPLaceholder}>
                <Input
                    value={inputValue}
                    placeholder="Enter your name"
                    onChange={setInputValue}
                />
                <div className={styles.countLayout}>
                    <span className={styles.count}>Found characters: {foundCount}</span>
                </div>
            </div>
            <main>
                {isEmpty
                    ? <p className={styles.nothing}>Nothing found</p>
                    : <Cards cards={cards} isLoading={loading} />
                }
            </main>
        </div>
    );
};
