import { Card } from "components/Card";
import { SkeletonCard } from "components/SkeletonCard";
import type { ICharter } from "api/RickAndMorti";
import styles from "./Cards.module.css";

interface ICardsProps {
    cards: ICharter[];
    isLoading: boolean;
}

export const Cards: React.FC<ICardsProps> = ({ cards, isLoading }) => {
    console.log(cards)
    const loadingComponent = () => {
        return (
            <div>
                <ul className={styles.cardsListFirst}>
                    <SkeletonCard />
                    <SkeletonCard />
                </ul>

                <ul className={styles.cardsListSecond}>
                    {Array.from({ length: 6 }, (_, i) => {
                        return <SkeletonCard key={i} />;
                    })}
                </ul>
            </div>
        );
    };

    return isLoading ? (
        loadingComponent()
    ) : (
            cards.length
                ?
                <div>
                    <ul className={styles.cardsListFirst}>
                        {cards.slice(0, 2).map((card) => (
                            <Card
                                key={card.id}
                                {...card}
                                className={`${styles.cardListItem} ${styles.cardListItem1}`}
                            />
                        ))}
                    </ul>

                    <ul className={styles.cardsListSecond}>
                        {cards.slice(2).map((card) => (
                            <Card
                                key={card.id}
                                {...card}
                                className={`${styles.cardListItem} ${card.status === "Alive"
                                        ? styles.cardListItem1
                                        : styles.cardListItem2
                                    }`}
                            />
                        ))}
                    </ul>
                </div>
                :
                <div className={styles.notFound}>
                    <span>Not found</span>
                </div>
    );
};
