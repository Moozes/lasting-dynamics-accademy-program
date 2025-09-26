import { styled } from "@mui/material/styles";

import { CheckboxAndDiaplay } from "./CheckboxAndDiaplay";

export const StyledCheckboxAndDiaplay = styled(CheckboxAndDiaplay)(({ theme }) => ({
    color: theme.color_system.text.primary,
    display: "inline-flex",
    alignItems: "center",
    gap: 15,
}));
