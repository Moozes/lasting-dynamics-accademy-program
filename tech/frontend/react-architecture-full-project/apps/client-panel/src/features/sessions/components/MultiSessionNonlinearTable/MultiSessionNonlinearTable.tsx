/* eslint-disable react/no-array-index-key */
import { type HTMLDivProps, useTranslationV2 } from "ui";

import { IMultiSessionNonlinearTableProps } from "../../types";
import { variable_unit_array } from "../../utils";

type Props = HTMLDivProps & IMultiSessionNonlinearTableProps;

export const MultiSessionNonlinearTable = ({ sessionArray, ...props }: Props) => {
    const t = useTranslationV2();
    return (
        <div {...props}>
            <table>
                <thead>
                    <tr>
                        <th className="first-column"> {t("variable")} </th>
                        <th className="unit-header"> {t("Unit")} </th>
                        {sessionArray.map((session, idx, arr) => (
                            <th key={idx} className={`session-column ${idx === arr.length - 1 ? "last-column" : ""}`}>
                                {t("session")} {idx + 1}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {variable_unit_array.map((elm, idx, arr) => (
                        <tr key={idx} className={`${idx === arr.length - 1 ? "last-row" : ""}`}>
                            <td className="first-column">{elm.variableText}</td>
                            <td>{elm.unit}</td>
                            {sessionArray.map((session, sessionIdx, sessionArr) => (
                                <td
                                    key={sessionIdx}
                                    className={`${sessionIdx === sessionArr.length - 1 ? "last-column" : ""}`}
                                >
                                    {session[elm.variableObjectKeyName]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
