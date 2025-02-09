import styles from "./SkeletonCard.module.css";

export const SkeletonCard: React.FC = () => {
    return (
        <div className={styles.skeletonCard}>
            <div className={styles.skeletonImage}></div>
            <div className={styles.skeletonText}></div>
            <div className={styles.skeletonButton}></div>
        </div>
    );
};
