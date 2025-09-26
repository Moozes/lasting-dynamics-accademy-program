import * as yup from "yup";

import { useTranslationV2 } from "ui";

export const useAddNewLogSchema = () => {
    const t = useTranslationV2();
    return {
        AddNewLogSchema: yup.object({
            description: yup.string().required(`${t("comment")} ${t("is_required")}`),
        }),
    };
};
