import { styled } from "@mui/material/styles";

import { AddCategoryButton } from "./AddCategoryButton";

export const StyledAddCategoryButton = styled(AddCategoryButton)(({ theme }) => ({
    color: theme.color_system.text.primary,
}));
