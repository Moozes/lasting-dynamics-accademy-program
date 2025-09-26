import { Outlet } from "react-router-dom";
import { AxiosResponse } from "axios";
import { Form } from "formik";

import { AlertCard, HTMLDivProps } from "ui";

import { AssessmentFormControls, AssessmentInformation, IncompleteFormError, SubNavbar } from "@components/index";

import { CommentDialog } from "./CommentDialog";
import { RampDisplayPreference } from "./RampDisplayPreference";
import { useFormControls, useFormProgress, useRAMPAlertMessage, useRAMPFormLinks } from "./RAMPForm.hooks";

type Props = HTMLDivProps & {
    queryData: AxiosResponse<any, any>;
};

export const RAMPForm = ({ queryData, ...props }: Props) => {
    const formNavbarProps = useRAMPFormLinks();
    const { errorList, showAlertMessage } = useRAMPAlertMessage();
    const { progress } = useFormProgress();
    const formControlsProps = useFormControls();
    return (
        <div {...props}>
            <AssessmentInformation
                className="assessmen-information"
                assessmentInfo={queryData?.data}
                progress={progress}
            />
            <RampDisplayPreference className="ramp-display-preference" />
            <SubNavbar {...formNavbarProps} className="form-navbar" />
            <Form className="assessment-form">
                {showAlertMessage && (
                    <AlertCard inline className="alert-card">
                        <IncompleteFormError errorsList={errorList} />
                    </AlertCard>
                )}
                <Outlet />
                <AssessmentFormControls {...formControlsProps} />
                <CommentDialog />
            </Form>
        </div>
    );
};
