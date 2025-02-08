import { Card } from "components/Card";
import { SkeletonCard } from "components/SkeletonCard";
import styles from "./Cards.module.css";

interface ICard {
    name: string;
    isAlive: boolean;
    createdAt: string;
}

interface ICardsProps {
    cards: ICard[];
    isLoading: boolean;
}

export const Cards: React.FC<ICardsProps> = ({ cards, isLoading }) => {
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
        <div>
            <ul className={styles.cardsListFirst}>
                {cards.slice(0, 2).map((card, index) => (
                    <Card
                        key={index}
                        name={card.name}
                        isAlive={card.isAlive}
                        createdAt={card.createdAt}
                        className={`${styles.cardListItem} ${styles.cardListItem1}`}
                    />
                ))}
            </ul>

            <ul className={styles.cardsListSecond}>
                {cards.slice(2, 8).map((card) => (
                    <Card
                        key={card.name}
                        name={card.name}
                        isAlive={card.isAlive}
                        createdAt={card.createdAt}
                        className={`${styles.cardListItem} ${card.isAlive ? styles.cardListItem1 : styles.cardListItem2
                        }`}
                    />
                ))}
            </ul>
        </div>
    );
};
