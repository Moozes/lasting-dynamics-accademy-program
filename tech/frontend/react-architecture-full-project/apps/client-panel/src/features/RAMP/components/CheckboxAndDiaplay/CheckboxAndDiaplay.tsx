import { useEffect, useState } from "react";
import { useFormikContext } from "formik";

import { Checkbox, type HTMLDivProps } from "ui";

import { OTHER_FACTORS_VALUES } from "@features/RAMP/utils";

import { DisplaySquare } from "../DisplaySquare";

type Props = HTMLDivProps & { formikFieldNameToBeControlled: string };

export const CheckboxAndDiaplay = ({ formikFieldNameToBeControlled, ...props }: Props) => {
    const [checked, setChecked] = useState(false);
    const { setFieldValue, values } = useFormikContext();
    const onChangeHandler = () => {
        setChecked((prev) => !prev);
        // if it is checked now, after this changeHandler it will be unchecked
        if (checked) {
            setFieldValue(formikFieldNameToBeControlled, "1");
        } else {
            const value = OTHER_FACTORS_VALUES[formikFieldNameToBeControlled];
            setFieldValue(formikFieldNameToBeControlled, value);
        }
    };

    useEffect(() => {
        if ((values as any)[formikFieldNameToBeControlled] !== "1") {
            setChecked(true);
        }
    }, []);

    const displayValue = checked ? (values as any)[formikFieldNameToBeControlled] : "";
    return (
        <div {...props}>
            <Checkbox name="nothing" checked={checked} onChange={onChangeHandler} />
            <DisplaySquare value={displayValue} width="96px" height="42px" color="normal" />
        </div>
    );
};
