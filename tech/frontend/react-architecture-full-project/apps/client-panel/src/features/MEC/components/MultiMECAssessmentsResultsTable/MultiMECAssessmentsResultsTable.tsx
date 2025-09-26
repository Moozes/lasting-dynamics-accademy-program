/* eslint-disable react/no-array-index-key */
import { Fragment } from "react";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { Assessment, IGeneratedMECAssessment } from "@app-types/index";
import { useMultiDetailedSummaryFormatedData } from "@features/MEC/hooks";
import { MECStatusEnum } from "@features/MEC/types";
import { useHandleMissingSensor } from "@hooks/index";

type Props = HTMLDivProps & {
    assessments: Assessment[];
};

// get border right class name
const getBRC = (index: number, array: any[]) => {
    const isLastIndex = index == array.length - 1;
    if (isLastIndex) return "thick-border-right";
    return "";
};

// get status class name
const gSC = (status: MECStatusEnum | null) => status || "";

export const MultiMECAssessmentsResultsTable = ({ assessments, ...props }: Props) => {
    const t = useTranslationV2();
    const { formatedData } = useMultiDetailedSummaryFormatedData(assessments as IGeneratedMECAssessment[]);
    const { handleMissingSensor } = useHandleMissingSensor();
    return (
        <div {...props}>
            {formatedData.map((elm, elmIdx) => (
                <div key={elmIdx} className="table-container">
                    <table>
                        <tbody>
                            {/* question row */}
                            <tr>
                                <td className="title" colSpan={elm.subQuestions.length * 2 + 3}>
                                    {elm.question}
                                </td>
                            </tr>
                            {/* sub questions rows */}
                            <tr>
                                <td
                                    className={
                                        elm.subQuestions.length == 2
                                            ? "assessment-column-2-subquestions"
                                            : "assessment-column-3-subquestions"
                                    }
                                />
                                {elm.subQuestions.map((subQuestion, subQuestionIdx, subQuestionArray) => (
                                    <td
                                        className={`illustration-column ${getBRC(subQuestionIdx, subQuestionArray)}`}
                                        key={subQuestionIdx}
                                        colSpan={2}
                                    >
                                        <div className="sub-question-number">{subQuestion.q}</div>
                                        <img src={subQuestion.illustration} alt="illustration" />
                                    </td>
                                ))}
                                <td className="result-column" />
                                <td className="justification-column" />
                            </tr>
                            <tr>
                                <td />
                                {elm.subQuestions.map((subQuestion, subQuestionIdx, subQuestionArray) => (
                                    <Fragment key={subQuestionIdx}>
                                        <td className="count-freq-column">{t("mec_assessments.dynamic_movements")}</td>
                                        <td className={`time-column ${getBRC(subQuestionIdx, subQuestionArray)}`}>
                                            {t("mec_assessments.static_postures_time")}
                                        </td>
                                    </Fragment>
                                ))}
                                <td>{t("result")}</td>
                                <td>{t("justification")}</td>
                            </tr>
                            {/* assessments rows */}
                            {elm.assessments.map((a, aIdx) => (
                                <tr key={aIdx}>
                                    <td className="title">
                                        {t("assessment")} {aIdx + 1}
                                    </td>
                                    {a.subQuestions.map((subQuestion, subQuestionIdx, subQuestionArray) => (
                                        <Fragment key={subQuestionIdx}>
                                            <td className="data-cell">
                                                {handleMissingSensor(subQuestion.count_freq, subQuestion.missing_limb)}
                                            </td>
                                            <td className={`data-cell ${getBRC(subQuestionIdx, subQuestionArray)}`}>
                                                {handleMissingSensor(subQuestion.time, subQuestion.missing_limb)}
                                            </td>
                                        </Fragment>
                                    ))}
                                    <td className={`data-cell ${gSC(a.status)}`} />
                                    <td className="data-cell">{a.justification}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};
