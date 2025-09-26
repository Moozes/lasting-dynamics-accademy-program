import { styled } from "@mui/material/styles";

import { UsersStatistics } from "./UsersStatistics";

export const StyledUsersStatistics = styled(UsersStatistics)(({ theme }) => ({
    color: theme.color_system.text.primary,
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: "25px",
    "& > .card": {
        flexGrow: "1",
        width: "calc(50% - 25px)",
    },
    "@media only screen and (max-width: 660px)": {
        flexDirection: "column",
        "& > .card": {
            width: "100%",
        },
    },
}));
