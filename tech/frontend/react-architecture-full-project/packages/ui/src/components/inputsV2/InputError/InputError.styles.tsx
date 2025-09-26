import { styled } from "@mui/material/styles";

import { InputError } from "./InputError";

export const StyledInputError = styled(InputError)(({ theme }) => ({
    ...theme.typography.caption,
    color: theme.color_system.status.error.light,
    height: 19,
    display: "flex",
    alignItems: "center",
    "& > .icon-button": {
        color: "inherit",
        marginLeft: 5,
        padding: 5,
        "& > .error-icon": {
            fontSize: 15,
        },
    },
}));
