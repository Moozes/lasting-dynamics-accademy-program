import { Typography } from "@mui/material";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { useGetDataWithStyles } from "@features/statistics/hooks";
import { Statistics } from "@features/statistics/types";

import { LinearProgressWithLabel } from "./LinearProgressWithLabel";

type Props = HTMLDivProps & {
    statistics: Statistics;
};

export const LicenseStatistics = ({ statistics, ...props }: Props) => {
    const t = useTranslationV2();
    const dataWithStyles = useGetDataWithStyles(statistics);
    return (
        <div {...props}>
            <Typography variant="h6" className="title">
                {t("statistics.usage_on_license_limits_this_month")}
            </Typography>
            <div className="stats">
                {dataWithStyles.map((elm) => (
                    <div className="stat" key={elm.text}>
                        <Typography variant="body1" className="text">
                            {elm.text}
                        </Typography>
                        <LinearProgressWithLabel
                            className="progress"
                            min={0}
                            max={elm.max}
                            value={elm.value}
                            backgroundColor={elm.backgroundColor}
                            progressColor={elm.progressColor}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
