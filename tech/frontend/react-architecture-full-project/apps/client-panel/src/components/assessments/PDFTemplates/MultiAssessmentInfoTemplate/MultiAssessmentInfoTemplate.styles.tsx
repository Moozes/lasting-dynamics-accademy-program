import { StyleSheet } from "@react-pdf/renderer";

import { MULTI_ASSESSMENT_PDF_SMALL_COLUMN_WIDTH } from "@utils/index";

export const getStyles = (numberOfAssessments: number) =>
    StyleSheet.create({
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
        tableColBig: {
            width: `${100 - MULTI_ASSESSMENT_PDF_SMALL_COLUMN_WIDTH * numberOfAssessments}%`,
        },
        tableColSmall: {
            width: `${MULTI_ASSESSMENT_PDF_SMALL_COLUMN_WIDTH}%`,
        },
        tableCell: {},
        tableCellCenter: {
            margin: "auto",
        },
    });
