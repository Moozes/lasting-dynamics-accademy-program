import { styled } from "@mui/material/styles";

import { ImportGuide } from "./ImportGuide";

export const StyledImportGuide = styled(ImportGuide)(({ theme }) => ({
    padding: "12px 14px 17px",
    width: 440,
    position: "relative",
    overflow: "hidden",
    "&:hover": {
        cursor: "zoom-in",
        "& > .zoomed-image": {
            visibility: "visible",
        },
    },
    "& > .title": {
        ...theme.typography.caption,
        color: theme.color_system.text.primary,
        marginBottom: 7,
    },
    "& > img": {
        width: "100%",
        objectDit: "cover",
    },
    "& > .zoomed-image": {
        position: "absolute",
        top: 50,
        left: 50,
        width: "120%",
        height: "120%",
        pointerEvents: "none",
        transformOrigin: "top left",
        visibility: "hidden",
    },
}));
