import { useField } from "formik";

import { StyledCheckbox } from "./Checkbox.styles";
import { TProps } from "./Checkbox.types";

// Enforce name to be defined
type Props = TProps & { name: string };

// this formikcheckbox does not support array values
// initialValues: {checked: []}
// it only support boolean values
// initialValues: {checked: false}
// use chatgpt to add the logic to support array values
export const FormikCheckbox = ({ name, ...props }: Props) => {
    const [field] = useField({ name, type: "checkbox" });
    return <StyledCheckbox {...field} {...props} />;
};
