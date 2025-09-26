import { ReactDatePickerProps } from "react-datepicker";

import { BaseStyledDateRangePicker } from "../BaseStyledDateRangePicker";

import { StyledInput } from "./Input.styles";

type Props = ReactDatePickerProps<never, true>;
export const DateRangePickerInput = ({ className, ...props }: Props) => {
    return <BaseStyledDateRangePicker className={className} customInput={<StyledInput />} {...props} />;
};
