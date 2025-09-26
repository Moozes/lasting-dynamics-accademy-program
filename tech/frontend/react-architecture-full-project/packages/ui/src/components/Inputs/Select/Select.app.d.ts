declare type SelectProps = import("@mui/material/Select").SelectProps;
export interface ISelectProps extends SelectProps {
    name: string;
    value?: string;
    label: string;
    children?: JSX.Element[];
    options?: { value: string | number; label: string }[];
    variant?: "filled" | "outlined" | "standard";
    touched?: boolean;
    errorText?: string;
}

export interface ISelectContainerProps extends ISelectProps {
    name: string;
}
