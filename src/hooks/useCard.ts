import { useState, useEffect } from "react";
import { rickAndMortiApi } from "api/RickAndMorti";

interface UseCardsResult {
    cards: any[];
    inputValue: string;
    loading: boolean;
    isEmpty: boolean;
    foundCount: number;
    setInputValue: (value: string) => void;
}

export const useCards = (): UseCardsResult => {
    const [inputValue, setInputValue] = useState<string>("");
    const [cards, setCards] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const [foundCount, setFoundCount] = useState<number>(0);

    const allReset = () => {
        setCards([]);
        setLoading(false);
        setIsEmpty(true);
        setFoundCount(0);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                setIsEmpty(false);
                const data = await rickAndMortiApi.getByName(inputValue);
                setTimeout(() => {
                    setCards(data.results || []);
                    setFoundCount(data.info.count || 0);
                    setLoading(false);
                }, 500);
            } catch {
                setTimeout(() => {
                    allReset();
                }, 500);
            }
        };

        if (!loading) {
            if (inputValue.length >= 3) {
                fetchData();
            } else {
                allReset();
            }
        }
    }, [inputValue]);

    return { cards, loading, isEmpty, foundCount, setInputValue, inputValue };
};
