import { styled } from "@mui/material/styles";

import { ActiveSessionsTable } from "./ActiveSessionsTable";

export const StyledActiveSessionsTable = styled(ActiveSessionsTable)(({ theme }) => ({
    color: theme.color_system.text.primary,
    ...theme.typography.body1,

    "& > .total-count": {
        marginBottom: "20px",
    },

    "& > .interrupted-button-container": {
        marginBottom: "20px",

        "& .interrupted-button": {
            display: "flex",
            alignItems: "center",
            borderRadius: "8px",
            padding: "8px 12px",
            border: `1px solid ${theme.color_system.divider.light_grey}`,
            color: theme.color_system.text.light,
            transition: "border-color 0.3s, color 0.3s",
            cursor: "pointer",

            "& .interrupted-button-content": {
                display: "flex",
                alignItems: "center",

                "& .interrupted-count": {
                    backgroundColor: theme.color_system.primary.light_light,
                    color: theme.color_system.primary.dark,
                    borderRadius: "40%",
                    padding: "0 6px",
                    marginRight: "8px",
                },
            },

            "&.selected": {
                borderColor: theme.color_system.primary.dark,
                color: theme.color_system.primary.dark,
            },
        },
    },
}));
