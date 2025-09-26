import { countryList } from "ui";

export const COUNTRIES_SELECT_OPTIONS = [
    { value: "", label: "None" },
    ...countryList.map((c) => ({ value: c, label: c })),
];
