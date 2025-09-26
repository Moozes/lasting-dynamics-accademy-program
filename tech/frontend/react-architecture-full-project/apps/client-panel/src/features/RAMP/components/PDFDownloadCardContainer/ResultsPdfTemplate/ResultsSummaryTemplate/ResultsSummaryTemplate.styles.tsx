import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
    },
    borderBottom: {
        borderBottom: "1px solid black",
        width: "80%",
    },
    table: {
        display: "table" as any,
        width: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    tableRow: {
        flexDirection: "row",
    },
    tableCol: {
        width: "25%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableColBig: {
        width: "60%",
    },
    tableColSmall: {
        width: "20%",
    },
    tableColRed: {
        backgroundColor: "#FF5630",
    },
    tableColYellow: {
        backgroundColor: "#FFAB00",
    },
    tableColGreen: {
        backgroundColor: "#22C55E",
    },
    tableCell: {
        margin: "auto",
        marginTop: 0,
        // fontSize: 10,
    },
    tableCellNoMargin: {
        margin: 0,
    },
});
