import { useMemo } from "react";
import { Column } from "react-table";
import { format, parseISO } from "date-fns";

import { SxProps, Theme } from "@mui/material";
import MuiTypography from "@mui/material/Typography";

import { Btn, displayOrFallback, useTranslationV2 } from "ui";

import { Assessment, AssessmentsEnum, AssessmentSourceEnum, AssessmentStatusEnum } from "@app-types/index";
import { Link } from "@components/index";
import routes from "@routes/routes";

import { Cell } from "./Cell";
import { NameCell } from "./NameCell";

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
            case AssessmentStatusEnum.FAILED:
                return theme.color_system.status.error.dark;
        }
    },
});

export const useLinkProps = (assessment: Assessment) => {
    const t = useTranslationV2();
    let text = "";
    let linkUrl = "";
    let isDisabled = false;
    if (assessment.assesment_category === AssessmentsEnum.RAMP) {
        if (assessment.source === AssessmentSourceEnum.GENERATED) {
            if (assessment.status === AssessmentStatusEnum.PROCESSING) {
                text = `${t("processing")}...`;
                linkUrl = "";
                isDisabled = true;
            } else if (assessment.status === AssessmentStatusEnum.FAILED) {
                text = `${t("failed")}`;
                linkUrl = "";
                isDisabled = true;
            } else {
                text = t("details");
                linkUrl = `${routes.dashboard.rampAssessments}/${assessment.id}/continue`;
            }
        } else if (assessment.source === AssessmentSourceEnum.MANUAL) {
            if (assessment.status === AssessmentStatusEnum.COMPLETED) {
                text = t("details");
                linkUrl = `${routes.dashboard.rampAssessments}/${assessment.id}/results`;
            } else if (assessment.status === AssessmentStatusEnum.IN_PROGRESS) {
                text = t("continue");
                linkUrl = `${routes.dashboard.rampAssessments}/${assessment.id}`;
            }
        }
    } else if (assessment.assesment_category === AssessmentsEnum.RULA) {
        linkUrl =
            assessment.status === AssessmentStatusEnum.IN_PROGRESS
                ? `${routes.dashboard.rulaAssessments}/${assessment.id}`
                : `${routes.dashboard.rulaAssessments}/${assessment.id}/results`;
        text = assessment.status === AssessmentStatusEnum.IN_PROGRESS ? t("continue") : t("details");
    } else if (assessment.assesment_category === AssessmentsEnum.REBA) {
        linkUrl =
            assessment.status === AssessmentStatusEnum.IN_PROGRESS
                ? `${routes.dashboard.rebaAssessments}/${assessment.id}`
                : `${routes.dashboard.rebaAssessments}/${assessment.id}/results`;
        text = assessment.status === AssessmentStatusEnum.IN_PROGRESS ? t("continue") : t("details");
    } else if (assessment.assesment_category === AssessmentsEnum.MEC) {
        // there is no mec details page, so IN_PROGRESS link is empty
        if (assessment.status === AssessmentStatusEnum.COMPLETED) {
            text = t("details");
            linkUrl = `${routes.dashboard.mecAssessments}/${assessment.id}/results`;
        } else if (assessment.status === AssessmentStatusEnum.PROCESSING) {
            text = `${t("processing")}...`;
            linkUrl = "";
            isDisabled = true;
        } else if (assessment.status === AssessmentStatusEnum.FAILED) {
            text = `${t("failed")}`;
            linkUrl = "";
            isDisabled = true;
        }
    }
    return {
        text,
        linkUrl,
        isDisabled,
    };
};

export const useColumns = () => {
    const t = useTranslationV2();
    const columns: Column[] = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
                Cell: ({ value }) => <Cell width="50px">{displayOrFallback(value)}</Cell>,
            },
            {
                Header: () => <span>{t("ramp_assessments.assessment_name")}</span>,
                accessor: "assessment_name",
                Cell: ({ row, value }) => <NameCell assessmentName={displayOrFallback(value)} row={row} />,
            },
            {
                Header: () => <span>{t("date")}</span>,
                accessor: "date",
                Cell: ({ value }) => {
                    return <Cell>{format(parseISO(value), "LLL dd, yyyy")}</Cell>;
                },
            },
            {
                Header: () => <span>{t("type")}</span>,
                accessor: "assessment_type",
                Cell: ({ value }) => <Cell>{displayOrFallback(value)}</Cell>,
            },
            {
                Header: () => <span>{t("site")}</span>,
                accessor: "site",
                Cell: ({ value }) => <Cell>{displayOrFallback(value)}</Cell>,
            },
            {
                Header: () => <span>{t("country")}</span>,
                accessor: "country",
                Cell: ({ value }) => <Cell>{displayOrFallback(value)}</Cell>,
            },
            {
                Header: () => <span>{t("status")}</span>,
                accessor: "status",
                Cell: ({ value }) => {
                    let text;
                    // eslint-disable-next-line default-case
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
                        <Cell>
                            <MuiTypography variant="h6" sx={MuiTypographyStyles(value)}>
                                {text}
                            </MuiTypography>
                        </Cell>
                    );
                },
            },
            {
                Header: () => <span>{t("worker")}</span>,
                accessor: "worker",
                Cell: ({ value }) => <Cell>{displayOrFallback(value)}</Cell>,
            },
            {
                Header: () => <span>{t("work_task")}</span>,
                accessor: "work_task",
                Cell: ({ value }) => <Cell>{displayOrFallback(value)}</Cell>,
            },
            {
                Header: () => <span>{t("Unit")}</span>,
                accessor: "unit",
                Cell: ({ value }) => <Cell>{displayOrFallback(value)}</Cell>,
            },
            {
                Header: () => <span>{t("company_representative")}</span>,
                accessor: "company_representative",
                Cell: ({ value }) => <Cell>{displayOrFallback(value)}</Cell>,
            },
            {
                Header: () => <span>{t("assessment_completed_by")}</span>,
                accessor: "assessment_completed_by",
                Cell: ({ value }) => <Cell>{displayOrFallback(value)}</Cell>,
            },
            {
                Header: () => <span>{t("comment")}</span>,
                accessor: "comment",
                Cell: ({ value }) => <Cell>{displayOrFallback(value)}</Cell>,
            },
            {
                id: "noSort_actions",
                disableSortBy: true,
                accessor: (row) => row,
                Cell: ({ value }) => {
                    const { text, linkUrl, isDisabled } = useLinkProps(value);
                    return linkUrl ? (
                        <Link to={linkUrl}>
                            <Btn variant="text">{text}</Btn>
                        </Link>
                    ) : (
                        <Btn variant="text" disabled={isDisabled}>
                            {text}
                        </Btn>
                    );
                },
            },
        ],
        [t]
    );
    return columns;
};
