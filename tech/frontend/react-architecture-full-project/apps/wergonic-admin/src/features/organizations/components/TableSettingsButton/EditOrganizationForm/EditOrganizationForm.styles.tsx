import { styled } from "@mui/material/styles";

import { EditOrganizationForm } from "./EditOrganizationForm";

export const StyledEditOrganizationForm = styled(EditOrganizationForm)(({ theme }) => ({
    color: theme.color_system.text.primary,
    width: 689,
    "& > .form-content": {
        padding: "32px 39px 35px",
        "& > .form-header": {
            display: "flex",
            alignItems: "center",
            gap: 13,
            marginBottom: 24,
            "& > .avatar-container": {
                position: "relative",
                "& > .avatar": {
                    width: 77,
                    height: 77,
                    bgcolor: theme.color_system.divider.light_grey,
                    color: theme.color_system.divider.white,
                    textTransform: "uppercase",
                    fontSize: 30,
                    fontWeight: 800,
                },
                "& > .file-input-container": {
                    position: "absolute",
                    bottom: "-5px",
                    right: "5px",
                    cursor: "pointer",
                    "&:hover": {
                        opacity: 0.7,
                    },
                    input: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        opacity: 0,
                    },
                    "& > .icon": {
                        width: 20,
                        height: 20,
                    },
                    "& > input": {},
                },
            },
            "& > .text": {
                "& > .title": {
                    ...theme.typography.h4,
                },
                "& > .description": {
                    color: theme.color_system.text.secondary,
                    ...theme.typography.h6,
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
