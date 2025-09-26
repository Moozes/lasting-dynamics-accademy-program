import { FC, useReducer } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { Avatar, Box, useTheme } from "@mui/material";

import { AlertOctagon, Btn, ResetLockIcon, Typography, useTranslationV2 } from "ui";

import { ISelectedUser, WergonicUserError } from "@app-types/index";
import { AlertDialog } from "@components/index";
import { ActivateMenuItemStyle2, AlertAvatarStyle2 } from "@features/users/components/styles";
import { useUsersQueryKey, useVerifyDeactivatePermission } from "@features/users/hooks";
import { IHandleMenuClose } from "@features/users/types";
import { useSendResetPasswordEmailMutation } from "@queries/index";
import { TABLE_SETTINGS_MENU_ITEM_PADDING, TABLE_SETTINGS_MENU_ITEM_TEXT_ML } from "@utils/index";

export const SendResetPasswordEmailButton: FC<ISelectedUser & IHandleMenuClose> = ({
    selectedUser,
    handleMenuClose,
}) => {
    const t = useTranslationV2();
    const theme = useTheme();
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();
    const userQueryKey = useUsersQueryKey();
    const hasWritePermission = useVerifyDeactivatePermission(selectedUser);
    const [isDialogOpen, setIsDialogOpen] = useReducer((state) => {
        return !state;
    }, false);

    const {
        mutate: sendResetPasswordLink,
        isLoading,
        reset,
    } = useSendResetPasswordEmailMutation({
        onSuccess: () => {
            if (isDialogOpen) {
                setIsDialogOpen();
                handleMenuClose();
            }
            queryClient.invalidateQueries({
                queryKey: userQueryKey,
            });
            enqueueSnackbar(t("users_management.send_reset_password_link.success"));
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
            if (isDialogOpen) {
                setIsDialogOpen();
                handleMenuClose();
            }
        },
    });
    const handleSendResetPasswordLink = () => {
        const data = { email: selectedUser.email! };
        sendResetPasswordLink(data);
    };

    const onDialogClose = () => {
        setIsDialogOpen();
        handleMenuClose();
    };

    const userFullName = `${selectedUser.first_name} ${selectedUser.last_name}`;

    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                sx={{ ...ActivateMenuItemStyle2(hasWritePermission), p: TABLE_SETTINGS_MENU_ITEM_PADDING }}
                onClick={setIsDialogOpen}
            >
                <ResetLockIcon />

                <Typography
                    ml={TABLE_SETTINGS_MENU_ITEM_TEXT_ML}
                    variant="body1"
                    color={theme.color_system.text.primary}
                >
                    {t("users_management.send_reset_password_link.reset_password")}
                </Typography>
            </Box>
            <AlertDialog
                dialogOpen={isDialogOpen}
                toggleDialog={onDialogClose}
                dialogIcon={
                    <Avatar sx={AlertAvatarStyle2}>
                        <AlertOctagon />
                    </Avatar>
                }
                rightSideAction={
                    <Btn onClick={handleSendResetPasswordLink} loading={isLoading} variant="primary-contained">
                        {t("send")}
                    </Btn>
                }
                primaryText={t("users_management.send_reset_password_link.alert")}
                secondaryText={`${t("users_management.send_reset_password_link.info")} ${userFullName}?`}
            />
        </>
    );
};
