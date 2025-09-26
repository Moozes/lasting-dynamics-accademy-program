import { useFormikContext } from "formik";

import { YesNoFormCardChoiceProps } from "@features/RAMP/types";

export const useResultValue = (choices: YesNoFormCardChoiceProps[]) => {
    const formikContext = useFormikContext();
    const inputNamesArray = choices.map((choice) => choice.name);
    let multiplicationResult = 1;
    inputNamesArray.forEach((name) => {
        const formikPropertyValue = (formikContext.values as any)[name];
        multiplicationResult *= formikPropertyValue ? parseInt(formikPropertyValue, 10) : 1;
    });
    const resultIfNoInputIsFilled = 0;
    const someInputsAreFilled = inputNamesArray.some((name) => (formikContext.values as any)[name] !== "");
    return { result: someInputsAreFilled ? multiplicationResult : resultIfNoInputIsFilled };
};
