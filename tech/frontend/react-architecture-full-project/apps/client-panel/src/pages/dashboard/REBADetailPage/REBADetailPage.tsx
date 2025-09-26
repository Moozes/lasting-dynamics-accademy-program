import { useParams } from "react-router-dom";

import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { AssessmentFormConfig, GoBackButton } from "@components/index";
import { REBADetailPageSkeleton, REBAForm, useInitialiseVisitedStatusOnMount } from "@features/REBA/index";
import { usePreventAccessToCompletedAssessmentForm } from "@hooks/index";
import { useGetSingleAssessmentQuery } from "@queries/index";

type Props = HTMLDivProps;

export const REBADetailPage = (props: Props) => {
    const t = useTranslationV2();
    const params = useParams<{ id: string }>();

    useInitialiseVisitedStatusOnMount();

    const { data, isLoading, isError, error } = useGetSingleAssessmentQuery(params.id as string);

    usePreventAccessToCompletedAssessmentForm(data, isLoading, isError);

    if (isLoading) return <REBADetailPageSkeleton />;
    if (isError) throw new Error("React query error thrown manually from REBADetailPage", { cause: error });
    return (
        <div {...props}>
            <GoBackButton className="goback-button" />
            <Typography className="page-title">{t("reba_assessments.reba_assessment")}</Typography>
            <AssessmentFormConfig assessment={data?.data?.assessment}>
                <REBAForm data={data} />
            </AssessmentFormConfig>
        </div>
    );
};
