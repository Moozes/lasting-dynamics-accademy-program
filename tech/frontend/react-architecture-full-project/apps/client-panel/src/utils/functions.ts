import { intervalToDuration } from "date-fns";
import { first, round, upperCase, words } from "lodash";

import { AnyObject, lightTheme, UserRoleEnum } from "ui";

import { FieldNameFilledStatusArray } from "@app-types/index";

import i18n from "./i18n";

export const getMediaQueryMaxWidthString = (maxWidth: string) => {
    return `@media only screen and (max-width: ${maxWidth})`;
};

// Add zero if num has one digit
export const zeroPad = (num: number | undefined) => String(num || "0").padStart(2, "0");

export const format_hh_mm_ss = (milliseconds: number) => {
    const duration = intervalToDuration({ start: 0, end: milliseconds });
    const formatedDuration = `${zeroPad(duration.hours!)}:${zeroPad(duration.minutes!)}:${zeroPad(duration.seconds!)}`;
    return formatedDuration;
};

export const formatNonFilledFields = (fields: FieldNameFilledStatusArray, humanReadableNames: string[]) => {
    let res: string[] = [];
    fields.forEach((obj, idx) => {
        if (!obj.filled) res.push(humanReadableNames[idx]);
    });

    // remove duplicates
    res = [...new Set(res)];

    return res;
};

// returns [{fieldName: "...", filled: true or false}]
export const constructStatusArray = (arr: string[], values: AnyObject) =>
    arr.reduce<FieldNameFilledStatusArray>((acc, current) => {
        return acc.concat({
            fieldName: current,
            filled: Boolean(values[current]),
        });
    }, []);

export const getRoleValue = (role: string | undefined) => {
    const RolesMap = new Map();
    RolesMap.set(UserRoleEnum.WORKER, { text: "Worker", color: lightTheme.palette.primary.blue });
    RolesMap.set(UserRoleEnum.ERGONOMIST, { text: "Ergonomist", color: lightTheme.palette.primary.main });
    RolesMap.set(UserRoleEnum.WERGONIC_ADMIN, { text: "Admin", color: lightTheme.palette.primary.blueDark });
    RolesMap.set(UserRoleEnum.ORG_ADMIN, { text: "Admin", color: lightTheme.palette.primary.blueDark });
    if (RolesMap.has(role)) {
        return { text: i18n.t(RolesMap.get(role).text), color: RolesMap.get(role).color };
    }
    return { text: i18n.t("Not Assigned"), color: "gray" };
};

// todo delete and use getInitials instead defined down below
export const GetInitials = (string1?: string | null, string2?: string) => {
    let firstLetter = "";
    let secondLetter = "";
    if (string1 && string2) {
        firstLetter = string1 && string1?.length > 0 ? string1.charAt(0) : "";
        secondLetter = string2 && string2?.length > 0 ? string2.charAt(0) : "";
    } else if (string1) {
        firstLetter = string1 && string1?.length > 0 ? string1.charAt(0) : "";
        secondLetter = string1 && string1?.length > 1 ? string1.charAt(1) : "";
    }
    return `${firstLetter}${secondLetter}`;
};

export const getTwoInitialsAtMost = (name: string | undefined) => {
    if (!name) return "";

    const wordsArray = words(name);

    // Handle single word case
    if (wordsArray.length === 1) {
        const word = wordsArray[0];
        return upperCase(word.slice(0, 2));
    }

    // Handle multiple words - take first two words' initials
    return wordsArray
        .slice(0, 2)
        .map((word) => upperCase(first(word)))
        .join("");
};

// use displayOrFallback from ui instead of this
export const fillIfNull = (data: number | null) => {
    if (data == null) return "-";
    if (typeof data === "number") {
        return `${round(data, 2)}`;
    }
    return data;
};
