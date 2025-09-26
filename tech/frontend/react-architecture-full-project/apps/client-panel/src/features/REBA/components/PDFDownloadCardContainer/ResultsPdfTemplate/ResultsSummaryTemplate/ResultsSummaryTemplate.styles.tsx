import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
    },
    borderBottom: {
        borderBottom: "1px solid black",
        width: "100%",
        marginTop: 20,
    },
    table: {
        display: "table" as any,
        width: "auto",
        borderStyle: "solid",
        borderWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 1,
        borderBottomWidth: 0,
    },
    tableRow: {
        flexDirection: "row",
    },
    tableCellHeader: {
        padding: 10,
    },
    tableCol: {
        width: "25%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableColBig: {
        width: "80%",
    },
    tableColFullWidth: {
        width: "100%",
    },
    tableColSmall: {
        width: "20%",
    },
    tableCell: {
        marginTop: 5,
    },
    tableColEmpty: {
        border: 0,
    },
    tableCellEmpty: {
        height: 10,
        borderRight: 0,
        borderLeft: 0,
    },
    textCenter: {
        margin: "auto",
    },
    veryLow: {
        backgroundColor: "#66FF66",
    },
    low: {
        backgroundColor: "#FDE837",
    },
    medium: {
        backgroundColor: "#FF9110BF",
    },
    high: {
        backgroundColor: "#FF6C2D",
    },
    veryHigh: {
        backgroundColor: "#FF0000",
    },
});
