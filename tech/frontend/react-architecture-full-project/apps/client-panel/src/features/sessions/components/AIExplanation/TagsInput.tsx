import React from "react";
import { Form, Formik } from "formik";

import { Box, useTheme } from "@mui/material";

import { Btn, FormikOutlinedTextarea, Typography, useTranslationV2 } from "ui";

interface TagInputProps {
    onSubmit: (tags: string) => void;
    loading: boolean;
}

const TagInput: React.FC<TagInputProps> = ({ onSubmit, loading }) => {
    const t = useTranslationV2();
    const theme = useTheme();

    return (
        <Formik
            initialValues={{ tags: "" }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                onSubmit(values.tags);
                setSubmitting(false);
                resetForm();
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Typography color={theme.color_system.text.primary} variant="subtitle1" weight="bold">
                        {t("ai_explanation.Add_Log")}
                    </Typography>
                    <Box>
                        <FormikOutlinedTextarea
                            id="tags"
                            type="text"
                            name="tags"
                            placeholder={t("ai_explanation.Enter_Tags_Placeholder")}
                            rows={2}
                            sx={{ mt: 2, mb: 2 }}
                        />
                        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "1px" }}>
                            <Btn type="submit" variant="primary-contained" disabled={loading || isSubmitting}>
                                {t("ai_explanation.Submit_Tags")}
                            </Btn>
                        </Box>
                    </Box>
                </Form>
            )}
        </Formik>
    );
};

export default TagInput;
