import { StyleSheet } from "@react-pdf/renderer";

export const getStyles = () => {
    const styles = StyleSheet.create({
        table: {
            display: "table" as any,
            width: "auto",
            borderStyle: "solid",
            borderWidth: 1,
            borderRightWidth: 0,
            borderBottomWidth: 0,
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
            padding: 2,
        },
        tdInner: {},

        // utility styles
        tdFullWidth: {
            width: "100%",
        },
        td10: {
            width: "10%",
        },
        td20: {
            width: "20%",
        },
        td30: {
            width: "30%",
        },
        td50: {
            width: "50%",
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
        tdCenter: {
            textAlign: "center",
        },
        fontSize7: {
            fontSize: 7,
        },
        image: {
            width: "50%",
        },
        center: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
    });

    return {
        styles,
    };
};
