/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSearchParams } from "react-router-dom";

import { useTranslationV2 } from "ui";

import { getDateDifferenceInDays, getPreviousXDaysStartDateString, getTodayDateString } from "../utils";

export function useTooltipMessage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const t = useTranslationV2();
    let activeUsersTooltipMessage = "";
    let sessionsTooltipMessage = "";
    let rampAssesmentsTooltipMessage = "";

    const user_start_date_string = searchParams.get("user_start_date") || getTodayDateString();
    const user_end_date_string = searchParams.get("user_end_date") || getTodayDateString();
    const session_start_date_string = searchParams.get("session_start_date") || getTodayDateString();
    const session_end_date_string = searchParams.get("session_end_date") || getTodayDateString();
    const RAMP_start_date_string = searchParams.get("RAMP_start_date") || getTodayDateString();
    const RAMP_end_date_string = searchParams.get("RAMP_end_date") || getTodayDateString();

    if (user_start_date_string === getTodayDateString() && user_end_date_string === getTodayDateString()) {
        activeUsersTooltipMessage = `${t("statistics.compared_to_the_previous")} ${t("day")}`;
    } else if (
        user_start_date_string === getPreviousXDaysStartDateString(6) &&
        user_end_date_string === getTodayDateString()
    ) {
        activeUsersTooltipMessage = `${t("statistics.compared_to_the_previous")} ${t("week")}`;
    } else if (
        user_start_date_string === getPreviousXDaysStartDateString(29) &&
        user_end_date_string === getTodayDateString()
    ) {
        activeUsersTooltipMessage = `${t("statistics.compared_to_the_previous")} ${t("month")}`;
    } else {
        const differenceInDays = getDateDifferenceInDays(user_start_date_string, user_end_date_string);
        activeUsersTooltipMessage = `${t("statistics.compared_to_the_previous")} ${differenceInDays} ${t("days")}`;
    }
    // ----
    if (session_start_date_string === getTodayDateString() && session_end_date_string === getTodayDateString()) {
        sessionsTooltipMessage = `${t("statistics.compared_to_the_previous")} ${t("day")}`;
    } else if (
        session_start_date_string === getPreviousXDaysStartDateString(6) &&
        session_end_date_string === getTodayDateString()
    ) {
        sessionsTooltipMessage = `${t("statistics.compared_to_the_previous")} ${t("week")}`;
    } else if (
        session_start_date_string === getPreviousXDaysStartDateString(29) &&
        session_end_date_string === getTodayDateString()
    ) {
        sessionsTooltipMessage = `${t("statistics.compared_to_the_previous")} ${t("month")}`;
    } else {
        const differenceInDays = getDateDifferenceInDays(session_start_date_string, session_end_date_string);
        sessionsTooltipMessage = `${t("statistics.compared_to_the_previous")} ${differenceInDays} ${t("days")}`;
    }
    // ----
    if (RAMP_start_date_string === getTodayDateString() && RAMP_end_date_string === getTodayDateString()) {
        rampAssesmentsTooltipMessage = `${t("statistics.compared_to_the_previous")} ${t("day")}`;
    } else if (
        RAMP_start_date_string === getPreviousXDaysStartDateString(6) &&
        RAMP_end_date_string === getTodayDateString()
    ) {
        rampAssesmentsTooltipMessage = `${t("statistics.compared_to_the_previous")} ${t("week")}`;
    } else if (
        RAMP_start_date_string === getPreviousXDaysStartDateString(29) &&
        RAMP_end_date_string === getTodayDateString()
    ) {
        rampAssesmentsTooltipMessage = `${t("statistics.compared_to_the_previous")} ${t("month")}`;
    } else {
        const differenceInDays = getDateDifferenceInDays(RAMP_start_date_string, RAMP_end_date_string);
        rampAssesmentsTooltipMessage = `${t("statistics.compared_to_the_previous")} ${differenceInDays} ${t("days")}`;
    }

    return {
        activeUsersTooltipMessage,
        sessionsTooltipMessage,
        rampAssesmentsTooltipMessage,
    };
}
