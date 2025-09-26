import { StyleSheet } from "@react-pdf/renderer";

import { MULTI_ASSESSMENT_PDF_SMALL_COLUMN_WIDTH } from "@utils/index";

export const getStyles = (numberOfAssessments: number) => {
    const styles = StyleSheet.create({
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
            borderStyle: "solid",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0,
        },
        tableColNoStatus: {
            backgroundColor: "white",
        },
        tableColGreen: {
            backgroundColor: "#66FF66",
        },
        tableColYellow: {
            backgroundColor: "#FDE837",
        },
        tableColRed: {
            backgroundColor: "#FF5959",
        },
        tableColBig: {
            width: `${100 - MULTI_ASSESSMENT_PDF_SMALL_COLUMN_WIDTH * numberOfAssessments}%`,
        },
        tableColSmall: {
            width: `${MULTI_ASSESSMENT_PDF_SMALL_COLUMN_WIDTH}%`,
        },
        tableColFullWidth: {
            width: "100%",
        },
        tableCell: {},
        tableCellCenter: {
            margin: "auto",
        },
    });

    const getStatusStyles = (className?: string) => {
        let statusStyles = styles.tableColNoStatus;
        switch (className) {
            case "green":
                statusStyles = styles.tableColGreen;
                break;
            case "yellow":
                statusStyles = styles.tableColYellow;
                break;
            case "red":
                statusStyles = styles.tableColRed;
                break;
            default:
                statusStyles = styles.tableColNoStatus;
        }
        return statusStyles;
    };

    return {
        styles,
        getStatusStyles,
    };
};
