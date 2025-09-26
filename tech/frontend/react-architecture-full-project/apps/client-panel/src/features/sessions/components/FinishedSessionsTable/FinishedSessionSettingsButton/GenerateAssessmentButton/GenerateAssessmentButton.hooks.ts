import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { AssessmentsEnum } from "@app-types/index";
import { useSessionsTaskStatsQuery } from "@features/sessions/queries";
import { IGenerateAssessmentValues, SessionSegmentEnum } from "@features/sessions/types";

export const useGenerateAssessmentForm = (sessionDuration: number | null) => {
    const t = useTranslationV2();
    const initialValues: IGenerateAssessmentValues = {
        category: "",
        start_time: "",
        end_time: "",
        task: "",
        sessionSegment: "",
        takt_time: sessionDuration || 0,
    };
    const validationSchema = yup.object({
        category: yup.string().required(`${t("assesment_category")} ${t("is_required")}`),
        sessionSegment: yup.string().required(`${t("session_segment")} ${t("is_required")}`),
        task: yup.string().when("sessionSegment", {
            is: (sessionSegment: SessionSegmentEnum) => sessionSegment == SessionSegmentEnum.specificTask,
            then: (schema) => schema.required(`${t("task")} ${t("is_required")}`),
            otherwise: (schema) => schema.notRequired(),
        }),
        start_time: yup.string().when("sessionSegment", {
            is: (sessionSegment: SessionSegmentEnum) => sessionSegment == SessionSegmentEnum.specificTimeframe,
            then: (schema) => schema.required(`${t("start_time")} ${t("is_required")}`),
            otherwise: (schema) => schema.notRequired(),
        }),
        end_time: yup.string().when("sessionSegment", {
            is: (sessionSegment: SessionSegmentEnum) => sessionSegment == SessionSegmentEnum.specificTimeframe,
            then: (schema) => schema.required(`${t("end_time")} ${t("is_required")}`),
            otherwise: (schema) => schema.notRequired(),
        }),
        takt_time: yup
            .number()
            .positive(`${t("formik.field_must_be_positive")}`)
            .when("category", {
                is: (category: string) => category === AssessmentsEnum.MEC,
                then: (schema) => schema.required(`${t("tkt_time")} ${t("is_required")}`),
                otherwise: (schema) => schema.notRequired(),
            }),
    });
    return { initialValues, validationSchema };
};

export const useSelectOptions = (sessionId: string) => {
    const t = useTranslationV2();
    const { data: taskData, isLoading: taskIsLoading, isError: taskIsError } = useSessionsTaskStatsQuery(sessionId);

    let taskOptions = [];
    if (taskIsLoading) {
        taskOptions = [{ value: "", label: `${t("loading")}...` }];
    } else if (taskIsError) {
        taskOptions = [{ value: "", label: t("mec_assessments.no_tasks_found") }];
    } else {
        taskOptions = taskData.data.map((elm) => ({ value: elm.task, label: elm.task }));
    }

    const CATEGORY_OPTIONS = [
        {
            value: AssessmentsEnum.MEC,
            label: AssessmentsEnum.MEC,
        },
        {
            value: AssessmentsEnum.RAMP,
            label: AssessmentsEnum.RAMP,
        },
    ];

    return {
        CATEGORY_OPTIONS,
        SESSION_SEGMENT_OPTIONS: [
            { value: SessionSegmentEnum.wholeMeasurement, label: t("whole_measurement") },
            { value: SessionSegmentEnum.specificTask, label: t("specific_task") },
            { value: SessionSegmentEnum.specificTimeframe, label: t("specific_timeframe") },
        ],
        taskOptions,
    };
};
