import { useReducer } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { Btn, type HTMLDivProps, useTranslationV2 } from "ui";

import { AssessmentsEnum } from "@app-types/index";
import FormDialog from "@components/Dialogs/FormDialog";
import { useAddAssessmentMutation } from "@queries/index";
import routes from "@routes/routes";

import { useAddNewAssessmentForm } from "./AddNewAssessmentButton.hooks";
import { FormDialogContent } from "./FormDialogContent";

export const AddNewAssessmentButton = (props: HTMLDivProps) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const queryClient = useQueryClient();
    const { newAssessmentInitialValues, newAssessmentValidationSchema } = useAddNewAssessmentForm();
    const [isAddNewAssessmentDialogOpen, setAddNewAssessmentDialogOpen] = useReducer((state) => {
        return !state;
    }, false);
    const {
        mutate: addAssessment,
        isLoading,
        reset,
    } = useAddAssessmentMutation({
        onSuccess: (data: any) => {
            setAddNewAssessmentDialogOpen();
            queryClient.invalidateQueries({
                queryKey: ["Assessments", searchParams.get("page"), searchParams.get("page_size")],
            });
            enqueueSnackbar(t("ramp_assessments.assessment_create_success"));
            reset();
            if (data.data.assesment_category === AssessmentsEnum.RAMP) {
                navigate(`${routes.dashboard.rampAssessments}/${data.data.id}`);
            } else if (data.data.assesment_category === AssessmentsEnum.RULA) {
                navigate(`${routes.dashboard.rulaAssessments}/${data.data.id}`);
            } else if (data.data.assesment_category === AssessmentsEnum.REBA) {
                navigate(`${routes.dashboard.rebaAssessments}/${data.data.id}`);
            }
        },
        onError: (err: any) => {
            let message;
            if (err.response.data?.detail) {
                message = err.response.data?.detail;
            } else {
                message = t("Something_went_Wrong");
            }
            enqueueSnackbar(message, { severity: "error" });
            setAddNewAssessmentDialogOpen();
        },
    });
    return (
        <div {...props}>
            <Btn onClick={setAddNewAssessmentDialogOpen} variant="primary-contained">
                {t("add_new")}
            </Btn>
            <FormDialog
                dialogOpen={isAddNewAssessmentDialogOpen}
                toggleDialog={setAddNewAssessmentDialogOpen}
                header={t("ramp_assessments.add_new_assessment")}
                initialValues={newAssessmentInitialValues}
                validationSchema={newAssessmentValidationSchema}
                onSubmit={(values) => {
                    addAssessment(values);
                }}
                rightSideAction={
                    <Btn loading={isLoading} variant="primary-contained" type="submit">
                        {t("ramp_assessments.add_new_assessment")}
                    </Btn>
                }
            >
                <FormDialogContent />
            </FormDialog>
        </div>
    );
};
