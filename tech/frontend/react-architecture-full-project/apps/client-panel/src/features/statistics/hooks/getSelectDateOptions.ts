import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useTranslationV2 } from "ui";

import { URLParamsToChange } from "../types";
import { getPreviousXDaysStartDateString, getTodayDateString } from "../utils";

type Value = "today" | "week" | "month" | "custom";

export function useGetSelectDateOptions(urlParamsToChange: URLParamsToChange) {
    const t = useTranslationV2();
    const [value, setValue] = useState<Value>("today");
    const [searchParams, setSearchParams] = useSearchParams();

    // Sync select input value with URLSearchParams
    useEffect(() => {
        if (urlParamsToChange === "user_dates") {
            if (
                searchParams.get("user_start_date") === getTodayDateString() &&
                searchParams.get("user_end_date") === getTodayDateString()
            ) {
                setValue("today");
            } else if (
                searchParams.get("user_start_date") === getPreviousXDaysStartDateString(6) &&
                searchParams.get("user_end_date") === getTodayDateString()
            ) {
                setValue("week");
            } else if (
                searchParams.get("user_start_date") === getPreviousXDaysStartDateString(29) &&
                searchParams.get("user_end_date") === getTodayDateString()
            ) {
                setValue("month");
            } else {
                setValue("custom");
            }
        } else if (urlParamsToChange === "session_dates") {
            if (
                searchParams.get("session_start_date") === getTodayDateString() &&
                searchParams.get("session_end_date") === getTodayDateString()
            ) {
                setValue("today");
            } else if (
                searchParams.get("session_start_date") === getPreviousXDaysStartDateString(6) &&
                searchParams.get("session_end_date") === getTodayDateString()
            ) {
                setValue("week");
            } else if (
                searchParams.get("session_start_date") === getPreviousXDaysStartDateString(29) &&
                searchParams.get("session_end_date") === getTodayDateString()
            ) {
                setValue("month");
            } else {
                setValue("custom");
            }
        } else if (urlParamsToChange === "ramp_dates") {
            if (
                searchParams.get("RAMP_start_date") === getTodayDateString() &&
                searchParams.get("RAMP_end_date") === getTodayDateString()
            ) {
                setValue("today");
            } else if (
                searchParams.get("RAMP_start_date") === getPreviousXDaysStartDateString(6) &&
                searchParams.get("RAMP_end_date") === getTodayDateString()
            ) {
                setValue("week");
            } else if (
                searchParams.get("RAMP_start_date") === getPreviousXDaysStartDateString(29) &&
                searchParams.get("RAMP_end_date") === getTodayDateString()
            ) {
                setValue("month");
            } else {
                setValue("custom");
            }
        }
    }, [searchParams]);

    const handleClick = (option: Value, urlParams: URLParamsToChange) => {
        if (option === "today") {
            if (urlParams === "user_dates") {
                setSearchParams((prev) => {
                    prev.set("user_start_date", getTodayDateString());
                    prev.set("user_end_date", getTodayDateString());
                    return prev;
                });
            } else if (urlParams === "session_dates") {
                setSearchParams((prev) => {
                    prev.set("session_start_date", getTodayDateString());
                    prev.set("session_end_date", getTodayDateString());
                    return prev;
                });
            } else if (urlParams === "ramp_dates") {
                setSearchParams((prev) => {
                    prev.set("RAMP_start_date", getTodayDateString());
                    prev.set("RAMP_end_date", getTodayDateString());
                    return prev;
                });
            }
        } else if (option === "week") {
            if (urlParams === "user_dates") {
                setSearchParams((prev) => {
                    prev.set("user_start_date", getPreviousXDaysStartDateString(6));
                    prev.set("user_end_date", getTodayDateString());
                    return prev;
                });
            } else if (urlParams === "session_dates") {
                setSearchParams((prev) => {
                    prev.set("session_start_date", getPreviousXDaysStartDateString(6));
                    prev.set("session_end_date", getTodayDateString());
                    return prev;
                });
            } else if (urlParams === "ramp_dates") {
                setSearchParams((prev) => {
                    prev.set("RAMP_start_date", getPreviousXDaysStartDateString(6));
                    prev.set("RAMP_end_date", getTodayDateString());
                    return prev;
                });
            }
        } else if (option === "month") {
            if (urlParams === "user_dates") {
                setSearchParams((prev) => {
                    prev.set("user_start_date", getPreviousXDaysStartDateString(29));
                    prev.set("user_end_date", getTodayDateString());
                    return prev;
                });
            } else if (urlParams === "session_dates") {
                setSearchParams((prev) => {
                    prev.set("session_start_date", getPreviousXDaysStartDateString(29));
                    prev.set("session_end_date", getTodayDateString());
                    return prev;
                });
            } else if (urlParams === "ramp_dates") {
                setSearchParams((prev) => {
                    prev.set("RAMP_start_date", getPreviousXDaysStartDateString(29));
                    prev.set("RAMP_end_date", getTodayDateString());
                    return prev;
                });
            }
        }
        setValue(option);
    };

    const options = [
        {
            value: "today",
            display: t("today"),
            onClick: () => handleClick("today", urlParamsToChange),
        },
        {
            value: "week",
            display: t("week"),
            onClick: () => handleClick("week", urlParamsToChange),
        },
        {
            value: "month",
            display: t("month"),
            onClick: () => handleClick("month", urlParamsToChange),
        },
    ];

    if (value === "custom")
        options.push({
            value: "custom",
            display: t("custom"),
            onClick: () => {},
        });

    return {
        options,
        value,
        setValue,
    };
}
