/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from "react";
import { Column } from "react-table";
import { useQuery } from "@tanstack/react-query";
import { format, intervalToDuration, parseISO } from "date-fns";
import {
    collection,
    DocumentData,
    getCountFromServer,
    limit,
    onSnapshot,
    orderBy,
    query,
    QueryConstraint,
    where,
} from "firebase/firestore";
import { TFunction } from "i18next";
import { useAtom } from "jotai";

import { Theme, useTheme } from "@mui/material";

import { Typography, useTranslationV2 } from "ui";

import { authAtom } from "@atoms/index";
import { SessionStatusEnum } from "@features/sessions/types";
import { Firestore } from "@services/index";
import { zeroPad } from "@utils/index";

import { ActiveSessionSettingsButton } from "./ActiveSessionSettingsButton";
import { AddLogButton } from "./AddLogButton";
import { SessionStatusDialog } from "./SessionStatusDialog";

export const useInterruptedSessionsCount = () => {
    const t = useTranslationV2();
    const [auth] = useAtom(authAtom);
    const organizationId = auth.wergonicUser?.organization?.id;

    const { data, isError, isLoading } = useQuery(["interrupted-session-count", organizationId], async () => {
        const collectionRef = collection(Firestore, `organizations/${organizationId}/sessions`);
        const countWhereFilter = where("status", "==", SessionStatusEnum.INTERRUPTED);
        const countQuery = query(collectionRef, countWhereFilter);
        const snapshot = await getCountFromServer(countQuery);
        return snapshot.data().count;
    });

    return {
        isInterruptedCountError: isError,
        interruptedCount: isLoading ? t("loading") : data,
        isInterruptedCountLoading: isLoading,
    };
};

export const useNonInterruptedSessionsCount = () => {
    const t = useTranslationV2();
    const [auth] = useAtom(authAtom);
    const organizationId = auth.wergonicUser?.organization?.id;

    const { data, isError, isLoading } = useQuery(["noninterrupted-session-count", organizationId], async () => {
        const collectionRef = collection(Firestore, `organizations/${organizationId}/sessions`);
        const countWhereFilter = where("status", "!=", SessionStatusEnum.INTERRUPTED);
        const countQuery = query(collectionRef, countWhereFilter);
        const snapshot = await getCountFromServer(countQuery);
        return snapshot.data().count;
    });

    return {
        isNonInterruptedCountError: isError,
        nonInterruptedCount: isLoading ? t("loading") : data,
    };
};

export const useActiveSessionsQuery = () => {
    const [auth] = useAtom(authAtom);
    const organizationId = auth.wergonicUser?.organization?.id;
    const [data, setData] = useState<DocumentData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [noMoreData, setNoMoreData] = useState(false);
    const [queryLimit, setQueryLimit] = useState(10);
    const [showInterrupted, setShowInterrupted] = useState(false);

    useEffect(() => {
        setLoading(true);
        const collectionRef = collection(Firestore, `organizations/${organizationId}/sessions`);

        const whereFilter = showInterrupted
            ? where("status", "in", [SessionStatusEnum.INTERRUPTED])
            : where("status", "in", [
                  SessionStatusEnum.FAILED,
                  SessionStatusEnum.FINISHED,
                  SessionStatusEnum.ONGOING,
                  SessionStatusEnum.PAUSED,
              ]);

        const constraints: QueryConstraint[] = [whereFilter, orderBy("started_at", "desc"), limit(queryLimit)];

        const sessionsQuery = query(collectionRef, ...constraints);

        const unsubscribe = onSnapshot(
            sessionsQuery,
            (snapshot) => {
                // Check if we have reached the end
                if (snapshot.size < queryLimit) {
                    setNoMoreData(true);
                }

                const newData = snapshot.docs.map((doc) => doc.data());
                setData(newData);
                setLoading(false);
            },
            (firestoreError) => {
                setError(firestoreError.message);
                setLoading(false);
            }
        );
        return () => unsubscribe();
    }, [organizationId, queryLimit, setQueryLimit, showInterrupted]);

    return {
        data,
        loading,
        error,
        noMoreData,
        setQueryLimit,
        showInterrupted,
        setShowInterrupted,
    };
};

const statusMap = new Map();
statusMap.set(SessionStatusEnum.ONGOING, { text: "On going", color: "success.main" });
statusMap.set(SessionStatusEnum.PAUSED, { text: "Paused", color: "warning.main" });
statusMap.set(SessionStatusEnum.FAILED, { text: "Failed", color: "error.main" });
statusMap.set(SessionStatusEnum.FINISHED, { text: "Finished", color: "gray" });
statusMap.set(SessionStatusEnum.INTERRUPTED, { text: "Interrupted", color: "warning.light" });

const getStatuValue = (role: string | undefined, theme: Theme, t: TFunction) => {
    if (statusMap.has(role)) {
        let statusTextColor: string;
        switch (t(statusMap.get(role).text)) {
            case t("On going"):
                statusTextColor = theme.color_system.status.success.light;
                break;
            case t("Paused"):
                statusTextColor = theme.color_system.status.warning.dark;
                break;
            case t("Failed"):
                statusTextColor = theme.color_system.status.error.light;
                break;
            case t("Interrupted"):
                statusTextColor = theme.color_system.status.warning.light;
                break;
            default:
                statusTextColor = theme.color_system.status.infos.light;
        }
        return { text: t(statusMap.get(role).text), color: statusTextColor };
    }
    return { text: t("Not Assigned"), color: "gray" };
};

const DurationTypography = ({ duration }: { duration: string }) => (
    <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
        {duration}
    </Typography>
);

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
                Header: () => <span style={{ paddingLeft: "5px" }}>{t("Worker")}</span>,
                // @ts-ignore
                accessor: (row) => row.worker,
                Cell: ({ value }) => (
                    <span style={{ paddingLeft: "5px" }}>{`${value.first_name} ${value.last_name}`}</span>
                ),
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
                    return <span>{format(parseISO(value), "LLL dd, yyyy p")}</span>;
                },
            },
            {
                id: "duration",
                Header: () => <span>{t("Duration")}</span>,
                accessor: "duration",
                Cell: ({ row }) => {
                    const { hours, minutes, seconds } = intervalToDuration({
                        start: parseISO(row.values.started_at),
                        end: new Date(),
                    });
                    return (
                        <DurationTypography duration={`${zeroPad(hours)}:${zeroPad(minutes)}:${zeroPad(seconds)}`} />
                    );
                },
            },
            {
                id: "status",
                Header: "Status",
                // @ts-ignore
                accessor: (row) => [row.status, row.devices],
                Cell: ({ value }) => {
                    const theme = useTheme();
                    const status = getStatuValue(value[0], theme, t);
                    return <SessionStatusDialog color={status.color} status={status.text} devices={value[1]} />;
                },
            },
            {
                id: "noSort_actions",
                disableSortBy: true,
                Cell: ({ row }) => {
                    // @ts-ignore
                    return <AddLogButton selectedRow={row.values} />;
                },
            },
            {
                id: "noSort_actions2",
                disableSortBy: true,
                Cell: ({ row }) => {
                    // @ts-ignore
                    return <ActiveSessionSettingsButton selectedRow={row.values} />;
                },
            },
        ],
        [t]
    );
    return columns;
};
