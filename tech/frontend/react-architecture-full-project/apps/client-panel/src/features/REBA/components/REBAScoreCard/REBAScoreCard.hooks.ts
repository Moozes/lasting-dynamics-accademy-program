import { useTranslationV2 } from "ui";

import { ResultSummaryFormatedData } from "@features/REBA/types";

export const useFormatedData = (): ResultSummaryFormatedData => {
    const t = useTranslationV2();
    return {
        formatedData: [
            {
                text: t("reba_assessments.status_1"),
                riskScore: "1",
                ovalClassName: "negligible-risk",
                containerClassName: "mb",
            },
            {
                text: t("reba_assessments.status_2"),
                riskScore: "2 - 3",
                ovalClassName: "low-risk",
                containerClassName: "mb",
            },
            {
                text: t("reba_assessments.status_3"),
                riskScore: "4 - 7",
                ovalClassName: "medium-risk",
                containerClassName: "mb",
            },
            {
                text: t("reba_assessments.status_4"),
                riskScore: "8 - 10",
                ovalClassName: "high-risk",
                containerClassName: "mb",
            },
            {
                text: t("reba_assessments.status_5"),
                riskScore: "11+",
                ovalClassName: "very-high-risk",
                containerClassName: "",
            },
        ],
    };
};
