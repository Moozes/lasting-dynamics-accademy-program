import { useTheme } from "@mui/material";

import { useTranslationV2 } from "ui";

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
import { fillIfNull } from "@utils/index";

import { TUseMultiDetailedSummaryData } from "../types";
import { getMECCalculations } from "../utils";

type TReturn = {
    formatedData: TUseMultiDetailedSummaryData[];
};

export const useMultiDetailedSummaryFormatedData = (assessmentArray: IGeneratedMECAssessment[]): TReturn => {
    const t = useTranslationV2();
    const {
        palette: { mode },
    } = useTheme();
    const calculations = assessmentArray.map((a) => getMECCalculations(a));
    const formatedData = [
        {
            question: t("mec_assessments.working_zone"),
            subQuestions: [
                {
                    q: "1.1",
                    illustration: illustration11(mode),
                    illustrationPDF: illustration11("light"),
                },
                {
                    q: "1.2",
                    illustration: illustration12(mode),
                    illustrationPDF: illustration12("light"),
                },
            ],
            assessments: assessmentArray.map((a, aIdx) => ({
                status: calculations[aIdx][1].status,
                justification: calculations[aIdx][1].justification,
                subQuestions: [
                    {
                        count_freq: fillIfNull(a.assessment["1.1 Working Yellow Zone"].dynamic_movements_per_hour),
                        time: fillIfNull(a.assessment["1.1 Working Yellow Zone"].static_minutes_per_hour),
                        missing_limb: a.assessment["1.1 Working Yellow Zone"].missing_limb,
                    },
                    {
                        count_freq: fillIfNull(a.assessment["1.2 Working in RED Zone"].dynamic_movements_per_hour),
                        time: fillIfNull(a.assessment["1.2 Working in RED Zone"].static_minutes_per_hour),
                        missing_limb: a.assessment["1.2 Working in RED Zone"].missing_limb,
                    },
                ],
            })),
        },
        {
            question: t("mec_assessments.position_of_hands_and_or_arm"),
            subQuestions: [
                {
                    q: "9.1",
                    illustration: illustration91(mode),
                    illustrationPDF: illustration91("light"),
                },
            ],
            assessments: assessmentArray.map((a, aIdx) => ({
                status: calculations[aIdx][9].status,
                justification: calculations[aIdx][9].justification,
                subQuestions: [
                    {
                        count_freq: `${t("right_arm")}: ${fillIfNull(
                            a.assessment["9.1 Position of Right ARM in Redzone"].dynamic_movements_per_hour
                        )} | ${t("left_arm")}: ${fillIfNull(
                            a.assessment["9.2 Position of Left ARM in Redzone"].dynamic_movements_per_hour
                        )}`,
                        time: `${t("right_arm")}: ${fillIfNull(
                            a.assessment["9.1 Position of Right ARM in Redzone"].static_minutes_per_hour
                        )} | ${t("left_arm")}: ${fillIfNull(
                            a.assessment["9.2 Position of Left ARM in Redzone"].static_minutes_per_hour
                        )}`,
                        missing_limb:
                            a.assessment["9.1 Position of Right ARM in Redzone"].missing_limb !== null &&
                            a.assessment["9.2 Position of Left ARM in Redzone"].missing_limb !== null
                                ? `${a.assessment["9.1 Position of Right ARM in Redzone"].missing_limb}, ${a.assessment["9.2 Position of Left ARM in Redzone"].missing_limb}`
                                : a.assessment["9.1 Position of Right ARM in Redzone"].missing_limb ||
                                  a.assessment["9.2 Position of Left ARM in Redzone"].missing_limb,
                    },
                ],
            })),
        },
        {
            question: t("mec_assessments.back_bending_and_twisting"),
            subQuestions: [
                {
                    q: "10.1",
                    illustration: illustration101(mode),
                    illustrationPDF: illustration101("light"),
                },
                {
                    q: "10.2",
                    illustration: illustration102(mode),
                    illustrationPDF: illustration102("light"),
                },
            ],
            assessments: assessmentArray.map((a, aIdx) => ({
                status: calculations[aIdx][10].status,
                justification: calculations[aIdx][10].justification,
                subQuestions: [
                    {
                        count_freq: fillIfNull(
                            a.assessment["10.1 Position of Trunk in Redzone (forward bending)"]
                                .dynamic_movements_per_hour
                        ),
                        time: fillIfNull(
                            a.assessment["10.1 Position of Trunk in Redzone (forward bending)"].static_minutes_per_hour
                        ),
                        missing_limb: a.assessment["10.1 Position of Trunk in Redzone (forward bending)"].missing_limb,
                    },
                    {
                        count_freq: fillIfNull(
                            a.assessment["10.2 Position of Trunk in Redzone (side bending)"].dynamic_movements_per_hour
                        ),
                        time: fillIfNull(
                            a.assessment["10.2 Position of Trunk in Redzone (side bending)"].static_minutes_per_hour
                        ),
                        missing_limb: a.assessment["10.2 Position of Trunk in Redzone (side bending)"].missing_limb,
                    },
                ],
            })),
        },
        {
            question: t("mec_assessments.neck_bending"),
            subQuestions: [
                {
                    q: "11.1",
                    illustration: illustration111(mode),
                    illustrationPDF: illustration111("light"),
                },
                {
                    q: "11.2",
                    illustration: illustration112(mode),
                    illustrationPDF: illustration112("light"),
                },
            ],
            assessments: assessmentArray.map((a, aIdx) => ({
                status: calculations[aIdx][11].status,
                justification: calculations[aIdx][11].justification,
                subQuestions: [
                    {
                        count_freq: fillIfNull(
                            a.assessment["11.1 Positon of Head in Redzone (forward bending)"].dynamic_movements_per_hour
                        ),
                        time: fillIfNull(
                            a.assessment["11.1 Positon of Head in Redzone (forward bending)"].static_minutes_per_hour
                        ),
                        missing_limb: a.assessment["11.1 Positon of Head in Redzone (forward bending)"].missing_limb,
                    },
                    {
                        count_freq: fillIfNull(
                            a.assessment["11.2 Positon of Head in Redzone (side bending)"].dynamic_movements_per_hour
                        ),
                        time: fillIfNull(
                            a.assessment["11.2 Positon of Head in Redzone (side bending)"].static_minutes_per_hour
                        ),
                        missing_limb: a.assessment["11.2 Positon of Head in Redzone (side bending)"].missing_limb,
                    },
                ],
            })),
        },
    ];
    return {
        formatedData,
    };
};
