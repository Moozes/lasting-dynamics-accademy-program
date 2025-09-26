import { useFormikContext } from "formik";
import { useAtomValue } from "jotai";

import { liftingWorkSelectedTabAtom } from "@features/RAMP/atoms";

export const useLiftingAreaFactorTable = () => {
    const { setFieldValue, values } = useFormikContext();
    const liftingWorkSelectedTab = useAtomValue(liftingWorkSelectedTabAtom);
    const formikFieldsToChange = {
        field1Name:
            liftingWorkSelectedTab === "average"
                ? "lifting_work_table_2_factor_x"
                : "lifting_work_table_2_worst_factor_x",
        field2Name:
            liftingWorkSelectedTab === "average"
                ? "lifting_work_table_2_factor_y"
                : "lifting_work_table_2_worst_factor_y",
    };

    const cellClickHandler = (x: number, y: number) => {
        setFieldValue(formikFieldsToChange.field1Name, x.toString());
        setFieldValue(formikFieldsToChange.field2Name, y.toString());
    };

    const floatingBoxClickHandler = () => {
        setFieldValue(formikFieldsToChange.field1Name, "0.9");
        setFieldValue(formikFieldsToChange.field2Name, "0.9");
    };

    const getSelectedClassName = (x: number, y: number) => {
        let selectedClassName = "";
        const xFieldName =
            liftingWorkSelectedTab === "average"
                ? "lifting_work_table_2_factor_x"
                : "lifting_work_table_2_worst_factor_x";
        const yFieldName =
            liftingWorkSelectedTab === "average"
                ? "lifting_work_table_2_factor_y"
                : "lifting_work_table_2_worst_factor_y";
        const xFormikValue = (values as any)[xFieldName] as string;
        const yFormikValue = (values as any)[yFieldName] as string;

        if (xFormikValue === x.toString() && yFormikValue === y.toString()) {
            selectedClassName = "selected";
        }

        return selectedClassName;
    };

    return {
        cellClickHandler,
        floatingBoxClickHandler,
        getSelectedClassName,
    };
};
