import { StyleSheet } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

import { MULTI_SESSION_TABLE_COLUMN_WIDTH_PDF } from "@features/sessions/utils";

export const getStyles = (numberOfSessions: number) => {
    const smallHeaderWidth = MULTI_SESSION_TABLE_COLUMN_WIDTH_PDF;
    const sessionColumnWidth = (100 - smallHeaderWidth + 1) / numberOfSessions;
    const sessionSubColumnWidth = sessionColumnWidth / 2;
    return StyleSheet.create({
        table: {
            display: "table" as any,
            width: "auto",
            fontSize: 10,
            borderStyle: "solid",
            borderWidth: 1,
            borderRightWidth: 0,
            borderBottomWidth: 0,
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
        tdSubCol: {
            width: `${sessionSubColumnWidth}%`,
            fontSize: 9,
        },
        tdInner: {
            textAlign: "center",
        },
        title: {
            backgroundColor: "#E9DAFF",
        },
        angle: {
            backgroundColor: "#F9F6FE",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
        },
        statusCircle: {
            width: 8,
            height: 8,
            borderRadius: "50%",
        },
        statusCircleGreen: {
            backgroundColor: "#0F0",
        },
        statusCircleYellow: {
            backgroundColor: "#FCE205",
        },
        statusCircleRed: {
            backgroundColor: "#F00",
        },
    }) as Record<string, Style>;
};
