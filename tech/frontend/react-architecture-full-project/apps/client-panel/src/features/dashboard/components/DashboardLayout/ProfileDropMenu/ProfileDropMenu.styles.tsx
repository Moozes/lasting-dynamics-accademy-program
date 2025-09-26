import { styled } from "@mui/material/styles";

import { ProfileDropMenu } from "./ProfileDropMenu";

export const StyledProfileDropMenu = styled(ProfileDropMenu)(({ theme }) => ({
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    "& > .avatar": {
        width: 43,
        height: 43,
        marginRight: 29,
    },
    "& > .user-info": {
        marginRight: 20,
        textAlign: "left",
        "& > .name": {
            color: theme.color_system.text.primary,
            ...theme.typography.h6,
        },
        "& > .role": {
            color: theme.color_system.text.light,
            ...theme.typography.body1,
        },
    },
    "& > .icon": {
        color: theme.color_system.primary.dark,
    },
}));
