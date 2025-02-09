import styles from "./Container.module.css";

interface IContainerProps {
    children: React.ReactNode;
}

export const Container: React.FC<IContainerProps> = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};
