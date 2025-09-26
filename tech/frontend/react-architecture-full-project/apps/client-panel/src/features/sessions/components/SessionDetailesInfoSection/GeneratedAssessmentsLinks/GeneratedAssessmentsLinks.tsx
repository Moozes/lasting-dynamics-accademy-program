import { Link } from "react-router-dom";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { AssessmentsEnum, AssessmentSourceEnum, AssessmentStatusEnum } from "@app-types/index";
import { IServerResponseSession } from "@features/sessions/types";

type Props = HTMLDivProps & {
    assessments: IServerResponseSession["assessments"];
};

export const GeneratedAssessmentsLinks = ({ assessments, ...props }: Props) => {
    const t = useTranslationV2();
    const getLink = (assessment: Props["assessments"][number]) => {
        let to = "";
        if (assessment.assesment_category === AssessmentsEnum.MEC) {
            to = `/dashboard/mec-assessments/${assessment.id}/results`;
        } else if (assessment.assesment_category === AssessmentsEnum.RAMP) {
            if (assessment.source === AssessmentSourceEnum.GENERATED) {
                to = `/dashboard/ramp-assessments/${assessment.id}/continue`;
            } else if (assessment.source === AssessmentSourceEnum.MANUAL) {
                to = `/dashboard/ramp-assessments/${assessment.id}/results`;
            }
        }
        return to;
    };
    return (
        <div {...props}>
            {assessments.map(
                (elm) =>
                    elm.status !== AssessmentStatusEnum.FAILED &&
                    elm.status !== AssessmentStatusEnum.PROCESSING && (
                        <Link key={elm.id} to={getLink(elm)} className="link">
                            {t("sessions_management.generated_assessment_link", {
                                assessmentCategory: elm.assesment_category,
                                assessmentId: elm.id,
                            })}
                        </Link>
                    )
            )}
        </div>
    );
};
