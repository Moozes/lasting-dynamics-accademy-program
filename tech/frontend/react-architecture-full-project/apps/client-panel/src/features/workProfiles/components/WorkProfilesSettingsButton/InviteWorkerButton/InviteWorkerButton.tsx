import { FC, useReducer } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useSnackbar } from "notistack";

import { DialogContent, DialogContentText, useTheme } from "@mui/material";
import Box from "@mui/material/Box";

import { Btn, FormikOutlinedTextField, Typography, UserEdit, useTranslationV2 } from "ui";

import { ISelectedUser, WergonicUserError } from "@app-types/index";
import { authAtom } from "@atoms/index";
import { FormDialog } from "@components/index";
import { useCreateWorkerAccountMutation } from "@features/workProfiles/queries";
import { TABLE_SETTINGS_MENU_ITEM_TEXT_ML } from "@utils/index";

import { InviteWorkerButtonStyles } from "./inlineStyles";
import useInviteWorkerForm from "./InviteWorkerButton.hooks";

export const InviteWorkerButton: FC<ISelectedUser> = ({ selectedUser }) => {
    const t = useTranslationV2();
    const theme = useTheme();
    const [isUpdateActionOpen, setIsUpdateActionOpen] = useReducer((state) => !state, false);

    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();
    const [auth] = useAtom(authAtom);

    const handleClose = () => {
        setIsUpdateActionOpen();
    };
    const handleClickOpen = () => {
        setIsUpdateActionOpen();
    };

    const { initialValues, validationSchema } = useInviteWorkerForm();

    const createWorkerAccountMutation = useCreateWorkerAccountMutation({
        onSuccess: () => {
            handleClose();
            queryClient.invalidateQueries(["profiles"]);
            enqueueSnackbar(t("work_profiles.invitation_sent_success"));
        },
        onError: (err: WergonicUserError) => {
            let message;
            if (err.response.data?.detail) {
                message = err.response.data?.detail;
            } else {
                message = t("Something_went_Wrong");
            }
            enqueueSnackbar(message, { severity: "error" });
        },
    });

    const handleInvite = (values: { email: string }) => {
        const orgId = auth.wergonicUser?.organization?.id;
        const profileId = selectedUser.id;

        if (!orgId || !profileId) {
            return;
        }

        createWorkerAccountMutation.mutate({
            email: values.email,
            profile_id: profileId,
            org_id: parseInt(orgId, 10),
        });
    };

    return (
        <>
            <Box display="flex" alignItems="center" onClick={handleClickOpen} sx={InviteWorkerButtonStyles}>
                <UserEdit />
                <Typography
                    ml={TABLE_SETTINGS_MENU_ITEM_TEXT_ML}
                    variant="body1"
                    color={theme.color_system.text.primary}
                >
                    {t("work_profiles.invite_worker")}
                </Typography>
            </Box>
            <FormDialog
                header={t("work_profiles.Invite_Worker_to_Create_an_Account")}
                dialogOpen={isUpdateActionOpen}
                toggleDialog={handleClose}
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleInvite}
                rightSideAction={
                    <Btn variant="primary-contained" type="submit">
                        {t("Invite")}
                    </Btn>
                }
            >
                <DialogContent>
                    <DialogContentText>{t("work_profiles.Invite_worker_content")}</DialogContentText>
                    <FormikOutlinedTextField
                        id="email"
                        name="email"
                        label={t("work_profiles.email_address")}
                        required
                    />
                </DialogContent>
            </FormDialog>
        </>
    );
};
