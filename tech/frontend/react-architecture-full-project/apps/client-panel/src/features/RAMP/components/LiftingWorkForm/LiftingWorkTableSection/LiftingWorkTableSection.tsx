import { useFormikContext } from "formik";

import Typography from "@mui/material/Typography";

import { FormikCheckbox, FormikFilledTextarea, type HTMLDivProps, useTranslationV2 } from "ui";

import { DisplaySquare } from "@features/RAMP/components/DisplaySquare";
import { useLiftingWorkRiskScores } from "@features/RAMP/hooks";

import { useTableUniformRows } from "./LiftingWorkTableSection.hooks";

type Props = HTMLDivProps;

export const LiftingWorkTableSection = (props: Props) => {
    const t = useTranslationV2();
    const { values } = useFormikContext();
    const { rows1, rows2 } = useTableUniformRows();
    const { riskScore1, riskScore2 } = useLiftingWorkRiskScores();
    const noFactorsFieldName = "lifting_work_factors_non_existent";
    const noFactorsFieldValue = (values as any)[noFactorsFieldName] as boolean;
    return (
        <div {...props}>
            <table>
                <thead>
                    <tr>
                        <th className="head-1">{t("table_factors")}</th>
                        <th className="center">{t("factor")}</th>
                        <th className="center">{t("worst_Factor")}</th>
                    </tr>
                </thead>
                <tbody>
                    {rows1.map((row) => (
                        <tr key={row.cell1}>
                            <td className="text">{row.cell1}</td>
                            <td>{row.cell2}</td>
                            <td>{row.cell3}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={3} className="empty-row" />
                    </tr>
                    <tr>
                        <td colSpan={3} className="head-1 text">
                            {t("other_factors")}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3} className="text">
                            <div className="no-factor-container">
                                {t("ramp_assessments.lifting_work_form.no_factor_text")}
                                <label>
                                    <FormikCheckbox name={noFactorsFieldName} />
                                    <div className="text">
                                        {t("ramp_assessments.lifting_work_form.no_factor_label")}
                                    </div>
                                </label>
                            </div>
                        </td>
                    </tr>
                    {!noFactorsFieldValue && (
                        <>
                            {rows2.map((row) => (
                                <tr key={row.rowKey}>
                                    <td className="text">{row.cell1}</td>
                                    <td>{row.cell2}</td>
                                    <td>{row.cell3}</td>
                                </tr>
                            ))}
                        </>
                    )}
                </tbody>
            </table>
            <div className="result-section">
                <div className="comment-container">
                    <FormikFilledTextarea
                        id="comment"
                        className="comment"
                        name="lifting_work_comment_2"
                        label={t("comment")}
                        rows={5}
                    />
                </div>
                <div className="score-info">
                    <Typography variant="h4" className="title">
                        {t("score")}
                    </Typography>
                    <div className="score">≥ 5</div>
                    <div className="score">3 - 4.9</div>
                    <div className="score">≥ 3</div>
                </div>
                <div className="color-info">
                    <Typography variant="h4" className="title">
                        {t("color")}
                    </Typography>
                    <div className="color-circle danger" />
                    <div className="color-circle medium" />
                    <div className="color-circle normal" />
                </div>
                <div className="empty" />
                <div className="risk-scores">
                    <div className="risk-score">
                        <Typography variant="h4">{t("ramp_assessments.lifting_work_form.risk_score")} 1:</Typography>
                        <DisplaySquare value={riskScore1} height="42px" width="123px" color="disabled" />
                    </div>
                    <div className="risk-score">
                        <Typography variant="h4">{t("ramp_assessments.lifting_work_form.risk_score")} 2:</Typography>
                        <DisplaySquare value={riskScore2} height="42px" width="123px" color="disabled" />
                    </div>
                </div>
            </div>
        </div>
    );
};
