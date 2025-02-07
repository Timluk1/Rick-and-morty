interface IInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export const Input: React.FC<IInputProps> = ({
    value,
    onChange,
    placeholder,
}) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        ></input>
    );
};
