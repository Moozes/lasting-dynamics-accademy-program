import { Select } from "@mui/material";

import { InputError } from "../InputError";

import { selectMenuProps } from "./inlineStyles";
import { MenuItem } from "./MenuItem";
import { OutlinedSelectProps } from "./OutlinedSelect.types";

export const OutlinedSelect = ({
    id,
    // extract error to prevent passing it to OutlinedInput
    error,
    errorText,
    disabled,
    // only used to display * infront of label, required is not passed to input
    required,
    className,
    label,
    options,
    ...selectProps
}: OutlinedSelectProps) => {
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
            <Select
                id={id}
                className={inputClasseNames}
                disabled={disabled}
                {...selectProps}
                fullWidth
                variant="outlined"
                MenuProps={selectMenuProps}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value} disabled={option.disabled}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
            <InputError className="input-error" errorText={errorText} />
        </div>
    );
};
