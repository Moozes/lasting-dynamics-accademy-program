import { useSearchParams } from "react-router-dom";
import { Row } from "react-table";

import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";

import { type HTMLDivProps, URLSearchInput, URLSearchSelect, useTranslationV2 } from "ui";
import { DateRangePickerInput } from "ui";

import { Assessment, AssessmentsEnum, ISelectedRowsProp } from "@app-types/index";
import { AddNewAssessmentButton } from "@components/assessments/AddNewAssessmentButton";
import { DeleteMultipleAssessmentsButton } from "@components/assessments/DeleteMultipleAssessmentsButton";
import { useComparison } from "@hooks/index";

import { CompareButton } from "./CompareButton";
import { useDateRangePicker, useStatusOptions } from "./TableControls.hooks";

type Props = HTMLDivProps & ISelectedRowsProp & { isDrawerOpen: boolean };

export const TableControls = ({ selectedRows, setSelectedRows, ...props }: Props) => {
    const t = useTranslationV2();
    const [searchParams] = useSearchParams();
    const assessmentCategory = searchParams.get("assesment_category");
    const workerId = searchParams.get("worker_id");
    const typedSelectedRows = selectedRows as unknown as Row<Assessment>[];
    const comparisonHook = useComparison(typedSelectedRows);
    const { statusOptions } = useStatusOptions();
    const { startDate, endDate, onDateChange, onCalendarClose, clear, isDateRangeSelected } = useDateRangePicker();
    return (
        <div {...props}>
            <div className="inputs">
                <URLSearchInput className="search-input" />
                <URLSearchSelect
                    label={t("status")}
                    URLSearchParamName="status"
                    options={statusOptions}
                    className="status-input"
                />
                <div className="date-range-container">
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
            </div>
            <div className="buttons">
                <CompareButton comparisonHook={comparisonHook} />
                {!workerId && assessmentCategory !== AssessmentsEnum.MEC && (
                    <AddNewAssessmentButton className="add-new" />
                )}
                <DeleteMultipleAssessmentsButton
                    className="delete-multiple"
                    selectedRows={selectedRows}
                    setSelectedRows={setSelectedRows}
                />
            </div>
        </div>
    );
};
