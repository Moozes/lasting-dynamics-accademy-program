import { Formik } from "formik";

type Props = {
    children: JSX.Element;
    assessment: any;
};

export const AssessmentFormConfig = ({ children, assessment }: Props) => {
    return (
        <Formik initialValues={assessment} enableReinitialize onSubmit={() => {}}>
            {() => children}
        </Formik>
    );
};
