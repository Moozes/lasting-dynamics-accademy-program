import { OutlinedInputProps } from "@mui/material";

export type FilledTextareaProps = OutlinedInputProps & {
    id: string;
    errorText?: string;
};
