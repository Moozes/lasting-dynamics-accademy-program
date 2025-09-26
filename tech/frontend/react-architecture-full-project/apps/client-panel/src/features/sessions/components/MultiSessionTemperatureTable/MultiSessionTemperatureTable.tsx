/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { Fragment } from "react";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { useLimbsArray } from "../../hooks";
import { IMultiSessionTemperatureTableProps } from "../../types";

type Props = HTMLDivProps & IMultiSessionTemperatureTableProps;

export const MultiSessionTemperatureTable = ({ sessionsArray, ...props }: Props) => {
    const t = useTranslationV2();
    const { limbsArray } = useLimbsArray();
    return (
        <div {...props}>
            <table>
                <thead>
                    <tr>
                        <th />
                        {sessionsArray.map((session, idx, arr) => (
                            <th
                                key={idx}
                                colSpan={4}
                                className={`session-column ${idx === 0 ? "first-column" : ""} ${
                                    idx === arr.length - 1 ? "last-column " : ""
                                }`}
                            >
                                {t("session")} {idx + 1}
                            </th>
                        ))}
                    </tr>
                    <tr>
                        <th className="limbs">{t("limbs_other")}</th>
                        {sessionsArray.map((session, idx) => (
                            <Fragment key={idx}>
                                <th className="session-sub-column">{t("mean")}</th>
                                <th className="session-sub-column">{t("max")}</th>
                                <th className="session-sub-column">{t("min")}</th>
                                <th className="session-sub-column">{t("median")}</th>
                            </Fragment>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {limbsArray.map((elm, elmIdx) => (
                        <tr key={elmIdx} className={`${elmIdx === limbsArray.length - 1 ? "last-row" : ""}`}>
                            <td className="limb">{elm.limbName}</td>
                            {sessionsArray.map((session, idx) => (
                                <Fragment key={idx}>
                                    <td className="temperature">{session[elm.limbObjectKeyName].mean}</td>
                                    <td className="temperature">{session[elm.limbObjectKeyName].max}</td>
                                    <td className="temperature">{session[elm.limbObjectKeyName].min}</td>
                                    <td
                                        className={`temperature ${
                                            idx === sessionsArray.length - 1 ? "bottom-left-cell" : ""
                                        }`}
                                    >
                                        {session[elm.limbObjectKeyName].median}
                                    </td>
                                </Fragment>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
