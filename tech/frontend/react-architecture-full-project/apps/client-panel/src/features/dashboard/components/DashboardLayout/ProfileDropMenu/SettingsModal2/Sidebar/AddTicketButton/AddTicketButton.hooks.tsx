import { useState } from "react";
import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { TicketValuesType } from "./AddTicketButton.types";

export const useAddNewTicketForm = () => {
    const t = useTranslationV2();
    const newTicketInitialValues: TicketValuesType = {
        subject: "",
        type: "",
        help_type: "",
        message: "",
    };
    const newTicketValidationSchema = yup.object({
        subject: yup.string().required(`${t("subject")} ${t("is_required")}`),
        type: yup.string().required(`${t("type")} ${t("is_required")}`),
        help_type: yup.string().when("type", {
            is: "help",
            then: (schema) => schema.required(`${t("formik.help_type")} ${t("is_required")}`),
            otherwise: (schema) => schema.notRequired(),
        }),
        message: yup.string().required(`${t("message")} ${t("is_required")}`),
    });
    return { newTicketInitialValues, newTicketValidationSchema };
};

export const UseSelectFiles = () => {
    const [imageFiles, setImageFiles] = useState<File[]>([]);

    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        const selectedFiles = Array.from(event.target.files as FileList).filter((file) =>
            file.type.startsWith("image/")
        );

        if (imageFiles.length > 0) {
            const concatenatedImages = selectedFiles.concat(imageFiles);
            setImageFiles(concatenatedImages);
        } else {
            setImageFiles(selectedFiles);
        }
    }

    const handleDeleteSelectedFile = (file: File) => {
        const selectedFiles = [...imageFiles];
        selectedFiles.splice(
            selectedFiles.findIndex((row) => row.name === file.name),
            1
        );
        setImageFiles(selectedFiles);
    };

    const clearImageFiles = () => {
        setImageFiles([]);
    };

    return {
        imageFiles,
        handleImageChange,
        handleDeleteSelectedFile,
        clearImageFiles,
    };
};
