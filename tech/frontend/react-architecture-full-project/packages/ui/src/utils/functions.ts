import { format } from "date-fns";

// use this to reset URL param "page" to 1, whenever other URL filters change, to fetch the first page of the filtered query
export const resetURLPageParam = (searchParams: URLSearchParams): void => {
    const page = searchParams.get("page");
    if (page) {
        searchParams.set("page", "1");
    }
};

export const getFormatedDateString = (date: Date | null): string => {
    if (!date) return "";
    return format(date, "yyyy-MM-dd");
};

export const displayOrFallback = <T>(value: T, fallback?: string, showFallback?: boolean): T | string => {
    const defaultFallback = "-";
    const defaultConditionToShowFallback = value === null || value === undefined || value === "";
    const fallbackReturn = fallback !== undefined ? fallback : defaultFallback;

    if (showFallback !== undefined) {
        return showFallback ? fallbackReturn : value;
    }

    return defaultConditionToShowFallback ? fallbackReturn : value;
};
