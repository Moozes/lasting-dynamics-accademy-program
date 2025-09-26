import { useField } from "formik";

import { StyledOutlinedTextarea } from "./OutlinedTextarea.styles";
import { OutlinedTextareaProps } from "./OutlinedTextarea.types";

// Omit error text because errorText will be extracted from formik meta
type Props = Omit<OutlinedTextareaProps, "errorText"> & {
    // Enfore name to be defined, otherwise useField will complain
    name: string;
};

export const FormikOutlinedTextarea = ({ name, ...props }: Props) => {
    const [field, meta] = useField(name);
    const formikErrorText = meta.touched ? meta.error : "";
    return <StyledOutlinedTextarea {...field} {...props} errorText={formikErrorText} />;
};
