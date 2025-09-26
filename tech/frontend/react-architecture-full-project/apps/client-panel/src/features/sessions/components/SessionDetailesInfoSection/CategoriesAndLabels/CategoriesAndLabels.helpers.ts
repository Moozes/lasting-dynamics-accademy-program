import { differenceInHours, differenceInMinutes, parseISO } from "date-fns";

import { IEvent, ILabelAndCategory } from "@app-types/index";

// input: "hh:mm:ss", "hh:mm:ss"
// output: the difference X hours and Y minutes in the form of "Xh Ym"
// if one of the inputs is falsy, return ""
function formatTimeDifference(startTime: string | null, endTime: string | null) {
    if (!startTime || !endTime) return "";

    // Convert hh:mm:ss to ISO format strings for parsing
    const startIso = `2024-01-01T${startTime}Z`; // Use a dummy date
    const endIso = `2024-01-01T${endTime}Z`;

    // Parse the time strings to Date objects
    const startDate = parseISO(startIso);
    const endDate = parseISO(endIso);

    // Calculate the differences
    const hours = differenceInHours(endDate, startDate);
    const totalMinutes = differenceInMinutes(endDate, startDate);
    const minutes = totalMinutes % 60; // Get remaining minutes after hours

    // Format the output
    if (hours && minutes) {
        return `${hours}h ${minutes}m`;
    }
    if (hours === 0) {
        return `${minutes}m`;
    }
    if (minutes === 0) {
        return `${hours}h`;
    }
    // hours = 0 and minutes = 0
    return "";
}

type ILabelAndCategoryWithTimeRange = ILabelAndCategory & {
    start_time: string | null;
    end_time: string | null;
};

type IFormatedData = {
    categoryId: number;
    categoryName: string;
    labels: {
        labelId: number;
        labelName: string;
        duration: string;
    }[];
}[];

// each event has a labels array, but that array is gonna have one label only
// each label object has its parent category inside of it
// we want to make it the other way around, by constructing a categories array while each category has its labels inside of it
export const getFormatedData = (events: IEvent[]): { formatedData: IFormatedData } => {
    // put all labels in an array
    const labels: ILabelAndCategoryWithTimeRange[] = [];
    events.forEach((event) => {
        if (event.labels.length > 0)
            labels.push({
                ...event.labels[0],
                start_time: event.start_time,
                end_time: event.end_time,
            });
    });

    // extract unique category ids
    const categoryIds: number[] = [...new Set(labels.map((label) => label.label_category.id))];

    // construct final object
    const formatedData: IFormatedData = categoryIds.map((categoryId) => {
        // find here is not gonna be undefined
        const categoryName = labels.find((label) => label.label_category.id == categoryId)!.label_category
            .category_name;
        const labelsAssociatedWithCurrentCategory = labels.filter((label) => label.label_category.id == categoryId);
        return {
            categoryId,
            categoryName,
            labels: labelsAssociatedWithCurrentCategory.map((label) => ({
                labelId: label.id,
                labelName: label.label_name,
                duration: formatTimeDifference(label.start_time, label.end_time),
            })),
        };
    });

    return {
        formatedData,
    };
};
