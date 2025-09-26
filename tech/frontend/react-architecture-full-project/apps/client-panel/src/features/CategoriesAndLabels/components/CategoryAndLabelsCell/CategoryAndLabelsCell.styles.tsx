import { styled } from "@mui/material/styles";

import { CategoryAndLabelsCell } from "./CategoryAndLabelsCell";

export const StyledCategoryAndLabelsCell = styled(CategoryAndLabelsCell)(({ theme }) => ({
    color: theme.color_system.text.primary,
    display: "flex",
    alignItems: "center",
    gap: 5,
    "& > .category": {
        ...theme.typography.subtitle1,
    },
    "& > .label": {
        ...theme.typography.caption,
        borderRadius: "0 20px 20px 0",
        padding: "3px 10px",
        "&._0": {
            background: theme.color_system.status.warning.light_light,
            color: theme.color_system.status.warning.dark,
        },
        "&._1": {
            background: theme.color_system.status.error.light_light,
            color: theme.color_system.status.error.light,
        },
        "&._2": {
            background: theme.color_system.divider.light_grey,
            color: theme.color_system.text.light,
        },
        "&._3": {
            background: theme.color_system.status.success.light_light,
            color: theme.color_system.status.success.dark,
        },
    },
}));
