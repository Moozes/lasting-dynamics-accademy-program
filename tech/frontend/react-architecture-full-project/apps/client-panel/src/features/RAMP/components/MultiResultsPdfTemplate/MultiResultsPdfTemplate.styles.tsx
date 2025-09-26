import { StyleSheet } from "@react-pdf/renderer";

import { PDF_RECOMENDED_PRINT_MARGIN } from "ui";

export const styles = StyleSheet.create({
    page: {
        fontSize: 7,
        padding: PDF_RECOMENDED_PRINT_MARGIN,
    },
});
