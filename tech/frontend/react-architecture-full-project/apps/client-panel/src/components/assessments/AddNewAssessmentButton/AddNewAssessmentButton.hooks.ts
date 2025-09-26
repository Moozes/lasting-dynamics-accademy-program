import { useSearchParams } from "react-router-dom";
import { useAtomValue } from "jotai";

import { AssessmentSourceEnum, AssessmentStatusEnum, FormikAssessment } from "@app-types/index";
import { authAtom } from "@atoms/index";
import { useAddNewAssessmentSchema } from "@schemas/index";

import { RAMP_ASSESSMENT_INITIAL_VALUES } from "./AddNewAssessmentButton.helpers";

export const useAddNewAssessmentForm = () => {
    const auth = useAtomValue(authAtom);
    const [searchParams] = useSearchParams();
    const assessmentCategory = searchParams.get("assesment_category");
    const newAssessmentInitialValues: FormikAssessment = {
        assessment_name: "",
        worker: "",
        date: "",
        assessment_type: "",
        work_task: "",
        site: "",
        country: auth.wergonicUser?.organization?.country || "",
        unit: "",
        company_representative: "",
        assessment_completed_by: "",
        assessment_completed_by_select: "",
        comment: "",
        assesment_category: assessmentCategory as string,
        status: AssessmentStatusEnum.IN_PROGRESS,
        results_comment: "",
        assessment: RAMP_ASSESSMENT_INITIAL_VALUES,
        source: AssessmentSourceEnum.MANUAL,
    };
    const { AddNewAssessmentSchema: newAssessmentValidationSchema } = useAddNewAssessmentSchema();
    return { newAssessmentInitialValues, newAssessmentValidationSchema };
};
