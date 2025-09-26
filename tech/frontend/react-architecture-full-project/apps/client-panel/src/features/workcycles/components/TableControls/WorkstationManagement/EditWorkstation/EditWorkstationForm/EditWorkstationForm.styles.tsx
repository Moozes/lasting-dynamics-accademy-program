import { styled } from "@mui/material/styles";

import { EditWorkstationForm } from "./EditWorkstationForm";

export const StyledEditWorkstationForm = styled(EditWorkstationForm)(({ theme }) => ({
    color: theme.color_system.text.primary,
    width: 689,
    "& > .form-content": {
        padding: "32px 39px 35px",
        "& > .form-header": {
            display: "flex",
            alignItems: "center",
            gap: 13,
            marginBottom: 24,
            "& > .text": {
                "& > .title": {
                    ...theme.typography.h4,
                },
            },
        },
        "& > .input": {},
    },
    "& > .form-actions": {
        background: theme.color_system.divider.light_purple,
        padding: "23px 43px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "13px",
        "& > .btn": {
            borderRadius: "5px",
        },
    },
}));
