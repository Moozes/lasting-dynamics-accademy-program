import { percentiles } from "../../types";

export const getPercentileValue = (percentile: string, limb: string, rowData?: percentiles): number | undefined => {
    /* eslint-disable no-else-return */
    if (rowData) {
        if (percentile === "10") {
            return rowData.percentile_10[limb];
        } else if (percentile === "50") {
            return rowData.percentile_50[limb];
        } else if (percentile === "90") {
            return rowData.percentile_90[limb];
        } else if (percentile === "99") {
            return rowData.percentile_99[limb];
        }
    }
    return 0;
};

export const formatDuration = (milliseconds: number) => {
    const pad = (value: number) => {
        return value < 10 ? `0${value}` : `${value}`;
    };
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));

    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    return formattedTime;
};

export const formatAndTranslateTitle = (limb: string, trasnlateTitle: (title: string) => string) => {
    let formattedTitle = limb
        .split(/(?=[A-Z])/)
        .join(" ")
        .toLowerCase();
    formattedTitle = trasnlateTitle(formattedTitle);

    return formattedTitle;
};
