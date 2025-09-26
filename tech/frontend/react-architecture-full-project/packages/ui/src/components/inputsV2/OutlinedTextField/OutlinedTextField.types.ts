import { OutlinedInputProps } from "@mui/material";

export type OutlinedTextFieldProps = OutlinedInputProps & {
    id: string;
    errorText?: string;
};
