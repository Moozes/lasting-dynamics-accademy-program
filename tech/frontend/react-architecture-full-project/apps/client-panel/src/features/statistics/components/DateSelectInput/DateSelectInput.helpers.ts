import { TranslationFunction } from "ui";

export const getValues = (t: TranslationFunction) => [
    {
        value: "today",
        display: t("today"),
    },
    {
        value: "week",
        display: "1 W",
    },
    {
        value: "month",
        display: "30 D",
    },
    {
        value: "custom",
        display: t("custom"),
    },
];
