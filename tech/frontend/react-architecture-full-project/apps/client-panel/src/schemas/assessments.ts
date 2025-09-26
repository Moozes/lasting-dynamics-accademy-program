import { add } from "date-fns";
import * as yup from "yup";

import { TranslationFunction, useTranslationV2 } from "ui";

const getRequiredSchema = (fieldName: string, t: TranslationFunction) =>
    yup.string().required(`${fieldName} ${t("is_required")}`);

export const useAddNewAssessmentSchema = () => {
    const t = useTranslationV2();
    return {
        AddNewAssessmentSchema: yup.object({
            assessment_name: getRequiredSchema(t("ramp_assessments.assessment_name"), t),
            worker: getRequiredSchema(t("Worker"), t),
            date: yup
                .date()
                .max(add(new Date(), { years: 10 }), `${t("formik.max_date_exceeded")}`)
                .required(`${t("date")} ${t("is_required")}`),
            assessment_type: getRequiredSchema(t("type"), t),
            work_task: getRequiredSchema(t("work_task"), t),
            site: yup.string(),
            country: getRequiredSchema(t("country"), t),
            unit: yup.string(),
            company_representative: getRequiredSchema(t("Company_representative"), t),
            assessment_completed_by: getRequiredSchema(t("ramp_assessments.ergonomist_name"), t),
            assessment_completed_by_select: getRequiredSchema(t("ramp_assessments.assessment_completed_by"), t),
            comment: yup.string(),
            status: getRequiredSchema(t("status"), t),
            assesment_category: getRequiredSchema(t("assesment_category"), t),
            // assessment: {},
        }),
    };
};
