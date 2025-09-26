import { styled } from "@mui/material/styles";

import { FormikFilledTextarea } from "./FormikFilledTextarea";

export const StyledFormikFilledTextarea = styled(FormikFilledTextarea)(({ theme }) => ({
    "& > .character-number": {
        ...theme.typography.caption,
        display: "flex",
        alingItems: "center",
        justifyContent: "flex-end",
    },
}));
