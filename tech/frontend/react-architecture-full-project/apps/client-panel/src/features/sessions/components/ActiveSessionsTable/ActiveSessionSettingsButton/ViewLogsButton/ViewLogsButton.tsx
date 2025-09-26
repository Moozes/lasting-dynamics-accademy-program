import { FC, useReducer } from "react";

import { Box, useTheme } from "@mui/material";

import { DataTable, ListIcon, Typography, useTranslationV2 } from "ui";

import { BasicDialog } from "@components/index";
import { IViewLogsButton } from "@features/sessions/types";
import { TABLE_SETTINGS_MENU_ITEM_TEXT_ML } from "@utils/index";

import { useColumns } from "./ViewLogsButton.hooks";
import { useSessionsLogsQuery } from "./ViewLogsButton.queries";
import { ViewLogsButtonStyles } from "./ViewLogsButton.styles";

export const ViewLogsButton: FC<IViewLogsButton & { handleMenuClose: () => void }> = ({
    selectedRow,
    handleMenuClose,
}) => {
    const t = useTranslationV2();
    const theme = useTheme();
    const columns = useColumns();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, isLoading, isFetching, isError, error } = useSessionsLogsQuery(selectedRow.id);
    const [isViewLogActionOpen, setIsViewLogActionOpen] = useReducer((state) => {
        return !state;
    }, false);

    const closeDialog = () => {
        setIsViewLogActionOpen();
        handleMenuClose();
    };

    // Check if there are logs available
    const hasLogs = (data?.data?.results?.length ?? 0) > 0;

    if (!hasLogs) {
        return null; // Hide the button if there are no logs
    }

    return (
        <>
            <Box sx={ViewLogsButtonStyles} display="flex" alignItems="center" onClick={setIsViewLogActionOpen}>
                <ListIcon />
                <Typography
                    ml={TABLE_SETTINGS_MENU_ITEM_TEXT_ML}
                    variant="body1"
                    color={theme.color_system.text.primary}
                >
                    {t("sessions_management.view_logs")}
                </Typography>
            </Box>
            <BasicDialog
                dialogOpen={isViewLogActionOpen}
                header={t("sessions_management.Session_logs")}
                toggleDialog={closeDialog}
                showActions={false}
            >
                <DataTable
                    columns={columns}
                    data={data?.data.results}
                    disableSorting
                    emptyTableMessage={t("no_logs")}
                />
            </BasicDialog>
        </>
    );
};
