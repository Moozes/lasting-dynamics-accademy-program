/* eslint-disable no-nested-ternary */
import { round } from "lodash";

import { TNOAnglesEnum } from "../types";

export const formatHeterogeneousValue = (value: string | number | null | undefined) => {
    if (value === null || value === undefined) return "-";
    const parsedValue = parseFloat(`${value}`);
    if (Number.isNaN(parsedValue)) return value;
    return round(parseFloat(`${value}`), 2);
};

export function formatAndSortTime(limbTime: { [key: string]: number }) {
    const formattedTime = Object.entries(limbTime).reduce((result: any, [key, value]) => {
        const [type, label] = key.split("_");

        // Add degree sign to labels (10 => 10° / 0-20 => 0°-20°)
        const formattedLabel = label.includes("-")
            ? label
                  .split("-")
                  .map((num) => `${num}°`)
                  .join("-")
            : label.endsWith("°")
            ? label
            : `${label}°`;

        const groupLabel =
            formattedLabel === "<10°" || formattedLabel === ">60°"
                ? TNOAnglesEnum.lt10_or_gt60
                : formattedLabel === "<0°" || formattedLabel === ">20°"
                ? TNOAnglesEnum.lt0_or_gt20
                : formattedLabel;

        if (!result[groupLabel]) {
            /* eslint-disable no-param-reassign */
            result[groupLabel] = { label: groupLabel, static: 0, dynamic: 0 };
        }
        /* eslint-disable no-param-reassign */
        result[groupLabel][type] += value;
        return result;
    }, {});

    const formattedTimeArray = Object.values(formattedTime);
    const nonOrLabels = formattedTimeArray.filter((item: any) => !item.label.includes("or"));
    const orLabels = formattedTimeArray.filter((item: any) => item.label.includes("or"));
    const finalGroupedResultArray = nonOrLabels.concat(orLabels);

    return finalGroupedResultArray;
}

// export function formatAndSortTime(limbTime: { [key: string]: number }) {
//     const formattedTime = Object.entries(limbTime).reduce((result: any, [key, value]) => {
//         const [type, label] = key.split("_");
//         /* eslint-disable no-nested-ternary */
//         const groupLabel =
//             label === "<10" || label === ">60" ? "<10 or >60" : label === "<0" || label === ">20" ? "<0 or >20" : label;

//         if (!result[groupLabel]) {
//             /* eslint-disable no-param-reassign */
//             result[groupLabel] = { label: groupLabel, static: 0, dynamic: 0 };
//         }
//         /* eslint-disable no-param-reassign */
//         result[groupLabel][type] += value;
//         return result;
//     }, {});

//     const formattedTimeArray = Object.values(formattedTime);
//     const nonOrLabels = formattedTimeArray.filter((item: any) => !item.label.includes("or"));
//     const orLabels = formattedTimeArray.filter((item: any) => item.label.includes("or"));
//     const finalGroupedResultArray = nonOrLabels.concat(orLabels);

//     return finalGroupedResultArray;
// }

export const formatTime = (timeInSeconds: number): string => {
    const hours: number = Math.floor(timeInSeconds / 3600);
    const minutes: number = Math.floor((timeInSeconds % 3600) / 60);
    const seconds: number = Math.floor(timeInSeconds % 60);

    return [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0"),
    ].join(":");
};
