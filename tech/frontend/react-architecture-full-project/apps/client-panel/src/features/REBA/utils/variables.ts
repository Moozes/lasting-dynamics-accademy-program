export enum REBASubRoutesEnum {
    neckTrunkandLegAnalysis = "neck-trunk-and-leg-analysis",
    armAndWristAnalysis = "arm-and-wrist-analysis",
}

export const ASSESSMENT_FORM_ROUTES = [
    REBASubRoutesEnum.neckTrunkandLegAnalysis,
    REBASubRoutesEnum.armAndWristAnalysis,
];

export const TABLE_A = [
    [
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [3, 3, 5, 6],
    ],
    [
        [2, 3, 4, 5],
        [3, 4, 5, 6],
        [4, 5, 6, 7],
    ],
    [
        [2, 4, 5, 6],
        [4, 5, 6, 7],
        [5, 6, 7, 8],
    ],
    [
        [3, 5, 6, 7],
        [5, 6, 7, 8],
        [6, 7, 8, 9],
    ],
    [
        [4, 6, 7, 8],
        [6, 7, 8, 9],
        [7, 8, 9, 9],
    ],
];

export const TABLE_B = [
    [
        [1, 2, 2],
        [1, 2, 3],
    ],
    [
        [1, 2, 3],
        [2, 3, 4],
    ],
    [
        [3, 4, 5],
        [4, 5, 5],
    ],
    [
        [4, 5, 5],
        [5, 6, 7],
    ],
    [
        [6, 7, 8],
        [7, 8, 8],
    ],
    [
        [7, 8, 8],
        [8, 9, 9],
    ],
];

export const TABLE_C = [
    [1, 1, 1, 2, 3, 3, 4, 5, 6, 7, 7, 7],
    [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8],
    [2, 3, 3, 3, 4, 5, 6, 7, 7, 8, 8, 8],
    [3, 4, 4, 4, 5, 6, 7, 8, 8, 9, 9, 9],
    [4, 4, 4, 5, 6, 7, 8, 8, 9, 9, 9, 9],
    [6, 6, 6, 7, 8, 8, 9, 9, 10, 10, 10, 10],
    [7, 7, 7, 8, 9, 9, 9, 10, 10, 11, 11, 11],
    [8, 8, 8, 9, 10, 10, 10, 10, 10, 11, 11, 11],
    [9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 12],
    [10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12],
    [11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
];

// Edge case colors, not included in the theme object
export const REBAMediumStatusColor = "#FF9110BF";
export const REBAHighStatusColor = "#FF6C2D";

export const FORM_CARD_MARGIN_BOTTOM = "28px";
export const FORM_CARD_MARGIN_BOTTOM_SMALL = "15px";
