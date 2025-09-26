import { useTranslationV2 } from "ui";

export const useSelectOptions = () => {
    const t = useTranslationV2();
    return {
        TICKETSELECTTYPES: [
            { value: "bug", label: t("settings.bug_report") },
            { value: "feature", label: t("settings.feature_request") },
            { value: "suggestion", label: t("settings.suggestion") },
            { value: "help", label: t("settings.help") },
        ],
        TICKETSELECTHELPTYPES: [
            { value: "account", label: t("settings.account_help") },
            { value: "billing", label: t("settings.billing_help") },
            { value: "other", label: t("settings.other_help") },
        ],
    };
};
