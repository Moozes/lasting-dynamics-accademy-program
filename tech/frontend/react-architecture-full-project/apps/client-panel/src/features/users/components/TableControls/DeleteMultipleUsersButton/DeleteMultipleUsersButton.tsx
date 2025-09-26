/* eslint-disable no-nested-ternary */
import { FC, useMemo, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import randomWords from "random-words";

import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import {
    Btn,
    DataTable,
    DeleteTrashIcon,
    FilledTextField,
    FormikOutlinedTextField,
    type HTMLDivProps,
    Typography,
    useTranslationV2,
} from "ui";

import { FormDialog } from "@components/index";
import { useDeleteMultipleUsersMutation } from "@features/users/queries";
import { IDeleteMultipleUsersButton } from "@features/users/types";
import { useVerifyWritePermission } from "@hooks/index";

import { useColumns, useDeleteMultipleUsersForm } from "./DeleteMultipleUsersButton.hooks";
import {
    ContentCopyOutlinedIconStyles,
    IntroTextStyles,
    WarningContainerStyles,
    WarningTextStyles,
} from "./inlineStyles";

type Props = HTMLDivProps & IDeleteMultipleUsersButton;

export const DeleteMultipleUsersButton: FC<Props> = ({ selectedRows, ...props }) => {
    const t = useTranslationV2();
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();

    const columns = useColumns();
    const selectedRowsValues = useMemo(() => {
        return selectedRows.map((row) => row.values);
    }, [selectedRows]);

    const [searchParams] = useSearchParams();

    const [isDeleteMultiUsersActionOpen, setIsDeleteMultiUsersActionOpen] = useReducer((state) => !state, false);
    const [randomWord, generateRandomWord] = useReducer(() => randomWords(1)[0], randomWords(1)[0]);

    const { deleteMultipleUsersInitialValues, deleteMultipleUsersValidationSchema } = useDeleteMultipleUsersForm();
    const hasChangePermission = useVerifyWritePermission();

    const {
        mutate: deleteMultipleUsers,
        isLoading: multipleUserDeletionIsLoading,
        reset: multipleUserDeletionReset,
    } = useDeleteMultipleUsersMutation({
        onSuccess: () => {
            setIsDeleteMultiUsersActionOpen();
            queryClient.invalidateQueries({
                queryKey: ["users", searchParams.get("page"), searchParams.get("page_size")],
            });
            enqueueSnackbar(t("users_management.delete_multiple_users.users_deletion_multiple_success"));
            multipleUserDeletionReset();
        },
    });

    function onClickShowDeleteDialog() {
        generateRandomWord();
        setIsDeleteMultiUsersActionOpen();
    }

    return (
        <div {...props}>
            <Tooltip
                title={
                    selectedRows.length === 0
                        ? t("users_management.delete_multiple_users.users_deletion_multiple_alert")
                        : !hasChangePermission
                        ? t("users_management.delete_multiple_users.users_deletion_multiple_permission_alert")
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
                    <Btn
                        onClick={() => onClickShowDeleteDialog()}
                        variant="danger-outlined"
                        startIcon={<DeleteTrashIcon />}
                        disabled={selectedRows.length === 0 || !hasChangePermission}
                    >
                        {t("Delete")}
                    </Btn>
                </span>
            </Tooltip>

            <FormDialog
                header={t("Delete")}
                dialogOpen={isDeleteMultiUsersActionOpen}
                toggleDialog={setIsDeleteMultiUsersActionOpen}
                initialValues={deleteMultipleUsersInitialValues(randomWord)}
                validationSchema={deleteMultipleUsersValidationSchema}
                onSubmit={() => {
                    const usersIDS = selectedRows.map((user) => parseInt(user.values.id, 10));
                    deleteMultipleUsers(usersIDS);
                }}
                rightSideAction={
                    <Btn
                        type="submit"
                        variant="danger-contained"
                        loading={multipleUserDeletionIsLoading}
                        startIcon={<DeleteTrashIcon />}
                    >
                        {t("Delete")}
                    </Btn>
                }
            >
                <Box marginX={2}>
                    <Typography weight="meduim" variant="h6" sx={IntroTextStyles}>
                        {t("users_management.delete_multiple_users.users_deletion_multiple_intro")}
                    </Typography>

                    <DataTable
                        data={selectedRowsValues}
                        columns={columns}
                        hideColumns={["id", "first_name", "last_name"]}
                    />
                    <Box sx={WarningContainerStyles}>
                        <Typography variant="body2" sx={WarningTextStyles}>
                            {t("users_management.delete_multiple_users.users_deletion_multiple_warning")}
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
                                                <ContentCopyOutlinedIcon sx={ContentCopyOutlinedIconStyles} />
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
                    </Box>
                </Box>
            </FormDialog>
        </div>
    );
};
