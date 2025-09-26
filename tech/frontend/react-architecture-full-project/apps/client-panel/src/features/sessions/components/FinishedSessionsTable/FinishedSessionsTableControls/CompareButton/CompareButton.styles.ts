import { styled } from "@mui/material/styles";

import { CompareButton } from "./CompareButton";

export const StyledCompareButton = styled(CompareButton)(({ theme }) => ({
    "& > .compare": {
        padding: "10px 19px",
        ...theme.typography.body1,
        color: theme.color_system.text.secondary,
    },
}));
