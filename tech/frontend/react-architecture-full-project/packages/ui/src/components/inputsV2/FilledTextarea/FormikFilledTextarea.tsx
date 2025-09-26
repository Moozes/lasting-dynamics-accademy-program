import { useLayoutEffect } from "react";
import { useField } from "formik";
import { truncate } from "lodash";

import { Box } from "@mui/material";

import { StyledFilledTextarea } from "./FilledTextarea.styles";
import { FilledTextareaProps } from "./FilledTextarea.types";

// Omit error text because errorText will be extracted from formik meta
type Props = Omit<FilledTextareaProps, "errorText"> & {
    // Enfore name to be defined, otherwise useField will complain
    name: string;
    maxLength?: number;
};

export const FormikFilledTextarea = ({ name, maxLength, className, ...props }: Props) => {
    const [field, meta, helpers] = useField(name);
    const { value } = field;

    const maxLengthFeatureIsApplied = maxLength && maxLength >= 0;
    useLayoutEffect(() => {
        if (maxLengthFeatureIsApplied) {
            if (value.length > maxLength) {
                helpers.setValue(truncate(value, { length: maxLength, omission: "" }));
            }
        }
    }, [field.value]);

    const formikErrorText = meta.touched ? meta.error : "";
    return (
        <div className={className}>
            <StyledFilledTextarea {...field} {...props} errorText={formikErrorText} />
            {maxLengthFeatureIsApplied && (
                <Box className="character-number">
                    {value.length}/{maxLength}
                </Box>
            )}
        </div>
    );
};
