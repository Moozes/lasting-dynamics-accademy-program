import { round } from "lodash";

import { useTheme } from "@mui/material";

import { displayOrFallback, useTranslationV2 } from "ui";

import { IGeneratedMECAssessment } from "@app-types/index";
import {
    illustration11,
    illustration12,
    illustration91,
    illustration101,
    illustration102,
    illustration111,
    illustration112,
} from "@features/MEC/assets";
import { IMECResultsFormatedData, ResultsPdfTemplateProps } from "@features/MEC/types";
import { useSingleAssessmentQueryCache } from "@hooks/index";

import { getMECCalculations } from "../utils";

const timeDisplayOrFallback = (value: number | null) => {
    // i am using underscore as a fallback because a dash would cause "missing sensor" message to show
    if (value === 0) return "_";
    const result = displayOrFallback(value) as number | string;
    if (typeof result === "number") {
        return round(result, 2);
    }
    return result;
};
const countFreqDisplayOrFallback = (value: number | null) => {
    const result = displayOrFallback(value) as number | string;
    if (typeof result === "number") {
        return round(result, 2);
    }
    return result;
};

export const useDetailedSummaryFormatedData = (): { formatedData: IMECResultsFormatedData[] } => {
    const t = useTranslationV2();
    const {
        palette: { mode },
    } = useTheme();
    const { data } = useSingleAssessmentQueryCache<IGeneratedMECAssessment>()!;
    const { assessment: assessmentDetail } = data;
    const calculations = getMECCalculations(data);
    return {
        formatedData: [
            {
                question: t("mec_assessments.working_zone"),
                status: calculations[1].status,
                justification: calculations[1].justification,
                subQuestion: [
                    {
                        question: "1.1",
                        illustration: illustration11(mode),
                        illustrationPDF: illustration11("light"),
                        count_freq: countFreqDisplayOrFallback(
                            assessmentDetail["1.1 Working Yellow Zone"].dynamic_movements_per_hour
                        ),
                        time: timeDisplayOrFallback(
                            assessmentDetail["1.1 Working Yellow Zone"].static_minutes_per_hour
                        ),
                        missing_limb: assessmentDetail["1.1 Working Yellow Zone"].missing_limb,
                    },
                    {
                        question: "1.2",
                        illustration: illustration12(mode),
                        illustrationPDF: illustration12("light"),
                        count_freq: countFreqDisplayOrFallback(
                            assessmentDetail["1.2 Working in RED Zone"].dynamic_movements_per_hour
                        ),
                        time: timeDisplayOrFallback(
                            assessmentDetail["1.2 Working in RED Zone"].static_minutes_per_hour
                        ),
                        missing_limb: assessmentDetail["1.2 Working in RED Zone"].missing_limb,
                    },
                ],
            },
            {
                question: t("mec_assessments.position_of_hands_and_or_arm"),
                status: calculations[9].status,
                justification: calculations[9].justification,
                subQuestion: [
                    {
                        question: "9.1",
                        illustration: illustration91(mode),
                        illustrationPDF: illustration91("light"),
                        count_freq: `${t("right_arm")}: ${countFreqDisplayOrFallback(
                            assessmentDetail["9.1 Position of Right ARM in Redzone"].dynamic_movements_per_hour
                        )} | ${t("left_arm")}: ${countFreqDisplayOrFallback(
                            assessmentDetail["9.2 Position of Left ARM in Redzone"].dynamic_movements_per_hour
                        )}`,
                        time: `${t("right_arm")}: ${timeDisplayOrFallback(
                            assessmentDetail["9.1 Position of Right ARM in Redzone"].static_minutes_per_hour
                        )} | ${t("left_arm")}: ${timeDisplayOrFallback(
                            assessmentDetail["9.2 Position of Left ARM in Redzone"].static_minutes_per_hour
                        )}`,
                        missing_limb:
                            assessmentDetail["9.1 Position of Right ARM in Redzone"].missing_limb !== null &&
                            assessmentDetail["9.2 Position of Left ARM in Redzone"].missing_limb !== null
                                ? `${assessmentDetail["9.1 Position of Right ARM in Redzone"].missing_limb}, ${assessmentDetail["9.2 Position of Left ARM in Redzone"].missing_limb}`
                                : assessmentDetail["9.1 Position of Right ARM in Redzone"].missing_limb ||
                                  assessmentDetail["9.2 Position of Left ARM in Redzone"].missing_limb,
                    },
                ],
            },
            {
                question: t("mec_assessments.back_bending_and_twisting"),
                status: calculations[10].status,
                justification: calculations[10].justification,
                subQuestion: [
                    {
                        question: "10.1",
                        illustration: illustration101(mode),
                        illustrationPDF: illustration101("light"),
                        count_freq: countFreqDisplayOrFallback(
                            assessmentDetail["10.1 Position of Trunk in Redzone (forward bending)"]
                                .dynamic_movements_per_hour
                        ),
                        time: timeDisplayOrFallback(
                            assessmentDetail["10.1 Position of Trunk in Redzone (forward bending)"]
                                .static_minutes_per_hour
                        ),
                        missing_limb:
                            assessmentDetail["10.1 Position of Trunk in Redzone (forward bending)"].missing_limb,
                    },
                    {
                        question: "10.2",
                        illustration: illustration102(mode),
                        illustrationPDF: illustration102("light"),
                        count_freq: countFreqDisplayOrFallback(
                            assessmentDetail["10.2 Position of Trunk in Redzone (side bending)"]
                                .dynamic_movements_per_hour
                        ),
                        time: timeDisplayOrFallback(
                            assessmentDetail["10.2 Position of Trunk in Redzone (side bending)"].static_minutes_per_hour
                        ),
                        missing_limb: assessmentDetail["10.2 Position of Trunk in Redzone (side bending)"].missing_limb,
                    },
                ],
            },
            {
                question: t("mec_assessments.neck_bending"),
                status: calculations[11].status,
                justification: calculations[11].justification,
                subQuestion: [
                    {
                        question: "11.1",
                        illustration: illustration111(mode),
                        illustrationPDF: illustration111("light"),
                        count_freq: countFreqDisplayOrFallback(
                            assessmentDetail["11.1 Positon of Head in Redzone (forward bending)"]
                                .dynamic_movements_per_hour
                        ),
                        time: timeDisplayOrFallback(
                            assessmentDetail["11.1 Positon of Head in Redzone (forward bending)"]
                                .static_minutes_per_hour
                        ),
                        missing_limb:
                            assessmentDetail["11.1 Positon of Head in Redzone (forward bending)"].missing_limb,
                    },
                    {
                        question: "11.2",
                        illustration: illustration112(mode),
                        illustrationPDF: illustration112("light"),
                        count_freq: countFreqDisplayOrFallback(
                            assessmentDetail["11.2 Positon of Head in Redzone (side bending)"]
                                .dynamic_movements_per_hour
                        ),
                        time: timeDisplayOrFallback(
                            assessmentDetail["11.2 Positon of Head in Redzone (side bending)"].static_minutes_per_hour
                        ),
                        missing_limb: assessmentDetail["11.2 Positon of Head in Redzone (side bending)"].missing_limb,
                    },
                ],
            },
        ],
    };
};

export const useResultsPdfTemplate = (): ResultsPdfTemplateProps => {
    const cache = useSingleAssessmentQueryCache<IGeneratedMECAssessment>()!;
    const { formatedData } = useDetailedSummaryFormatedData();

    return {
        cache,
        detailedSummaryFormatedData: formatedData,
    };
};
