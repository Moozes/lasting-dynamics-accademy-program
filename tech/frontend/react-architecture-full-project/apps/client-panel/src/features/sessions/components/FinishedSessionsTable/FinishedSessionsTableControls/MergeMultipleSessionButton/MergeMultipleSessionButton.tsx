import { FC, useMemo, useReducer, useState } from "react";
import { useSnackbar } from "notistack";

import { Box, Tooltip } from "@mui/material";

import { AlertOctagon, Btn, DataTable, type HTMLDivProps, Typography, useTranslationV2 } from "ui";

import { ISelectedRowsProp } from "@app-types/index";
import { AlertDialog, FormDialog } from "@components/index";
import { useMergeSessionsMutation } from "@features/sessions/queries";

import { ComparisonInfoDialog } from "./ComparisonInfoDialog";
import { popoverItemStyles, tooltipStyle } from "./inlineStyles";
import { useColumns } from "./MergeSessionButton.hooks";

type Props = HTMLDivProps & ISelectedRowsProp;

export const MergeMultipleSessionButton: FC<Props> = ({ selectedRows, setSelectedRows, ...props }) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const columns = useColumns();
    const selectedRowsValues = useMemo(() => {
        return selectedRows.map((row) => row.original);
    }, [selectedRows]);

    const [isMergeActionOpen, setIsMergeActionOpen] = useReducer((state) => !state, false);
    const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
    const [isInfoDialogOpen, setIsInfoDialogOpen] = useState(false);

    const {
        mutate: mergeSessions,
        isLoading: multipleSessionsMergeIsLoading,
        reset: multipleSessionsMergeReset,
    } = useMergeSessionsMutation({
        onSuccess: () => {
            enqueueSnackbar(t("sessions_management.merge_multiple_sessions.sessions_merge_multiple_success"));
            setIsMergeActionOpen();
            multipleSessionsMergeReset();
            setSelectedRows([]);
        },
        onError: () => {
            setIsMergeActionOpen();
            setIsErrorDialogOpen(true);
        },
    });

    const handleMerge = () => {
        const sessionIds = selectedRows.map((row) => parseInt(row.values.id, 10));
        mergeSessions(sessionIds);
    };

    function onClickShowMergeDialog() {
        if (selectedRows.length < 2) {
            setIsInfoDialogOpen(true);
            return;
        }
        setIsMergeActionOpen();
    }

    return (
        <div {...props}>
            <Tooltip
                title={
                    selectedRows.length === 0
                        ? t("sessions_management.merge_multiple_sessions.sessions_merge_multiple_alert")
                        : ""
                }
                PopperProps={{
                    sx: tooltipStyle,
                }}
            >
                <span>
                    <Box
                        onClick={() => onClickShowMergeDialog()}
                        // disabled={selectedRows.length === 0}
                        sx={popoverItemStyles}
                    >
                        {t("merge")}
                    </Box>
                </span>
            </Tooltip>

            <FormDialog
                header={t("sessions_management.merge_multiple_sessions.merge_header")}
                dialogOpen={isMergeActionOpen}
                toggleDialog={setIsMergeActionOpen}
                onSubmit={handleMerge}
                initialValues={{}}
                rightSideAction={
                    <Btn type="submit" variant="primary-contained" loading={multipleSessionsMergeIsLoading}>
                        {t("Merge")}
                    </Btn>
                }
            >
                <Box marginX={2} mb={2}>
                    <Typography variant="body1" mb={2}>
                        {t("sessions_management.merge_multiple_sessions.sessions_merge_multiple_introduction")}
                    </Typography>
                    <DataTable data={selectedRowsValues} columns={columns} hideColumns={["id"]} />
                    <Typography variant="body2" mt={2}>
                        {t("sessions_management.merge_multiple_sessions.sessions_merge_multiple_warning")}
                    </Typography>
                </Box>
            </FormDialog>

            <AlertDialog
                dialogOpen={isErrorDialogOpen}
                toggleDialog={() => setIsErrorDialogOpen(false)}
                dialogIcon={<AlertOctagon />}
                primaryText={t("sessions_management.merge_multiple_sessions.merge_error")}
                secondaryText={
                    <>
                        <Typography variant="body1">
                            {t("sessions_management.merge_multiple_sessions.sessions_merge_conflict.header")}
                        </Typography>
                        <ul>
                            <li>
                                <Typography variant="body1">
                                    {t(
                                        "sessions_management.merge_multiple_sessions.sessions_merge_conflict.overlapping_timings"
                                    )}
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body1">
                                    {t(
                                        "sessions_management.merge_multiple_sessions.sessions_merge_conflict.conflicting_fields"
                                    )}
                                </Typography>
                            </li>
                        </ul>
                        <Typography variant="body1">
                            {t("sessions_management.merge_multiple_sessions.sessions_merge_conflict.merge_criteria")}
                        </Typography>
                    </>
                }
                rightSideAction={
                    <Btn onClick={() => setIsErrorDialogOpen(false)} variant="primary-contained">
                        {t("close")}
                    </Btn>
                }
                showCancelButton={false}
            />

            <ComparisonInfoDialog
                open={isInfoDialogOpen}
                onClose={() => setIsInfoDialogOpen(false)}
                infoArray={[t("sessions_management.merge_multiple_sessions.merge_info.select_at_least_two")]}
            />
        </div>
    );
};
