import { useField } from "formik";

import { StyledRadio } from "./Radio.styles";
import { TProps } from "./Radio.types";

// Enforce name to be defined, enforce value to be a string
type Props = TProps & { name: string; value: string };

export const FormikRadio = ({ name, value, ...props }: Props) => {
    // i added value to useField config because checked state didnt work without it
    const [field] = useField({ name, type: "radio", value });
    return <StyledRadio {...field} {...props} />;
};
