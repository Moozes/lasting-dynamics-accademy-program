import { StyleSheet } from "@react-pdf/renderer";

import { PDF_RECOMENDED_PRINT_MARGIN } from "ui";

export const styles = StyleSheet.create({
    page: {
        fontSize: 10,
        padding: PDF_RECOMENDED_PRINT_MARGIN,
    },
    infoTable: {
        marginBottom: 5,
        fontSize: 8,
    },
    dataTable: {
        fontSize: 8,
        marginBottom: 5,
    },
});
