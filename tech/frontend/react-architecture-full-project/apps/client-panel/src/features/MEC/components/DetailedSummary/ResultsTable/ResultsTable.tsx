import { type HTMLDivProps, useTranslationV2 } from "ui";

import { OvalShape } from "@components/OvalShape";
import { IMECResultsFormatedData } from "@features/MEC/types";
import { useHandleMissingSensor } from "@hooks/index";

import { useGetColorFromStatus } from "./ResultsTable.hooks";

type Props = HTMLDivProps & {
    tableData: IMECResultsFormatedData;
};

export const ResultsTable = ({ tableData, ...props }: Props) => {
    const t = useTranslationV2();
    const { getColorFromStatus } = useGetColorFromStatus();
    const { handleMissingSensor } = useHandleMissingSensor();
    return (
        <div {...props}>
            <table>
                <thead>
                    <tr>
                        <th>Q</th>
                        <th>{t("mec_assessments.mec_assessment")}</th>
                        <th>{t("mec_assessments.dynamic_movements")}</th>
                        <th>{t("mec_assessments.static_postures_time")}</th>
                        <th>{t("Result")}</th>
                        <th>{t("justification")}</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.subQuestion.map((elm, index, array) => (
                        <tr key={elm.question}>
                            <td>{elm.question}</td>
                            <td>
                                <img src={elm.illustration} alt="illustrations" />
                            </td>
                            <td>{handleMissingSensor(elm.count_freq, elm.missing_limb)}</td>
                            <td>{handleMissingSensor(elm.time, elm.missing_limb)}</td>
                            {index == 0 && (
                                <>
                                    <td rowSpan={array.length}>
                                        <OvalShape backgroundColor={getColorFromStatus(tableData.status)} />
                                    </td>
                                    <td rowSpan={array.length}>{tableData.justification}</td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
