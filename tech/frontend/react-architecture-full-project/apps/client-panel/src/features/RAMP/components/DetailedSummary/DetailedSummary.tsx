/* eslint-disable react/no-array-index-key */
import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { AssessmentResultsCommentForm } from "@components/index";
import { useDetailedSummaryFormatedData } from "@features/RAMP/hooks";

import { DetailedSummaryAccordion } from "./DetailedSummaryAccordion";

type Props = HTMLDivProps;

export const DetailedSummary = (props: Props) => {
    const t = useTranslationV2();
    const { formatedData } = useDetailedSummaryFormatedData();
    return (
        <div {...props}>
            <Typography className="title" variant="h4">
                {t("ramp_assessments.results.detailed_manual_summary")}
            </Typography>
            <div className="container">
                {formatedData.map((elm, index) => (
                    <DetailedSummaryAccordion {...elm} key={index} className="detialed-summary-accordion" />
                ))}
            </div>
            <AssessmentResultsCommentForm />
        </div>
    );
};
