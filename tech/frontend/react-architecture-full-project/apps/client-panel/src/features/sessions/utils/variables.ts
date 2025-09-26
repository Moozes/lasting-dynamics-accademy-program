import { IMultiSessionNonlinearStats } from "../types";

export enum MultiSessionDetailsSubRoutesEnum {
    tableOfResults = "table-of-results",
    TNOResults = "TNO-results",
    heartRateData = "heart-rate-data",
    temperature = "temperature",
}

export const MULTI_SESSION_TABLE_COLUMN_WIDTH = 175;
export const MULTI_SESSION_TABLE_COLUMN_WIDTH_PDF = 13;
export const SETTINGS_ICON_DIMENSIONS = {
    height: 20,
    width: 20,
};

export const timeDomainVariableUnitArray = [
    {
        variableObjectKey: "meanRR",
        variable: "Mean RR*",
        unit: "(ms)",
    },
    {
        variableObjectKey: "meanHR",
        variable: "Mean HR*",
        unit: "(bpm)",
    },
    {
        variableObjectKey: "minHR",
        variable: "Min HR",
        unit: "(bpm)",
    },
    {
        variableObjectKey: "maxHR",
        variable: "Max HR",
        unit: "(bpm)",
    },
    {
        variableObjectKey: "SDNN",
        variable: "SDNN",
        unit: "(ms)",
    },
    {
        variableObjectKey: "RMSSD",
        variable: "RMSSD",
        unit: "(ms)",
    },
    {
        variableObjectKey: "NN50",
        variable: "NN50",
        unit: "(beats)",
    },
    {
        variableObjectKey: "pNN50",
        variable: "pNN50",
        unit: "(%)",
    },
    {
        variableObjectKey: "RRTriangularIndex",
        variable: "RR triangular index",
        unit: "-",
    },
    {
        variableObjectKey: "TINN",
        variable: "TINN",
        unit: "(ms)",
    },
];

export const freqeuncyDomainVariableUnitArray = [
    {
        variableObjectKey: "veryLowFrequency",
        variable: "Very Low Frequency",
        unit: "(ms2)",
    },
    {
        variableObjectKey: "lowFrequency",
        variable: "Low Frequency",
        unit: "(ms2)",
    },
    {
        variableObjectKey: "highFrequency",
        variable: "High Frequency",
        unit: "(ms2)",
    },
    {
        variableObjectKey: "LFNormalizedUnits",
        variable: "LF Normalized Units",
        unit: "(%)",
    },
    {
        variableObjectKey: "HFNormalizedUnits",
        variable: "HF Normalized Units",
        unit: "(%)",
    },
    {
        variableObjectKey: "LF_HFRatio",
        variable: "LF/HF ratio",
        unit: "-",
    },
    {
        variableObjectKey: "totalPower",
        variable: "Total power",
        unit: "(ms2)",
    },
];

export const variable_unit_array: {
    variableObjectKeyName: keyof IMultiSessionNonlinearStats;
    variableText: string;
    unit: string;
}[] = [
    {
        variableObjectKeyName: "SD1",
        variableText: "SD1",
        unit: "(ms)",
    },
    {
        variableObjectKeyName: "SD2",
        variableText: "SD2",
        unit: "(ms)",
    },
    {
        variableObjectKeyName: "SD2_SD1",
        variableText: "SD2/SD1",
        unit: "-",
    },
    {
        variableObjectKeyName: "sampleEntropy",
        variableText: "Sample Entropy (SampEn)",
        unit: "-",
    },
    {
        variableObjectKeyName: "cardiacSympatheticIndex",
        variableText: "Cardiac Sympathetic Index",
        unit: "-",
    },
    {
        variableObjectKeyName: "cardiacVagalIndex",
        variableText: "Cardiac Vagal Index",
        unit: "-",
    },
    {
        variableObjectKeyName: "modifiedCardiacSympatheticIndex",
        variableText: "Modified Cardiac Sympathetic Index",
        unit: "(ms2)",
    },
];
