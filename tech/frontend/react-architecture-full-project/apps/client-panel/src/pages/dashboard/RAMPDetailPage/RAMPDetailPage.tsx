import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { AssessmentFormConfig, GoBackButton, InformationDialog } from "@components/index";
import {
    informationDialogOpenAtom,
    informationDialogTextAtom,
    initialTabsVisitedStatus,
    RAMPDetailPageSkeleton,
    RAMPForm,
    tabsVisitedStatusAtom,
} from "@features/RAMP/index";
import { usePreventAccessToCompletedAssessmentForm } from "@hooks/index";
import { useGetSingleAssessmentQuery } from "@queries/index";

type Props = HTMLDivProps;

export const RAMPDetailPage = (props: Props) => {
    const t = useTranslationV2();
    const params = useParams<{ id: string }>();
    const [informationDialogOpen, setInformationDialogOpen] = useAtom(informationDialogOpenAtom);
    const informationDialogText = useAtomValue(informationDialogTextAtom);

    const setTabsVisitedStatus = useSetAtom(tabsVisitedStatusAtom);
    useEffect(() => {
        setTabsVisitedStatus(initialTabsVisitedStatus);
    }, []);

    const { data, isLoading, isError, error } = useGetSingleAssessmentQuery(params.id as string);
    usePreventAccessToCompletedAssessmentForm(data, isLoading, isError);

    if (isLoading) return <RAMPDetailPageSkeleton />;
    if (isError) throw new Error("React query error thrown manually from RAMPDetailPage", { cause: error });
    return (
        <div {...props}>
            <GoBackButton className="goback-button" />
            <Typography className="page-title">{t("ramp_assessments.pageHeader")}</Typography>
            <AssessmentFormConfig assessment={data?.data?.assessment}>
                <RAMPForm queryData={data} />
            </AssessmentFormConfig>
            <InformationDialog
                open={informationDialogOpen}
                onClose={() => {
                    setInformationDialogOpen(false);
                }}
                text={informationDialogText}
            />
        </div>
    );
};
