import { Checkbox as MuiCheckbox } from "@mui/material";

import CheckboxDisabledIcon from "../../../assets/icons/CheckboxIcons/CheckboxDisabledIcon";
import CheckboxFilledDisabledIcon from "../../../assets/icons/CheckboxIcons/CheckboxFilledDisabledIcon";
import CheckboxFilledIcon from "../../../assets/icons/CheckboxIcons/CheckboxFilledIcon";
import CheckboxIcon from "../../../assets/icons/CheckboxIcons/CheckboxIcon";
import CheckboxIndertminateDisabledIcon from "../../../assets/icons/CheckboxIcons/CheckboxIndertminateDisabledIcon";
import CheckboxIndertminateIcon from "../../../assets/icons/CheckboxIcons/CheckboxIndertminateIcon";

import { TProps } from "./Checkbox.types";

export const Checkbox = ({ disabled, size = "medium", ...props }: TProps) => {
    let iconSizeProps;
    switch (size) {
        case "small":
            iconSizeProps = { width: "18px", height: "18px" };
            break;
        case "medium":
            iconSizeProps = { width: "24px", height: "24px" };
            break;
        case "large":
            iconSizeProps = { width: "27px", height: "27px" };
            break;
        default:
            break;
    }
    return (
        <MuiCheckbox
            disabled={disabled}
            indeterminateIcon={
                disabled ? (
                    <CheckboxIndertminateDisabledIcon {...iconSizeProps} />
                ) : (
                    <CheckboxIndertminateIcon {...iconSizeProps} />
                )
            }
            icon={disabled ? <CheckboxDisabledIcon {...iconSizeProps} /> : <CheckboxIcon {...iconSizeProps} />}
            checkedIcon={
                disabled ? <CheckboxFilledDisabledIcon {...iconSizeProps} /> : <CheckboxFilledIcon {...iconSizeProps} />
            }
            {...props}
        />
    );
};
