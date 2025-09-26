import { add, formatDistanceStrict } from "date-fns";

import { getFormatedDateString } from "ui";
// Normalise values outside of 0-100, used in custom progress bar
export const normalise = (value: number, min: number, max: number) => ((value - min) * 100) / (max - min);

export const getTodayDateString = () => getFormatedDateString(new Date());

// Substratct 30 days from current date, and return formated string
export const getPrevious30DaysStartDateString = () => {
    const previous30DaysStartDate = add(new Date(), { days: -30 });
    return getFormatedDateString(previous30DaysStartDate);
};
// Substratct X days from current date, and return formated string, X can be positive or negative: same result
export const getPreviousXDaysStartDateString = (daysToSubstract: number) => {
    let formatedDateString = "";
    if (daysToSubstract < 0) {
        const previousXDaysStartDate = add(new Date(), { days: daysToSubstract });
        formatedDateString = getFormatedDateString(previousXDaysStartDate);
    } else {
        const previousXDaysStartDate = add(new Date(), { days: -1 * daysToSubstract });
        formatedDateString = getFormatedDateString(previousXDaysStartDate);
    }
    return formatedDateString;
};

export const getDateDifferenceInDays = (d1: string, d2: string) => {
    const dayCountString = formatDistanceStrict(new Date(d1), new Date(d2), { unit: "day" }).split(" ")[0];
    const dayCountNumber = parseInt(dayCountString, 10) + 1;
    return dayCountNumber.toString();
};
