import { Grid } from "@mui/material";

import { useTranslateLimb, useTranslationV2 } from "ui";

import { formatAndTranslateTitle } from "@features/sessions/components/BaseSessionTab/BaseSessionTab.utils";

import StatisticsTable from "../StatisticsTable";

import { useColumns } from "./StatisticsTableComponent.hooks";

export const StatisticsTableComponent = ({ donutStats }: { donutStats: Array<any> }) => {
    const columns = useColumns();
    const t = useTranslationV2();
    const { translateLimb } = useTranslateLimb();
    return (
        <Grid container spacing={2}>
            {donutStats?.map((limb) => {
                const formatedTitle = formatAndTranslateTitle(limb.title, translateLimb);
                if (formatedTitle === t("chest_strap")) {
                    // Exclude the chest strap for the moment
                    return null;
                }

                return (
                    <Grid key={limb.title} item lg={4} xs={12}>
                        <StatisticsTable data={limb.data} tableHeader={formatedTitle} columns={columns} />
                    </Grid>
                );
            })}
        </Grid>
    );
};
