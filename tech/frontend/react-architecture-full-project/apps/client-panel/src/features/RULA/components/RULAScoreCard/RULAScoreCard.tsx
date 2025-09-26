import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { useFormatedData } from "./RULAScoreCard.hooks";

type Props = HTMLDivProps;

export const RULAScoreCard = (props: Props) => {
    const t = useTranslationV2();
    const { formatedData } = useFormatedData();
    return (
        <div {...props}>
            <Typography className="title" variant="h4">
                {t("rula_assessments.rula_score")}
            </Typography>
            <div className="sub-title-container">
                <Typography className="sub-title" variant="body1">
                    {t("score")}
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
