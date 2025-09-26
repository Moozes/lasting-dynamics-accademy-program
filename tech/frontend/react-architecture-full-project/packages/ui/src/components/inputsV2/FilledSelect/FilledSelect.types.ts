import { SelectProps } from "@mui/material";

export type FilledSelectProps = SelectProps & {
    id: string;
    errorText?: string;
    options: { value: string; label: string }[];
};
