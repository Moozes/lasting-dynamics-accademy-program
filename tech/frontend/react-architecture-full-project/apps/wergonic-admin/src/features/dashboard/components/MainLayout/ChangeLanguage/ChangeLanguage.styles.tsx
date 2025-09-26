import { styled } from "@mui/material/styles";

import { ChangeLanguage } from "./ChangeLanguage";

export const StyledChangeLanguage = styled(ChangeLanguage)(({ theme }) => ({
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    gap: 8,
    "&  .icon path": {
        stroke: theme.color_system.primary.dark,
    },
    "& > .language": {
        color: theme.color_system.primary.dark,
        ...theme.typography.body1,
    },
}));
