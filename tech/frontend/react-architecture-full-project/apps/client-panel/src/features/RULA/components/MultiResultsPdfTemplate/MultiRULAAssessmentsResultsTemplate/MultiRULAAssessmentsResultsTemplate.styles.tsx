import { StyleSheet } from "@react-pdf/renderer";

import { MULTI_ASSESSMENT_PDF_SMALL_COLUMN_WIDTH } from "@utils/index";

import { FinalScoreClassNamesEnum } from "../../../types";

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
        tableColVeryLow: {
            backgroundColor: "#66FF66",
        },
        tableColLow: {
            backgroundColor: "#FDE837",
        },
        tableColMedium: {
            backgroundColor: "#FF5959",
        },
        tableColHigh: {
            backgroundColor: "#FF0000",
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
        tableCell: {
            marginTop: 5,
        },
        tableCellCenter: {
            margin: "auto",
        },
    });

    const getStatusStyles = (className?: string) => {
        let statusStyles = styles.tableColNoStatus;
        switch (className) {
            case FinalScoreClassNamesEnum.veryLow:
                statusStyles = styles.tableColVeryLow;
                break;
            case FinalScoreClassNamesEnum.low:
                statusStyles = styles.tableColLow;
                break;
            case FinalScoreClassNamesEnum.medium:
                statusStyles = styles.tableColMedium;
                break;
            case FinalScoreClassNamesEnum.high:
                statusStyles = styles.tableColHigh;
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
