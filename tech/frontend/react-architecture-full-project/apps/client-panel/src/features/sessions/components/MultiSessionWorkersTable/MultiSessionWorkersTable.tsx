/* eslint-disable react/no-array-index-key */
import { parseISO } from "date-fns";

import { getFormatedDateString, type HTMLDivProps, useTranslationV2 } from "ui";

import { IGetSelectedSessionsStatsQueryResponse } from "../../types";

type Props = HTMLDivProps & {
    sessions: IGetSelectedSessionsStatsQueryResponse;
};

export const MultiSessionWorkersTable = ({ sessions, ...props }: Props) => {
    const t = useTranslationV2();
    return (
        <div {...props}>
            <table>
                <thead>
                    <tr>
                        <th className="table-title first-Column">{t("session")}</th>
                        {sessions.map((session, idx, sessionsArray) => {
                            const isLastColumn = idx === sessionsArray.length - 1;
                            return (
                                <th className={isLastColumn ? "last-column" : ""} key={idx}>
                                    {t("session")} {idx + 1}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="first-Column">{t("date")}</td>
                        {sessions.map((session, idx) => (
                            <td key={idx}>{getFormatedDateString(parseISO(session.started_at))}</td>
                        ))}
                    </tr>
                    <tr className="last-row">
                        <td className="first-Column">{t("worker")}</td>
                        {sessions.map((session, idx, sessionsArray) => {
                            const fullName = `${session.worker_details.first_name} ${session.worker_details.last_name}`;
                            const isLastColumn = idx === sessionsArray.length - 1;
                            return (
                                <td className={isLastColumn ? "last-column" : ""} key={idx}>
                                    {fullName}
                                </td>
                            );
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
