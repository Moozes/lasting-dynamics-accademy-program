import { StyleSheet } from "@react-pdf/renderer";

import { PDF_RECOMENDED_PRINT_MARGIN } from "ui";

export const styles = StyleSheet.create({
    page: {
        fontSize: 7,
        padding: PDF_RECOMENDED_PRINT_MARGIN,
    },
    table: {
        display: "table" as any,
        width: "auto",
        borderStyle: "solid",
        borderLeftWidth: 1,
        borderTopWidth: 1,
    },
    tr: {
        flexDirection: "row",
    },
    td: {
        borderRightWidth: 1,
        borderBottomWidth: 1,
    },
    tdInner: {
        textAlign: "center",
        padding: 5,
    },
    tdHeader: {
        width: "100%",
    },
    tdHeaderInner: {
        padding: 5,
        fontSize: 8,
        fontWeight: "bold",
    },
    // utility styles
    tdSmall: {
        width: "14.28%",
    },
    tdBig: {
        width: "42.85%",
    },
    tdNoBorderBottom: {
        borderBottomWidth: 0,
    },
    tdRed: {
        backgroundColor: "#FF5630",
    },
    tdYellow: {
        backgroundColor: "#FFAB00",
    },
    tdGreen: {
        backgroundColor: "#22C55E",
    },
    image: {
        width: "20%",
        margin: 5,
    },
    flex: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    statusSquare: {
        height: 10,
        width: 30,
        marginRight: 5,
        borderRadius: 10,
    },
});
