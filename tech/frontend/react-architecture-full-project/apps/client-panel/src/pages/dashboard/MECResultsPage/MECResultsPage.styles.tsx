import { styled } from "@mui/material/styles";

import { ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1, getMediaQueryMaxWidthString } from "@utils/index";

import { MECResultsPage } from "./MECResultsPage";

const MARGIN_BOTTOM = "20px";
const MARGIN_BOTTOM_SMALL = "15px";

export const StyledMECResultsPage = styled(MECResultsPage)(({ theme }) => ({
    padding: "0 34px",
    "& > .page-title": {
        color: theme.color_system.text.primary,
        marginBottom: MARGIN_BOTTOM,
        fontFamily: "Manrope",
        fontSize: 24,
        fontWeight: 700,
    },
    "& > .assessmen-information": {
        marginBottom: MARGIN_BOTTOM,
        padding: "0 0",
    },
    "& > .results-summary": {
        marginBottom: MARGIN_BOTTOM,
    },
    "& > .detailed-summary": {
        marginBottom: MARGIN_BOTTOM,
    },
    // "& > .download-card": {
    //     marginBottom: MARGIN_BOTTOM,
    // },

    [getMediaQueryMaxWidthString(ASSESSMENT_DETAIL_PAGE_BREAK_POINT_1)]: {
        padding: "0 32px",
        "& > .page-title": {
            marginBottom: MARGIN_BOTTOM_SMALL,
            fontFamily: "Manrope",
            fontSize: 24,
            fontWeight: 700,
        },
        "& > .assessmen-information": {
            marginBottom: MARGIN_BOTTOM_SMALL,
        },
        "& > .results-summary": {
            marginBottom: MARGIN_BOTTOM_SMALL,
        },
        "& > .detailed-summary": {
            marginBottom: MARGIN_BOTTOM_SMALL,
        },
        // "& > .download-card": {
        //     marginBottom: MARGIN_BOTTOM_SMALL,
        // },
    },
}));
