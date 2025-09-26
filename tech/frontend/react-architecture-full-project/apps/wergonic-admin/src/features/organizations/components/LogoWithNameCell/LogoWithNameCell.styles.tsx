import { styled } from "@mui/material/styles";

import { LogoWithNameCell } from "./LogoWithNameCell";

export const StyledLogoWithNameCell = styled(LogoWithNameCell)(() => ({
    display: "flex",
    alignItems: "center",
    gap: "16px",
    "& > .avatar": {
        width: "35px",
        height: "35px",
        marginRight: "16px",
    },
}));
