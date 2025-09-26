import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormikConfig } from "formik";
import { useSnackbar } from "notistack";
import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { TAddFirmwareValues } from "@app-types/index";
import { createFirmware } from "@queries/index";

export const useSelectFirmwareFile = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const fileInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length) {
            const file = files[0];
            if (file.type === "application/zip" || file.name.endsWith(".zip")) {
                setSelectedFile(file);
            }
        }
    };

    return {
        selectedFile,
        setSelectedFile,
        fileInputChangeHandler,
    };
};

const useAddFirmwareForm = () => {
    const t = useTranslationV2();
    const firmwareVersionPatternError = t("formik.field_must_match_patter", {
        field: t("formik.fields.firmware_version"),
        pattern: t("formik.version_number_pattern"),
    });
    const initialValues: TAddFirmwareValues = {
        mobile_version: "",
        firmware_version: "",
        description: "",
        zip_file: null,
    };
    const validationSchema = yup.object({
        mobile_version: yup
            .string()
            .required(t<string>("formik.field_is_required", { field: t("formik.fields.mobile_version") })),
        firmware_version: yup
            .string()
            .matches(/^\d+\.\d+\.\d+$/, firmwareVersionPatternError)
            .required(t<string>("formik.field_is_required", { field: t("formik.fields.firmware_version") })),
        description: yup.string(),
        zip_file: yup.mixed().required(t<string>("formik.field_is_required", { field: t("formik.fields.zip_file") })),
    });
    return { initialValues, validationSchema };
};

export const useCreateFirmwareMutation = (
    setModalOpen: Dispatch<SetStateAction<boolean>>,
    setSelectedFile: Dispatch<SetStateAction<File | null>>
) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: FormData) => createFirmware(data),
        onSuccess: () => {
            enqueueSnackbar(t("queries.entity_created_successfully", { entity: t("queries.entities.firmware") }));
            queryClient.invalidateQueries(["devices", "firmwares"]);
            setSelectedFile(null);
        },
        onError: () => {
            enqueueSnackbar(t("queries.something_went_wrong"), { severity: "error" });
        },
        onSettled: () => {
            setModalOpen(false);
        },
    });
};

export const useForms = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { fileInputChangeHandler, selectedFile, setSelectedFile } = useSelectFirmwareFile();
    const { mutate, isLoading } = useCreateFirmwareMutation(setModalOpen, setSelectedFile);

    const { initialValues, validationSchema } = useAddFirmwareForm();

    const onSubmit: FormikConfig<TAddFirmwareValues>["onSubmit"] = (values) => {
        const formData = new FormData();
        formData.append("mobile_version", values.mobile_version);
        formData.append("firmware_version", values.firmware_version);
        formData.append("description", values.description);
        if (selectedFile) {
            formData.append("zip_file", selectedFile);
        }
        mutate(formData);
    };

    return {
        modalOpen,
        setModalOpen,
        fileInputChangeHandler,
        initialValues,
        validationSchema,
        onSubmit,
        isMutationLoading: isLoading,
        selectedFile,
    };
};
