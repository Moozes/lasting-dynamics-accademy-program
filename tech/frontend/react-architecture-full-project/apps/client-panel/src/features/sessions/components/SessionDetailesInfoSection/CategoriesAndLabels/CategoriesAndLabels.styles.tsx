import { styled } from "@mui/material/styles";

import { CategoriesAndLabels } from "./CategoriesAndLabels";

export const StyledCategoriesAndLabels = styled(CategoriesAndLabels)(({ theme }) => ({
    "& > .category": {
        display: "flex",
        alignItems: "center",
        gap: 5,
        marginBottom: 18,
        "& > .category-name": {
            color: theme.color_system.text.secondary,
            ...theme.typography.h6,
        },
        "& > .label": {
            padding: "3px 10px",
            borderRadius: "0 20px 20px 0",
            ...theme.typography.caption,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            "&._0": {
                background: theme.color_system.status.warning.light_light,
                color: theme.color_system.status.warning.dark,
                "& path": {
                    stroke: theme.color_system.status.warning.dark,
                },
            },
            "&._1": {
                background: theme.color_system.status.error.light_light,
                color: theme.color_system.status.error.light,
                "& path": {
                    stroke: theme.color_system.status.error.light,
                },
            },
            "&._2": {
                background: theme.color_system.divider.light_grey,
                color: theme.color_system.text.light,
                "& path": {
                    stroke: theme.color_system.text.light,
                },
            },
            "&._3": {
                background: theme.color_system.status.success.light_light,
                color: theme.color_system.status.success.dark,
                "& path": {
                    stroke: theme.color_system.status.success.dark,
                },
            },
            "& svg": {
                width: 11,
                height: 12,
            },
        },
    },
}));
