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
    // show this error message only if it is a string, because it could be an array
    const allLabelsAreDeletedErrorMessage = typeof formik.errors.labels == "string" ? formik.errors.labels : "";
    return (
        <div {...props}>
            <FormikOutlinedTextField
                id="category"
                name="category_name"
                className="input"
                label={t("category")}
                required
            />
            {formik.values.labels.map((_, index) => {
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
            <div className="error-message"> {allLabelsAreDeletedErrorMessage} </div>
            <Btn variant="text" className="add-item" type="button" startIcon={<PlusIcon />} onClick={addLabelInput}>
                {t("add_item")}
            </Btn>
        </div>
    );
};
