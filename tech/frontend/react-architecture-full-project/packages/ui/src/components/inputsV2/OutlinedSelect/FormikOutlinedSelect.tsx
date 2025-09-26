import { useField } from "formik";

import { StyledOutlinedSelect } from "./OutlinedSelect.styles";
import { OutlinedSelectProps } from "./OutlinedSelect.types";

// Omit error text because errorText will be extracted from formik meta
type Props = Omit<OutlinedSelectProps, "errorText"> & {
    // Enfore name to be defined, otherwise useField will complain
    name: string;
};

export const FormikOutlinedSelect = ({ name, ...props }: Props) => {
    const [field, meta] = useField(name);
    const formikErrorText = meta.touched ? meta.error : "";
    return <StyledOutlinedSelect {...field} {...props} errorText={formikErrorText} />;
};
