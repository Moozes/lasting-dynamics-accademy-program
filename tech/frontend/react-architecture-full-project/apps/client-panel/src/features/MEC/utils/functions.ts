import ReactPDF from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

import { MECStatusEnum } from "../types";

export const getStatusStyles = (status: MECStatusEnum | null, styles: ReactPDF.Styles) => {
    let statusStyles: Style[] = [];
    switch (status) {
        case MECStatusEnum.RED:
            statusStyles = [styles.tdRed];
            break;
        case MECStatusEnum.YELLOW:
            statusStyles = [styles.tdYellow];
            break;
        case MECStatusEnum.GREEN:
            statusStyles = [styles.tdGreen];
            break;
        default:
            statusStyles = [];
    }
    return statusStyles;
};
