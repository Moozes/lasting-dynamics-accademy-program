import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    flexView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginTop: "10px",
    },
    separator: {
        marginTop: 20,
    },

    table: {
        display: "table" as any,
        width: "49%",
        borderStyle: "solid",
        borderColor: "#DFE2E7",
        borderWidth: 0,
        borderRightWidth: 1,
        borderLeftWidth: 0,
        borderBottomWidth: 1,
    },
    tableRow: {
        flexDirection: "row",
    },
    tableCellHeader: {
        padding: 6,
    },
    tableCol1: {
        width: "60px",
        borderStyle: "solid",
        borderWidth: "1px",
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderColor: "#DFE2E7",
    },
    tableCol2: {
        width: "50%",
        borderStyle: "solid",
        borderWidth: "1px",
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderColor: "#DFE2E7",
    },
    tableColFullWidth: {
        width: "100%",
    },
    textCenter: {
        margin: "auto",
    },
    boldTableTitle: {
        fontSize: "7px",
        fontWeight: 600,
        lineHeight: "normal",
        color: "#212B36",
    },
    tabletitle: {
        fontSize: "5px",
        fontWeight: 500,
        lineHeight: "normal",
        color: "#424B54",
    },
    tableHeader: {
        fontSize: "8px",
        fontWeight: 400,
        lineHeight: "normal",
        color: "#212B36",
    },
    tableHeaderBackground: {
        backgroundColor: "#F9F6FE",
    },
});
