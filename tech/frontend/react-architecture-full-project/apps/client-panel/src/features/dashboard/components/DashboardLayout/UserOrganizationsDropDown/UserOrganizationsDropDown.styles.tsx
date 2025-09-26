import { styled } from "@mui/material/styles";

import { UserOrganizationsDropDown } from "./UserOrganizationsDropDown";

export const StyledUserOrganizationsDropDown = styled(UserOrganizationsDropDown)(({ theme }) => ({
    padding: "0 3.2px",
    "& > .organization-button-container": {
        padding: "0 16px",
        "& > .organization-button": {
            display: "flex",
            alignItems: "center",
            gap: 5,
            cursor: "pointer",
            marginBottom: 21.5,
            marginTop: 13,
            "& > .circular-progress": {
                "& > svg": {
                    color: theme.color_system.primary.dark,
                },
            },
            "& > .initials": {
                ...theme.typography.subtitle2,
                padding: 6,
                color: theme.color_system.primary.dark,
                borderRadius: 4,
                background: theme.color_system.divider.white,
            },
            "& > .name": {
                ...theme.typography.button,
                color: theme.color_system.text.light,
            },
            "& > .empty": {
                flexGrow: 1,
            },
            "& > .icon": {
                color: theme.color_system.primary.dark,
                justifySelf: "flex-end",
            },
        },
    },
    "& > .divider": {
        borderColor: theme.color_system.divider.light_grey,
    },
}));
