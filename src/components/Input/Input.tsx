import styles from "./Input.module.css";

interface IInputProps {
    value: string;
    onChange: (newValue: string) => void;
    placeholder?: string;
}

export const Input: React.FC<IInputProps> = ({
    value,
    onChange,
    placeholder,
}) => {
    return (
        <input
            className={styles.input}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        ></input>
    );
};
