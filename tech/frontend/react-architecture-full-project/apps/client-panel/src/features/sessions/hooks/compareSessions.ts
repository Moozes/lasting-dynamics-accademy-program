/* eslint-disable no-underscore-dangle */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row } from "react-table";
import { differenceInHours, differenceInMinutes, parseISO } from "date-fns";
import { round } from "lodash";

import { useTranslationV2 } from "ui";

import { IuseComparison } from "@app-types/index";
import routes from "@routes/routes";
import { format_hh_mm_ss } from "@utils/index";

import {
    IGetSelectedSessionsStatsQueryResponse,
    IMultiSessionTemperatureTableProps,
    ISession,
    ITempStatsData,
    LimbsCamelCaseEnum,
    TNOAnglesEnum,
} from "../types";
import { formatAndSortTime, formatHeterogeneousValue } from "../utils";

// Session comparison constraints
// 1: you can select from 2 to 4 sessions only
// 2: all selected assessments need to have calculations_completed as true
//  if second constraint is false there are two possibilities
//      1: some are still processing
//      2: some are not processing == no measurments

export const useComparison = (typedSelectedRows: Row<ISession>[]): IuseComparison => {
    const t = useTranslationV2();
    const [showInfoDialog, setShowInfoDialog] = useState(false);
    const comparisonInfoArray: string[] = [];

    const navigate = useNavigate();
    // constraint 1
    const count = typedSelectedRows.length;
    const constraint_2_to_4_only = count >= 2 && count <= 4;

    // constraint 2
    const constraint_all_have_calculations_completed_true = typedSelectedRows.every(
        (session) => session.original.calculations_completed
    );
    // constraint 2 error 1
    const error_some_are_still_processing = typedSelectedRows.some(
        (session) => !session.original.calculations_completed && session.original.processing
    );
    // constraint 2 error 2
    const error_some_have_no_measurements = typedSelectedRows.some(
        (session) => !session.original.calculations_completed && !session.original.processing
    );

    const allConstraintsAreVerified = constraint_2_to_4_only && constraint_all_have_calculations_completed_true;

    const clickHandler = () => {
        const ids = typedSelectedRows.map((row) => row.original.id).join(",");
        if (allConstraintsAreVerified) {
            navigate(`${routes.dashboard.multiSessionsDetails}?ids=${ids}`);
        } else {
            setShowInfoDialog(true);
        }
    };

    if (!constraint_2_to_4_only) comparisonInfoArray.push(t("sessions_management.constraint_2_to_4"));
    if (!constraint_all_have_calculations_completed_true) {
        if (error_some_are_still_processing)
            comparisonInfoArray.push(t("sessions_management.error_all_done_processing"));
        if (error_some_have_no_measurements)
            comparisonInfoArray.push(t("sessions_management.error_all_have_measurements"));
    }

    return {
        clickHandler,
        showInfoDialog,
        setShowInfoDialog,
        comparisonInfoArray,
    };
};

export const useCompareMultiSessionTemperatureStats = (
    sessionArray: IGetSelectedSessionsStatsQueryResponse
): IMultiSessionTemperatureTableProps => {
    // Use this when limb data is missing
    const limbReplacementData = { mean: "-", max: "-", min: "-", median: "-" };

    const roundTempStats = (tempStats: ITempStatsData | undefined) => {
        if (!tempStats) return undefined;
        return {
            max: `${round(tempStats.max, 2)}°C`,
            min: `${round(tempStats.min, 2)}°C`,
            mean: `${round(tempStats.mean, 2)}°C`,
            median: `${round(tempStats.median, 2)}°C`,
        };
    };

    const result = {
        sessionsArray: sessionArray.map((session) => {
            if (!session.temperature_calculations)
                return {
                    [LimbsCamelCaseEnum.chestStrap]: limbReplacementData,
                    [LimbsCamelCaseEnum.trunk]: limbReplacementData,
                    [LimbsCamelCaseEnum.leftArm]: limbReplacementData,
                    [LimbsCamelCaseEnum.rightArm]: limbReplacementData,
                };
            return {
                [LimbsCamelCaseEnum.chestStrap]:
                    roundTempStats(
                        session.temperature_calculations.find((stats) => stats.limb == LimbsCamelCaseEnum.chestStrap)
                    ) ?? limbReplacementData,
                [LimbsCamelCaseEnum.trunk]:
                    roundTempStats(
                        session.temperature_calculations.find((stats) => stats.limb == LimbsCamelCaseEnum.trunk)
                    ) ?? limbReplacementData,
                [LimbsCamelCaseEnum.leftArm]:
                    roundTempStats(
                        session.temperature_calculations.find((stats) => stats.limb == LimbsCamelCaseEnum.leftArm)
                    ) ?? limbReplacementData,
                [LimbsCamelCaseEnum.rightArm]:
                    roundTempStats(
                        session.temperature_calculations.find((stats) => stats.limb == LimbsCamelCaseEnum.rightArm)
                    ) ?? limbReplacementData,
            };
        }),
    };

    return result as unknown as IMultiSessionTemperatureTableProps;
};

// returns
// {
//     limbName: [
//         ["> 60°", "duration 1", "percentage 1", "duration 2", "percentage 2", ...]
//         ["30° - 60°", ...]
//         ["< 30°", ...]
//     ]
// }
export const useCompareMultiSessionPostureStats = (sessionArray: IGetSelectedSessionsStatsQueryResponse) => {
    enum AnglesEnum {
        gt60 = "> 60°",
        lt30 = "< 30°",
        _30_to_60 = "30° - 60°",
    }
    const getLimbRows = (limb: LimbsCamelCaseEnum) =>
        sessionArray.reduce(
            (acc: (string | number)[][], current) => {
                const limbObject = current.calculations?.posture[limb];
                if (limbObject) {
                    const gt60Object = limbObject.data.find((elm) => elm.label == AnglesEnum.gt60)!;
                    const _30_to_60Object = limbObject.data.find((elm) => elm.label == AnglesEnum._30_to_60)!;
                    const lt30Object = limbObject.data.find((elm) => elm.label == AnglesEnum.lt30)!;
                    return [
                        acc[0].concat([format_hh_mm_ss(gt60Object.duration), `${gt60Object.value}%`]),
                        acc[1].concat([format_hh_mm_ss(_30_to_60Object.duration), `${_30_to_60Object.value}%`]),
                        acc[2].concat([format_hh_mm_ss(lt30Object.duration), `${lt30Object.value}%`]),
                    ];
                }
                return [acc[0].concat(["-", "-"]), acc[1].concat(["-", "-"]), acc[2].concat(["-", "-"])];
            },
            [[AnglesEnum.gt60], [AnglesEnum._30_to_60], [AnglesEnum.lt30]]
        );

    const result = {
        [LimbsCamelCaseEnum.leftArm]: getLimbRows(LimbsCamelCaseEnum.leftArm),
        [LimbsCamelCaseEnum.rightArm]: getLimbRows(LimbsCamelCaseEnum.rightArm),
        [LimbsCamelCaseEnum.trunk]: getLimbRows(LimbsCamelCaseEnum.trunk),
        [LimbsCamelCaseEnum.chestStrap]: getLimbRows(LimbsCamelCaseEnum.chestStrap),
    };
    return { formatedData: result };
};

export const useCompareMultiSessionTNOStats = (sessionArray: IGetSelectedSessionsStatsQueryResponse) => {
    const formatStaticValue = (v: number) => format_hh_mm_ss(v);
    const formatDynamicValue = (v: number) => `${round(v, 2)}x/min`;
    const trunkLimbRows = sessionArray.reduce(
        (acc: (string | number)[][], current) => {
            const limbObj = current.tno_calculations?.find((elm) => elm.limb == LimbsCamelCaseEnum.trunk);
            if (!limbObj) {
                return [acc[0].concat(["-", "-"]), acc[1].concat(["-", "-"])];
            }
            const fomatedLimbObjectTime = formatAndSortTime(limbObj.time) as unknown as {
                label: string;
                static: number;
                dynamic: number;
            }[];
            const _0_to_20 = fomatedLimbObjectTime[0];
            const lt0_or_gt20 = fomatedLimbObjectTime[1];
            return [
                acc[0].concat([formatStaticValue(_0_to_20.static), formatDynamicValue(_0_to_20.dynamic)]),
                acc[1].concat([formatStaticValue(lt0_or_gt20.static), formatDynamicValue(lt0_or_gt20.dynamic)]),
            ];
        },
        [[TNOAnglesEnum._0_to_20], [TNOAnglesEnum.lt0_or_gt20]]
    );
    const getLimbRows = (limb: LimbsCamelCaseEnum) =>
        sessionArray.reduce(
            (acc: (string | number)[][], current) => {
                const limbObj = current.tno_calculations?.find((elm) => elm.limb == limb);
                if (!limbObj) {
                    return [acc[0].concat(["-", "-"]), acc[1].concat(["-", "-"]), acc[2].concat(["-", "-"])];
                }
                const fomatedLimbObjectTime = formatAndSortTime(limbObj.time) as unknown as {
                    label: string;
                    static: number;
                    dynamic: number;
                }[];
                const _10_to_20 = fomatedLimbObjectTime[0];
                const _20_to_60 = fomatedLimbObjectTime[1];
                const lt10_or_gt60 = fomatedLimbObjectTime[2];
                return [
                    acc[0].concat([formatStaticValue(_10_to_20.static), formatDynamicValue(_10_to_20.dynamic)]),
                    acc[1].concat([formatStaticValue(_20_to_60.static), formatDynamicValue(_20_to_60.dynamic)]),
                    acc[2].concat([formatStaticValue(lt10_or_gt60.static), formatDynamicValue(lt10_or_gt60.dynamic)]),
                ];
            },
            [[TNOAnglesEnum._10_to_20], [TNOAnglesEnum._20_to_60], [TNOAnglesEnum.lt10_or_gt60]]
        );
    const result = {
        [LimbsCamelCaseEnum.leftArm]: getLimbRows(LimbsCamelCaseEnum.leftArm),
        [LimbsCamelCaseEnum.rightArm]: getLimbRows(LimbsCamelCaseEnum.rightArm),
        [LimbsCamelCaseEnum.chestStrap]: getLimbRows(LimbsCamelCaseEnum.chestStrap),
        [LimbsCamelCaseEnum.trunk]: trunkLimbRows,
    };

    const noTNOCalculationsForAllSession = sessionArray.every((session) => {
        // tno_calculations is undefined or null
        if (!session.tno_calculations) return true;
        // tno_calculations array is empty
        if (session.tno_calculations.length === 0) return true;
        return false;
    });

    return { formatedData: result, noTNOCalculationsForAllSession };
};

export const useCompareMultiSessionTimeDomainStats = (sessionArray: IGetSelectedSessionsStatsQueryResponse) => {
    const timeDomainReplacementData = {
        meanRR: "-",
        meanHR: "-",
        minHR: "-",
        maxHR: "-",
        SDNN: "-",
        RMSSD: "-",
        NN50: "-",
        pNN50: "-",
        RRTriangularIndex: "-",
        TINN: "-",
    };
    enum VariableNamesEnum {
        meanRR = "Mean RR*",
        meanHR = "Mean HR*",
        minHR = "Min HR",
        maxHR = "Max HR",
        SDNN = "SDNN",
        RMSSD = "RMSDD",
        NN50 = "NN50",
        pNN50 = "PNN50",
        RRTriangularIndex = "RR triangular index",
        TINN = "TINN",
    }
    const result = sessionArray.map((session) => {
        const hrStats = session.heart_rate_calculations;
        if (!hrStats) return timeDomainReplacementData;
        return {
            meanRR: formatHeterogeneousValue(
                hrStats.time_domain_features.find((elm) => elm.name == VariableNamesEnum.meanRR)?.value
            ),
            meanHR: formatHeterogeneousValue(
                hrStats.time_domain_features.find((elm) => elm.name == VariableNamesEnum.meanHR)?.value
            ),
            minHR: formatHeterogeneousValue(
                hrStats.time_domain_features.find((elm) => elm.name == VariableNamesEnum.minHR)?.value
            ),
            maxHR: formatHeterogeneousValue(
                hrStats.time_domain_features.find((elm) => elm.name == VariableNamesEnum.maxHR)?.value
            ),
            SDNN: formatHeterogeneousValue(
                hrStats.time_domain_features.find((elm) => elm.name == VariableNamesEnum.SDNN)?.value
            ),
            RMSSD: formatHeterogeneousValue(
                hrStats.time_domain_features.find((elm) => elm.name == VariableNamesEnum.RMSSD)?.value
            ),
            NN50: formatHeterogeneousValue(
                hrStats.time_domain_features.find((elm) => elm.name == VariableNamesEnum.NN50)?.value
            ),
            pNN50: formatHeterogeneousValue(
                hrStats.time_domain_features.find((elm) => elm.name == VariableNamesEnum.pNN50)?.value
            ),
            RRTriangularIndex: formatHeterogeneousValue(
                hrStats.time_domain_features.find((elm) => elm.name == VariableNamesEnum.RRTriangularIndex)?.value
            ),
            TINN: formatHeterogeneousValue(
                hrStats.time_domain_features.find((elm) => elm.name == VariableNamesEnum.TINN)?.value
            ),
        };
    });
    return {
        timeDomainSessionArray: result,
    };
};

export const useCompareMultiSessionFrequencyDomainStats = (sessionArray: IGetSelectedSessionsStatsQueryResponse) => {
    const frequencyDomainReplacementData = {
        veryLowFrequency: "-",
        lowFrequency: "-",
        highFrequency: "-",
        LFNormalizedUnits: "-",
        HFNormalizedUnits: "-",
        LF_HFRatio: "-",
        totalPower: "-",
    };
    enum VariableNamesEnum {
        veryLowFrequency = "Very Low Frequency",
        lowFrequency = "Low Frequency",
        highFrequency = "High Frequency",
        LFNormalizedUnits = "LF Normalized Units",
        HFNormalizedUnits = "HF Normalized Units",
        LF_HFRatio = "LF/HF ratio",
        totalPower = "Total power",
    }
    const result = sessionArray.map((session) => {
        const hrStats = session.heart_rate_calculations;
        if (!hrStats) return frequencyDomainReplacementData;
        return {
            veryLowFrequency: formatHeterogeneousValue(
                hrStats.frequency_domain_features.find((elm) => elm.name == VariableNamesEnum.veryLowFrequency)?.value
            ),
            lowFrequency: formatHeterogeneousValue(
                hrStats.frequency_domain_features.find((elm) => elm.name == VariableNamesEnum.lowFrequency)?.value
            ),
            highFrequency: formatHeterogeneousValue(
                hrStats.frequency_domain_features.find((elm) => elm.name == VariableNamesEnum.highFrequency)?.value
            ),
            LFNormalizedUnits: formatHeterogeneousValue(
                hrStats.frequency_domain_features.find((elm) => elm.name == VariableNamesEnum.LFNormalizedUnits)?.value
            ),
            HFNormalizedUnits: formatHeterogeneousValue(
                hrStats.frequency_domain_features.find((elm) => elm.name == VariableNamesEnum.HFNormalizedUnits)?.value
            ),
            LF_HFRatio: formatHeterogeneousValue(
                hrStats.frequency_domain_features.find((elm) => elm.name == VariableNamesEnum.LF_HFRatio)?.value
            ),
            totalPower: formatHeterogeneousValue(
                hrStats.frequency_domain_features.find((elm) => elm.name == VariableNamesEnum.totalPower)?.value
            ),
        };
    });
    return {
        frequencyDomainSessionArray: result,
    };
};

export const useCompareMultiSessionNonLinearStats = (sessionArray: IGetSelectedSessionsStatsQueryResponse) => {
    const nonLinearReplacementData = {
        SD1: "-",
        SD2: "-",
        SD2_SD1: "-",
        sampleEntropy: "-",
        cardiacSympatheticIndex: "-",
        cardiacVagalIndex: "-",
        modifiedCardiacSympatheticIndex: "-",
    };
    enum VariableNamesEnum {
        SD1 = "SD1",
        SD2 = "SD2",
        SD2_SD1 = "SD2/SD1",
        sampleEntropy = "Sample Entropy (SampEn)",
        cardiacSympatheticIndex = "Cardiac Sympathetic Index",
        cardiacVagalIndex = "Cardiac Vagal Index",
        modifiedCardiacSympatheticIndex = "Modified Cardiac Sympathetic Index",
    }
    const result = sessionArray.map((session) => {
        const hrStats = session.heart_rate_calculations;
        if (!hrStats) return nonLinearReplacementData;
        return {
            SD1: formatHeterogeneousValue(
                hrStats.nonlinear_results.find((elm) => elm.name == VariableNamesEnum.SD1)?.value
            ),
            SD2: formatHeterogeneousValue(
                hrStats.nonlinear_results.find((elm) => elm.name == VariableNamesEnum.SD2)?.value
            ),
            SD2_SD1: formatHeterogeneousValue(
                hrStats.nonlinear_results.find((elm) => elm.name == VariableNamesEnum.SD2_SD1)?.value
            ),
            sampleEntropy: formatHeterogeneousValue(
                hrStats.nonlinear_results.find((elm) => elm.name == VariableNamesEnum.sampleEntropy)?.value
            ),
            cardiacSympatheticIndex: formatHeterogeneousValue(
                hrStats.nonlinear_results.find((elm) => elm.name == VariableNamesEnum.cardiacSympatheticIndex)?.value
            ),
            cardiacVagalIndex: formatHeterogeneousValue(
                hrStats.nonlinear_results.find((elm) => elm.name == VariableNamesEnum.cardiacVagalIndex)?.value
            ),
            modifiedCardiacSympatheticIndex: formatHeterogeneousValue(
                hrStats.nonlinear_results.find((elm) => elm.name == VariableNamesEnum.modifiedCardiacSympatheticIndex)
                    ?.value
            ),
        };
    });
    return {
        nonLinearSessionArray: result,
    };
};

export const useCompareMultiSessionHeartRateStats = (sessionArray: IGetSelectedSessionsStatsQueryResponse) => {
    const { timeDomainSessionArray } = useCompareMultiSessionTimeDomainStats(sessionArray);
    const { frequencyDomainSessionArray } = useCompareMultiSessionFrequencyDomainStats(sessionArray);
    const { nonLinearSessionArray } = useCompareMultiSessionNonLinearStats(sessionArray);
    return {
        timeDomainSessionArray,
        frequencyDomainSessionArray,
        nonLinearSessionArray,
    };
};

// if diff >= 1 hour return diff in hours else in minutes
export const useDifferenceInHourseOrMinutes = (start: string, end: string) => {
    const t = useTranslationV2();
    const diffInHours = differenceInHours(parseISO(end), parseISO(start));
    const diffInMinutes = differenceInMinutes(parseISO(end), parseISO(start));
    let formatedDifferenceString = "";
    if (diffInHours >= 1) formatedDifferenceString = `${diffInHours} ${t("hours", { count: diffInHours })}`;
    else formatedDifferenceString = `${diffInMinutes} ${t("minutes", { count: diffInMinutes })}`;
    return { formatedDifferenceString };
};
