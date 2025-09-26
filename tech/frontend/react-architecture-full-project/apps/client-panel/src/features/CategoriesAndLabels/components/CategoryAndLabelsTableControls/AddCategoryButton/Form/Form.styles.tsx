import { styled } from "@mui/material/styles";

import { Form } from "./Form";

export const StyledForm = styled(Form)(({ theme }) => ({
    width: "min(50vw, 700px)",
    padding: 16,
    "& > .input": {
        marginBottom: 9,
        "& .icon-button": {
            padding: 5,
            "& > .trash-icon": {
                color: theme.color_system.status.error.light,
            },
        },
    },
    "& > .add-item": {
        padding: 0,
        color: theme.color_system.status.infos.light,
        "& svg": {
            "& > path": {
                fill: theme.color_system.status.infos.light,
            },
        },
    },
}));
