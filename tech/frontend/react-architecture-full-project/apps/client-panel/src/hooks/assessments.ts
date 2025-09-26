import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { capitalize } from "lodash";

import { useTranslateLimb, useTranslationV2 } from "ui";

import { Assessment, IMultiAssessmentsInfoFormatedData, RAMPAssessment } from "@app-types/index";

export const useSingleAssessmentQueryCache = <T = RAMPAssessment>() => {
    const params = useParams<{ id: string }>();
    const queryClient = useQueryClient();
    const cache = queryClient.getQueryData<{ data: T }>(["SingleAssessment", params.id]);
    return cache;
};

export const useGetAssessmentInfoFormatedData = (assessmentInfo: Assessment) => {
    const t = useTranslationV2();
    return {
        card1: [
            [
                {
                    title: t("ramp_assessments.assessment_name"),
                    text: capitalize(assessmentInfo.assessment_name),
                    titleClassName: "title-1",
                    titleVariant: "caption",
                    textClassName: "info-1",
                    textVariant: "subtitle1",
                },
                {
                    title: t("Worker"),
                    text: capitalize(assessmentInfo.worker),
                    titleClassName: "title-2",
                    titleVariant: "caption",
                    textClassName: "info-2",
                    textVariant: "subtitle1",
                },
            ],
            [
                {
                    title: t("date"),
                    text: format(new Date(assessmentInfo.date), "dd/MM/yyyy"),
                    titleClassName: "title-1",
                    titleVariant: "caption",
                    textClassName: "info-1",
                    textVariant: "subtitle1",
                },
                {
                    title: t("type"),
                    text:
                        assessmentInfo.assessment_type === "load" ? capitalize(t("load")) : capitalize(t("work_task")),
                    titleClassName: "title-2",
                    titleVariant: "caption",
                    textClassName: "info-2",
                    textVariant: "subtitle1",
                },
            ],
            [
                {
                    title: `${t("work")}/${t("work_task")}`,
                    text: capitalize(assessmentInfo.work_task),
                    titleClassName: "title-1",
                    titleVariant: "caption",
                    textClassName: "info-1",
                    textVariant: "subtitle1",
                },
                {
                    title: t("site"),
                    text: capitalize(assessmentInfo.site) || "N/A",
                    titleClassName: "title-2",
                    titleVariant: "caption",
                    textClassName: "info-2",
                    textVariant: "subtitle1",
                },
            ],
        ],
        card2: [
            [
                {
                    title: t("country"),
                    text: capitalize(assessmentInfo.country) || "N/A",
                    titleClassName: "title-1",
                    titleVariant: "caption",
                    textClassName: "info-1",
                    textVariant: "subtitle1",
                },
                {
                    title: t("Unit"),
                    text: capitalize(assessmentInfo.unit) || "N/A",
                    titleClassName: "title-2",
                    titleVariant: "caption",
                    textClassName: "info-2",
                    textVariant: "subtitle1",
                },
            ],
            [
                {
                    title: t("Company_representative"),
                    text: capitalize(assessmentInfo.company_representative),
                    titleClassName: "title-1",
                    titleVariant: "caption",
                    textClassName: "info-1",
                    textVariant: "subtitle1",
                },
                {
                    title: t("ramp_assessments.assessment_completed_by"),
                    text: capitalize(t(assessmentInfo.assessment_completed_by)),
                    titleClassName: "title-2",
                    titleVariant: "caption",
                    textClassName: "info-2",
                    textVariant: "subtitle1",
                },
            ],
            [
                {
                    title: t("comment"),
                    text: capitalize(assessmentInfo.comment || t("no_comment")),
                    titleClassName: "title-1",
                    titleVariant: "caption",
                    textClassName: "info-1",
                    textVariant: "subtitle1",
                },
            ],
        ],
    };
};

export const useMultiAssessmentsInfoTableFormatedData = (
    assessmentsArray: Assessment[]
): { formatedData: IMultiAssessmentsInfoFormatedData } => {
    const t = useTranslationV2();

    return {
        formatedData: [
            {
                property: t("date"),
                values: assessmentsArray.map((elm) => elm.date),
            },
            {
                property: t("ramp_assessments.assessment_name"),
                values: assessmentsArray.map((elm) => elm.assessment_name),
            },
            {
                property: t("worker"),
                values: assessmentsArray.map((elm) => elm.worker),
            },
            {
                property: t("work_task"),
                values: assessmentsArray.map((elm) => elm.work_task),
            },
            {
                property: t("type"),
                values: assessmentsArray.map((elm) =>
                    elm.assessment_type === "load" ? capitalize(t("load")) : capitalize(t("work_task"))
                ),
            },
            {
                property: t("site"),
                values: assessmentsArray.map((elm) => elm.site || "N/A"),
            },
            {
                property: t("country"),
                values: assessmentsArray.map((elm) => elm.country),
            },
            {
                property: t("Unit"),
                values: assessmentsArray.map((elm) => elm.unit || "N/A"),
            },
            {
                property: t("Company_representative"),
                values: assessmentsArray.map((elm) => elm.company_representative),
            },
            {
                property: t("ramp_assessments.assessment_completed_by"),
                values: assessmentsArray.map((elm) => elm.assessment_completed_by),
            },
        ],
    };
};

export const useHandleMissingSensor = () => {
    const t = useTranslationV2();
    const { translateLimb } = useTranslateLimb();
    const handleMissingSensor = (text: string | number | null, missing_limb: string | null) => {
        let result = text;
        if (text == "-") {
            result = t("missing_sensor");
            if (missing_limb) {
                result = `${t("missing_sensor")}: ${translateLimb(missing_limb)}`;
            }
        }
        return result;
    };
    return {
        handleMissingSensor,
    };
};
