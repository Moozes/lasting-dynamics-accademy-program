import { useEffect } from "react";
import { useFormikContext } from "formik";
import { useSetAtom } from "jotai";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { RAMPAssessmentDetail as AssessmentDetail } from "@app-types/index";
import { tabsVisitedStatusAtom } from "@features/RAMP/atoms";
import { useInformationDialog } from "@features/RAMP/hooks";

import { TextAndQuestionIcon } from "../TextAndQuestionIcon";
import { YesNoFormCard } from "../YesNoFormCard";

import { usePerceivedPhysicalDiscomfortFormData } from "./PerceivedPhysicalDiscomfortForm.hooks";
import { PerceivedPhysicalDiscomfortSubForm } from "./PerceivedPhysicalDiscomfortSubForm";

type Props = HTMLDivProps;

export const PerceivedPhysicalDiscomfortForm = (props: Props) => {
    const { data } = usePerceivedPhysicalDiscomfortFormData();
    const t = useTranslationV2();
    const { values } = useFormikContext<AssessmentDetail>();
    const setTabsVisitedStatus = useSetAtom(tabsVisitedStatusAtom);
    useEffect(() => {
        return () =>
            setTabsVisitedStatus((prev) => ({
                ...prev,
                perceivedPhysicalDiscomfortVisited: true,
            }));
    }, []);
    const { openInformationDialog } = useInformationDialog();
    return (
        <div {...props}>
            <TextAndQuestionIcon
                className="title"
                text={t("ramp_assessments.perceived_physical_discomfort_form.title")}
                onQuestionIconClick={() =>
                    openInformationDialog(t("ramp_assessments.perceived_physical_discomfort_form.info"))
                }
            />
            {data.map((elm) => (
                <YesNoFormCard className="form-card" key={elm.title} {...elm} />
            ))}
            {values.perceived_physical_discomfort === ("2" as any) && (
                <PerceivedPhysicalDiscomfortSubForm className="sub-form" />
            )}
        </div>
    );
};
