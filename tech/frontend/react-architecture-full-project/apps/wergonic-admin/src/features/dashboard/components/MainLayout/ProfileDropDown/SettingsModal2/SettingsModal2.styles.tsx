import { styled } from "@mui/material/styles";

import { getMediaQueryMaxWidthString } from "@utils/index";

import { SettingsModal2 } from "./SettingsModal2";
import { height_desktop, height_tablet } from "./SettingsModal2.helpers";

export const StyledSettingsModal2 = styled(SettingsModal2)(({ theme }) => ({
    color: theme.color_system.text.primary,
    width: "min(90vw, 1157px)",
    "& > .content": {
        display: "flex",
        alignItems: "stretch",
        "& > .sidebar": {
            borderRight: `1px solid ${theme.color_system.divider.light_grey}`,
            flexShrink: 0,
            flexBasis: 317,
            height: height_desktop,
        },
        "& > .screens": {
            flex: 1,
            padding: 63,
            height: height_desktop,
            overflow: "auto",
        },
    },
    "& > .actions": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 10,
        padding: "23px 52px 21px",
        background: theme.color_system.divider.light_purple,
    },
    [getMediaQueryMaxWidthString("834px")]: {
        "& > .content": {
            "& > .sidebar": {
                flexBasis: 225,
                height: height_tablet,
            },
            "& > .screens": {
                flex: 1,
                padding: "28px 10px",
                height: height_tablet,
            },
        },
        "& > .actions": {
            gap: 13,
            padding: "23px 25px",
        },
    },
}));
