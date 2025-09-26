import { FC } from "react";

import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import type { HTMLDivProps, HTMLSVGProps } from "ui";
import { TrendingDownIcon, TrendingUpIcon } from "ui";

import { DateSelectInput } from "@features/statistics/components/DateSelectInput";
import { TooltipPopperStyles } from "@features/statistics/styles";
import { URLParamsToChange } from "@features/statistics/types";

type Props = HTMLDivProps & {
    Icon: FC<HTMLSVGProps>;
    iconBackground: string;
    trending: "up" | "down";
    title: string;
    number: string;
    perscentage: number;
    tooltipText: string;
    urlParamsToChange: URLParamsToChange;
};

export const StatisticsCardLarge = ({
    Icon,
    iconBackground,
    trending,
    title,
    number,
    perscentage,
    tooltipText,
    urlParamsToChange,
    ...props
}: Props) => {
    return (
        <div {...props}>
            <div className="header">
                <Avatar className="avatar">
                    <Icon />
                </Avatar>
                <DateSelectInput urlParamsToChange={urlParamsToChange} className="date" />
            </div>
            <div className="content">
                <div className="left">
                    <Typography className="title" variant="h6">
                        {title}
                    </Typography>
                    <Typography className="number" variant="h3">
                        {number}
                    </Typography>
                </div>
                {perscentage != 0 && (
                    <div className="right">
                        <Tooltip title={tooltipText} slotProps={{ popper: { sx: TooltipPopperStyles } }}>
                            <div>
                                {trending === "up" ? (
                                    <TrendingUpIcon className="trending-icon" />
                                ) : (
                                    <TrendingDownIcon className="trending-icon" />
                                )}
                                <Typography className={`percentage ${trending}`} variant="caption">
                                    {trending === "up" && "+"}
                                    {perscentage}%
                                </Typography>
                            </div>
                        </Tooltip>
                    </div>
                )}
            </div>
        </div>
    );
};
