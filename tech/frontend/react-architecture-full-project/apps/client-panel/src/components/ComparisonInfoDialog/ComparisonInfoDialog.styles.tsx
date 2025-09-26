import { styled } from "@mui/material/styles";

import { ComparisonInfoDialog } from "./ComparisonInfoDialog";

export const StyledComparisonInfoDialog = styled(ComparisonInfoDialog)(({ theme }) => ({
    ".MuiDialog-paper": {
        background: theme.color_system.divider.white,
        boxShadow: theme.color_system.boxShadow.gray,
        position: "relative",
        borderRadius: 10,
        width: 542,
        "& > .close-icon": {
            color: theme.color_system.divider.dark_grey,
            position: "absolute",
            top: 14,
            right: 9,
        },
        "& > .content": {
            padding: "51px 33px 51px 41px",
            display: "flex",
            alignItems: "center",
            gap: 29,
            "& > .icon": {},
            "& > ul": {
                margin: 0,
                paddingLeft: 20,
                "& > li": {
                    marginBottom: 21,
                    color: theme.color_system.text.secondary,
                    ...theme.typography.body1,
                    "&:last-of-type": {
                        marginBottom: 0,
                    },
                },
            },
        },
    },
}));
