/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getFormatedDateString, resetURLPageParam, useTranslationV2 } from "ui";

import { AssessmentsEnum, AssessmentStatusEnum } from "@app-types/index";

export const useStatusOptions = () => {
    const t = useTranslationV2();
    return {
        statusOptions: [
            { value: "", label: t("none") },
            { value: AssessmentStatusEnum.COMPLETED, label: t("completed") },
            { value: AssessmentStatusEnum.IN_PROGRESS, label: t("in_progress") },
            { value: AssessmentStatusEnum.PROCESSING, label: t("processing") },
        ],
    };
};

export const useDateRangePicker = () => {
    const URLSearchParamName = "date_range";
    const [searchParams, setSearchParams] = useSearchParams();
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const onDateChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const isDateRangeSelected = startDate && endDate;

    const clear = () => {
        setStartDate(null);
        setEndDate(null);
    };

    const setURLDateRangeParam = () => {
        if (isDateRangeSelected) {
            setSearchParams((prev) => {
                prev.set(URLSearchParamName, `${getFormatedDateString(startDate)},${getFormatedDateString(endDate)}`);
                resetURLPageParam(prev);
                return prev;
            });
        }
    };

    const onCalendarClose = () => {
        setURLDateRangeParam();
        if (!isDateRangeSelected) {
            clear();
        }
    };

    // sync daterange input with URL params
    useEffect(() => {
        setURLDateRangeParam();
        if (!isDateRangeSelected) {
            setSearchParams(
                (prev) => {
                    prev.delete(URLSearchParamName);
                    return prev;
                },
                { replace: true }
            );
        }
    }, [isDateRangeSelected, setSearchParams]);

    return {
        startDate,
        endDate,
        onDateChange,
        onCalendarClose,
        clear,
        isDateRangeSelected,
    };
};
