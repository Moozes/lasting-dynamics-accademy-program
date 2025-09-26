import { useTranslationV2 } from "ui";

export const LIFTS_PER_DAY_OPTIONS = [
    { value: "0", label: "≤ 12 (≤ 1.5)" },
    { value: "1", label: "13 - 24 (1.6 - 3)" },
    { value: "2", label: "25 - 60 (3.1 - 7.5)" },
    { value: "3", label: "61 - 96 (7.6 - 12)" },
    { value: "4", label: "97 - 240 (13 - 30)" },
    { value: "5", label: "241 - 480 (31 - 60)" },
    { value: "6", label: "481 - 960 (61 - 120)" },
    { value: "7", label: "961 - 1920 (121 - 240)" },
    { value: "8", label: "1921 - 2880 (241 - 360)" },
    { value: "9", label: "2881 - 3840 (361 - 480)" },
    { value: "10", label: "3841 - 4800 (481 - 600)" },
];

export const useLoadOptions = () => {
    const t = useTranslationV2();
    return {
        LOAD_OPTIONS: [
            { value: "0", label: t("ramp_assessments.labels.over_x_to_y", { x: "25", y: "30" }) },
            { value: "1", label: t("ramp_assessments.labels.over_x_to_y", { x: "20", y: "25" }) },
            { value: "2", label: t("ramp_assessments.labels.over_x_to_y", { x: "15", y: "20" }) },
            { value: "3", label: t("ramp_assessments.labels.over_x_to_y", { x: "10", y: "15" }) },
            { value: "4", label: t("ramp_assessments.labels.over_x_to_y", { x: "7", y: "10" }) },
            { value: "5", label: t("ramp_assessments.labels.over_x_to_y", { x: "5", y: "7" }) },
            { value: "6", label: t("ramp_assessments.labels.over_x_to_y", { x: "3", y: "5" }) },
            { value: "7", label: "1 kg - 3 kg" },
        ],
    };
};
