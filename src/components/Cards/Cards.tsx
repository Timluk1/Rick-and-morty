import { Card } from "components/Card"
import { SkeletonCard } from "components/SkeletonCard"
import styles from "./Cards.module.css"

export const Cards = () => {
    return (
        <div>
            <ul className={styles.cardsListFirst}>
                <Card
                    name="Stair Goblin - Mythological Creature"
                    isAlive={true}
                    createdAt="04.11.2017"
                    className={styles.cardListItem + " " + styles.cardListItem1}
                />

                <SkeletonCard />
            </ul>

            <ul className={styles.cardsListSecond}>
                <Card
                    name="Stair Goblin - Mythological Creature"
                    isAlive={true}
                    createdAt="04.11.2017"
                    className={styles.cardListItem + " " + styles.cardListItem1}
                />

                <Card
                    name="Stair Goblin - Mythological Creature"
                    isAlive={false}
                    createdAt="04.11.2017"
                    className={styles.cardListItem + " " + styles.cardListItem2}
                />
                <Card
                    name="Stair Goblin - Mythological Creature"
                    isAlive={false}
                    createdAt="04.11.2017"
                    className={styles.cardListItem + " " + styles.cardListItem2}
                />
                <Card
                    name="Stair Goblin - Mythological Creature"
                    isAlive={false}
                    createdAt="04.11.2017"
                    className={styles.cardListItem + " " + styles.cardListItem2}
                />
                <Card
                    name="Stair Goblin - Mythological Creature"
                    isAlive={false}
                    createdAt="04.11.2017"
                    className={styles.cardListItem + " " + styles.cardListItem2}
                />
                <SkeletonCard />
            </ul>
        </div>
    )
}
