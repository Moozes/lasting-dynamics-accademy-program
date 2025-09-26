import { Dispatch, SetStateAction } from "react";
import { useMutation } from "@tanstack/react-query";
import {
    EmailAuthProvider,
    getAuth,
    reauthenticateWithCredential,
    updatePassword,
    updateProfile,
    User as FirebaseUser,
} from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useAtom } from "jotai";
import { EnqueueSnackbar } from "notistack";

import { AuthUser, SetAtom, WergonicUserError } from "@app-types/index";
import { authAtom } from "@atoms/index";
import { api, FirebaseStorage } from "@services/index";

import { SubmitProps, UpdateUserProps } from "../types";

export const useUpdateUserMutation = ({
    onSuccess,
    onError,
}: {
    onSuccess?: (reponse: any) => void;
    onError: (error: WergonicUserError) => void;
}) => {
    const [auth] = useAtom(authAtom);
    return useMutation({
        mutationFn: (data: UpdateUserProps) => api.patch(`/organizations/users/${auth.wergonicUser?.id}/`, data),
        onSuccess,
        onError,
    });
};

export const useUpdatePasswordMutation = ({
    onSuccess,
    onError,
}: {
    onSuccess?: () => void;
    onError: (error: Error) => void;
}) => {
    const auth = getAuth();
    return useMutation<void, Error, SubmitProps>(
        async (values: SubmitProps) => {
            if (values.email && auth.currentUser) {
                const credential = EmailAuthProvider.credential(values.email, values.password);
                await reauthenticateWithCredential(auth.currentUser, credential);
                if (values.new_password === values.password_confirmation && values.new_password.length > 7) {
                    return updatePassword(auth.currentUser, values.new_password);
                }
            }

            // Throw an error or return a rejected promise here if the condition is not met
            throw new Error("Please verify your credentials");
        },
        {
            onSuccess,
            onError,
        }
    );
};

export const uploadAvatar = async (
    file: File,
    currentUser: FirebaseUser,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setSelecetedAvatar: Dispatch<SetStateAction<File | null>>,
    setAuth: SetAtom<[SetStateAction<AuthUser>], void>,
    enqueueSnackbar: EnqueueSnackbar,
    t: any
) => {
    // upload image
    const fileRef = ref(FirebaseStorage, `avatars/${currentUser.uid}/${file.name}`);
    setLoading(true);
    await uploadBytes(fileRef, file);
    // update firebaseuser
    const photoURL = await getDownloadURL(fileRef);
    await updateProfile(currentUser, { photoURL });
    setAuth(
        (prev) =>
            ({
                ...prev,
                user: {
                    ...prev.user,
                    photoURL,
                },
            } as any)
    );
    setSelecetedAvatar(null);
    enqueueSnackbar(t("users_management.update_delete_single_user.image_update_success"));
    setLoading(false);
};
