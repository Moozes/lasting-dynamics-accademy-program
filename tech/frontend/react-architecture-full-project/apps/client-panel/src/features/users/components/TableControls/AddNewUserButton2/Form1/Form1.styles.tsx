import { styled } from "@mui/material/styles";

import { Form1 } from "./Form1";

export const StyledForm1 = styled(Form1)(() => ({
    "& > .flex-container": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& > .input": {
            flexBasis: "47%",
        },
    },
}));
