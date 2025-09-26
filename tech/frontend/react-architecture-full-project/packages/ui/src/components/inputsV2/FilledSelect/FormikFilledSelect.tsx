import { useField } from "formik";

import { StyledFilledSelect } from "./FilledSelect.styles";
import { FilledSelectProps } from "./FilledSelect.types";

// Omit error text because errorText will be extracted from formik meta
type Props = Omit<FilledSelectProps, "errorText"> & {
    // Enfore name to be defined, otherwise useField will complain
    name: string;
};

export const FormikFilledSelect = ({ name, ...props }: Props) => {
    const [field, meta] = useField(name);
    const formikErrorText = meta.touched ? meta.error : "";
    return <StyledFilledSelect {...field} {...props} errorText={formikErrorText} />;
};
