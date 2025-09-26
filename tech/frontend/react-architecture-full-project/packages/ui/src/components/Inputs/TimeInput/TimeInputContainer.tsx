import { useField } from "formik";

import { StyledTimeInput } from "./TimeInput.styles";
import { ITimeInputProps } from "./TimeInput.types";

// make name required
type Props = ITimeInputProps & { name: string };

export const TimeInputContainer = ({ name, ...props }: Props) => {
    const [field, meta] = useField<string>(name);
    return <StyledTimeInput {...(field as any)} {...props} error={meta.touched && meta.error} />;
};
