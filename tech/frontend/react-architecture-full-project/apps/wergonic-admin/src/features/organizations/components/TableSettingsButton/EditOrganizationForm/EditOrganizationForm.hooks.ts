import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { Row } from "react-table";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormikConfig } from "formik";
import { capitalize } from "lodash";
import { useSnackbar } from "notistack";
import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { TEditOrganizationValues, TOrganization } from "@app-types/index";
import { updateOrganization } from "@queries/index";

export const useUpdateOrganizationMutation = (setModalOpen: Dispatch<SetStateAction<boolean>>) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: { id: string; formData: FormData }) => updateOrganization(data),
        onSuccess: () => {
            enqueueSnackbar(t("queries.entity_updated_successfully", { entity: t("queries.entities.organization") }));
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

export const useEditOrganizationForm = (row: Row<TOrganization>, setModalOpen: Dispatch<SetStateAction<boolean>>) => {
    const t = useTranslationV2();
    const { mutate, isLoading } = useUpdateOrganizationMutation(setModalOpen);
    const { avatarPreview, fileInputChangeHandler, selectedAvatar } = useSelectAvatar();
    const replaceIfUndefined = (value: string | null | undefined) => value || "";
    const initialValues: TEditOrganizationValues = {
        id: replaceIfUndefined(row.original.id),
        name: replaceIfUndefined(row.original.name),
        country: capitalize(replaceIfUndefined(row.original.country)),
        type: replaceIfUndefined(row.original.type),
        industry: replaceIfUndefined(row.original.industry),
        cnr: replaceIfUndefined(row.original.cnr),
        max_number_workers: replaceIfUndefined(row.original.max_number_workers),
        max_number_admins: replaceIfUndefined(row.original.max_number_admins),
        max_number_sessions_month: replaceIfUndefined(row.original.max_number_sessions_month),
        max_number_assessments_month: replaceIfUndefined(row.original.max_number_assessments_month),
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
    });

    const onSubmit: FormikConfig<TEditOrganizationValues>["onSubmit"] = (values) => {
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
        if (selectedAvatar) formData.append("logo", selectedAvatar);
        mutate({ id: values.id, formData });
    };

    return { initialValues, validationSchema, avatarPreview, fileInputChangeHandler, onSubmit, isLoading };
};
