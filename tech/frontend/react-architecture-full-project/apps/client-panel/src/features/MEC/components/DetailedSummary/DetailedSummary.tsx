import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { AssessmentResultsCommentForm } from "@components/index";
import { useDetailedSummaryFormatedData } from "@features/MEC/hooks";

import { MECAccordion } from "./MECAccordion";
import { ResultsTable } from "./ResultsTable";

type Props = HTMLDivProps;

export const DetailedSummary = (props: Props) => {
    const t = useTranslationV2();
    const { formatedData } = useDetailedSummaryFormatedData();
    return (
        <div {...props}>
            <Typography className="title" variant="h4">
                {t("detailed_summary")}
            </Typography>
            <div className="container">
                {formatedData.map((elm) => (
                    <MECAccordion key={elm.question} className="accordion" title={elm.question} status={elm.status}>
                        <ResultsTable tableData={elm} />
                    </MECAccordion>
                ))}
            </div>
            <AssessmentResultsCommentForm />
        </div>
    );
};
