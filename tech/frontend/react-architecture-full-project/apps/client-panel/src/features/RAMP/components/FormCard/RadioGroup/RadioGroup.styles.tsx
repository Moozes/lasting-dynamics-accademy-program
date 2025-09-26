import { styled } from "@mui/material/styles";

import { RadioGroup } from "./RadioGroup";

export const StyledRadioGroup = styled(RadioGroup)(({ theme }) => ({
    "& > .title": {
        marginBottom: 23,
    },
    "& > .radio-group": {
        display: "flex",
        justifyContent: "space-between",
        "& > .choices": {
            "& > label": {
                marginBottom: 15,
                display: "flex",
                alignItems: "center",
                gap: 21,
                "& > .text": {
                    ...theme.typography.caption,
                },
                "&:last-of-type": {
                    marginBottom: 0,
                },
            },
        },
        "& > .statuses": {
            color: theme.color_system.text.primary,
            borderRadius: "30px",
            overflow: "hidden",
            width: 30,
            ...theme.typography.subtitle1,
            display: "flex",
            flexDirection: "column",
            "& > .status": {
                flexGrow: 1,
                // padding: "2px 5px",
                textAlign: "center",
                "&.normal": {
                    background: theme.color_system.status.success.light,
                    "&.first::before": {
                        content: "''",
                        display: "block",
                        height: 15,
                        borderRadius: "0 0 30px 30px",
                        background: theme.color_system.status.warning.light,
                    },
                },
                "&.medium": {
                    background: theme.color_system.status.warning.light,
                    "&.first::before": {
                        content: "''",
                        display: "block",
                        height: 15,
                        borderRadius: "0 0 30px 30px",
                        background: theme.color_system.status.error.light,
                    },
                },
                "&.danger": {
                    background: theme.color_system.status.error.light,
                },
            },
        },
    },
}));
