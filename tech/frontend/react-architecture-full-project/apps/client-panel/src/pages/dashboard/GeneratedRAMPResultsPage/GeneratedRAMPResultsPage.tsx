import { useParams } from "react-router-dom";

import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { AssessmentStatusEnum } from "@app-types/index";
import { AssessmentInformation, GoBackButton, LinkToSession } from "@components/index";
import {
    ActionButtonsContainer,
    GeneratedDetailedSummary,
    GeneratedPDFDownloadButton,
    GeneratedResultsSummary,
    RAMPResultsPageSkeleton,
} from "@features/RAMP/index";
import { useGetSingleAssessmentQuery } from "@queries/index";

type Props = HTMLDivProps;

export const GeneratedRAMPResultsPage = (props: Props) => {
    const t = useTranslationV2();
    const params = useParams<{ id: string }>();
    const { data, isLoading, isError, error } = useGetSingleAssessmentQuery(params.id as string);

    if (isLoading) return <RAMPResultsPageSkeleton />;
    if (isError) throw new Error("React query error thrown manually from GeneratedRAMPResultsPage", { cause: error });
    const assessment = data.data;
    return (
        <div {...props}>
            <GoBackButton />
            <Typography className="page-title">{t("ramp_assessments.pageHeader")}</Typography>
            <AssessmentInformation className="assessment-information" assessmentInfo={data?.data} progress={100} />
            <GeneratedResultsSummary className="results-summary" />
            <GeneratedDetailedSummary className="detailed-summary" />
            {assessment.status === AssessmentStatusEnum.IN_PROGRESS && (
                <ActionButtonsContainer className="actions-card" sessionId={data.data.session} />
            )}
            {assessment.status === AssessmentStatusEnum.COMPLETED && (
                <div className="actions-card-2">
                    <div>
                        <LinkToSession sessionId={data.data.session} />
                    </div>
                    <GeneratedPDFDownloadButton />
                </div>
            )}
        </div>
    );
};
