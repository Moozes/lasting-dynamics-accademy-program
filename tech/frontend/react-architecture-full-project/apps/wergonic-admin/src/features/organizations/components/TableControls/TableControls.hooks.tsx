import { useTranslationV2 } from "ui";

export const useIsActiveOptions = () => {
    const t = useTranslationV2();

    return [
        { value: "", label: t("none") },
        { value: "true", label: t("Active") },
        { value: "false", label: t("Inactive") },
    ];
};
