import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { FormikHelpers } from "formik";
import { useSnackbar } from "notistack";

import { useTranslationV2 } from "ui";

import { WergonicUser, WergonicUserError } from "@app-types/index";
import { useUserForm1Schema, useUserForm2Schema } from "@features/users/hooks";
import { useUpdateUserMutation } from "@features/users/queries";

const useInitialValues = (selectedUser: WergonicUser) => {
    let consultant_id = 0;
    if (selectedUser.profile) {
        if (selectedUser.profile[0]) {
            if (selectedUser.profile[0].consultant) consultant_id = parseInt(selectedUser.profile[0].consultant.id, 10);
        }
    }
    const initialValues = {
        // form 1
        email: selectedUser.email,
        first_name: selectedUser.first_name,
        last_name: selectedUser.last_name,
        role: selectedUser.role,
        personal_number: selectedUser.personal_number,
        unit: selectedUser.unit,
        // form 2
        weight:
            selectedUser.profile && selectedUser.profile[0] && selectedUser.profile[0].weight
                ? selectedUser.profile[0].weight
                : "",
        resting_heart_rate:
            selectedUser.profile && selectedUser.profile[0] && selectedUser.profile[0].resting_heart_rate
                ? selectedUser.profile[0].resting_heart_rate
                : "",
        dominant_arm:
            selectedUser.profile && selectedUser.profile[0] && selectedUser.profile[0].dominant_arm
                ? selectedUser.profile[0].dominant_arm
                : "",
        date_of_birth:
            selectedUser.profile && selectedUser.profile[0] && selectedUser.profile[0].date_of_birth
                ? selectedUser.profile[0].date_of_birth
                : "",
        gender:
            selectedUser.profile && selectedUser.profile[0] && selectedUser.profile[0].gender
                ? selectedUser.profile[0].gender
                : "",
        consultant_id,
    };
    return { initialValues };
};

export const useUpdateUser = (closeMenuAndModal: () => void) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient();
    const {
        mutate: updateUser,
        isLoading,
        reset,
    } = useUpdateUserMutation({
        onSuccess: () => {
            closeMenuAndModal();
            queryClient.invalidateQueries({
                queryKey: ["users"],
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
            closeMenuAndModal();
        },
    });
    return {
        updateUser,
        isUpdateUserLoading: isLoading,
    };
};

export const useForm = (selectedUser: WergonicUser, handleMenuClose: () => void) => {
    const [open, setOpen] = useState(false);
    const closeMenuAndModal = () => {
        handleMenuClose();
        setOpen(false);
    };
    const { updateUser, isUpdateUserLoading } = useUpdateUser(closeMenuAndModal);
    const { initialValues } = useInitialValues(selectedUser);
    const [currentForm, setCurrentForm] = useState<1 | 2>(1);

    const { form1Schema } = useUserForm1Schema();
    const { form2Schema } = useUserForm2Schema();

    const handleSubmit = (values: any, helpers: FormikHelpers<any>) => {
        if (currentForm === 1) {
            setCurrentForm(2);
            helpers.setTouched({});
        } else {
            const updateObject = {
                ...values,
                id: selectedUser.id,
                organization: { id: selectedUser.organization?.id },
            };
            updateUser(updateObject);
        }
        helpers.setSubmitting(false);
    };

    useEffect(() => {
        setCurrentForm(1);
    }, [open]);

    return {
        open,
        setOpen,
        currentForm,
        setCurrentForm,
        initialValues,
        validationSchema: currentForm === 1 ? form1Schema : form2Schema,
        closeMenuAndModal,
        isUpdateUserLoading,
        handleSubmit,
    };
};
