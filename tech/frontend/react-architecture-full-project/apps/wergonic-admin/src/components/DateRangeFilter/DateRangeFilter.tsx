import { Clear as ClearIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { DateRangePickerInput } from "ui";

import { useDateRangeFilter } from "./DateRangeFilter.hooks";

type DateRangeFilterProps = {
    paramName: string;
};

export const DateRangeFilter = ({ paramName }: DateRangeFilterProps) => {
    const { startDate, endDate, onDateChange, onCalendarClose, clear, isDateRangeSelected } =
        useDateRangeFilter(paramName);

    return (
        <div className="date-range-filter">
            <DateRangePickerInput
                selectsRange
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                onChange={onDateChange}
                onCalendarClose={onCalendarClose}
            />
            {isDateRangeSelected && (
                <IconButton onClick={clear} className="clear-icon-button">
                    <ClearIcon fontSize="small" />
                </IconButton>
            )}
        </div>
    );
};
