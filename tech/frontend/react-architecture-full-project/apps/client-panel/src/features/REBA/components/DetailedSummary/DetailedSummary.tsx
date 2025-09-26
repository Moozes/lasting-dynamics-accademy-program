/* eslint-disable react/no-array-index-key */
import { type HTMLDivProps, useTranslationV2 } from "ui";

import { REBAAssessmentDetail } from "@app-types/index";
import { AssessmentResultsCommentForm } from "@components/index";
import { useDetailedSummaryFormatedData } from "@features/REBA/hooks";

type Props = HTMLDivProps & {
    assessmentDetail: REBAAssessmentDetail;
};

export const DetailedSummary = ({ assessmentDetail, ...props }: Props) => {
    const t = useTranslationV2();
    const { scoresFormatedData, summaryFormatedData } = useDetailedSummaryFormatedData(assessmentDetail);
    return (
        <div {...props}>
            <table>
                <thead>
                    <tr>
                        <th colSpan={2}>{t("table_scores")}</th>
                    </tr>
                </thead>
                <tbody>
                    {scoresFormatedData.map((elm, idx) => (
                        <tr key={idx}>
                            <td
                                colSpan={elm.colSpan ? elm.colSpan : 1}
                                className={`${elm.colSpan ? "section" : "text"}`}
                            >
                                <p>{elm.text}</p>
                            </td>
                            {elm.score && (
                                <td className={`score ${elm.className ? elm.className : ""}`}>{elm.score}</td>
                            )}
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={2} className="empty-row" />
                    </tr>
                    <tr>
                        <td className="detailed-summary-title" colSpan={2}>
                            {t("ramp_assessments.results.detailed_summary")}
                        </td>
                    </tr>
                    {summaryFormatedData.map((elm, idx) => (
                        <tr key={idx}>
                            <td
                                colSpan={elm.colSpan ? elm.colSpan : 1}
                                className={`${elm.colSpan ? "section" : "text"}`}
                            >
                                <p>{elm.text}</p>
                            </td>
                            {elm.score && (
                                <td className={`score ${elm.className ? elm.className : ""}`}>{elm.score}</td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            <AssessmentResultsCommentForm />
        </div>
    );
};
