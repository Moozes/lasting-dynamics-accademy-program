import { useEffect } from "react";
import { useFormikContext } from "formik";
import { useAtomValue } from "jotai";

import Box from "@mui/material/Box";

import { FormikFilledTextarea, FormikOutlinedSelect, FormikOutlinedTextField, useTranslationV2 } from "ui";

import { AssessmentsEnum, FormikAssessment } from "@app-types/index";
import { authAtom } from "@atoms/index";

import {
    COUNTRIES,
    RAMP_ASSESSMENT_INITIAL_VALUES,
    REBA_ASSESSMENT_INITIAL_VALUES,
    RULA_ASSESSMENT_INITIAL_VALUES,
    useCompletedBySelectOptions,
    useTypeSelectOptions,
} from "./AddNewAssessmentButton.helpers";
import { InputStyle, InputStyle2 } from "./inlineStyles";

export const FormDialogContent = () => {
    const t = useTranslationV2();
    const auth = useAtomValue(authAtom);
    const { TYPE_SELECT_OPTIONS } = useTypeSelectOptions();
    const { COMPLETED_BY_SELECT_OPTIONS } = useCompletedBySelectOptions();
    const currentUserName = `${auth.wergonicUser?.first_name || ""} ${auth.wergonicUser?.last_name || ""}`;
    const { values, setFieldValue } = useFormikContext<FormikAssessment>();
    const completedBySelect = values.assessment_completed_by_select;

    useEffect(() => {
        if (completedBySelect === "myself") {
            setFieldValue("assessment_completed_by", currentUserName);
        } else {
            setFieldValue("assessment_completed_by", "");
        }
    }, [completedBySelect, currentUserName, setFieldValue]);

    useEffect(() => {
        if (values.assesment_category === AssessmentsEnum.RAMP) {
            setFieldValue("assessment", RAMP_ASSESSMENT_INITIAL_VALUES);
        } else if (values.assesment_category === AssessmentsEnum.RULA) {
            setFieldValue("assessment", RULA_ASSESSMENT_INITIAL_VALUES);
        } else if (values.assesment_category === AssessmentsEnum.REBA) {
            setFieldValue("assessment", REBA_ASSESSMENT_INITIAL_VALUES);
        }
    }, [values.assesment_category, setFieldValue]);
    return (
        <Box
            display="flex"
            flexWrap="wrap"
            alignItems="stretch"
            justifyContent="space-between"
            flexDirection="row"
            margin={2}
        >
            <Box sx={InputStyle}>
                <FormikOutlinedTextField
                    type="text"
                    id="assessment_name"
                    name="assessment_name"
                    label={t("ramp_assessments.assessment_name")}
                    required
                />
            </Box>
            <Box sx={InputStyle}>
                <FormikOutlinedTextField type="text" id="worker" name="worker" label={t("Worker")} required />
            </Box>
            {/* date */}
            <Box sx={InputStyle}>
                <FormikOutlinedTextField type="date" id="date" name="date" label={t("date")} required />
            </Box>
            {/* type */}
            <Box alignSelf="stretch" sx={InputStyle}>
                <FormikOutlinedSelect
                    id="assessment_type"
                    name="assessment_type"
                    label={t("type")}
                    options={TYPE_SELECT_OPTIONS}
                    required
                />
            </Box>
            <Box sx={InputStyle2}>
                <FormikOutlinedTextField type="text" id="work_task" name="work_task" label={t("work_task")} required />
            </Box>
            <Box sx={InputStyle}>
                <FormikOutlinedTextField type="text" id="site" name="site" label={t("site")} />
            </Box>
            {/* country */}
            <Box alignSelf="stretch" sx={InputStyle}>
                <FormikOutlinedSelect id="country" name="country" label={t("country")} options={COUNTRIES} required />
            </Box>
            <Box sx={InputStyle}>
                <FormikOutlinedTextField type="text" id="unit" name="unit" label={t("Unit")} />
            </Box>
            <Box sx={InputStyle}>
                <FormikOutlinedTextField
                    type="text"
                    id="company_representative"
                    name="company_representative"
                    label={t("Company_representative")}
                    required
                />
            </Box>
            {/* completed by */}
            <Box alignSelf="stretch" sx={InputStyle} marginBottom="22px">
                <FormikOutlinedSelect
                    id="assessment_completed_by_select"
                    name="assessment_completed_by_select"
                    label={t("ramp_assessments.assessment_completed_by")}
                    options={COMPLETED_BY_SELECT_OPTIONS}
                    required
                />
            </Box>
            {completedBySelect === "other" && (
                <Box sx={InputStyle}>
                    <FormikOutlinedTextField
                        type="text"
                        id="assessment_completed_by"
                        name="assessment_completed_by"
                        label={t("ramp_assessments.ergonomist_name")}
                        required
                    />
                </Box>
            )}
            <Box sx={InputStyle2}>
                <FormikFilledTextarea id="comment" name="comment" label={t("comment")} rows={4} />
            </Box>
        </Box>
    );
};
