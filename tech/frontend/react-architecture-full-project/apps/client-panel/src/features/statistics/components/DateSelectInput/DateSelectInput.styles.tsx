import { styled } from "@mui/material/styles";

import { DateSelectInput } from "./DateSelectInput";

export const StyledDateSelectInput = styled(DateSelectInput)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    "& > .select-drop-down": {
        marginRight: 6,
        fieldset: {
            border: 0,
        },
        "& .MuiSelect-select.MuiInputBase-input": {
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 0,
            paddingRight: 16,
            color: theme.color_system.text.light,
            ...theme.typography.caption,
        },
        svg: {
            top: "calc(35%)",
            right: "0px",
        },
    },
    "& > .divider": {
        marginRight: 6,
        borderColor: theme.color_system.divider.light_grey,
    },
}));
