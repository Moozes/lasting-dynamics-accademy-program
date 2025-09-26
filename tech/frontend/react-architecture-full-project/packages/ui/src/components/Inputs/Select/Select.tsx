import { ReactElement } from "react";

import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";

import Helper from "../Helper";

import { MenuItemStyles } from "./inlineStyles";
import { ISelectProps } from "./Select.app";

export default function SelectField(props: ISelectProps): ReactElement {
    const {
        options,
        name,
        value,
        variant,
        onChange,
        disabled,
        label,
        children,
        touched,
        errorText,
        sx,
        required,
        ...rest
    } = props;
    return (
        <>
            <FormControl fullWidth size="small" sx={sx} required={required}>
                <InputLabel sx={{ color: "primary.blueDark" }} id={name}>
                    {label}
                </InputLabel>
                <Select
                    id={name}
                    labelId={name}
                    value={value}
                    onChange={onChange}
                    fullWidth
                    variant={variant || "filled"}
                    size="small"
                    disabled={disabled || false}
                    label={label}
                    {...rest}
                >
                    {children ||
                        options?.map((option) => (
                            <MenuItem key={option.value} value={option.value} sx={MenuItemStyles}>
                                {option.label}
                            </MenuItem>
                        ))}
                </Select>
            </FormControl>
            {touched && errorText && errorText.length > 1 ? <Helper variant="error">{errorText}</Helper> : null}
        </>
    );
}
