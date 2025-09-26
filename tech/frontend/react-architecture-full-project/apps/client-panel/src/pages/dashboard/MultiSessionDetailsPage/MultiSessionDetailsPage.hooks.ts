import { useTranslationV2 } from "ui";

import { MultiSessionDetailsSubRoutesEnum } from "@features/sessions/index";

export const useMultiSessionDetailsLinks = () => {
    const t = useTranslationV2();
    return {
        keepSearchParams: true,
        links: [
            {
                text: t("sessions_management.table_of_results"),
                to: MultiSessionDetailsSubRoutesEnum.tableOfResults,
                className: "",
            },
            {
                text: t("sessions_management.TNO_results"),
                to: MultiSessionDetailsSubRoutesEnum.TNOResults,
                className: "",
            },
            {
                text: t("heart_rate_data"),
                to: MultiSessionDetailsSubRoutesEnum.heartRateData,
                className: "",
            },
            {
                text: t("Temperature"),
                to: MultiSessionDetailsSubRoutesEnum.temperature,
                className: "",
            },
        ],
    };
};
