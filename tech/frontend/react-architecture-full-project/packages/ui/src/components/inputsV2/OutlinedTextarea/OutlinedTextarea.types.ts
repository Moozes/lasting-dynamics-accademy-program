import { OutlinedInputProps } from "@mui/material";

export type OutlinedTextareaProps = OutlinedInputProps & {
    id: string;
    errorText?: string;
};
