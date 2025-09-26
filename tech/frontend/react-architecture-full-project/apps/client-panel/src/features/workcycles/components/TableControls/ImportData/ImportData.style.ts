import { styled } from "@mui/material/styles";

import { ImportData } from "./ImportData";

export const StyledImportData = styled(ImportData)(({ theme }) => ({
    "& > .container": {
        display: "flex",
        alignItem: "center",
        gap: 2,
        "& > .first-button": {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
        },
        "& > .second-button": {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            "& svg path": {
                fill: theme.color_system.button.enabled.text,
            },
        },
    },
}));
