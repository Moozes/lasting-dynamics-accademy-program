import { useFormikContext } from "formik";

import { FormikCheckbox, type HTMLDivProps } from "ui";

import { TextCheckboxProps } from "@app-types/index";
import { NumberCircle } from "@components/NumberCircle";

type Props = HTMLDivProps & TextCheckboxProps;

export const TextCheckbox = ({ name, label, score, className, withBorder, disabled, ...props }: Props) => {
    const { values } = useFormikContext<any>();
    const selectedClassName = values[name] ? "selected" : "";
    const borderClassName = withBorder ? "border" : "";
    return (
        <div className={`${className} ${selectedClassName} ${borderClassName}`} {...props}>
            <label>
                <FormikCheckbox name={name} disabled={disabled} />
                <div className="text">{label}</div>
            </label>
            <NumberCircle value={score} className="number-circle" />
        </div>
    );
};
