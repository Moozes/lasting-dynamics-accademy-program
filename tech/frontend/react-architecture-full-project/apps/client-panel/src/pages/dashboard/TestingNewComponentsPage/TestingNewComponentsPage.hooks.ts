import { useState } from "react";
import { FormikHelpers } from "formik";
import * as yup from "yup";

type Values = {
    name: string;
    role: string;
    organization: string;
};

export const useForm = () => {
    const [currentStep, setCurrentStep] = useState<1 | 2>(1);

    // initial values
    const initialValues: Values = {
        // step 1
        name: "",
        role: "",
        // step 2
        organization: "",
    };

    // validation schema 1
    const step1Schema = yup.object({
        name: yup.string().required("Name is required"),
        role: yup.string().oneOf(["admin", "worker"], "Role must be Admin or Worker").required("Role is required"),
    });

    // validation schema 2
    const step2Schema = yup.object({
        organization: yup.string().required("Organization is required"),
    });

    // on submit handler
    const handleSubmit = (values: Values, helpers: FormikHelpers<Values>) => {
        if (values.role === "worker" && currentStep === 1) {
            console.log("step 1, role worker, and values: ", values);
            setCurrentStep(2);
            helpers.setTouched({});
        } else {
            console.log("submitted values", values);
        }
        helpers.setSubmitting(false);
    };

    return {
        currentStep,
        setCurrentStep,
        initialValues,
        step1Schema,
        step2Schema,
        handleSubmit,
    };
};
