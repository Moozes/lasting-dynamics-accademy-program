import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
    },
    table: {
        display: "table" as any,
        width: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row",
    },
    tableCol: {
        width: "25%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableColFullWidth: {
        width: "100%",
    },
    borderRightNone: {
        borderRightWidth: 0,
    },
    tableCell: {
        marginTop: 0,
        // fontSize: 10,
    },
    tableCellRight: {
        textAlign: "right",
    },
    tableLeft: {
        textAlign: "left",
    },
});
