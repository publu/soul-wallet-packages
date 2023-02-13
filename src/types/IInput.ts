export interface IInputProps {
    label?: string;
    type?: string;
    className?: string;
    memo?: string;
    placeholder?: string;
    verified?: boolean;
    value: string;
    error: string;
    ExtraButton?: React.ReactNode;
    onEnter?: () => void;
    onChange: (value: string) => void;
}
