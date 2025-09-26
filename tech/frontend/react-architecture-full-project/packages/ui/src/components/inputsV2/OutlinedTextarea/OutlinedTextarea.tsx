/* eslint-disable jsx-a11y/label-has-associated-control */
import { OutlinedInput } from "@mui/material";

import { InputError } from "../InputError";

import { OutlinedTextareaProps } from "./OutlinedTextarea.types";

export const OutlinedTextarea = ({
    id,
    // extract error to prevent passing it to OutlinedInput
    error,
    errorText,
    disabled,
    // only used to display * infront of label, required is not passed to input
    required,
    className,
    label,
    ...outlinedInputprops
}: OutlinedTextareaProps) => {
    const labelClasseNames = disabled ? "disabled" : "";
    const inputClasseNames = `${errorText ? "error" : ""} ${disabled ? "disabled" : ""}`;
    const containerClasseNames = `${className} ${disabled ? "disabled" : ""}`;
    return (
        <div className={containerClasseNames}>
            {label && (
                <label htmlFor={id} className={labelClasseNames}>
                    {label}
                    {required && <span className="star">*</span>}
                </label>
            )}
            <OutlinedInput
                id={id}
                className={inputClasseNames}
                disabled={disabled}
                {...outlinedInputprops}
                multiline
                rows={3}
                fullWidth
            />
            <InputError className="input-error" errorText={errorText} />
        </div>
    );
};
