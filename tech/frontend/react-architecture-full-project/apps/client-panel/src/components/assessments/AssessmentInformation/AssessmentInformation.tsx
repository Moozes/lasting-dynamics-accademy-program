/* eslint-disable react/no-array-index-key */
import { Fragment } from "react";
import { truncate } from "lodash";

import { Tooltip } from "@mui/material";
import Typography from "@mui/material/Typography";

import type { HTMLDivProps } from "ui";
import { CircularProgressWithLabel, useTranslationV2 } from "ui";

import { Assessment } from "@app-types/index";
import { useGetAssessmentInfoFormatedData } from "@hooks/index";

type Props = HTMLDivProps & {
    assessmentInfo: Assessment;
    progress: number;
};

export const AssessmentInformation = ({ assessmentInfo, progress, ...props }: Props) => {
    const data = useGetAssessmentInfoFormatedData(assessmentInfo);
    const t = useTranslationV2();
    return (
        <div {...props}>
            <div className="info-container">
                <div className="card card-1">
                    {data.card1.map((col, colIndex) => (
                        <div className="col" key={colIndex}>
                            {col.map((elm, elmIndex) => (
                                <Fragment key={elmIndex}>
                                    <Typography className={elm.titleClassName} variant={elm.titleVariant as any}>
                                        {elm.title}
                                    </Typography>
                                    <Typography className={elm.textClassName} variant={elm.textVariant as any}>
                                        {elm.text}
                                    </Typography>
                                </Fragment>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="card card-2">
                    {data.card2.map((col, colIndex) => (
                        <div className="col" key={colIndex}>
                            {col.map((elm, elmIndex) => (
                                <Fragment key={elmIndex}>
                                    <Typography className={elm.titleClassName} variant={elm.titleVariant as any}>
                                        {elm.title}
                                    </Typography>
                                    {elm.title === t("comment") ? (
                                        <Tooltip title={elm.text}>
                                            <Typography className={elm.textClassName} variant={elm.textVariant as any}>
                                                {truncate(elm.text, { length: 24 })}
                                            </Typography>
                                        </Tooltip>
                                    ) : (
                                        <Typography className={elm.textClassName} variant={elm.textVariant as any}>
                                            {elm.text}
                                        </Typography>
                                    )}
                                </Fragment>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="progress-container">
                <CircularProgressWithLabel value={progress} />
            </div>
        </div>
    );
};
