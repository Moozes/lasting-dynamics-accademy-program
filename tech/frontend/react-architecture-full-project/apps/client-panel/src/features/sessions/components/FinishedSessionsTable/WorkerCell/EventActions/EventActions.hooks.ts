import { useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { useTranslationV2 } from "ui";

import { useDeleteEventMutation, useUpdateEventMutation } from "@queries/index";

import { IntervalTypeEnum } from "./EventActions.type";

export const useDeleteEvent = () => {
    const t = useTranslationV2();
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();
    const {
        mutate: deleteEvent,
        isLoading: isDeleteEventLoading,
        reset,
    } = useDeleteEventMutation({
        onSuccess: () => {
            enqueueSnackbar(t("category_and_labels_management.event_deleted_successfully"));
            queryClient.invalidateQueries({
                queryKey: ["sessions"],
            });
            reset();
        },
        onError: (err: any) => {
            let message;
            const serverErrorMessage = err.response?.data.detail || "";
            if (serverErrorMessage) {
                message = `${t("Something_went_Wrong")}: ${serverErrorMessage}`;
            } else {
                message = t("Something_went_Wrong");
            }
            enqueueSnackbar(message, { severity: "error" });
        },
    });

    return {
        deleteEvent,
        isDeleteEventLoading,
    };
};

export const useUpdateEvent = () => {
    const t = useTranslationV2();
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();
    const {
        mutate: updateEvent,
        isLoading: isUpdateEventLoading,
        reset,
    } = useUpdateEventMutation({
        onSuccess: () => {
            enqueueSnackbar(t("category_and_labels_management.event_edited_successfully"));
            queryClient.invalidateQueries({
                queryKey: ["sessions"],
            });
            reset();
        },
        onError: (err: any) => {
            let message;
            const serverErrorMessage = err.response?.data.detail || "";
            if (serverErrorMessage) {
                message = `${t("Something_went_Wrong")}: ${serverErrorMessage}`;
            } else {
                message = t("Something_went_Wrong");
            }
            enqueueSnackbar(message, { severity: "error" });
        },
    });

    return {
        updateEvent,
        isUpdateEventLoading,
    };
};

export const usePopovers = () => {
    const elmRef = useRef<HTMLDivElement | null>(null)!;
    const elmRef2 = useRef<HTMLDivElement | null>(null)!;
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
    const [anchorEl2, setAnchorEl2] = useState<HTMLDivElement | null>(null);

    const handleClick = () => {
        setAnchorEl(elmRef.current);
    };
    const handleClick2 = () => {
        setAnchorEl2(elmRef2.current);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);

    return {
        elmRef,
        elmRef2,
        handleClose,
        handleClick,
        open,
        anchorEl,
        handleClose2,
        handleClick2,
        open2,
        anchorEl2,
    };
};

export const useAssignTimeState = () => {
    const [timeFrame, setTimeFrame] = useState<IntervalTypeEnum | "">("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    useEffect(() => {
        if (timeFrame === IntervalTypeEnum.whole) {
            setStartTime("");
            setEndTime("");
        }
    }, [timeFrame]);

    return {
        timeFrame,
        setTimeFrame,
        startTime,
        setStartTime,
        endTime,
        setEndTime,
    };
};
