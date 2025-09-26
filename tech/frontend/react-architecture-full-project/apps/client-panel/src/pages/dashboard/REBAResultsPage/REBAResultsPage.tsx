import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { AssessmentStatusEnum } from "@app-types/index";
import { AssessmentInformation, GoBackButton } from "@components/index";
import {
    DetailedSummary,
    PDFDownloadCardContainer,
    REBAResultsPageSkeleton,
    REBAScoreCard,
} from "@features/REBA/index";
import { useGetSingleAssessmentQuery } from "@queries/index";

type Props = HTMLDivProps;

export const REBAResultsPage = (props: Props) => {
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

    if (isLoading) return <REBAResultsPageSkeleton />;
    if (isError) throw new Error("React query error thrown manually from REBAResultsPage", { cause: error });

    return (
        <div {...props}>
            <GoBackButton />
            <Typography className="page-title">{t("reba_assessments.reba_assessment")}</Typography>
            <AssessmentInformation className="assessmen-information" assessmentInfo={data?.data} progress={100} />
            <REBAScoreCard className="results-summary" />
            <DetailedSummary className="detailed-summary" assessmentDetail={data?.data.assessment} />
            <PDFDownloadCardContainer className="download-card" />
        </div>
    );
};
