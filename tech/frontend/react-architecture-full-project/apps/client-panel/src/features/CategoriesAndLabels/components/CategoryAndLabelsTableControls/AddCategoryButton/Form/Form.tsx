/* eslint-disable react/no-array-index-key */
import { useSearchParams } from "react-router-dom";
import { useFormikContext } from "formik";

import { IconButton } from "@mui/material";

import { Btn, DeleteTrashIcon, FormikOutlinedTextField, type HTMLDivProps, PlusIcon, useTranslationV2 } from "ui";

import { CategoryTypesEnum } from "@app-types/index";
import { IAddCategoryAndLabels } from "@features/CategoriesAndLabels/types";

type Props = HTMLDivProps;

export const Form = (props: Props) => {
    const t = useTranslationV2();
    const formik = useFormikContext<IAddCategoryAndLabels>();
    const [searchParams] = useSearchParams();
    const categoryType = searchParams.get("category_type");
    const categoryTypeTranslation = categoryType == CategoryTypesEnum.WORK_LABEL ? t("work_label") : t("work_task");

    const addLabelInput = () => {
        const labelsArray = formik.values.labels;
        formik.setFieldValue("labels", [...labelsArray, { label_name: "", is_private: false }]);
    };

    const removeLabelInput = (index: number) => {
        const labelsArray = formik.values.labels;
        formik.setFieldValue(
            "labels",
            labelsArray.filter((_, elmIdx) => elmIdx !== index)
        );
    };
    return (
        <div {...props}>
            <FormikOutlinedTextField
                id="category"
                name="category_name"
                className="input"
                label={t("category")}
                required
            />
            <FormikOutlinedTextField
                id="label"
                name="labels.0.label_name"
                className="input"
                label={categoryTypeTranslation}
                required
            />
            {formik.values.labels.map((_, index) => {
                // skip first label, because it is already rendered
                if (index == 0) return null;
                return (
                    <FormikOutlinedTextField
                        key={index}
                        id="label"
                        name={`labels.${index}.label_name`}
                        className="input"
                        label={categoryTypeTranslation}
                        required
                        endAdornment={
                            <IconButton className="icon-button" onClick={() => removeLabelInput(index)}>
                                <DeleteTrashIcon className="trash-icon" />
                            </IconButton>
                        }
                    />
                );
            })}
            <Btn variant="text" className="add-item" type="button" startIcon={<PlusIcon />} onClick={addLabelInput}>
                {t("add_item")}
            </Btn>
        </div>
    );
};
