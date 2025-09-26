import { styled } from "@mui/material/styles";

import { BaseStyledDateRangePicker } from "./BaseStyledDateRangePicker";

export const StyledBaseStyledDateRangePicker = styled(BaseStyledDateRangePicker)(({ theme }) => ({
    "& .custom-input": {
        cursor: "pointer",
    },
    "& .react-datepicker": {
        background: theme.color_system.divider.white,
    },
    "& .react-datepicker__header": {
        background: theme.color_system.divider.light_grey,
    },
    "& .react-datepicker__current-month": {
        color: theme.color_system.text.primary,
    },
    "& .react-datepicker__day-name": {
        color: theme.color_system.text.primary,
    },
    "& .react-datepicker__day": {
        color: theme.color_system.text.primary,
    },
    "& .react-datepicker__day:hover:not(.react-datepicker__day--in-selecting-range)": {
        color: theme.color_system.text.primary,
        background: theme.color_system.divider.light_grey_20,
    },
    "& .react-datepicker__day--selected": {
        background: theme.color_system.status.infos.light,
        color: "#fff",
    },
    "& .react-datepicker__day--in-range": {
        background: theme.color_system.status.infos.light,
        color: "#fff",
    },
    "& .react-datepicker__day--in-selecting-range": {
        background: theme.color_system.status.infos.light,
        color: "#fff",
    },
    "& .react-datepicker__day--keyboard-selected": {
        background: theme.color_system.status.infos.light,
        color: "#fff",
    },
    "& .react-datepicker__day--disabled": {
        opacity: 0.5,
    },
}));
