import { useTranslationV2 } from "ui";

import { ResultSummaryFormatedData } from "../../types";

export const useFormatedData = (): ResultSummaryFormatedData => {
    const t = useTranslationV2();
    return {
        formatedData: [
            {
                text: t("rula_assessments.status_1"),
                riskScore: "1 - 2",
                ovalClassName: "negligible-risk",
                containerClassName: "mb",
            },
            {
                text: t("rula_assessments.status_2"),
                riskScore: "3 - 4",
                ovalClassName: "low-risk",
                containerClassName: "mb",
            },
            {
                text: t("rula_assessments.status_3"),
                riskScore: "5 - 6",
                ovalClassName: "medium-risk",
                containerClassName: "mb",
            },
            {
                text: t("rula_assessments.status_4"),
                riskScore: "7",
                ovalClassName: "very-high-risk",
                containerClassName: "",
            },
        ],
    };
};
