import { Input } from "components/Input/Input";
import { Cards } from "components/Cards/Cards";
import { useCharts } from "hooks/useCharts";
import { useState } from "react";
import Pagination from '@mui/material/Pagination';
import styles from "./Home.module.css";

export const Home = () => {
    const [page, setPage] = useState<number>(1);
    const { isLoading, charters, inputValue, setInputValue, foundCount, pages } = useCharts(page, setPage);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        window.scrollTo(0, 0);
    };

    return (
        <div className={styles.home}>
            <div className={styles.inputPLaceholder}>
                <Input
                    value={inputValue}
                    placeholder="Enter your name"
                    onChange={setInputValue}
                />
                <div className={styles.countLayout}>
                    <span className={styles.count}>
                        Found characters: {foundCount}
                    </span>
                </div>
            </div>
            <main className={styles.main}>
                <Cards cards={charters} isLoading={isLoading} />
            </main>
            {
                pages > 1
                    ?
                    <Pagination className={styles.pagination} page={page} count={pages} color="primary" onChange={handleChange} />
                    :
                    null
            }
        </div>
    );
};
