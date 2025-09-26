import { SelectProps } from "@mui/material";

export type OutlinedSelectProps = SelectProps & {
    id: string;
    errorText?: string;
    options: { value: string; label: string; disabled?: boolean }[];
};
