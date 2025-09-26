import { FC } from "react";

import Box from "@mui/material/Box";

import { useTranslateLimb } from "ui";

import { ContainerStyles2 } from "@features/sessions/components/styles";
import { IDetailedChartStatsItem } from "@features/sessions/types";

import { LineAndBarChartCard } from "./LineAndBarChartCard";

interface LineAndBarChartDetailsProps {
    stats: IDetailedChartStatsItem[];
}

export const LineAndBarChartDetails: FC<LineAndBarChartDetailsProps> = ({ stats }) => {
    const { translateLimb } = useTranslateLimb();
    return (
        <Box display="flex" sx={ContainerStyles2} my={4} borderRadius={2.2} gap={3}>
            {stats.length > 0 && (
                <>
                    {stats?.map((limb) => {
                        let formattedTitle = limb.title
                            .split(/(?=[A-Z])/)
                            .join(" ")
                            .toLowerCase();
                        formattedTitle = translateLimb(formattedTitle);
                        return (
                            <LineAndBarChartCard
                                key={limb.title}
                                title={formattedTitle}
                                lineData={[{ id: limb.id, data: limb.line_data }]}
                                barData={limb.bar_data}
                                lineMaxDeg={limb.maxVal ?? 40}
                                lineMinDeg={limb.minVal ?? -40}
                            />
                        );
                    })}
                </>
            )}
        </Box>
    );
};
