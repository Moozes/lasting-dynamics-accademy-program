import { StyleSheet } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

import { PDF_RECOMENDED_PRINT_MARGIN } from "ui";

export const getStyles = () =>
    StyleSheet.create({
        page: {
            padding: PDF_RECOMENDED_PRINT_MARGIN,
        },
        title: {
            textAlign: "center",
            fontSize: 12,
            marginBottom: 6,
        },
        subTitle: {
            fontSize: 10,
            marginBottom: 6,
        },
        table: {
            marginBottom: 11,
        },
    }) as Record<string, Style>;
