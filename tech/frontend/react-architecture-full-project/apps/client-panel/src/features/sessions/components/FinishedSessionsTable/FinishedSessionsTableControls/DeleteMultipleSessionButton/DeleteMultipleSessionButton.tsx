/* eslint-disable no-nested-ternary */
import { FC, useMemo, useReducer, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useSnackbar } from "notistack";
import randomWords from "random-words";

import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import {
    Btn,
    DataTable,
    FilledTextField,
    FormikOutlinedTextField,
    type HTMLDivProps,
    Typography,
    useTranslationV2,
} from "ui";

import { ISelectedRowsProp } from "@app-types/index";
import { authAtom } from "@atoms/index";
import { FormDialog } from "@components/index";
import * as styles from "@features/sessions/components/styles";
import { useDeleteMultipleSessionsMutation } from "@features/sessions/queries";
import { useVerifyWritePermission } from "@hooks/index";

import { useColumns, useDeleteMultipleSessionsForm } from "./DeleteMultipleSessionButton.hooks";
import { InfoDialog } from "./InfoDialog";
import { AlertTextStyles, popoverItemStyles, PopupIntroStyles } from "./inlineStyles";

type Props = HTMLDivProps & ISelectedRowsProp;

export const DeleteMultipleSessionButton: FC<Props> = ({ selectedRows, setSelectedRows, ...props }) => {
    const t = useTranslationV2();
    const [auth] = useAtom(authAtom);
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();
    const columns = useColumns();
    const selectedRowsValues = useMemo(() => {
        return selectedRows.map((row) => row.original);
    }, [selectedRows]);

    const [searchParams] = useSearchParams();

    const [isDeleteMultiSessionsActionOpen, setIsDeleteMultiSessionsActionOpen] = useReducer((state) => !state, false);
    const [randomWord, generateRandomWord] = useReducer(() => randomWords(1)[0], randomWords(1)[0]);
    const [isInfoDialogOpen, setIsInfoDialogOpen] = useState(false);

    const { deleteMultipleSessionsInitialValues, deleteMultipleSessionsValidationSchema } =
        useDeleteMultipleSessionsForm();
    const hasChangePermission = useVerifyWritePermission();
    const {
        mutate: deleteMultipleSessions,
        isLoading: multipleSessionsDeletionIsLoading,
        reset: multipleSessionsDeletionReset,
    } = useDeleteMultipleSessionsMutation({
        organizationId: auth.wergonicUser?.organization?.id || "", // empty string will cause backend error, for good debuging
        onSuccess: () => {
            setIsDeleteMultiSessionsActionOpen();
            queryClient.invalidateQueries({
                queryKey: ["sessions", searchParams.get("page"), searchParams.get("page_size")],
            });
            enqueueSnackbar(t("sessions_management.delete_multiple_sessions.sessions_deletion_multiple_success"));
            multipleSessionsDeletionReset();
            setSelectedRows([]); // Reset selected rows after successful deletion
        },
    });

    const handleDelete = () => {
        const sessionsIDS = selectedRows.map((session) => parseInt(session.values.id, 10));
        deleteMultipleSessions(sessionsIDS);
    };

    function onClickShowDeleteDialog() {
        if (selectedRows.length == 0) {
            setIsInfoDialogOpen(true);
            return;
        }
        generateRandomWord();
        setIsDeleteMultiSessionsActionOpen();
    }

    return (
        <div {...props}>
            <Tooltip
                title={
                    selectedRows.length === 0
                        ? t("sessions_management.delete_multiple_sessions.sesssions_deletion_multiple_alert")
                        : !hasChangePermission
                        ? t("sessions_management.delete_multiple_sessions.sessions_deletion_multiple_permission_alert")
                        : ""
                }
                PopperProps={{
                    sx: {
                        [`& .${tooltipClasses.tooltip}`]: {
                            backgroundColor: (theme) => theme.palette.primary.blue,
                            color: (theme) => theme.palette.common.white,
                            boxShadow: (theme) => theme.color_system.boxShadow.purple_20,
                            fontSize: 16,
                            fontWeight: 400,
                            padding: 1,
                        },
                    },
                }}
            >
                <span>
                    <Box
                        onClick={() => onClickShowDeleteDialog()}
                        // disabled={selectedRows.length === 0 || !hasChangePermission}
                        sx={popoverItemStyles}
                    >
                        {t("Delete")}
                    </Box>
                </span>
            </Tooltip>

            <FormDialog
                header={t("Delete")}
                dialogOpen={isDeleteMultiSessionsActionOpen}
                toggleDialog={setIsDeleteMultiSessionsActionOpen}
                initialValues={deleteMultipleSessionsInitialValues(randomWord)}
                validationSchema={deleteMultipleSessionsValidationSchema}
                onSubmit={handleDelete}
                rightSideAction={
                    <Btn
                        type="submit"
                        variant="danger-contained"
                        loading={multipleSessionsDeletionIsLoading}
                        startIcon={<DeleteForeverOutlinedIcon />}
                    >
                        {t("Delete")}
                    </Btn>
                }
            >
                <Box marginX={2}>
                    <Typography weight="meduim" variant="h6" sx={PopupIntroStyles}>
                        {t("sessions_management.delete_multiple_sessions.sessions_deletion_multiple_intro")}
                    </Typography>

                    <DataTable
                        data={selectedRowsValues}
                        columns={columns}
                        hideColumns={["id", "started_at", "updated_at"]}
                    />

                    <Alert severity="info" sx={styles.DeleteMultipleSessionsAlertStyle} icon={false}>
                        <>
                            <Typography variant="body2" sx={AlertTextStyles}>
                                {t("sessions_management.delete_multiple_sessions.sessions_deletion_multiple_warning")}
                            </Typography>
                            <Box
                                display="flex"
                                flexWrap="wrap"
                                alignItems="center"
                                justifyContent="space-between"
                                flexDirection="row"
                                mt={2}
                            >
                                <Box flexBasis="49%">
                                    <FilledTextField
                                        id="word"
                                        value={randomWord}
                                        endAdornment={
                                            <Tooltip title={t("Copy The Word")}>
                                                <IconButton
                                                    onClick={() => {
                                                        navigator.clipboard.writeText(randomWord);
                                                    }}
                                                    edge="end"
                                                >
                                                    <ContentCopyOutlinedIcon
                                                        sx={styles.ContentCopyOutlinedIconStyles}
                                                    />
                                                </IconButton>
                                            </Tooltip>
                                        }
                                    />
                                </Box>
                                <Box flexBasis="49%">
                                    <FormikOutlinedTextField
                                        id="word_confirmation"
                                        name="word_confirmation"
                                        type="text"
                                        placeholder={t("Confirm Word")}
                                        autoComplete="off"
                                    />
                                </Box>
                            </Box>
                        </>
                    </Alert>
                </Box>
            </FormDialog>
            <InfoDialog
                open={isInfoDialogOpen}
                onClose={() => setIsInfoDialogOpen(false)}
                infoArray={[t("sessions_management.select_at_least_one_session")]}
            />
        </div>
    );
};
