import React, { useState } from "react";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useAtom } from "jotai";
import { useSnackbar } from "notistack";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { Btn, FormikCheckbox, FormikOutlinedTextField, Typography, useTranslationV2 } from "ui";

import { authAtom } from "@atoms/index";
import { Link } from "@components/index";
import { useUpdatePasswordMutation } from "@features/dashboard/queries";
import { SubmitProps } from "@features/dashboard/types";
import { useSettingsModalOpenAtom } from "@hooks/index";
import routes from "@routes/routes";

import { saveButtonStyles } from "./inlineStyles";
import { useForm } from "./SecurtyScreen.hooks";

export const SecurityScreen: React.FC = () => {
    const t = useTranslationV2();
    const theme = useTheme();
    const [auth] = useAtom(authAtom);
    const { enqueueSnackbar } = useSnackbar();
    const { toggleSettingsModalOpen } = useSettingsModalOpenAtom();
    const { initialValues, validationSchame } = useForm();

    const [isPassword, setIsPassword] = useState(true);
    const toggleIsPassword = () => setIsPassword((prev) => !prev);

    const user = auth.wergonicUser;

    const {
        mutate: updatePassword,
        isLoading: isPasswordLoading,
        reset: PasswordReset,
    } = useUpdatePasswordMutation({
        onSuccess: async () => {
            enqueueSnackbar(t("users_management.update_delete_single_user.password_update_success"), {
                severity: "success",
            });
            PasswordReset();
        },
        onError: (err) => {
            let message;
            if ((err as any).code === "auth/wrong-password") {
                message = t("auth.wrong_current_password");
            } else {
                message = err.message;
            }
            enqueueSnackbar(message, { severity: "error" });
        },
    });

    const handlePasswordSubmit = async (values: SubmitProps, formikHelpers: FormikHelpers<SubmitProps>) => {
        updatePassword({ ...values, email: user?.email });
        formikHelpers.resetForm();
    };

    return (
        <Box>
            <Typography variant="h6" fontWeight="bold" color={theme.color_system.primary.dark}>
                {t("password")}
            </Typography>
            <Typography variant="body1" color={theme.color_system.text.primary}>
                {t("settings.reset_password_text")}
            </Typography>
            <Box mt="23px">
                <Formik
                    initialValues={initialValues as SubmitProps}
                    validationSchema={validationSchame}
                    onSubmit={handlePasswordSubmit}
                    validateOnBlur={false}
                >
                    {(formikProps: FormikProps<SubmitProps>) => {
                        const { isSubmitting, submitForm } = formikProps;
                        return (
                            <Form>
                                <FormikOutlinedTextField
                                    disabled={false}
                                    id="password"
                                    name="password"
                                    label={t("settings.current_password")}
                                    type={isPassword ? "password" : "text"}
                                    endAdornment={
                                        <IconButton onClick={toggleIsPassword} sx={{ padding: 0 }}>
                                            {isPassword ? (
                                                <Visibility sx={{ color: theme.color_system.divider.light_grey }} />
                                            ) : (
                                                <VisibilityOff sx={{ color: theme.color_system.divider.light_grey }} />
                                            )}
                                        </IconButton>
                                    }
                                />
                                <Stack direction="row" justifyContent="flex-end" alignItems="start" mt={-2} mb="5px">
                                    <Typography variant="body1" fontWeight="bold">
                                        <Link
                                            sx={{ color: theme.color_system.status.infos.dark }}
                                            to={routes.auth.initPasswordResetForm}
                                            onClick={() => toggleSettingsModalOpen()}
                                        >
                                            {t("forgot_password")}
                                        </Link>
                                    </Typography>
                                </Stack>
                                <FormikOutlinedTextField
                                    disabled={false}
                                    id="new_password"
                                    name="new_password"
                                    label={t("settings.new_password")}
                                    type={isPassword ? "password" : "text"}
                                    endAdornment={
                                        <IconButton onClick={toggleIsPassword} sx={{ padding: 0 }}>
                                            {isPassword ? (
                                                <Visibility sx={{ color: theme.color_system.divider.light_grey }} />
                                            ) : (
                                                <VisibilityOff sx={{ color: theme.color_system.divider.light_grey }} />
                                            )}
                                        </IconButton>
                                    }
                                />
                                <FormikOutlinedTextField
                                    disabled={false}
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    label={t("settings.confirm_new_password")}
                                    type={isPassword ? "password" : "text"}
                                    endAdornment={
                                        <IconButton onClick={toggleIsPassword} sx={{ padding: 0 }}>
                                            {isPassword ? (
                                                <Visibility sx={{ color: theme.color_system.divider.light_grey }} />
                                            ) : (
                                                <VisibilityOff sx={{ color: theme.color_system.divider.light_grey }} />
                                            )}
                                        </IconButton>
                                    }
                                />
                                <Btn
                                    loading={isSubmitting || isPasswordLoading}
                                    type="button"
                                    variant="primary-contained"
                                    onClick={submitForm}
                                    sx={saveButtonStyles}
                                >
                                    {t("save")}
                                </Btn>
                            </Form>
                        );
                    }}
                </Formik>
            </Box>
            <Box mt={2}>
                <Typography variant="h6" fontWeight="bold" color={theme.color_system.primary.dark}>
                    {t("settings.ai_explanation.ai_feature_consent_header")}
                </Typography>
                <Box component="label" mt={1} display="flex" alignItems="center" gap="8px" pb="34px">
                    <FormikCheckbox name="ai_consent" size="small" />
                    <Typography variant="body2">{t("settings.ai_explanation.ai_feature_consent_text")}</Typography>
                </Box>
            </Box>
        </Box>
    );
};
