import Typography from "@mui/material/Typography";

import { FormikFilledTextarea, type HTMLDivProps, useTranslationV2 } from "ui";

import { useFormatedData } from "./PerceivedPhysicalDiscomfortSubForm.hooks";

type Props = HTMLDivProps;

export const PerceivedPhysicalDiscomfortSubForm = (props: Props) => {
    const t = useTranslationV2();
    const formatedData = useFormatedData();
    return (
        <div {...props}>
            <div className="header">
                <Typography className="title" variant="h4">
                    {t("ramp_assessments.perceived_physical_discomfort_form.perceived_physical_discomfort_2_title")}
                </Typography>
            </div>
            {formatedData.map((elm, index, array) => {
                const showBorder = index !== array.length - 1;
                return (
                    <div key={elm.text} className={`form-element ${showBorder ? "border-bottom" : ""}`}>
                        <Typography className="text" variant="body2">
                            {elm.text}
                        </Typography>
                        <FormikFilledTextarea
                            id={elm.commentInputName}
                            className="text-area"
                            name={elm.commentInputName}
                            label={t("add_comment")}
                            rows={5}
                            maxLength={100}
                        />
                    </div>
                );
            })}
        </div>
    );
};
