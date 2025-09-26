/* eslint-disable react/no-array-index-key */
import { Fragment } from "react";

import { useTheme } from "@mui/material";

import { type HTMLDivProps, SmallColoredCircleIcon, useTranslationV2 } from "ui";

import { IMultiSessionAnglesTableProps } from "../../types";

import { getStatusCircleColor } from "./MultiSessionAnglesTable.helpers";

type Props = HTMLDivProps & IMultiSessionAnglesTableProps;

export const MultiSessionAnglesTable = ({
    tableTitle,
    scale,
    measurement1,
    measurement2,
    sessionCount,
    rowsArray,
    hasStatusCircles,
    ...props
}: Props) => {
    const theme = useTheme();
    const t = useTranslationV2();
    return (
        <div {...props}>
            <table>
                <thead>
                    <tr>
                        <th className="table-title">{tableTitle}</th>
                        {Array.from({ length: sessionCount }).map((elm, idx) => (
                            <th key={idx} className="session-column" colSpan={2}>
                                {t("session")} {idx + 1}
                            </th>
                        ))}
                    </tr>
                    <tr>
                        <th className="">{scale}</th>
                        {Array.from({ length: sessionCount }).map((elm, idx) => (
                            <Fragment key={idx}>
                                <th className="session-sub-column">{measurement1}</th>
                                <th className="session-sub-column">{measurement2}</th>
                            </Fragment>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rowsArray.map((row, rowIdx) => (
                        <tr key={rowIdx}>
                            {row.map((str, strIdx) => (
                                <td key={strIdx} className={strIdx == 0 ? "scale" : ""}>
                                    {hasStatusCircles && strIdx === 0 && (
                                        <SmallColoredCircleIcon bgColor={getStatusCircleColor(rowIdx, theme)} />
                                    )}{" "}
                                    {str}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
