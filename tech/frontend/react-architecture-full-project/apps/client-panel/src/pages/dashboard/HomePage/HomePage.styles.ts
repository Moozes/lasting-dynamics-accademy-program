import { styled } from "@mui/material/styles";

import { HomePage } from "./HomePage";

export const StyledHomePage = styled(HomePage)({
    paddingTop: "33px",
    paddingBottom: "33px",
    "& > .container": {
        padding: "0 30px",
        "& > .welcome-card": {
            marginBottom: 25,
        },
        "& > .users-statistics": {
            marginBottom: 21,
        },
        "& > .sessions-statistics": {
            marginBottom: 21,
        },
        "& > .license-statistics": {},
    },
});
