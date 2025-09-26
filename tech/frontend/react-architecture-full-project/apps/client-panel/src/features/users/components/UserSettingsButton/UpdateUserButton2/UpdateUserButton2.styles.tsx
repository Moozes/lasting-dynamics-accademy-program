import { styled } from "@mui/material/styles";

import { TABLE_SETTINGS_MENU_ITEM_PADDING, TABLE_SETTINGS_MENU_ITEM_TEXT_ML } from "@utils/index";

import { UpdateUserButton2 } from "./UpdateUserButton2";

export const StyledUpdateUserButton2 = styled(UpdateUserButton2)(({ theme }) => ({
    color: theme.color_system.text.primary,
    padding: TABLE_SETTINGS_MENU_ITEM_PADDING,
    display: "flex",
    alignItems: "center",
    "& > svg path": {
        fill: theme.color_system.primary.dark,
    },
    "& > .text": {
        ...theme.typography.body1,
        marginLeft: TABLE_SETTINGS_MENU_ITEM_TEXT_ML,
    },
}));
