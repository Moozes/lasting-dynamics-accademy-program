/* eslint-disable import/no-extraneous-dependencies */
import { forwardRef } from "react";
import { ReactDatePickerProps } from "react-datepicker";

import CalendarIcon from "../../../assets/icons/CalendarIcon";
import { BaseStyledDateRangePicker } from "../BaseStyledDateRangePicker";

type Props = ReactDatePickerProps<never, true>;

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef(({ onClick }: { onClick?: any }, ref) => (
    // eslint-disable-next-line react/button-has-type, jsx-a11y/no-static-element-interactions
    <div onClick={onClick} ref={ref as any} className="custom-input">
        <CalendarIcon />
    </div>
));

export const DatePickerWithIcon = ({ className, ...props }: Props) => {
    return <BaseStyledDateRangePicker className={className} customInput={<CustomInput />} {...props} />;
};
