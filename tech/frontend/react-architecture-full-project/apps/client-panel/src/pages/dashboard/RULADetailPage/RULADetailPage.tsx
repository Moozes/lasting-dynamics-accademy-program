import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAtom, useSetAtom } from "jotai";

import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { AssessmentFormConfig, GoBackButton, InformationDialog } from "@components/index";
import {
    informationDialogOpenAtom,
    initialTabsVisitedStatus,
    RULADetailPageSkeleton,
    RULAForm,
    tabsVisitedStatusAtom,
} from "@features/RULA/index";
import { usePreventAccessToCompletedAssessmentForm } from "@hooks/index";
import { useGetSingleAssessmentQuery } from "@queries/index";

type Props = HTMLDivProps;

export const RULADetailPage = (props: Props) => {
    const t = useTranslationV2();
    const params = useParams<{ id: string }>();
    const [informationDialogOpen, setInformationDialogOpen] = useAtom(informationDialogOpenAtom);

    const setTabsVisitedStatus = useSetAtom(tabsVisitedStatusAtom);
    useEffect(() => {
        setTabsVisitedStatus(initialTabsVisitedStatus);
    }, []);

    const { data, isLoading, isError, error } = useGetSingleAssessmentQuery(params.id as string);

    usePreventAccessToCompletedAssessmentForm(data, isLoading, isError);

    if (isLoading) return <RULADetailPageSkeleton />;
    if (isError) throw new Error("React query error thrown manually from RULADetailPage", { cause: error });
    return (
        <div {...props}>
            <GoBackButton className="goback-button" />
            <Typography className="page-title">{t("rula_assessments.rula_assessment")}</Typography>
            <AssessmentFormConfig assessment={data?.data?.assessment}>
                <RULAForm data={data} />
            </AssessmentFormConfig>
            <InformationDialog
                open={informationDialogOpen}
                onClose={() => {
                    setInformationDialogOpen(false);
                }}
                text="test"
            />
        </div>
    );
};
