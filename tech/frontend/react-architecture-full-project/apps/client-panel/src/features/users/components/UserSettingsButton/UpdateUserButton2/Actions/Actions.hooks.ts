import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { useTranslationV2 } from "ui";

import { WergonicUserError } from "@app-types/index";
import { useDeleteSingleUserMutation } from "@features/users/queries";

export const useDeleteUser = (selectedUserId: string, closeMenuAndDialog: () => void) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient();
    const {
        mutate: deleteUser,
        isLoading: isDeleteUserLoading,
        reset: userDeletionReset,
    } = useDeleteSingleUserMutation({
        id: selectedUserId,
        onSuccess: () => {
            closeMenuAndDialog();
            queryClient.invalidateQueries({
                queryKey: ["users"],
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
            closeMenuAndDialog();
        },
    });

    return {
        deleteUser,
        isDeleteUserLoading,
    };
};
