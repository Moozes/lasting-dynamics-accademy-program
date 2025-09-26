import { CheckboxProps } from "@mui/material";

export type TProps = Omit<CheckboxProps, "size"> & { size?: "small" | "medium" | "large" };
