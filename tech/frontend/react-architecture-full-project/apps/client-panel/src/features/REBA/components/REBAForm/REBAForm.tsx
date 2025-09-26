import { Outlet } from "react-router-dom";
import { AxiosResponse } from "axios";
import { Form } from "formik";

import { AlertCard } from "ui";

import { AssessmentFormControls, AssessmentInformation, IncompleteFormError, SubNavbar } from "@components/index";

import { useFormControls, useFormProgress, useREBAAlertMessage, useREBAFormLinks } from "./REBAForm.hooks";

type Props = {
    data: AxiosResponse<any, any>;
};

export const REBAForm = ({ data }: Props) => {
    const formNavbarProps = useREBAFormLinks();
    const { errorList, showAlertMessage } = useREBAAlertMessage();
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
