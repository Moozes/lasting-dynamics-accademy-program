import { styled } from "@mui/material/styles";

export const StyledDiv = styled("div")(({ theme }) => ({
    color: theme.color_system.text.secondary,
    borderRadius: 8,
    background: theme.color_system.divider.white,
    overflow: "hidden",
    boxShadow: theme.color_system.boxShadow.purple_20,
    "&  > .item": {
        display: "flex",
        alignItems: "center",
        ...theme.typography.body1,
        gap: 10,
        padding: "10px 21px 10px 9px",
        cursor: "pointer",
        "&:hover": {
            background: theme.color_system.divider.light_grey_20,
        },
        "&.delete": {
            color: theme.color_system.status.error.light,
            "& > .icon": {},
            "& > .text": {},
        },
        "& > .icon": {
            width: 24,
            height: 24,
        },
        "& > .text": {},
        "& > .circular-progress": {
            color: theme.color_system.text.secondary,
        },
    },
}));
