import { StyleSheet } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

export const getStyles = (variableUnitArrayLength: number) => {
    const columnWidth = 100 / variableUnitArrayLength;
    return StyleSheet.create({
        table: {
            fontSize: 9,
            display: "table" as any,
            width: "auto",
        },
        tr: {
            flexDirection: "row",
        },
        td: {
            width: `${columnWidth}%`,
            borderStyle: "solid",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0,
            borderColor: "#DFE2E7",
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
        paddingBig: {
            padding: "5px 0",
        },
        paddingSmall: {
            padding: "3px 0",
        },
        bgColor: {
            backgroundColor: "#F4EFFD",
        },
        fontSizeSmall: {
            fontSize: 7,
        },
    }) as Record<string, Style>;
};
