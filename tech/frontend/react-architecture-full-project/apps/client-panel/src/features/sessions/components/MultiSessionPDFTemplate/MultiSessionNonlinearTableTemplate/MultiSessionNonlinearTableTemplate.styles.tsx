import { StyleSheet } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

export const getStyles = (numberOfSessions: number) => {
    const variableColumnWidth = 31;
    const unitColumnWidth = 7;
    const sessionColumnWidth = (100 - (variableColumnWidth + unitColumnWidth)) / numberOfSessions;
    return StyleSheet.create({
        table: {
            display: "table" as any,
            width: "auto",
            fontSize: 10,
        },
        tr: {
            margin: "auto",
            flexDirection: "row",
        },
        td: {
            borderStyle: "solid",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0,
            borderColor: "#DFE2E7",
        },
        variableColumn: {
            width: `${variableColumnWidth}%`,
        },
        unitColumn: {
            width: `${unitColumnWidth}%`,
        },
        sessionColumn: {
            width: `${sessionColumnWidth}%`,
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
        bgColor: {
            backgroundColor: "#E9DAFF",
        },
        paddingBig: {
            padding: "5px 5px",
        },
        paddingSmall: {
            padding: "3px 5px",
        },
        fontSizeBig: {
            fontSize: 12,
        },
        textAlignLeft: {
            textAlign: "left",
        },
    }) as Record<string, Style>;
};
