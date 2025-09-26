import { Radio as MuiRadio } from "@mui/material";

import RadioButtonDisabledIcon from "../../../assets/icons/RadioButtonIcons/RadioButtonDisabledIcon";
import RadioButtonFilledDisabledIcon from "../../../assets/icons/RadioButtonIcons/RadioButtonFilledDisabledIcon";
import RadioButtonFilledIcon from "../../../assets/icons/RadioButtonIcons/RadioButtonFilledIcon";
import RadioButtonIcon from "../../../assets/icons/RadioButtonIcons/RadioButtonIcon";

import { TProps } from "./Radio.types";

// You need to put multiple related radios inside a RadioGroup
// to have native selection state managment, meaning when you select a radio it deselects the previously selected one
// but if you use useState or formik (controlled radio) you dont have to wrap it in RadioGroup
export const Radio = ({ disabled, size = "medium", ...props }: TProps) => {
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
        <MuiRadio
            disabled={disabled}
            icon={disabled ? <RadioButtonDisabledIcon {...iconSizeProps} /> : <RadioButtonIcon {...iconSizeProps} />}
            checkedIcon={
                disabled ? (
                    <RadioButtonFilledDisabledIcon {...iconSizeProps} />
                ) : (
                    <RadioButtonFilledIcon {...iconSizeProps} />
                )
            }
            {...props}
        />
    );
};
