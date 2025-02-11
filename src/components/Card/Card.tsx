import classNames from "classnames";
import styles from "./Card.module.css";
import { ICharter } from "api/RickAndMorti";

interface ICardProps extends ICharter {
    className?: string;
}

export const Card: React.FC<ICardProps> = ({
    url,
    name,
    status,
    createdAt,
    className,
}) => {
    return (
        <a href={url}>
            <li className={classNames(styles.card, className)}>
                <div>
                    <p className={styles.cardTitle}>{name}</p>
                </div>
                <div className={styles.cardFooter}>
                    <p className={styles.statusText}>
                        Status{" "}
                        <span
                            className={
                                status === "Alive" ? styles.statusAlive : styles.statusDead
                            }
                        >
                            {status}
                        </span>
                    </p>
                    <p className={styles.cardCreatedAt}>
                        Created at {createdAt}
                    </p>
                </div>
            </li>
        </a>
    );
};
