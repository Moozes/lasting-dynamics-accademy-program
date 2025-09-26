import ReactPDF from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

import { RAMPStatusEnum } from "@features/RAMP/types";

export const getStatusStyles = (status: RAMPStatusEnum | null, styles: ReactPDF.Styles) => {
    let statusStyles: Style[] = [];
    switch (status) {
        case RAMPStatusEnum.RED:
            statusStyles = [styles.tdRed];
            break;
        case RAMPStatusEnum.YELLOW:
            statusStyles = [styles.tdYellow];
            break;
        case RAMPStatusEnum.GREEN:
            statusStyles = [styles.tdGreen];
            break;
        default:
            statusStyles = [];
    }
    return statusStyles;
};
