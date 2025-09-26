/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/display-name */
import { forwardRef } from "react";

import CalendarIcon from "../../../assets/icons/CalendarIcon";
import { HTMLDivProps } from "../../../types/global";

type Props = HTMLDivProps & {
    onClick?: () => void;
    value?: string;
};

export const Input = forwardRef<HTMLDivElement, Props>(({ onClick, value, ...props }, ref) => (
    <div onClick={onClick} ref={ref} className="custom-input" {...props}>
        {value || "Date"}
        <CalendarIcon />
    </div>
));
