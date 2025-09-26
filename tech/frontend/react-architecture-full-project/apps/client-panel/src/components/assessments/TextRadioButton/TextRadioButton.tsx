import { useFormikContext } from "formik";

import { FormikRadio, type HTMLDivProps } from "ui";

import { TextRadioButtonProps } from "@app-types/index";
import { NumberCircle } from "@components/NumberCircle";

type Props = HTMLDivProps & TextRadioButtonProps;

export const TextRadioButton = ({ label, name, value, className, score, noBorder, ...props }: Props) => {
    const { values } = useFormikContext<any>();
    const selectedClassName = values[name] == value ? "selected" : "";
    const borderClassName = noBorder ? "" : "border";
    return (
        <div className={`${className} ${selectedClassName} ${borderClassName}`} {...props}>
            <label>
                <FormikRadio name={name} value={value} />
                <div className="text">{label}</div>
            </label>
            <NumberCircle className="number-circle" value={score} />
        </div>
    );
};
