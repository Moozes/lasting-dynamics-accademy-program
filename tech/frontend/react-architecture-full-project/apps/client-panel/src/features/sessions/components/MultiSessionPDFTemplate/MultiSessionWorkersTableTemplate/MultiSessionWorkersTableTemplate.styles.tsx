import { StyleSheet } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

import { MULTI_SESSION_TABLE_COLUMN_WIDTH_PDF } from "@features/sessions/utils";

export const getStyles = (numberOfSessions: number) => {
    const smallHeaderWidth = MULTI_SESSION_TABLE_COLUMN_WIDTH_PDF;
    const sessionColumnWidth = (100 - smallHeaderWidth + 1) / numberOfSessions;
    return StyleSheet.create({
        table: {
            display: "table" as any,
            width: "auto",
            fontSize: 10,
            borderStyle: "solid",
            borderColor: "#DFE2E7",
        },
        tr: {
            flexDirection: "row",
        },
        td: {
            borderStyle: "solid",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0,
            padding: "4px 0 4px 0",
            borderColor: "#DFE2E7",
        },
        tdHeadBig: {
            width: `${sessionColumnWidth}%`,
        },
        tdHeadSmall: {
            width: `${smallHeaderWidth}%`,
        },
        tdInner: {
            textAlign: "center",
        },
        title: {
            backgroundColor: "#F9F6FE",
        },
        tdBottomLeft: {
            borderBottomLeftRadius: 5,
        },
        tdBottomRight: {
            borderBottomRightRadius: 5,
        },
        tdTopRight: {
            borderTopRightRadius: 5,
        },
        tdTopLeft: {
            borderTopLeftRadius: 5,
        },
        // utility styles
        borderTop: {
            borderTopWidth: 1,
        },
        borderLeft: {
            borderLeftWidth: 1,
        },
    }) as Record<string, Style>;
};
