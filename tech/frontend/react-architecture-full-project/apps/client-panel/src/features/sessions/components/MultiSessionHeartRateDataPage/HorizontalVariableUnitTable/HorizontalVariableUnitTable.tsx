/* eslint-disable react/no-array-index-key */
import { type HTMLDivProps, useTranslationV2 } from "ui";

import { IHorizontalVariableUnitTableProps } from "@features/sessions/types";

type Props = HTMLDivProps & IHorizontalVariableUnitTableProps;

export const HorizontalVariableUnitTable = ({ sessionArray, variableUnitArray, ...props }: Props) => {
    const t = useTranslationV2();
    return (
        <div {...props}>
            <table>
                <tbody>
                    <tr className="first-row">
                        <td className="title">{t("variable")}</td>
                        {variableUnitArray.map((elm, idx, arr) => (
                            <td key={idx} className={`${idx === arr.length - 1 ? "last-column" : ""}`}>
                                {elm.variable}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td className="title">{t("Unit")}</td>
                        {variableUnitArray.map((elm, idx, arr) => (
                            <td key={idx} className={`${idx === arr.length - 1 ? "last-column" : ""}`}>
                                {elm.unit}
                            </td>
                        ))}
                    </tr>

                    {sessionArray.map((session, sessionIdx, sessionArr) => (
                        <tr key={sessionIdx} className={`${sessionIdx === sessionArr.length - 1 ? "last-row" : ""}`}>
                            <td className="title">
                                {t("session")} {sessionIdx + 1}
                            </td>

                            {variableUnitArray.map((elm, idx, arr) => (
                                <td key={idx} className={`${idx === arr.length - 1 ? "last-column" : ""}`}>
                                    {session[elm.variableObjectKey]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
