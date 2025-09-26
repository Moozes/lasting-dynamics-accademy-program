import { styled } from "@mui/material/styles";

import { Form2 } from "./Form2";

export const StyledForm2 = styled(Form2)(() => ({
    "& > .flex-container": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& > .input": {
            flexBasis: "47%",
        },
    },
}));
