/* eslint-disable default-case */
import { useMemo } from "react";
import { Column } from "react-table";
import { format, parseISO } from "date-fns";

import { SxProps, Theme } from "@mui/material";
import MuiTypography from "@mui/material/Typography";

import { useTranslationV2 } from "ui";

import { AssessmentStatusEnum } from "@app-types/index";
import { useConfirmWordSchema } from "@schemas/index";

export const useDeleteMultipleAssessmentsForm = () => {
    const deleteMultipleAssessmentsInitialValues = (passedRandomWord: string) => ({
        word: passedRandomWord,
        word_confirmation: "",
    });
    const { confirmWordSchema: deleteMultipleAssessmentsValidationSchema } = useConfirmWordSchema();
    return { deleteMultipleAssessmentsInitialValues, deleteMultipleAssessmentsValidationSchema };
};

const MuiTypographyStyles = (value: AssessmentStatusEnum): SxProps<Theme> => ({
    // eslint-disable-next-line consistent-return
    color: (theme) => {
        // eslint-disable-next-line default-case
        switch (value) {
            case AssessmentStatusEnum.COMPLETED:
                return theme.color_system.status.infos.dark;
            case AssessmentStatusEnum.IN_PROGRESS:
                return theme.color_system.status.warning.dark;
            case AssessmentStatusEnum.PROCESSING:
                return theme.color_system.button.disabled.text;
        }
    },
});

export const useColumns = () => {
    const t = useTranslationV2();
    const columns: Column[] = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },
            {
                Header: () => <span>{t("ramp_assessments.assessment_name")}</span>,
                accessor: "assessment_name",
            },
            {
                Header: () => <span>{t("date")}</span>,
                accessor: "date",
                Cell: ({ value }) => {
                    return <span>{format(parseISO(value), "LLL dd, yyyy p")}</span>;
                },
            },
            {
                Header: () => <span>{t("type")}</span>,
                accessor: "assessment_type",
            },
            {
                Header: () => <span>{t("site")}</span>,
                accessor: "site",
            },
            {
                Header: () => <span>{t("country")}</span>,
                accessor: "country",
            },
            {
                Header: () => <span>{t("status")}</span>,
                accessor: "status",
                Cell: ({ value }) => {
                    let text;
                    switch (value) {
                        case AssessmentStatusEnum.COMPLETED:
                            text = t("completed");
                            break;
                        case AssessmentStatusEnum.IN_PROGRESS:
                            text = t("in_progress");
                            break;
                        case AssessmentStatusEnum.PROCESSING:
                            text = t("processing");
                            break;
                    }
                    return (
                        <MuiTypography variant="h6" sx={MuiTypographyStyles(value)}>
                            {text}
                        </MuiTypography>
                    );
                },
            },
            {
                Header: () => <span>{t("worker")}</span>,
                accessor: "worker",
            },
            {
                Header: () => <span>{t("work_task")}</span>,
                accessor: "work_task",
            },
            {
                Header: () => <span>{t("Unit")}</span>,
                accessor: "unit",
            },
            {
                Header: () => <span>{t("company_representative")}</span>,
                accessor: "company_representative",
            },
            {
                Header: () => <span>{t("assessment_completed_by")}</span>,
                accessor: "assessment_completed_by",
            },
            {
                Header: () => <span>{t("comment")}</span>,
                accessor: "comment",
            },
        ],
        [t]
    );
    return columns;
};
