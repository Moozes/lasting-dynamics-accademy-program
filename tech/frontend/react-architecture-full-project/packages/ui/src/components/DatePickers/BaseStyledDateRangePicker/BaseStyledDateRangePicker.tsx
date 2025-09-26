import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// true here means it selects a range, not just a single date
type Props = ReactDatePickerProps<never, true>;

export const BaseStyledDateRangePicker = ({ className, ...props }: Props) => {
    return <ReactDatePicker wrapperClassName={className} popperClassName={className} {...props} />;
};
