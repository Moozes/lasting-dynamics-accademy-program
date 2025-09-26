import { styled } from "@mui/material/styles";

import { LinkToSession } from "./LinkToSession";

export const StyledLinkToSession = styled(LinkToSession)(({ theme }) => ({
    "& > .link": {
        ...theme.typography.body1,
        color: theme.color_system.primary.dark,
        textDecoration: "underline",
        // "&.link-null": {
        //     textDecoration: "line-through",
        // },
    },
}));
