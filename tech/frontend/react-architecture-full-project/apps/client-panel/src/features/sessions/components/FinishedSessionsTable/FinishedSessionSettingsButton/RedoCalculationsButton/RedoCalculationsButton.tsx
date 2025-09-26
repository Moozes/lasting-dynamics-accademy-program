import { useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { Box, CircularProgress, useTheme } from "@mui/material";

import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, DEFAULT_SEARCH_TERM, RedoIcon, Typography, useTranslationV2 } from "ui";

import { IHandleMenuClose, WergonicUserError } from "@app-types/index";
import { useRedoSessionCalculationsMutation } from "@features/sessions/queries";
import { ISelectedSessionProp } from "@features/sessions/types";
import { SETTINGS_ICON_DIMENSIONS } from "@features/sessions/utils";
import { TABLE_SETTINGS_MENU_ITEM_TEXT_ML } from "@utils/index";

import { RedoCalculationsButtonStyles } from "./inlineStyles";

type Props = ISelectedSessionProp & IHandleMenuClose;

export const RedoCalculationsButton = ({ selectedSession, handleMenuClose }: Props) => {
    const theme = useTheme();
    const [searchParams] = useSearchParams();
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();
    const t = useTranslationV2();
    const {
        mutate: redoCalculations,
        isLoading,
        reset,
    } = useRedoSessionCalculationsMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [
                    "sessions",
                    searchParams.get("page") || DEFAULT_PAGE,
                    searchParams.get("page_size") || DEFAULT_PAGE_SIZE,
                    searchParams.get("ordering") || undefined,
                    searchParams.get("search") || DEFAULT_SEARCH_TERM,
                ],
            });
            enqueueSnackbar(t("sessions_management.restart_processing_success"));
            handleMenuClose();
            reset();
        },
        onError: (err: WergonicUserError) => {
            let message;
            if (err.response.data?.detail) {
                message = err.response.data?.detail;
            } else {
                message = t("Something_went_Wrong");
            }
            handleMenuClose();
            enqueueSnackbar(message, { severity: "error" });
        },
    });

    const handleRedoCalculations = () => {
        redoCalculations(selectedSession.id);
    };

    return (
        <Box sx={RedoCalculationsButtonStyles} display="flex" alignItems="center" onClick={handleRedoCalculations}>
            {isLoading ? <CircularProgress size="20px" /> : <RedoIcon {...SETTINGS_ICON_DIMENSIONS} />}
            <Typography ml={TABLE_SETTINGS_MENU_ITEM_TEXT_ML} variant="body1" color={theme.color_system.text.primary}>
                {t("sessions_management.restart_processing")}
            </Typography>
        </Box>
    );
};
