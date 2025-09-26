import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
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
    tableColTitle: {
        backgroundColor: "#D6F4F9",
    },
    tableColSubTitle: {
        backgroundColor: "#D6F4F9",
    },
    textCol: {
        width: "60%",
    },
    assessmentCol: {
        width: "10%",
    },
    scoreCol: {
        width: "10%",
    },
    commentCol: {
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
    tableColNoColor: {
        backgroundColor: "transparent",
    },
    tableCell: {
        margin: "auto",
        marginTop: 0,
        // fontSize: 10,
    },
    tableCellAlignStart: {
        margin: 0,
    },
});
