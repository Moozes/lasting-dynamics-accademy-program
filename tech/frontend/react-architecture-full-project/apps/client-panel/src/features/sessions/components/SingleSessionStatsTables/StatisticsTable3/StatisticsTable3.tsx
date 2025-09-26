import { Box, Grid } from "@mui/material";

import { Typography, useTranslateLimb, useTranslationV2 } from "ui";

import { formatAndTranslateTitle } from "@features/sessions/components/BaseSessionTab/BaseSessionTab.utils";
import { TableHeadBoxStyle } from "@features/sessions/components/styles";
import { LimbsCamelCaseEnum } from "@features/sessions/types";

import StatisticsTable from "../StatisticsTable";
import StatisticsTableComponent from "../StatisticsTableComponent";

import { useColumns } from "./StatisticsTable3.hooks";

export const StatisticsTable3 = ({
    donutStats,
    sideMouvementDonutStats,
    FBMouvementDonutStats,
}: {
    donutStats: Array<any>;
    sideMouvementDonutStats: Array<any>;
    FBMouvementDonutStats: Array<any>;
}) => {
    const columns = useColumns();
    const t = useTranslationV2();
    const { translateLimb } = useTranslateLimb();
    // for the old sessions
    if (FBMouvementDonutStats?.length === 0) {
        return <StatisticsTableComponent donutStats={donutStats} />;
    }

    return (
        <Grid container spacing={2}>
            {FBMouvementDonutStats?.map((limb) => {
                // find the corresponding calculations
                const sideMouvement = sideMouvementDonutStats?.find((stat) => stat.title === limb.title);
                const posture = donutStats?.find((stat) => {
                    const formattedPostureTitle = stat.title.toLowerCase();
                    const formattedLimbTitle = limb.title.toLowerCase();
                    if (formattedLimbTitle === "head" || formattedLimbTitle === "trunk") {
                        // exluding elevation angle table from head and trunk
                        return undefined;
                    }
                    return formattedPostureTitle.includes(formattedLimbTitle);
                });
                const emptyRow = {
                    id: "-",
                    label: "-",
                    value: "-",
                    duration: "-",
                };
                const formatedTitle = formatAndTranslateTitle(limb.title, translateLimb);
                if (formatedTitle === t("chest_strap")) {
                    // Exclude the chest strap for the moment
                    return null;
                }

                return (
                    <Grid key={limb.title} item lg={6} xs={12}>
                        <Box sx={TableHeadBoxStyle}>
                            <Typography variant="h5">{formatedTitle}</Typography>
                        </Box>
                        <Box display="flex">
                            {posture && (
                                <StatisticsTable
                                    tableHeader={t("elvation_angle")}
                                    data={[...posture.data]}
                                    columns={columns}
                                />
                            )}
                            {limb.title.toLowerCase() !== LimbsCamelCaseEnum.leftArm.toLocaleLowerCase() &&
                                limb.title.toLowerCase() !== LimbsCamelCaseEnum.rightArm.toLocaleLowerCase() && (
                                    <StatisticsTable
                                        tableHeader={t("forward_backward_mouvment")}
                                        data={limb.data}
                                        columns={columns}
                                    />
                                )}
                            {sideMouvement && (
                                <StatisticsTable
                                    tableHeader={t("side_mouvement")}
                                    data={[...sideMouvement.data, emptyRow, emptyRow]}
                                    columns={columns}
                                />
                            )}
                        </Box>
                    </Grid>
                );
            })}
        </Grid>
    );
};
