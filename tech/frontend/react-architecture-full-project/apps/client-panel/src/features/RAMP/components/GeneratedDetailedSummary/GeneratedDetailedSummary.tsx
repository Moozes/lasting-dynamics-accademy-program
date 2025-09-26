import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { AssessmentResultsCommentForm } from "@components/index";
import { useGeneratedDetailedSummaryFormatedData } from "@features/RAMP/hooks";
import { IGeneratedRAMPResultsFormatedData } from "@features/RAMP/types";

import { RAMPAccordion } from "./RAMPAccordion";
import { ResultsTable } from "./ResutlsTable";

type Props = HTMLDivProps;

export const GeneratedDetailedSummary = (props: Props) => {
    const t = useTranslationV2();
    const { formatedData } = useGeneratedDetailedSummaryFormatedData();

    return (
        <div {...props}>
            <Typography className="title" variant="h4">
                {t("detailed_summary")}
            </Typography>
            <div className="container">
                {formatedData.map((elm: IGeneratedRAMPResultsFormatedData) => (
                    <RAMPAccordion key={elm.question} className="accordion" title={elm.question} status={elm.status}>
                        <ResultsTable tableData={elm} />
                    </RAMPAccordion>
                ))}
            </div>
            <AssessmentResultsCommentForm />
        </div>
    );
};
