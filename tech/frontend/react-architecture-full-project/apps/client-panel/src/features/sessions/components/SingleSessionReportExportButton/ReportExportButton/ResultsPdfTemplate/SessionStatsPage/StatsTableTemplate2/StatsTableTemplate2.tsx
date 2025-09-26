/* eslint-disable react/no-array-index-key */
import { Text, View } from "@react-pdf/renderer";

import { useTranslateLimb, useTranslationV2 } from "ui";

import {
    formatAndTranslateTitle,
    formatDuration,
} from "@features/sessions/components/BaseSessionTab/BaseSessionTab.utils";

import { styles } from "../../styles";

export const StatsTableTemplate2 = ({ stats }: { stats?: any[] }) => {
    const t = useTranslationV2();
    const { translateLimb } = useTranslateLimb();
    return (
        <View style={[styles.flexView, styles.separator]}>
            {stats?.map((limb: any) => {
                const formatedTitle = formatAndTranslateTitle(limb.title, translateLimb);
                if (formatedTitle === t("chest_strap")) {
                    return null;
                }
                return (
                    <View key={formatedTitle} style={styles.tnoTable}>
                        <View style={[styles.tableRow]}>
                            <View style={[styles.tnoTableCol, styles.tableColFullWidth]}>
                                <Text style={[styles.tableCellHeader, styles.textCenter, styles.tableHeader]}>
                                    {formatedTitle}
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.tableRow]}>
                            <View style={[styles.tnoTableCol, styles.tableHeaderBackground]}>
                                <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                                    {t("Angle")}
                                </Text>
                            </View>
                            <View style={[styles.tnoTableCol, styles.tableHeaderBackground]}>
                                <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                                    {t("time_duration")}
                                </Text>
                            </View>
                            <View style={[styles.tnoTableCol, styles.tableHeaderBackground]}>
                                <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                                    {t("Percentage")}
                                </Text>
                            </View>
                        </View>
                        {limb.data?.map((limbData: any) => (
                            <View key={limbData.label} style={[styles.tableRow]}>
                                <View style={[styles.tnoTableCol]}>
                                    <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                        {limbData.label}
                                    </Text>
                                </View>
                                <View style={[styles.tnoTableCol]}>
                                    <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                        {formatDuration(limbData.duration)}
                                    </Text>
                                </View>
                                <View style={[styles.tnoTableCol]}>
                                    <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                        {limbData.value}%
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                );
            })}
        </View>
    );
};
