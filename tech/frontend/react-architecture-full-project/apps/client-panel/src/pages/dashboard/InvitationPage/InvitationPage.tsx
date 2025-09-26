import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { Avatar, Box, Dialog, DialogContent, DialogContentText, DialogTitle, useTheme } from "@mui/material";

import { Btn, Typography, useTranslationV2 } from "ui";

import { useAcceptInvitationMutation } from "@queries/index";
import { GetInitials } from "@utils/index";

import * as styles from "./inlineStyles";

export const InvitationPage = () => {
    const [searchParams] = useSearchParams();
    const { id } = useParams();
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const t = useTranslationV2();
    const companyInitials = GetInitials(searchParams.get("company")).toUpperCase();

    const handleClose = () => {
        setOpen(false);
    };

    const {
        mutate: acceptInvitation,
        isLoading: acceptInvitationIsLoading,
        reset: acceptInvitationReset,
    } = useAcceptInvitationMutation({
        onSuccess: () => {
            handleClose();
            queryClient.invalidateQueries({
                queryKey: ["user", "organizations"],
            });
            navigate("/dashboard");
            enqueueSnackbar(t("auth.invitation_accepted"));
            acceptInvitationReset();
        },
        onError: () => {
            enqueueSnackbar(t("Something_went_Wrong"), { variant: "error" });
        },
    });

    return (
        <Dialog maxWidth="md" open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">
                <Box display="flex" flexDirection="row" gap={2} justifyContent="center" my={4}>
                    <Avatar sx={styles.AvatarStyle}>{companyInitials}</Avatar>
                    <Typography variant="h3" weight="bold" color={theme.color_system.text.light}>
                        {searchParams.get("company")}
                    </Typography>
                </Box>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Box textAlign="center" mb={4}>
                        <Typography variant="h4" weight="bold" color={theme.color_system.text.primary}>
                            {t("welcome")}
                        </Typography>
                        <Typography variant="h6" color={theme.color_system.text.primary}>
                            {t("auth.invitation_text")}
                        </Typography>

                        <Box display="flex" justifyContent="center" mt={2} mb={2}>
                            <Btn
                                onClick={() => acceptInvitation(id)}
                                loading={acceptInvitationIsLoading}
                                variant="primary-contained"
                            >
                                {t("accept_invitation")}
                            </Btn>
                        </Box>
                        <Typography variant="h6" color={theme.color_system.text.primary}>
                            {t("auth.invitation_secondary_text")}
                        </Typography>
                    </Box>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};
