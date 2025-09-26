import { styled } from "@mui/material/styles";

import { WelcomeCard } from "./WelcomeCard";

export const StyledWelcomeCard = styled(WelcomeCard)(({ theme }) => ({
    background: theme.color_system.primary.light_20,
    padding: "20px 29px",
    borderRadius: "20px",
    boxShadow: theme.color_system.boxShadow.gray,
    color: theme.color_system.text.primary,
    "& > .title": {
        marginBottom: "8px",
    },
    "& > .welcome": {
        marginBottom: "23px",
    },
    "& > .date": {},
}));
