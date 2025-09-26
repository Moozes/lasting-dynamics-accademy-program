import { type HTMLDivProps, useTranslationV2 } from "ui";

import { IGeneratedRAMPResultsFormatedData } from "@features/RAMP/types";
import { useHandleMissingSensor } from "@hooks/index";

type Props = HTMLDivProps & {
    tableData: IGeneratedRAMPResultsFormatedData;
};

export const ResultsTable = ({ tableData, ...props }: Props) => {
    const t = useTranslationV2();
    const { handleMissingSensor } = useHandleMissingSensor();
    return (
        <div {...props}>
            <table>
                <thead>
                    <tr>
                        <th>Q</th>
                        <th>{t("ramp_assessments.results.table_header_1")}</th>
                        <th>{t("ramp_assessments.results.table_header_5")}</th>
                        {tableData.subQuestion.some((elm) => elm.frequency) && (
                            <th>{t("ramp_assessments.results.table_header_8")}</th>
                        )}
                        <th>{t("ramp_assessments.results.table_header_10")}</th> {/* New Percentage Column */}
                        {tableData.sensor && <th>{t("ramp_assessments.results.table_header_9")}</th>}
                        <th>{t("ramp_assessments.results.table_header_6")}</th>
                        <th>{t("ramp_assessments.results.table_header_7")}</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.subQuestion.map((elm, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <tr key={index}>
                            <td>{elm.question || "-"}</td>
                            <td>
                                <img src={elm.illustration} alt="illustration" />
                            </td>
                            <td>{handleMissingSensor(elm.time !== null ? elm.time : "-", elm.missing_limb)}</td>
                            <td>{elm.percentage !== null ? `${elm.percentage}%` : "-"}</td>
                            {elm.frequency && <td>{elm.frequency}</td>}
                            {tableData.sensor && index === 0 && (
                                <td rowSpan={tableData.subQuestion.length}>{tableData.sensor}</td>
                            )}
                            {index === 0 && (
                                <>
                                    <td rowSpan={tableData.subQuestion.length}>{tableData.variables}</td>
                                    <td rowSpan={tableData.subQuestion.length}>
                                        <ul>
                                            {tableData.calculations.map((calc, idx) => (
                                                // eslint-disable-next-line react/no-array-index-key
                                                <li key={idx}>{calc}</li>
                                            ))}
                                        </ul>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
