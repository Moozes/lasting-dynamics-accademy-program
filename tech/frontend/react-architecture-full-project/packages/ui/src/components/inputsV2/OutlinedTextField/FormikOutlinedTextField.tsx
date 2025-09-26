import { useField } from "formik";

import { StyledOutlinedTextField } from "./OutlinedTextField.styles";
import { OutlinedTextFieldProps } from "./OutlinedTextField.types";

// Omit error text because errorText will be extracted from formik meta
type Props = Omit<OutlinedTextFieldProps, "errorText"> & {
    // Enfore name to be defined, otherwise useField will complain
    name: string;
};

export const FormikOutlinedTextField = ({ name, type, ...props }: Props) => {
    const [field, meta, helpers] = useField(name);
    const { setValue } = helpers;
    const formikErrorText = meta.touched ? meta.error : "";

    // Handler to limit the year to 4 digits
    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = event.target.value;

        // Check if the field type is 'date' and the input exceeds 10 characters
        if (type === "date" && inputValue.length > 10) {
            const [year, month, day] = inputValue.split("-");
            const validYear = year.slice(0, 4); // Limit year to 4 digits
            inputValue = [validYear, month, day].filter(Boolean).join("-");
        }
        setValue(inputValue);
    };
    return (
        <StyledOutlinedTextField
            {...field}
            {...props}
            type={type}
            onChange={type === "date" ? handleDateChange : field.onChange}
            errorText={formikErrorText}
        />
    );
};
