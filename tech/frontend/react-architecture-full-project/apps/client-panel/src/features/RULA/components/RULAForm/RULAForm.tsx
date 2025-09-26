import { Outlet } from "react-router-dom";
import { AxiosResponse } from "axios";
import { Form } from "formik";

import { AlertCard } from "ui";

import { AssessmentFormControls, AssessmentInformation, IncompleteFormError, SubNavbar } from "@components/index";

import { useFormControls, useFormProgress, useRULAAlertMessage, useRULAFormLinks } from "./RULAForm.hooks";

type Props = {
    data: AxiosResponse<any, any>;
};

export const RULAForm = ({ data }: Props) => {
    const formNavbarProps = useRULAFormLinks();
    const { errorList, showAlertMessage } = useRULAAlertMessage();
    const { progress } = useFormProgress();
    const formControlsProps = useFormControls();
    return (
        <>
            <AssessmentInformation className="assessmen-information" assessmentInfo={data?.data} progress={progress} />
            <SubNavbar {...formNavbarProps} className="form-navbar" />
            <Form className="assessment-form">
                {showAlertMessage && (
                    <AlertCard inline className="alert-card">
                        <IncompleteFormError errorsList={errorList} />
                    </AlertCard>
                )}
                <Outlet />
                <AssessmentFormControls {...formControlsProps} />
            </Form>
        </>
    );
};
