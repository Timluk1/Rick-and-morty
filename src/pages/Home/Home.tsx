import { Input } from "components/Input/Input";
import { Cards } from "components/Cards/Cards";
import { useState, useEffect } from "react";
import { rickAndMortiApi } from "api/RickAndMorti";
import styles from "./Home.module.css";

export const Home = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [cards, setCards] = useState();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const data = await rickAndMortiApi.getByName(inputValue);
                setLoading(false);
                setCards(data);
            } catch  {
                setError("Error");
            }
        }
        
        if (inputValue.length > 3) {
            getData();
        }
    }, [inputValue])

    return (
        <div className={styles.home}>
            <div className={styles.inputPLaceholder}>
                <Input
                    placeholder="Enter your name"
                    value={inputValue}
                    onChange={(newValue) => setInputValue(newValue)}
                />
                <div className={styles.countLayout}>
                    <span className={styles.count}>Found characters: 8</span>
                </div>
            </div>
            <main>
                <Cards />
            </main>
        </div>
    )
}
