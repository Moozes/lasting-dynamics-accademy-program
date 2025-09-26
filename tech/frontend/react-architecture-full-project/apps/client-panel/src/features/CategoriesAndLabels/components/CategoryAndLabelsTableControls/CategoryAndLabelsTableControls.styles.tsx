import { styled } from "@mui/material/styles";

import { CategoryAndLabelsTableControls } from "./CategoryAndLabelsTableControls";

export const StyledCategoryAndLabelsTableControls = styled(CategoryAndLabelsTableControls)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 28,
    "& > .search-input": {
        width: 420,
    },
}));
