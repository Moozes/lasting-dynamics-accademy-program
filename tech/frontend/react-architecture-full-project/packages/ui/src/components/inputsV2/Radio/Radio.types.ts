import { RadioProps } from "@mui/material";

export type TProps = Omit<RadioProps, "size"> & { size?: "small" | "medium" | "large" };
