import { useFormikContext } from "formik";

import { FormikRadio, type HTMLDivProps } from "ui";

import { ImageRadioButtonProps } from "@app-types/index";
import { NumberCircle } from "@components/NumberCircle";

type Props = HTMLDivProps & ImageRadioButtonProps;

export const ImageRadioButton = ({ label, name, value, className, score, image, ...props }: Props) => {
    const { values } = useFormikContext<any>();
    const selectedClassName = values[name] == value ? "selected" : "";
    return (
        <div className={`${className} ${selectedClassName}`} {...props}>
            <div className="image-container">
                <img src={image} alt="illustration" />
            </div>
            <div className="form-control">
                <label>
                    <FormikRadio name={name} value={value} />
                    <div className="text">{label}</div>
                </label>
            </div>
            <NumberCircle className="number-circle" value={score} />
        </div>
    );
};
