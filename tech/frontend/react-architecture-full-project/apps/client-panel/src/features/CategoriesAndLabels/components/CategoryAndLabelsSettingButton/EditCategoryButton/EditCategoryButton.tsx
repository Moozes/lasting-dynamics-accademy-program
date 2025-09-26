import { useReducer } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { cloneDeep } from "lodash";
import { useSnackbar } from "notistack";

import { Box, useTheme } from "@mui/material";

import { Btn, PencilIcon2, Typography, useTranslationV2 } from "ui";

import { authAtom } from "@atoms/index";
import { FormDialog } from "@components/index";
import { useEditCategotyAndLabelsMutation } from "@features/CategoriesAndLabels/queries";
import { ICategoryAndLabels, IEditCategoryAndLabels } from "@features/CategoriesAndLabels/types";
import { TABLE_SETTINGS_MENU_ITEM_TEXT_ML } from "@utils/index";

import { useEditCategoryForm } from "./EditCategoryButton.hooks";
import { Form } from "./Form";
import { boxStyles } from "./inlineStyles";

type Props = {
    selectedRow: ICategoryAndLabels;
    handleMenuClose: () => void;
};

export const EditCategoryButton = ({ selectedRow, handleMenuClose }: Props) => {
    const t = useTranslationV2();
    const theme = useTheme();
    const auth = useAtomValue(authAtom);
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient();
    const { initialValues, validationSchema } = useEditCategoryForm(selectedRow);
    const [isDialgoOpen, setIsDialgoOpen] = useReducer((state) => {
        return !state;
    }, false);
    const onDialogClose = () => {
        setIsDialgoOpen();
        handleMenuClose();
    };

    const { mutate: editCategoryAndLabels, isLoading } = useEditCategotyAndLabelsMutation({
        organizationId: auth.wergonicUser?.organization?.id,
        onSuccess: () => {
            handleMenuClose();
            queryClient.invalidateQueries({ queryKey: ["categoriesAndLabels"] });
            enqueueSnackbar(t("category_and_labels_management.category_edited_successfully"));
            onDialogClose();
        },
        onError: (err: any) => {
            let message;
            if (err.response.data?.detail) {
                message = err.response.data?.detail;
            } else {
                message = t("Something_went_Wrong");
            }
            enqueueSnackbar(message, { severity: "error" });
            onDialogClose();
        },
    });

    const onSubmitHandler = (values: IEditCategoryAndLabels) => {
        // format values to include deleted labels with delete flag
        // im using deep cloning to not modify formik values
        const valuesDeepCopy = cloneDeep(values);
        const editedLabels = valuesDeepCopy.labels;
        const originalLabels = selectedRow.labels;
        const deletedLabels: { id: number; delete: boolean }[] = [];
        originalLabels.forEach((originalLabel) => {
            const labelExists = editedLabels.find((editedLabel) => editedLabel.id == originalLabel.id);
            if (!labelExists)
                deletedLabels.push({
                    id: originalLabel.id,
                    delete: true,
                });
        });
        valuesDeepCopy.labels.push(...deletedLabels);
        editCategoryAndLabels(valuesDeepCopy);
    };

    return (
        <>
            <Box display="flex" alignItems="center" sx={boxStyles} onClick={setIsDialgoOpen}>
                <PencilIcon2 />

                <Typography
                    ml={TABLE_SETTINGS_MENU_ITEM_TEXT_ML}
                    variant="body1"
                    color={theme.color_system.text.primary}
                >
                    {t("edit_category")}
                </Typography>
            </Box>
            <FormDialog
                dialogOpen={isDialgoOpen}
                toggleDialog={onDialogClose}
                header={t("edit_category")}
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmitHandler}
                rightSideAction={
                    <Btn loading={isLoading} variant="primary-contained" type="submit">
                        {t("Edit")}
                    </Btn>
                }
            >
                <Form />
            </FormDialog>
        </>
    );
};
