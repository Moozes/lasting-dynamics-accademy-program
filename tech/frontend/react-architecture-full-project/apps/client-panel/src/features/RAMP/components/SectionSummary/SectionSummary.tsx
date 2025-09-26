/* eslint-disable react/no-array-index-key */
import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { useFormatedData } from "./SectionSummary.hooks";

type Props = HTMLDivProps;

export const SectionSummary = (props: Props) => {
    const t = useTranslationV2();
    const { headCells, bodyRows } = useFormatedData();
    return (
        <div {...props}>
            <Typography className="title" variant="h4">
                {t("ramp_assessments.results.section_summary")}
            </Typography>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            {headCells.map((cell) => (
                                <th key={cell}>{cell}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {bodyRows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
