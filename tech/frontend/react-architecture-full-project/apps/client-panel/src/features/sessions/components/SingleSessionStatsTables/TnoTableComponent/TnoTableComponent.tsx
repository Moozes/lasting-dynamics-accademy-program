import { Grid } from "@mui/material";

import { Typography, useTranslateLimb, useTranslationV2 } from "ui";

import { formatAndTranslateTitle } from "@features/sessions/components/BaseSessionTab/BaseSessionTab.utils";
import { ITnoStatsData } from "@features/sessions/types";
import { formatAndSortTime } from "@features/sessions/utils";

import StatisticsTable from "../StatisticsTable";

import { useColumns } from "./TnoTableComponent.hooks";
// import { TNOresultStyle } from "../styles";
// import { generateTNOText } from "./TnoTableComponent.utils";

export const TnoTableComponent = ({ tnoStats }: { tnoStats: ITnoStatsData[] }) => {
    const tno_columns = useColumns();
    const t = useTranslationV2();
    const { translateLimb } = useTranslateLimb();

    return (
        <>
            <Typography weight="bold" variant="h4" my={3}>
                {t("sessions_management.session_stats.tno_result")}
            </Typography>
            <Grid container spacing={2}>
                {tnoStats?.map((limb) => {
                    const formatedTitle = formatAndTranslateTitle(limb.limb, translateLimb);

                    const formattedTime = formatAndSortTime(limb.time);

                    if (formatedTitle === t("trunk")) {
                        formattedTime.push({ label: "-", static: "-", dynamic: "-" });
                    }
                    if (formatedTitle === t("chest_strap")) {
                        // Exclude the chest strap for the moment
                        return null;
                    }
                    return (
                        <Grid key={limb.limb} item lg={4} xs={12}>
                            <StatisticsTable data={formattedTime} tableHeader={formatedTitle} columns={tno_columns} />
                        </Grid>
                    );
                })}
            </Grid>
            {/* <Box sx={TNOresultStyle}>
                {tnoStats?.map((limb) => {
                    const formatedTitle = formatAndTranslateTitle(limb.limb, trasnlateTitle);

                    const formattedTime = formatAndSortTime(limb.time);

                    if (formatedTitle === t("chest_strap")) {
                        // Exclude the chest strap for the moment
                        return null;
                    }

                    const { color, result } = generateTNOText(formattedTime, formatedTitle);
                    return (
                        <Box key={formatedTitle} display="flex" gap={2} alignItems="center" justifyContent="start">
                            <Box width="14px" height="14px" borderRadius="8px" bgcolor={color} />
                            <Typography variant="h6">{result}</Typography>
                        </Box>
                    );
                })}
            </Box> */}
        </>
    );
};
