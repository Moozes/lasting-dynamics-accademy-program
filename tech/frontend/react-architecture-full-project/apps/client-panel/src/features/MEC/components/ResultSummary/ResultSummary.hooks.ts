import { useTranslationV2 } from "ui";

import { IGeneratedMECAssessment } from "@app-types/index";
import { MECStatusEnum } from "@features/MEC/types";
import { getMECCalculations } from "@features/MEC/utils";
import { useSingleAssessmentQueryCache } from "@hooks/index";

export const useFormatedData = () => {
    const t = useTranslationV2();
    const { data } = useSingleAssessmentQueryCache<IGeneratedMECAssessment>()!;
    const calculations = getMECCalculations(data);
    const nbRed = Object.values(calculations).filter((q) => q.status == MECStatusEnum.RED).length;
    const nbYellow = Object.values(calculations).filter((q) => q.status == MECStatusEnum.YELLOW).length;
    const nbGreen = Object.values(calculations).filter((q) => q.status == MECStatusEnum.GREEN).length;

    let generationSessionInfo = `${t("selected_timeframe")}: `;
    if (data.work_task) generationSessionInfo += `${t("specific_task")} - ${data.work_task}`;
    else if (data.start_time && data.end_time)
        generationSessionInfo += `${t("specific_Time")} - ${t("from_start_time_to_end_time", {
            start_time: data.start_time,
            end_time: data.end_time,
        })}`;
    else generationSessionInfo += t("the_whole_measurement");

    return {
        formatedData: [
            {
                text: t("mec_assessments.number_of_red_assessments_hard_point"),
                riskScore: nbRed,
                ovalClassName: "high-risk",
                containerClassName: "mb",
            },
            {
                text: t("mec_assessments.number_of_yellow_assessments_condition_agreement"),
                riskScore: nbYellow,
                ovalClassName: "medium-risk",
                containerClassName: "mb",
            },
            {
                text: t("mec_assessments.number_of_green_assessments_agreement"),
                riskScore: nbGreen,
                ovalClassName: "low-risk",
                containerClassName: "mb",
            },
        ],
        generationSessionInfo,
    };
};
