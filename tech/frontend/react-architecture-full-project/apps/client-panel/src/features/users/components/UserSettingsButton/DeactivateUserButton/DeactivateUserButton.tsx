import { FC, useReducer } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useSnackbar } from "notistack";

import { Avatar, Box, CircularProgress, useTheme } from "@mui/material";

import { AlertOctagon, Btn, Typography, UserActive, UserInactive, useTranslationV2 } from "ui";

import { ISelectedUser, WergonicUserError } from "@app-types/index";
import { authAtom } from "@atoms/index";
import { AlertDialog } from "@components/index";
import { ActivateMenuItemStyle2, AlertAvatarStyle2 } from "@features/users/components/styles";
import { useUsersQueryKey, useVerifyDeactivatePermission } from "@features/users/hooks";
import { useDeactivateUserMutation } from "@features/users/queries";
import { IHandleMenuClose } from "@features/users/types";
import { TABLE_SETTINGS_MENU_ITEM_PADDING, TABLE_SETTINGS_MENU_ITEM_TEXT_ML } from "@utils/index";

export const DeactivateUserButton: FC<ISelectedUser & IHandleMenuClose> = ({ selectedUser, handleMenuClose }) => {
    const t = useTranslationV2();
    const theme = useTheme();
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();
    const userQueryKey = useUsersQueryKey();
    const hasWritePermission = useVerifyDeactivatePermission(selectedUser);
    const [auth] = useAtom(authAtom);
    const [isActivateActionOpen, setIsActivateActionOpen] = useReducer((state) => {
        return !state;
    }, false);

    const {
        mutate: updateUser,
        isLoading,
        reset,
    } = useDeactivateUserMutation({
        onSuccess: () => {
            if (isActivateActionOpen) {
                setIsActivateActionOpen();
            }
            handleMenuClose();
            queryClient.invalidateQueries({
                queryKey: userQueryKey,
            });
            if (selectedUser.is_active) {
                enqueueSnackbar(t("users_management.update_delete_single_user.user_deactivation_success"));
            } else {
                enqueueSnackbar(t("users_management.update_delete_single_user.user_activation_success"));
            }
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
            if (isActivateActionOpen) {
                setIsActivateActionOpen();
                handleMenuClose();
            }
        },
    });
    const handleToggleUserStatus = () => {
        const organizationId = auth.wergonicUser?.organization?.id;
        if (organizationId) {
            updateUser({ id: selectedUser.id, org_id: organizationId });
        } else {
            enqueueSnackbar(t("Organization ID is missing"), { severity: "error" });
        }
    };

    const onDialogClose = () => {
        setIsActivateActionOpen();
        handleMenuClose();
    };

    return (
        <>
            {selectedUser.is_active ? (
                <Box
                    display="flex"
                    alignItems="center"
                    sx={{ ...ActivateMenuItemStyle2(hasWritePermission), p: TABLE_SETTINGS_MENU_ITEM_PADDING }}
                    onClick={setIsActivateActionOpen}
                >
                    <UserInactive />

                    <Typography
                        ml={TABLE_SETTINGS_MENU_ITEM_TEXT_ML}
                        variant="body1"
                        color={theme.color_system.text.primary}
                    >
                        {t("users_management.update_delete_single_user.deactivate_user")}
                    </Typography>
                </Box>
            ) : (
                <Box
                    sx={{ ...ActivateMenuItemStyle2(hasWritePermission), p: TABLE_SETTINGS_MENU_ITEM_PADDING }}
                    display="flex"
                    alignItems="center"
                    onClick={handleToggleUserStatus}
                >
                    {isLoading ? <CircularProgress color="inherit" size="1em" /> : <UserActive />}
                    <Typography
                        ml={TABLE_SETTINGS_MENU_ITEM_TEXT_ML}
                        variant="body1"
                        color={theme.color_system.text.primary}
                    >
                        {t("users_management.update_delete_single_user.activate_user")}
                    </Typography>{" "}
                </Box>
            )}
            <AlertDialog
                dialogOpen={isActivateActionOpen}
                toggleDialog={onDialogClose}
                dialogIcon={
                    <Avatar sx={AlertAvatarStyle2}>
                        <AlertOctagon />
                    </Avatar>
                }
                rightSideAction={
                    <Btn onClick={handleToggleUserStatus} loading={isLoading} variant="primary-contained">
                        {t("users_management.update_delete_single_user.Deactivate")}
                    </Btn>
                }
                primaryText={`${t("Pausing")} ${selectedUser.first_name} ${selectedUser.last_name} ${t("account")}`}
                secondaryText={t("users_management.update_delete_single_user.user_deactivation_alert")}
            />
        </>
    );
};
