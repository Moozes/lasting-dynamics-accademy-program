import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { AssessmentStatusEnum } from "@app-types/index";
import { AssessmentInformation, GoBackButton } from "@components/index";
import {
    DetailedSummary,
    PDFDownloadCardContainer,
    RAMPResultsPageSkeleton,
    ResultsSummary,
    SectionSummary,
} from "@features/RAMP/index";
import { useGetSingleAssessmentQuery } from "@queries/index";

type Props = HTMLDivProps;

export const RAMPResultsPage = (props: Props) => {
    const t = useTranslationV2();
    const navigate = useNavigate();
    const params = useParams<{ id: string }>();
    const { data, isLoading, isError, error } = useGetSingleAssessmentQuery(params.id as string);

    // dont allow access to non finished assessment results
    useEffect(() => {
        if (!isLoading && !isError) {
            if (data.data.status !== AssessmentStatusEnum.COMPLETED)
                navigate("..", { replace: true, relative: "path" });
        }
    }, [data, isLoading, isError, navigate]);
    if (isLoading) return <RAMPResultsPageSkeleton />;
    if (isError) throw new Error("React query error thrown manually from RAMPResultsPage", { cause: error });

    return (
        <div {...props}>
            <GoBackButton />
            <Typography className="page-title">{t("ramp_assessments.pageHeader")}</Typography>
            <AssessmentInformation className="assessmen-information" assessmentInfo={data?.data} progress={100} />
            <ResultsSummary className="results-summary" />
            <SectionSummary className="section-summary" />
            <DetailedSummary className="detailed-summary" />
            <PDFDownloadCardContainer className="download-card" />
        </div>
    );
};
