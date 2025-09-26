import * as yup from "yup";

import { useTranslationV2 } from "ui";

export const useConfirmWordSchema = () => {
    const t = useTranslationV2();
    return {
        confirmWordSchema: yup.object({
            word: yup.string().required(t("formik.word_required_error")),
            word_confirmation: yup
                .string()
                .required(t("formik.word_required_error"))
                .oneOf([yup.ref("word")], t("formik.word_confirmation")),
        }),
    };
};
