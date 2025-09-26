import { StyleSheet } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

export const getStyles = (numberOfSessions: number) => {
    const smallHeaderWidth = 7;
    const sessionColumnWidth = (100 - smallHeaderWidth + 1) / numberOfSessions;
    const sessionSubColumnWidth = sessionColumnWidth / 4;
    return StyleSheet.create({
        table: {
            fontSize: 10,
            display: "table" as any,
            width: "auto",
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
        tdFirstSessionColumn: {
            borderTopLeftRadius: 5,
        },
        tdLastSessionColumn: {
            borderTopRightRadius: 5,
        },
        tdBottomLeft: {
            borderBottomLeftRadius: 5,
        },
        tdBottomRight: {
            borderBottomRightRadius: 5,
        },
        tdHeadBig: {
            width: `${sessionColumnWidth}%`,
            backgroundColor: "#E9DAFF",
            borderRightColor: "#7635DC",
        },
        tdHeadSmall: {
            width: `${smallHeaderWidth}%`,
            backgroundColor: "#F9F6FE",
        },
        tdSubCol: {
            width: `${sessionSubColumnWidth}%`,
        },
        tdInner: {
            textAlign: "center",
        },
        // utility styles
        borderTop: {
            borderTopWidth: 1,
        },
        borderLeft: {
            borderLeftWidth: 1,
        },
        noBorderTop: {
            borderTopWidth: 0,
        },
        noBorderLeft: {
            borderLeftWidth: 0,
        },
        noBorderRight: {
            borderRightWidth: 0,
        },
        fontSizeSmall: {
            fontSize: 8,
        },
        transparent: {
            backgroundColor: "#0000",
        },
    }) as Record<string, Style>;
};
