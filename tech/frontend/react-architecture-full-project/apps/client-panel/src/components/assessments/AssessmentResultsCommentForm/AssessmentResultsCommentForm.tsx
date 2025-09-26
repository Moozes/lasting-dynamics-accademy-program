import { useParams } from "react-router-dom";
import { Form, Formik } from "formik";

import { Btn, FormikFilledTextarea, type HTMLDivProps, useTranslationV2 } from "ui";

import { Assessment } from "@app-types/index";
import { useGetSingleAssessmentQuery } from "@queries/index";

import { useUpdateAssessmentResultsComment } from "./AssessmentResultsCommentForm.hooks";

type Props = HTMLDivProps;

export const AssessmentResultsCommentForm = (props: Props) => {
    const t = useTranslationV2();
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = useGetSingleAssessmentQuery(id!);
    const typedData = data?.data as unknown as Assessment;
    const { updateAssessment, isMutationLoading } = useUpdateAssessmentResultsComment();
    return (
        <Formik
            enableReinitialize
            initialValues={{ results_comment: typedData.results_comment || "" }}
            onSubmit={(values) => {
                updateAssessment(values);
            }}
        >
            {({ values }) => (
                <Form>
                    <div {...props}>
                        <FormikFilledTextarea
                            className="text-area"
                            id="results_comment"
                            name="results_comment"
                            label={`${t("add_comment_here")} ${isLoading ? t("loading") : ""}`}
                            maxLength={150}
                            rows={5}
                            disabled={isLoading || isMutationLoading}
                        />
                        <div className="btn-container">
                            <Btn
                                type="submit"
                                className="btn"
                                variant="primary-contained"
                                loading={isMutationLoading}
                                disabled={
                                    !values.results_comment ||
                                    isLoading ||
                                    isMutationLoading ||
                                    values.results_comment === typedData.results_comment
                                }
                            >
                                {t("submit_comment")}
                            </Btn>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
