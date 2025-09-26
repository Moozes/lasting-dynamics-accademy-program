/* eslint-disable react/no-array-index-key */
import type { HTMLDivProps } from "ui";

import { Assessment, RAMPAssessment } from "@app-types/index";
import { useMultiDetailedSummaryFormatedData } from "@features/RAMP/hooks";

type Props = HTMLDivProps & {
    assessments: Assessment[];
};

export const MultiRAMPAssessmentsResultsTable = ({ assessments, ...props }: Props) => {
    const { formatedData } = useMultiDetailedSummaryFormatedData(assessments as RAMPAssessment[]);
    return (
        <div {...props}>
            <table>
                <tbody>
                    {formatedData.map((elm, idx) => (
                        <tr key={idx}>
                            <td
                                colSpan={elm.colSpan ? elm.colSpan : 1}
                                className={`${elm.colSpan ? "section" : "text"}`}
                            >
                                <p>{elm.text}</p>
                            </td>
                            {elm.values &&
                                elm.values.map((val, valIdx) => (
                                    <td key={valIdx} className={`score ${val.className ? val.className : ""}`}>
                                        {val.score}
                                    </td>
                                ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
