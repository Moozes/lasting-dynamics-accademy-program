import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { ChevronDownIcon, DatePickerWithIcon, HTMLDivProps } from "ui";

import { useDatePicker, useGetSelectDateOptions } from "@features/statistics/hooks";
import { MenuItemStyles } from "@features/statistics/styles";
import { URLParamsToChange } from "@features/statistics/types";

type Props = HTMLDivProps & {
    urlParamsToChange: URLParamsToChange;
};

export const DateSelectInput = ({ urlParamsToChange, ...props }: Props) => {
    const { options, value } = useGetSelectDateOptions(urlParamsToChange);
    const { startDate, endDate, onDateChange, onCalendarClose } = useDatePicker(urlParamsToChange);
    return (
        <div {...props}>
            <Select value={value} IconComponent={ChevronDownIcon} className="select-drop-down">
                {options.map((elm) => (
                    <MenuItem
                        key={elm.value}
                        value={elm.value}
                        onClick={elm.onClick}
                        sx={MenuItemStyles}
                        autoFocus={false}
                    >
                        {elm.display}
                    </MenuItem>
                ))}
            </Select>
            <Divider orientation="vertical" flexItem className="divider" />
            <DatePickerWithIcon
                selected={startDate}
                onChange={onDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                onCalendarClose={onCalendarClose}
                maxDate={new Date()}
            />
        </div>
    );
};
