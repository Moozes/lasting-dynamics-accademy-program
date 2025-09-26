import { useField } from "formik";

import { StyledFilledTextField } from "./FilledTextField.styles";
import { FilledTextFieldProps } from "./FilledTextField.types";

// Omit error text because errorText will be extracted from formik meta
type Props = Omit<FilledTextFieldProps, "errorText"> & {
    // Enfore name to be defined, otherwise useField will complain
    name: string;
};

export const FormikFilledTextField = ({ name, ...props }: Props) => {
    const [field, meta] = useField(name);
    const formikErrorText = meta.touched ? meta.error : "";
    return <StyledFilledTextField {...field} {...props} errorText={formikErrorText} />;
};
