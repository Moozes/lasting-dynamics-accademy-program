import { OutlinedInputProps } from "@mui/material";

export type FilledTextFieldProps = OutlinedInputProps & {
    id: string;
    errorText?: string;
};
