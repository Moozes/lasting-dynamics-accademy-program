import { Form, Formik } from "formik";

import { Stack } from "@mui/material";

import { Btn, FormikOutlinedTextField } from "ui";

import AuthFormLayout from "@features/auth/components/AuthFormLayout";

import useAccountCreationForm from "./AccountCreationForm.hooks";

export const AccountCreationForm = () => {
    const { accountCreationInitialValues, accountCreationValidationSchema } = useAccountCreationForm();
    return (
        <AuthFormLayout
            header="Create an Account"
            paragraph="To create an account and access ergonomic data, contact us, and we’ll get back at you."
        >
            <Formik
                onSubmit={() => {}}
                initialValues={accountCreationInitialValues}
                validationSchema={accountCreationValidationSchema}
                validateOnBlur={false}
                validateOnChange={false}
            >
                <Form>
                    <Stack gap={2}>
                        <FormikOutlinedTextField
                            id="email"
                            type="email"
                            name="email"
                            label="E-mail"
                            autoComplete="off"
                        />
                        <Btn type="submit" variant="primary-contained">
                            Submit Email
                        </Btn>
                    </Stack>
                </Form>
            </Formik>
        </AuthFormLayout>
    );
};
