/* eslint-disable jsx-a11y/label-has-associated-control */
import { OutlinedInput } from "@mui/material";

import { InputError } from "../InputError";

import { FilledTextareaProps } from "./FilledTextarea.types";

export const FilledTextarea = ({
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
}: FilledTextareaProps) => {
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
                rows={3}
                {...outlinedInputprops}
                multiline
                fullWidth
            />
            <InputError className="input-error" errorText={errorText} />
        </div>
    );
};
