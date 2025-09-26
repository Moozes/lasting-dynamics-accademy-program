import { styled } from "@mui/material/styles";

import { MECStatusEnum } from "@features/MEC/types";

import { MECAccordion } from "./MECAccordion";

export const StyledMECAccordion = styled(MECAccordion)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& > .accordion": {
        background: "transparent",
        borderRadius: 10,
        "& .accordion-summary": {
            padding: "13px 33px",
            border: `1px solid ${theme.color_system.divider.light_grey}`,
            "&.expanded": {
                background: theme.color_system.divider.light_grey_20,
                padding: "24px 33px",
            },
            "& > .MuiAccordionSummary-content": {
                margin: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                "& > .oval": {
                    height: 30,
                    width: 89,
                    borderRadius: 30,
                    marginRight: 40,
                    background: theme.color_system.button.disabled.background,
                    [`&.${MECStatusEnum.GREEN}`]: {
                        background: theme.color_system.status.success.light,
                    },
                    [`&.${MECStatusEnum.YELLOW}`]: {
                        background: theme.color_system.status.warning.light,
                    },
                    [`&.${MECStatusEnum.RED}`]: {
                        background: theme.color_system.status.error.light,
                    },
                },
            },
        },
        "& .accordion-details": {
            padding: 0,
        },
    },
}));
