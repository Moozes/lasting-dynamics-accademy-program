import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getFormatedDateString, resetURLPageParam } from "ui";

export const useDateRangeFilter = (URLSearchParamName: string) => {
    const [, setSearchParams] = useSearchParams();
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const onDateChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const isDateRangeSelected = Boolean(startDate && endDate);

    const clear = () => {
        setStartDate(null);
        setEndDate(null);
    };

    const updateURLWithDateRange = () => {
        if (isDateRangeSelected) {
            setSearchParams((prev) => {
                prev.set(URLSearchParamName, `${getFormatedDateString(startDate)},${getFormatedDateString(endDate)}`);
                resetURLPageParam(prev);
                return prev;
            });
        } else {
            setSearchParams((prev) => {
                prev.delete(URLSearchParamName);
                return prev;
            });
        }
    };

    const onCalendarClose = () => {
        updateURLWithDateRange();
        if (!isDateRangeSelected) {
            clear();
        }
    };

    useEffect(() => {
        updateURLWithDateRange();
    }, [isDateRangeSelected]);

    return {
        startDate,
        endDate,
        onDateChange,
        onCalendarClose,
        clear,
        isDateRangeSelected,
    };
};
