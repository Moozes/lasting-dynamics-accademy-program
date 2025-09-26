import { useEffect, useReducer, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { Box, Typography } from "@mui/material";

import { Btn, FormikCheckbox, type HTMLDivProps, UserRoleEnum, useTranslationV2 } from "ui";

import { WergonicUser, WergonicUserError } from "@app-types/index";
import { FormDialog } from "@components/index";
import { useVerifyWritePermission } from "@hooks/index";
import { api, apiRoutes } from "@services/index";

import { NextButton } from "../../NextButton";
import * as styles from "../../styles";

import { useAddNewUserForm, useCustomValidation } from "./AddNewUserButton.hooks";
import { AddNewUserForm } from "./AddNewUserForm";

export const AddNewUserButton = (props: HTMLDivProps) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const [searchParams] = useSearchParams();

    const queryClient = useQueryClient();
    const { newUserInitialValues, newUserValidationSchema } = useAddNewUserForm();
    const { customValidation } = useCustomValidation(newUserValidationSchema);
    const [isAddNewUserDialogOpen, setAddNewUserDialogOpen] = useReducer((state) => {
        return !state;
    }, false);
    const [showProfileModel, setShowProfileModel] = useState(false);
    const [role, setRole] = useState<any>();
    const hasCreatePermission = useVerifyWritePermission();

    const {
        mutate: addUser,
        isLoading,
        reset,
    } = useMutation({
        mutationFn: (data: WergonicUser) => api.post(apiRoutes.auth.addNewUserRoute, data),
        onSuccess: () => {
            setAddNewUserDialogOpen();
            queryClient.invalidateQueries({
                queryKey: ["users", searchParams.get("page"), searchParams.get("page_size")],
            });
            enqueueSnackbar(t("users_management.add_new_user.user_create_success"));
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
            setAddNewUserDialogOpen();
        },
        // Fixes the issue of role select input
        onSettled: () => {
            setRole("");
        },
    });

    // this is the only way to reset the query isError and isSuccess state and can't be extracted to a hook
    useEffect(() => {
        reset();
        setRole("");
        // reset showProfileModel on on AddNewUserDialog close
        if (!isAddNewUserDialogOpen) setShowProfileModel(false);
    }, [isAddNewUserDialogOpen, reset]);

    return (
        <div {...props}>
            <Btn disabled={!hasCreatePermission} onClick={setAddNewUserDialogOpen} variant="primary-contained">
                {t("users_management.add_new_user.add_new_user_button")}
            </Btn>

            <FormDialog
                dialogOpen={isAddNewUserDialogOpen}
                toggleDialog={setAddNewUserDialogOpen}
                header={t("users_management.add_new_user.add_new_user")}
                initialValues={newUserInitialValues}
                validate={customValidation}
                onSubmit={(values) => {
                    addUser(values);
                }}
                rightSideAction={
                    !showProfileModel && role === UserRoleEnum.WORKER ? (
                        <NextButton
                            hasCreatePermission={hasCreatePermission}
                            setShowProfileModel={() => setShowProfileModel(true)}
                        />
                    ) : (
                        <Btn
                            disabled={!hasCreatePermission}
                            loading={isLoading}
                            variant="primary-contained"
                            type="submit"
                        >
                            {t("users_management.add_new_user.add_new_user_button")}
                        </Btn>
                    )
                }
                secondRightSideAction={
                    showProfileModel && (
                        <Btn
                            variant="secondary-contained"
                            onClick={() => setShowProfileModel(false)}
                            sx={styles.cancelButtonStyle2}
                        >
                            {t("Previous")}
                        </Btn>
                    )
                }
                leftSideAction={
                    <Box component="label" sx={styles.CheckBoxStyle}>
                        <FormikCheckbox name="send_email_to_creator" />
                        <Typography variant="body1">
                            {t("users_management.add_new_user.add_new_user_checkbox_message")}
                        </Typography>
                    </Box>
                }
            >
                <AddNewUserForm showProfileModel={showProfileModel} role={role} setRole={setRole} />
            </FormDialog>
        </div>
    );
};
