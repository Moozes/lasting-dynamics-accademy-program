import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { ICategoryAndLabels, IEditCategoryAndLabels } from "@features/CategoriesAndLabels/types";

export const useEditCategoryForm = (selectedRow: ICategoryAndLabels) => {
    const t = useTranslationV2();

    const initialValues: IEditCategoryAndLabels = {
        id: selectedRow.id.toString(),
        category_name: selectedRow.category_name,
        labels: [...selectedRow.labels],
    };
    const validationSchema = yup.object({
        id: yup.string().required("id is required"),
        category_name: yup.string().required(`${t("category")} ${t("is_required")}`),
        labels: yup
            .array()
            .of(
                yup.object({
                    label_name: yup.string().required(`${t("label")} ${t("is_required")}`),
                    is_private: yup.boolean().required("is_private is required"),
                })
            )
            .min(1, `${t("labels")} ${t("is_required")}`)
            .required(`${t("labels")} ${t("is_required")}`),
    });
    return { initialValues, validationSchema };
};
