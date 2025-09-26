/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import { Text, View } from "@react-pdf/renderer";

import { useTranslateLimb, useTranslationV2 } from "ui";

import {
    formatAndTranslateTitle,
    formatDuration,
} from "@features/sessions/components/BaseSessionTab/BaseSessionTab.utils";

import { StatsTableTemplate2 } from "../StatsTableTemplate2";

import { styles } from "./StatsTableTemplate.styles";

export const StatsTableTemplate = ({ sessionStats }: { sessionStats?: any }) => {
    const t = useTranslationV2();
    const { translateLimb } = useTranslateLimb();
    const postureStats = Object.values(sessionStats?.data.posture);
    const sideMouvementDonutStats = Object.values(sessionStats?.data.side_mouvement);
    const FBMouvementDonutStats = Object.values(sessionStats?.data.forward_mouvement);
    if (FBMouvementDonutStats.length === 0) {
        return <StatsTableTemplate2 stats={postureStats} />;
    }

    return (
        <View style={[styles.flexView, styles.separator]}>
            {FBMouvementDonutStats.map((limb: any) => {
                const formatedTitle = formatAndTranslateTitle(limb.title, translateLimb);
                // find the corresponding calculations
                const posture: any = postureStats?.find((stat: any) => stat.title === limb.title);
                const sideMouvement: any = sideMouvementDonutStats?.find((stat: any) => stat.title === limb.title);
                if (formatedTitle === t("chest_strap")) {
                    return null;
                }
                return (
                    <View key={formatedTitle} style={[styles.table]}>
                        <View style={[styles.tableRow]}>
                            <View style={[styles.tableCol1, styles.tableColFullWidth]}>
                                <Text style={[styles.tableCellHeader, styles.textCenter, styles.tableHeader]}>
                                    {formatedTitle}
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.tableRow]}>
                            <View style={[styles.tableCol2]}>
                                <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                                    {t("forward_backward_mouvment")}
                                </Text>
                            </View>
                            <View style={[styles.tableCol2]}>
                                <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                                    {posture ? t("elvation_angle") : t("side_mouvement")}
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.tableRow]}>
                            <View style={[styles.tableCol1, styles.tableHeaderBackground]}>
                                <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                                    {t("Angle")}
                                </Text>
                            </View>
                            <View style={[styles.tableCol1, styles.tableHeaderBackground]}>
                                <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                                    {t("time_duration")}
                                </Text>
                            </View>
                            <View style={[styles.tableCol1, styles.tableHeaderBackground]}>
                                <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                                    {t("Percentage")}
                                </Text>
                            </View>
                            <View style={[styles.tableCol1, styles.tableHeaderBackground]}>
                                <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                                    {t("Angle")}
                                </Text>
                            </View>
                            <View style={[styles.tableCol1, styles.tableHeaderBackground]}>
                                <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                                    {t("time_duration")}
                                </Text>
                            </View>
                            <View style={[styles.tableCol1, styles.tableHeaderBackground]}>
                                <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                                    {t("Percentage")}
                                </Text>
                            </View>
                        </View>
                        {limb.data?.map((limbData: any, index: number) => {
                            return (
                                <View key={limbData.label} style={[styles.tableRow]}>
                                    <View style={[styles.tableCol1]}>
                                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                            {limbData.label}
                                        </Text>
                                    </View>
                                    <View style={[styles.tableCol1]}>
                                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                            {formatDuration(limbData.duration)}
                                        </Text>
                                    </View>
                                    <View style={[styles.tableCol1]}>
                                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                            {limbData.value}%
                                        </Text>
                                    </View>
                                    <View style={[styles.tableCol1]}>
                                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                            {posture?.data[index]?.label
                                                ? posture.data[index]?.label
                                                : sideMouvement?.data[index]?.label
                                                ? sideMouvement.data[index]?.label
                                                : "-"}
                                        </Text>
                                    </View>
                                    <View style={[styles.tableCol1]}>
                                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                            {posture?.data[index]?.duration
                                                ? formatDuration(posture.data[index]?.duration)
                                                : sideMouvement?.data[index]?.duration
                                                ? formatDuration(sideMouvement.data[index]?.duration)
                                                : "-"}
                                        </Text>
                                    </View>
                                    <View style={[styles.tableCol1]}>
                                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                            {posture?.data[index]?.value
                                                ? posture.data[index]?.value
                                                : sideMouvement?.data[index]?.value
                                                ? sideMouvement.data[index]?.value
                                                : "-"}
                                            %
                                        </Text>
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                );
            })}
        </View>
    );
};
