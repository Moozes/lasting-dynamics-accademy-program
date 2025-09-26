/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-nested-ternary */
import { FC, useReducer } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";

import {
    Btn,
    FormikOutlinedSelect,
    FormikOutlinedTextField,
    Typography,
    UserEdit,
    UserRoleEnum,
    useTranslationV2,
} from "ui";

import { ISelectedUser, WergonicUserError } from "@app-types/index";
import { FormDialog } from "@components/index";
import { NextButton } from "@features/users/components/NextButton";
import * as styles from "@features/users/components/styles";
import { useManagedByOptions, useUsersQueryKey, useVerifyDeactivatePermission } from "@features/users/hooks";
import { useDeleteSingleUserMutation, useUpdateUserMutation } from "@features/users/queries";
import { IHandleMenuClose } from "@features/users/types";
import { useArmSelectRoles, useSexSelectRoles } from "@hooks/index";
import { TABLE_SETTINGS_MENU_ITEM_TEXT_ML } from "@utils/index";

import { UpdateUserButtonStyles } from "./inlineStyles";
import { useSelectRoles, useUpdateUserForm } from "./UpdateUserButton.hooks";

export const UpdateUserButton: FC<ISelectedUser & IHandleMenuClose> = ({ selectedUser, handleMenuClose }) => {
    const t = useTranslationV2();
    const theme = useTheme();
    const queryClient = useQueryClient();
    const { updateUserInitialValues } = useUpdateUserForm(selectedUser);
    const { SELECTROLES, SELECTROLESWORKER } = useSelectRoles();
    const { ARMSELECTROLES } = useArmSelectRoles();
    const { SEXSELECTROLES } = useSexSelectRoles();
    const { enqueueSnackbar } = useSnackbar();
    const userQueryKey = useUsersQueryKey();
    const { options } = useManagedByOptions();
    const [isUpdateActionOpen, setIsUpdateActionOpen] = useReducer((state) => {
        return !state;
    }, false);
    const [showProfileModel, setShowProfileModel] = useReducer((state) => {
        return !state;
    }, false);
    const hasChangePermission = useVerifyDeactivatePermission(selectedUser);

    const {
        mutate: updateUser,
        isLoading,
        reset,
    } = useUpdateUserMutation({
        onSuccess: () => {
            setIsUpdateActionOpen();
            handleMenuClose();
            queryClient.invalidateQueries({
                queryKey: userQueryKey,
            });
            enqueueSnackbar(t("users_management.update_delete_single_user.user_update_success"));
            reset();
        },
        onError: (err: WergonicUserError) => {
            let message;
            if (err.response.data?.detail) {
                message = err.response.data?.detail;
            } else {
                message = t("Something_went_Wrong");
            }
            enqueueSnackbar(message, { severity: "error" });
            setIsUpdateActionOpen();
            handleMenuClose();
        },
    });

    const {
        mutate: deleteUser,
        isLoading: userDeletionIsLoading,
        reset: userDeletionReset,
    } = useDeleteSingleUserMutation({
        id: selectedUser.id as string,
        onSuccess: () => {
            setIsUpdateActionOpen();
            handleMenuClose();
            queryClient.invalidateQueries({
                queryKey: userQueryKey,
            });
            enqueueSnackbar(t("users_management.update_delete_single_user.user_deletion_success"));
            userDeletionReset();
        },
        onError: (err: WergonicUserError) => {
            let message;
            if (err.response.data?.detail) {
                message = err.response.data?.detail;
            } else {
                message = t("Something_went_Wrong");
            }
            enqueueSnackbar(message, { severity: "error" });
            setIsUpdateActionOpen();
            handleMenuClose();
        },
    });

    const onDialogClose = () => {
        setIsUpdateActionOpen();
        handleMenuClose();
    };

    return (
        <>
            <Box display="flex" alignItems="center" onClick={setIsUpdateActionOpen} sx={UpdateUserButtonStyles}>
                <UserEdit />

                <Typography
                    ml={TABLE_SETTINGS_MENU_ITEM_TEXT_ML}
                    variant="body1"
                    color={theme.color_system.text.primary}
                >
                    {t("users_management.update_delete_single_user.edit_user")}
                </Typography>
            </Box>

            <FormDialog
                header={t("Edit")}
                dialogOpen={isUpdateActionOpen}
                toggleDialog={onDialogClose}
                onSubmit={(values) => {
                    const requestValues = {
                        ...values,
                        id: selectedUser.id,
                        organization: { id: selectedUser.organization?.id },
                    };
                    updateUser(requestValues);
                }}
                initialValues={updateUserInitialValues}
                leftSideAction={
                    <Btn
                        loading={userDeletionIsLoading}
                        startIcon={<DeleteForeverOutlinedIcon />}
                        variant="danger-outlined"
                        disabled={!hasChangePermission}
                        onClick={() => {
                            deleteUser();
                        }}
                    >
                        {t("Delete")}
                    </Btn>
                }
                rightSideAction={
                    !showProfileModel ? (
                        <NextButton
                            hasCreatePermission={hasChangePermission}
                            setShowProfileModel={setShowProfileModel}
                        />
                    ) : (
                        <Btn
                            disabled={!hasChangePermission}
                            loading={isLoading}
                            variant="primary-contained"
                            type="submit"
                        >
                            {t("Save Changes")}
                        </Btn>
                    )
                }
                secondRightSideAction={
                    showProfileModel && (
                        <Btn variant="secondary-contained" onClick={setShowProfileModel} type="button">
                            {t("Previous")}
                        </Btn>
                    )
                }
            >
                <Box
                    display="flex"
                    flexWrap="wrap"
                    alignItems="center"
                    justifyContent="space-between"
                    flexDirection="row"
                    margin={2}
                >
                    {showProfileModel ? (
                        <>
                            <Box sx={styles.InputStyle}>
                                <FormikOutlinedTextField
                                    type="date"
                                    id="date_of_birth"
                                    name="date_of_birth"
                                    label={t("date_of_birth")}
                                />
                            </Box>
                            <Box alignSelf="start" sx={styles.InputStyle}>
                                <FormikOutlinedSelect
                                    id="gender"
                                    name="gender"
                                    label={t("Sex")}
                                    options={SEXSELECTROLES}
                                />
                            </Box>
                            <Box alignSelf="start" sx={styles.InputStyle}>
                                <FormikOutlinedSelect
                                    id="dominant_arm"
                                    name="dominant_arm"
                                    label={t("Dominant_arm")}
                                    options={ARMSELECTROLES}
                                />
                            </Box>
                            <Box sx={styles.InputStyle}>
                                <FormikOutlinedTextField type="text" id="weight" name="weight" label={t("Weight")} />
                            </Box>

                            <Box sx={styles.InputStyle}>
                                <FormikOutlinedTextField
                                    type="text"
                                    id="resting_heart_rate"
                                    name="resting_heart_rate"
                                    label={t("Resting_heart_rate")}
                                />
                            </Box>
                            <Box alignSelf="start" sx={styles.InputStyle}>
                                <FormikOutlinedSelect
                                    id="consultant_id"
                                    name="consultant_id"
                                    label={t("Managed_by")}
                                    options={options}
                                />
                            </Box>
                        </>
                    ) : (
                        <>
                            <Box sx={styles.InputStyle}>
                                <FormikOutlinedTextField
                                    type="text"
                                    id="first_name"
                                    name="first_name"
                                    label={t("First Name")}
                                />
                            </Box>
                            <Box sx={styles.InputStyle}>
                                <FormikOutlinedTextField
                                    type="text"
                                    id="last_name"
                                    name="last_name"
                                    label={t("Last Name")}
                                />
                            </Box>
                            <Box sx={styles.InputStyle}>
                                <FormikOutlinedTextField
                                    type="text"
                                    id="personal_number"
                                    name="personal_number"
                                    label={t("Phone_number")}
                                />
                            </Box>
                            <Box sx={styles.InputStyle}>
                                <FormikOutlinedTextField type="email" id="email" name="email" label={t("email")} />
                            </Box>

                            <Box alignSelf="start" sx={styles.InputStyle}>
                                <FormikOutlinedSelect
                                    id="role"
                                    name="role"
                                    label="Role"
                                    options={
                                        selectedUser?.role === UserRoleEnum.WORKER ? SELECTROLESWORKER : SELECTROLES
                                    }
                                    disabled={selectedUser?.role === UserRoleEnum.WORKER}
                                />
                            </Box>

                            <Box sx={styles.InputStyle}>
                                <FormikOutlinedTextField type="text" id="unit" name="unit" label={t("Unit")} />
                            </Box>
                        </>
                    )}
                </Box>
            </FormDialog>
        </>
    );
};
