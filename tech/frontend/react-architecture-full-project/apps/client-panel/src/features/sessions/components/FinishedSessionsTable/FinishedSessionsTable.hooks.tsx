/* eslint-disable no-nested-ternary */
import { useMemo } from "react";
import { Column } from "react-table";
import { format, intervalToDuration, parseISO } from "date-fns";

import { SxProps, useTheme } from "@mui/material";

import { Btn, Typography, useTranslationV2 } from "ui";

import { Link } from "@components/index";
import { SessionStatusEnum } from "@features/sessions/types";
import { zeroPad } from "@utils/index";

import { FinishedSessionSettingsButton } from "./FinishedSessionSettingsButton";
import { WorkerCell } from "./WorkerCell";

const DurationTypography = ({ duration }: { duration: string }) => {
    const theme = useTheme();
    return (
        <Typography variant="h6" color={theme.color_system.text.primary} sx={{ textTransform: "capitalize" }}>
            {duration}
        </Typography>
    );
};

const noneClickableStyles: SxProps = {
    cursor: "not-allowed",
};

export const useColumns = () => {
    const t = useTranslationV2();
    const columns: Column[] = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },
            {
                id: "worker",
                Header: () => <span>{t("Worker")}</span>,
                accessor: (row) => row,
                Cell: ({ value }) => <WorkerCell session={value} />,
            },
            {
                id: "recorded_by",
                Header: () => <span>{t("Recorded_by")}</span>,
                // @ts-ignore
                accessor: (row) => row.recorded_by,
                Cell: ({ value }) => <span>{`${value.first_name} ${value.last_name}`}</span>,
            },
            {
                Header: () => <span>{t("Started_at")}</span>,
                accessor: "started_at",
                Cell: ({ value }) => {
                    return <span>{value ? format(parseISO(value), "LLL dd, yyyy p") : "N/A"}</span>;
                },
            },
            {
                id: "duration",
                Header: () => <span>{t("Duration")}</span>,
                accessor: "duration",
                Cell: ({ value }) => {
                    const duration = intervalToDuration({ start: 0, end: value * 1000 });
                    const formatedDuration = `${zeroPad(duration.hours)}:${zeroPad(duration.minutes)}:${zeroPad(
                        duration.seconds
                    )}`;
                    return <DurationTypography duration={formatedDuration} />;
                },
            },
            {
                Header: () => <span>{t("Completed_at")}</span>,
                accessor: "ended_at",
                Cell: ({ value }) => {
                    return <span>{value ? format(parseISO(value), "LLL dd, yyyy p") : "N/A"}</span>;
                },
            },
            {
                id: "noSort_actions",
                disableSortBy: true,
                accessor: (row) => row,
                Cell: ({ value }) =>
                    value.status === SessionStatusEnum.FAILED ? (
                        <Btn variant="text" sx={noneClickableStyles}>
                            {`${t("failed")}`}
                        </Btn>
                    ) : value.calculations_completed ? (
                        <Link to={`/dashboard/sessions/${value.id}/details?tab=Posture`}>
                            <Btn variant="text">{t("details")}</Btn>
                        </Link>
                    ) : value.processing ? (
                        <Btn variant="text" sx={noneClickableStyles}>
                            {`${t("processing")}...`}
                        </Btn>
                    ) : !value.has_measurements ? (
                        <Btn variant="text" sx={noneClickableStyles}>
                            {t("no_file")}
                        </Btn>
                    ) : (
                        <Btn variant="text" sx={noneClickableStyles}>
                            {t("error")}
                        </Btn>
                    ),
            },
            {
                id: "noSort_actions2",
                disableSortBy: true,
                accessor: (row) => row,
                Cell: ({ value }) => <FinishedSessionSettingsButton selectedSession={value} />,
            },
        ],
        [t]
    );
    return columns;
};
