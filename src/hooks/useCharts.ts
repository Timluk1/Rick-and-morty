import { useState, useEffect } from "react";
import { rickAndMortiApi } from "api/RickAndMorti";
import type { ICharterResponse, ICharter } from "api/RickAndMorti/types";

interface IUseCharts {
    charters: ICharter[];
    pages: number;
    foundCount: number
    inputValue: string;
    isLoading: boolean;
    setInputValue: (value: string) => void;
}

const defaultResponse: ICharterResponse = {
    info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    },
    results: [],
};

export const useCharts = (page: number, setPage: (newPage: number) => void): IUseCharts => {
    const [inputValue, setInputValue] = useState<string>("");
    const [response, setResponse] = useState<ICharterResponse>(defaultResponse);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                setResponse(defaultResponse);
                const res = await rickAndMortiApi.getByName({ name: inputValue, page: page });

                setTimeout(() => {
                    setResponse(res);
                    setIsLoading(false);
                }, 1000)
            } catch {
                setTimeout(() => {
                    setResponse(defaultResponse);
                    setIsLoading(false);
                }, 1000);
            }
        };
        if (!isLoading) {
            if (inputValue.length >= 3) {
                fetchData();
            } else {
                setResponse(defaultResponse);
            }
        }
    }, [inputValue, page]);

    const onChangeInput = (newInput: string) => {
        setPage(1);
        setInputValue(newInput);
    }
    const charters = response.results;
    const pages = response.info.pages;
    const foundCount = response.info.count;

    return {
        charters,
        pages,
        foundCount,
        inputValue,
        isLoading,
        setInputValue: onChangeInput,
    };
};
