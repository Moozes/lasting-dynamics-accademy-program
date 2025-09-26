import { useReducer } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { useSnackbar } from "notistack";

import { Btn, type HTMLDivProps, PlusIcon, useTranslationV2 } from "ui";

import { authAtom } from "@atoms/index";
import { FormDialog } from "@components/index";
import { useAddCategoryAndLabelsMutation } from "@features/CategoriesAndLabels/queries";

import { useAddCategoryForm } from "./AddCategoryButton.hooks";
import { Form } from "./Form";

type Props = HTMLDivProps;

export const AddCategoryButton = (props: Props) => {
    const t = useTranslationV2();
    const auth = useAtomValue(authAtom);
    const { initialValues, validationSchema } = useAddCategoryForm();
    const [istDialogOpen, setIsDialogOpen] = useReducer((state) => {
        return !state;
    }, false);
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient();
    const { mutate: addCategoryAndLabels, isLoading } = useAddCategoryAndLabelsMutation({
        organizationId: auth.wergonicUser?.organization?.id,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categoriesAndLabels"] });
            enqueueSnackbar(t("category_and_labels_management.category_created_successfully"));
            setIsDialogOpen();
        },
        onError: (err: any) => {
            let message;
            if (
                err.response.data?.non_field_errors &&
                err.response.data?.non_field_errors.includes("A category with the same name and labels already exists.")
            ) {
                message = t("category_and_labels_management.category_labels_duplication");
            } else if (err.response.data?.detail) {
                message = err.response.data?.detail;
            } else {
                message = t("Something_went_Wrong");
            }
            enqueueSnackbar(message, { severity: "error" });
            setIsDialogOpen();
        },
    });
    return (
        <div {...props}>
            <Btn onClick={setIsDialogOpen} endIcon={<PlusIcon />}>
                {t("add_category")}
            </Btn>
            <FormDialog
                dialogOpen={istDialogOpen}
                toggleDialog={setIsDialogOpen}
                header={t("add_category")}
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    addCategoryAndLabels(values);
                }}
                rightSideAction={
                    <Btn loading={isLoading} type="submit">
                        {t("save")}
                    </Btn>
                }
            >
                <Form />
            </FormDialog>
        </div>
    );
};
