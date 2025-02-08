import { Input } from "components/Input/Input";
import { Cards } from "components/Cards/Cards";
import { useState, useEffect } from "react";
import { rickAndMortiApi } from "api/RickAndMorti";
import styles from "./Home.module.css";

export const Home = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [cards, setCards] = useState<any[]>([]); 
    const [loading, setLoading] = useState<boolean>(false);
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const [foundCount, setFoundCount] = useState<number>(0);

    useEffect(() => {
        const getData = async () => {
            if (inputValue.length <= 3) {
                setCards([]);
                setFoundCount(0);
                return;
            };

            try {
                setIsEmpty(false);
                setLoading(true);
                const data = await rickAndMortiApi.getByName(inputValue);
                setCards(data.results || []);
                setFoundCount(data.info.count || 0); 
                setLoading(false);
            } catch  {
                setIsEmpty(true);
                setLoading(false);
            }
        }

        getData(); 

    }, [inputValue]);

    return (
        <div className={styles.home}>
            <div className={styles.inputPLaceholder}>
                <Input
                    placeholder="Enter your name"
                    value={inputValue}
                    onChange={(newValue) => setInputValue(newValue)}
                />
                <div className={styles.countLayout}>
                    <span className={styles.count}>Found characters: {foundCount}</span>
                </div>
            </div>
            <main>
                {isEmpty
                    ? <p className={styles.nothing}>Ничего не найдено</p>
                    : <Cards cards={cards} isLoading={loading} />
                }
            </main>
        </div>
    )
}
