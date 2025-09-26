import { FormikCheckbox, type HTMLDivProps } from "ui";

import { CheckboxCardProps } from "../../types";

type Props = HTMLDivProps & CheckboxCardProps;

export const CheckboxCard = ({ name, label, disabled, ...props }: Props) => {
    return (
        <div {...props}>
            <label>
                <FormikCheckbox name={name} disabled={disabled} />
                <div className="text">{label}</div>
            </label>
        </div>
    );
};
