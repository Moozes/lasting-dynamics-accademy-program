export const getStatusColor = (rowIdx: number, styles: any) => {
    switch (rowIdx) {
        case 0:
            return styles.statusCircleGreen;
            break;
        case 1:
            return styles.statusCircleYellow;
            break;
        case 2:
            return styles.statusCircleRed;
            break;
        default:
            return styles.statusCircle;
    }
};
