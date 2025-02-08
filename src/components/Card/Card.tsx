import classNames from "classnames"
import styles from "./Card.module.css"

interface ICardProps {
    name: string;
    isAlive: boolean;
    createdAt: string;
    className?: string;
}

export const Card: React.FC<ICardProps> = ({ name, isAlive, createdAt, className }) => {
    return (
        <li className={classNames(styles.card, className)}>
            <div>
                <p className={styles.cardTitle}>{name}</p>
            </div>
            <div className={styles.cardFooter}>
                <p className={styles.statusText}>Status <span className={isAlive ? styles.statusAlive : styles.statusDead}>{isAlive ? "Alive" : "Dead"}</span></p>
                <p className={styles.cardCreatedAt}>Created at {createdAt}</p>
            </div>
        </li>
    )
}
