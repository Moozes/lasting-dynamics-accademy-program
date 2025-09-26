import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { useGeneratedResultSummaryFormatedData } from "@features/RAMP/hooks";

type Props = HTMLDivProps;

export const GeneratedResultsSummary = (props: Props) => {
    const t = useTranslationV2();
    const { formatedData } = useGeneratedResultSummaryFormatedData();
    return (
        <div {...props}>
            <Typography className="title" variant="h4">
                {t("ramp_assessments.results.result_summary")}
            </Typography>
            <div className="sub-title-container">
                <Typography className="sub-title" variant="body1">
                    {t("ramp_assessments.results.total_risk_score")}
                </Typography>
                <Typography className="sub-title" variant="body1">
                    {t("ramp_assessments.results.total_risk_score")}
                </Typography>
            </div>
            {formatedData.map((elm) => (
                <div key={elm.text} className={`risk-score-container ${elm.containerClassName}`}>
                    <Typography variant="body1" className="text">
                        {elm.text}
                    </Typography>
                    <div className={`oval ${elm.ovalClassName}`}>{elm.riskScore}</div>
                </div>
            ))}
        </div>
    );
};
