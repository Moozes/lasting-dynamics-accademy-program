/* eslint-disable react/no-array-index-key */
import { Text, View } from "@react-pdf/renderer";

import { useTranslateLimb, useTranslationV2 } from "ui";

import { formatAndTranslateTitle } from "@features/sessions/components/BaseSessionTab/BaseSessionTab.utils";
import { ITempStatsData } from "@features/sessions/types";

import { styles } from "../../styles";

export const TemperatureTableTemplate = ({ tempStats }: { tempStats?: ITempStatsData[] }) => {
    const t = useTranslationV2();
    const { translateLimb } = useTranslateLimb();
    return (
        <>
            <Text style={[styles.boldBody, styles.separator]}>{t("Temperature")}</Text>
            <View style={[styles.hrTable, styles.separator]}>
                <View style={[styles.tableRow]}>
                    <View style={[styles.tnoTableCol, styles.tableColFullWidth]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.tableHeader]}>
                            {t("Temperature")}
                        </Text>
                    </View>
                </View>
                <View style={[styles.tableRow]}>
                    <View style={[styles.tmpTableCol, styles.tableHeaderBackground]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                            {t("Limbs")}
                        </Text>
                    </View>
                    <View style={[styles.tmpTableCol, styles.tableHeaderBackground]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                            {t("mean")}
                        </Text>
                    </View>
                    <View style={[styles.tmpTableCol, styles.tableHeaderBackground]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                            {t("max")}
                        </Text>
                    </View>
                    <View style={[styles.tmpTableCol, styles.tableHeaderBackground]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                            {t("min")}
                        </Text>
                    </View>
                    <View style={[styles.tmpTableCol, styles.tableHeaderBackground]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                            {t("median")}
                        </Text>
                    </View>
                </View>
                {tempStats?.map((tmp) => {
                    const formatedTitle = formatAndTranslateTitle(tmp.limb, translateLimb);
                    if (formatedTitle === t("chest_strap")) {
                        // Exclude the chest strap for the moment
                        return null;
                    }
                    return (
                        <View key={formatedTitle} style={[styles.tableRow]}>
                            <View style={[styles.tmpTableCol]}>
                                <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                    {formatedTitle}
                                </Text>
                            </View>
                            <View style={[styles.tmpTableCol]}>
                                <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                    {tmp.mean.toFixed(2)}
                                </Text>
                            </View>
                            <View style={[styles.tmpTableCol]}>
                                <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                    {tmp.max.toFixed(2)}
                                </Text>
                            </View>
                            <View style={[styles.tmpTableCol]}>
                                <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                    {tmp.min.toFixed(2)}
                                </Text>
                            </View>
                            <View style={[styles.tmpTableCol]}>
                                <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                    {tmp.median.toFixed(2)}
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        </>
    );
};
