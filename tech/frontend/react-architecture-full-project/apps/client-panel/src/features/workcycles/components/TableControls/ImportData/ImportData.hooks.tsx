import { useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { useImportDataMutation } from "@queries/index";

export const useImportDataForm = (
    setModalOpen: (open: boolean) => void,
    setConfirmationModalOpen: (open: boolean) => void,
    setErrorModalOpen: (open: boolean) => void,
    setFormValues: (values: any) => void
) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const queryClient = useQueryClient();

    const initialValues = {
        import_type: "override",
    };

    const validationSchema = yup.object({
        import_type: yup.string().required(t("formik.field_is_required")),
    });

    const handleBtnClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setModalOpen(true);
        } else {
            enqueueSnackbar(t("workcycles.no_file_selected"), { severity: "warning" });
        }
    };

    const toNext = (values: typeof initialValues) => {
        setFormValues(values);
        setModalOpen(false);
        setConfirmationModalOpen(true);
    };

    const { mutate: importDataMutation } = useImportDataMutation({
        onSuccess: () => {
            enqueueSnackbar(t("workcycles.import_success"), { severity: "success" });
            setConfirmationModalOpen(false);
            setSelectedFile(null);
            queryClient.invalidateQueries(["workcycles", "factories"]);
            queryClient.invalidateQueries(["workcycles", "lines"]);
            queryClient.invalidateQueries(["workcycles", "workstations"]);
            queryClient.invalidateQueries(["workcycles", "models"]);
            queryClient.invalidateQueries(["workcycles", "tasks"]);
        },
        onError: () => {
            setConfirmationModalOpen(false);
            setErrorModalOpen(true);
        },
    });

    const onConfirm = (values: typeof initialValues) => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append("file", selectedFile);
            formData.append("import_type", values.import_type);
            importDataMutation(formData);
        } else {
            enqueueSnackbar(t("workcycles.no_file_selected"), { severity: "error" });
        }
    };

    return {
        initialValues,
        validationSchema,
        toNext,
        onConfirm,
        handleBtnClick,
        handleFileChange,
        fileInputRef,
    };
};
