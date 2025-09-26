import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getFormatedDateString } from "ui";

import { URLParamsToChange } from "../types";

export const useDatePicker = (urlParamsToChange: URLParamsToChange) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(null);
    const onDateChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const onCalendarClose = () => {
        if (startDate !== null && endDate !== null) {
            if (urlParamsToChange === "user_dates") {
                setSearchParams((prev) => {
                    prev.set("user_start_date", getFormatedDateString(startDate));
                    prev.set("user_end_date", getFormatedDateString(endDate));
                    return prev;
                });
            } else if (urlParamsToChange === "session_dates") {
                setSearchParams((prev) => {
                    prev.set("session_start_date", getFormatedDateString(startDate));
                    prev.set("session_end_date", getFormatedDateString(endDate));
                    return prev;
                });
            } else if (urlParamsToChange === "ramp_dates") {
                setSearchParams((prev) => {
                    prev.set("RAMP_start_date", getFormatedDateString(startDate));
                    prev.set("RAMP_end_date", getFormatedDateString(endDate));
                    return prev;
                });
            }
        }
    };

    return {
        startDate,
        endDate,
        onDateChange,
        onCalendarClose,
    };
};
