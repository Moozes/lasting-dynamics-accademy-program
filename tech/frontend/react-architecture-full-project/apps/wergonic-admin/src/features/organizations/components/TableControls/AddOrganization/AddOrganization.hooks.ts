import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormikConfig } from "formik";
import { useSnackbar } from "notistack";
import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { TAddOrganizationValues } from "@app-types/index";
import { createOrganization } from "@queries/index";

const useAddOrganizationForm = () => {
    const t = useTranslationV2();
    const initialValues: TAddOrganizationValues = {
        name: "",
        country: "",
        type: "",
        industry: "",
        cnr: "",
        max_number_workers: "",
        max_number_admins: "",
        max_number_sessions_month: "",
        max_number_assessments_month: "",
        admin_email: "",
    };
    const validationSchema = yup.object({
        name: yup.string().required(t<string>("formik.field_is_required", { field: t("formik.fields.name") })),
        country: yup.string().required(t<string>("formik.field_is_required", { field: t("formik.fields.country") })),
        type: yup.string().required(t<string>("formik.field_is_required", { field: t("formik.fields.type") })),
        industry: yup.string().required(t<string>("formik.field_is_required", { field: t("formik.fields.industry") })),
        cnr: yup.string().required(t<string>("formik.field_is_required", { field: "CNR" })),
        max_number_workers: yup
            .number()
            .required(t<string>("formik.field_is_required", { field: t("formik.fields.max_number_workers") })),
        max_number_admins: yup
            .number()
            .required(t<string>("formik.field_is_required", { field: t("formik.fields.max_number_admins") })),
        max_number_sessions_month: yup
            .number()
            .required(t<string>("formik.field_is_required", { field: t("formik.fields.max_number_sessions_month") })),
        max_number_assessments_month: yup
            .number()
            .required(
                t<string>("formik.field_is_required", { field: t("formik.fields.max_number_assessments_month") })
            ),
        admin_email: yup
            .string()
            .email(t<string>("formik.invalid_filed_format", { field: t("formik.fields.email") }))
            .required(t<string>("formik.field_is_required", { field: t("formik.fields.email") })),
    });
    return { initialValues, validationSchema };
};

export const useCreateOrganizationMutation = (setModalOpen: Dispatch<SetStateAction<boolean>>) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: FormData) => createOrganization(data),
        onSuccess: () => {
            enqueueSnackbar(t("queries.entity_created_successfully", { entity: t("queries.entities.organization") }));
            queryClient.invalidateQueries({ queryKey: ["organizations"] });
        },
        onError: () => {
            enqueueSnackbar(t("queries.something_went_wrong"), { severity: "error" });
        },
        onSettled: () => {
            setModalOpen(false);
        },
    });
};

export const useSelectAvatar = () => {
    const [selectedAvatar, setSelectedAvatar] = useState<File | null>(null);
    const [avatarPreview, setAvatarPreview] = useState("");

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

    return {
        avatarPreview,
        selectedAvatar,
        fileInputChangeHandler,
    };
};

export const useForms = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { avatarPreview, fileInputChangeHandler, selectedAvatar } = useSelectAvatar();
    const { mutate, isLoading } = useCreateOrganizationMutation(setModalOpen);

    const [currentForm, setCurrentForm] = useState<"add-organization" | "invite-admin">("add-organization");

    const { initialValues: addOrganizationInitialValues, validationSchema: addOrganizationValidationSchema } =
        useAddOrganizationForm();

    const onSubmit: FormikConfig<TAddOrganizationValues>["onSubmit"] = (values) => {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("country", values.country);
        formData.append("type", values.type);
        formData.append("industry", values.industry);
        formData.append("cnr", values.cnr);
        formData.append("max_number_workers", values.max_number_workers);
        formData.append("max_number_admins", values.max_number_admins);
        formData.append("max_number_sessions_month", values.max_number_sessions_month);
        formData.append("max_number_assessments_month", values.max_number_assessments_month);
        formData.append("admin_email", values.admin_email);
        if (selectedAvatar) formData.append("logo", selectedAvatar);
        mutate(formData);
    };

    useEffect(() => {
        setCurrentForm("add-organization");
    }, [modalOpen]);

    return {
        modalOpen,
        setModalOpen,

        avatarPreview,
        fileInputChangeHandler,

        currentForm,
        setCurrentForm,

        initialValues: addOrganizationInitialValues,
        ValidationSchema: addOrganizationValidationSchema,

        onSubmit,

        isMutationLoading: isLoading,
    };
};
