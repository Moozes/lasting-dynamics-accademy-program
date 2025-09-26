import { HTMLProps } from "react";

export type ITimeInputProps = HTMLProps<HTMLInputElement> & { label: string; error?: string };
