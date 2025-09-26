import { styled } from "@mui/material/styles";

import { BasicTable } from "./BasicTable";

export const StyledBasicTable = styled(BasicTable)(({ theme }) => ({
    "& > .table-container": {
        width: "100%",
        backgroundColor: theme.color_system.divider.white,
        borderRadius: theme.shape.borderRadius,
        overflow: "hidden",
        border: `1px solid ${theme.color_system.divider.light_grey_20}`,
        marginBottom: "24px",

        "& > .table-head": {
            textAlign: "left",
            fontWeight: theme.typography.fontWeightBold,

            "& > .table-row": {
                display: "flex",
                alignItems: "center",

                "& > .table-head-cell": {
                    padding: "12px",
                    fontWeight: theme.typography.fontWeightBold,
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    height: "50px",
                },
            },
        },

        "& > .table-body": {
            "& > .table-row": {
                display: "flex",
                alignItems: "center",

                "& > .table-body-cell": {
                    padding: "12px",
                    flex: 1,
                    borderTop: `1px solid ${theme.color_system.divider.light_grey}`,
                    display: "flex",
                    alignItems: "center",
                    height: "50px",
                },
            },

            "& > .empty-row": {
                display: "flex",
                justifyContent: "center",
                padding: "24px",
                borderTop: `1px solid ${theme.color_system.divider.light_grey}`,

                "& > .empty-cell": {
                    flex: 1,
                    textAlign: "center",
                },
            },
        },
    },
}));
