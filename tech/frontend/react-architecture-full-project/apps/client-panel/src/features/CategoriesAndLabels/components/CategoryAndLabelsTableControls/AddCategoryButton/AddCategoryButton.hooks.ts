import { useSearchParams } from "react-router-dom";
import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { IAddCategoryAndLabels } from "@features/CategoriesAndLabels/types";

export const useAddCategoryForm = () => {
    const t = useTranslationV2();
    const [searchParams] = useSearchParams();
    const categoryType = searchParams.get("category_type");
    const initialValues: IAddCategoryAndLabels = {
        category_name: "",
        category_type: categoryType as string,
        labels: [
            {
                label_name: "",
                is_private: false,
            },
        ],
    };
    const validationSchema = yup.object({
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
