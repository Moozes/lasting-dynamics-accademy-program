import { ChangeEvent, useEffect, useState } from "react";
import { useAtom } from "jotai";
import { useSnackbar } from "notistack";

import { useTranslationV2 } from "ui";

import { authAtom } from "@atoms/index";

import { uploadAvatar } from "../queries";

export const useUploadAvatar = () => {
    const [selectedAvatar, setSelectedAvatar] = useState<File | null>(null);
    const [avatarPreview, setAvatarPreview] = useState("");
    const [loading, setLoading] = useState(false);
    const [auth, setAuth] = useAtom(authAtom);
    const { enqueueSnackbar } = useSnackbar();
    const t = useTranslationV2();

    const fileInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length && files[0].type.startsWith("image/")) {
            setSelectedAvatar(files[0]);
        }
    };

    useEffect(() => {
        let objectURL = "";
        if (selectedAvatar) {
            objectURL = URL.createObjectURL(selectedAvatar);
            setAvatarPreview(objectURL);
        } else {
            setAvatarPreview("");
        }
        return () => URL.revokeObjectURL(objectURL);
    }, [selectedAvatar]);

    const onUploadClick = () => {
        if (selectedAvatar && auth.user) {
            uploadAvatar(selectedAvatar, auth.user, setLoading, setSelectedAvatar, setAuth, enqueueSnackbar, t);
        }
    };

    return {
        avatarPreview,
        selectedAvatar,
        loading,
        fileInputChangeHandler,
        onUploadClick,
    };
};
