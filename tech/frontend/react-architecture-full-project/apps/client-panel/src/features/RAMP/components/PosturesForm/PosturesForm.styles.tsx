import { styled } from "@mui/material/styles";

import { PosturesForm } from "./PosturesForm";

export const StyledPosturesForm = styled(PosturesForm)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& > .title": {
        marginBottom: 20,
        paddingLeft: 13,
    },
    "& > .form-card": {
        marginBottom: 13,
    },
}));
