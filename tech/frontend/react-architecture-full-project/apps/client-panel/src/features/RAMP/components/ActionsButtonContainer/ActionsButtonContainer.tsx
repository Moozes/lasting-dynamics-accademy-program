import { useNavigate, useParams } from "react-router-dom";

import { Btn, type HTMLDivProps, useTranslationV2 } from "ui";

import { AssessmentStatusEnum } from "@app-types/index";
import { LinkToSession } from "@components/index";
import routes from "@routes/routes";

import { GeneratedPDFDownloadButton } from "../GeneratedPDFDownloadButton";

import { useUpdateAssessmentStatus } from "./ActionsButtonCotainer.hooks";

type Props = HTMLDivProps & {
    sessionId: string | null;
};

export const ActionButtonsContainer = ({ sessionId, ...props }: Props) => {
    const t = useTranslationV2();
    const navigate = useNavigate();
    const params = useParams<{ id: string }>();
    const { updateAssessmentStatus, isUpdatingStatus } = useUpdateAssessmentStatus();

    const handleContinueToManualQuestions = () => {
        navigate(`${routes.dashboard.rampAssessments}/${params.id}`);
    };

    const handleFinalizeAndSubmit = () => {
        updateAssessmentStatus({ status: AssessmentStatusEnum.COMPLETED });
    };

    return (
        <div {...props}>
            <div className="link">
                <LinkToSession sessionId={sessionId} />
            </div>
            <div className="actions-section">
                <GeneratedPDFDownloadButton className="action" />
                <Btn className="action" variant="primary-contained" onClick={handleContinueToManualQuestions}>
                    {t("ramp_assessments.continue_to_manual_questions")}
                </Btn>
                <Btn
                    className="action"
                    variant="primary-contained"
                    onClick={handleFinalizeAndSubmit}
                    loading={isUpdatingStatus}
                >
                    {t("ramp_assessments.finalize_and_submit")}
                </Btn>
            </div>
        </div>
    );
};
