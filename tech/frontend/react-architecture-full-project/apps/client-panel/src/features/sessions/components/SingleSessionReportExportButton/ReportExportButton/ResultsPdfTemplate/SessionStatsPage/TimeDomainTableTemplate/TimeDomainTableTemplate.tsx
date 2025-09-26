/* eslint-disable react/no-array-index-key */
import { Text, View } from "@react-pdf/renderer";

import { useTranslationV2 } from "ui";

import { IHrStatsResponse } from "@features/sessions/types";

import { styles } from "../../styles";

export const TimeDomainTableTemplate = ({ hrStats }: { hrStats?: IHrStatsResponse }) => {
    const t = useTranslationV2();
    return (
        <View style={styles.separator}>
            <Text style={styles.boldBody}>{t("heart_rate_data")}</Text>
            <View style={[styles.hrTable, styles.separator]}>
                <View style={[styles.tableRow]}>
                    <View style={[styles.tnoTableCol, styles.tableColFullWidth]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.tableHeader]}>
                            {t("sessions_management.session_stats.time_domain_results")}
                        </Text>
                    </View>
                </View>
                <View style={[styles.tableRow]}>
                    <View style={[styles.hrTableRow]}>
                        <View style={[styles.hrTableCol, styles.tableHeaderBackground, styles.truncateText]}>
                            <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                                {t("Variable")}
                            </Text>
                        </View>
                        <View style={[styles.hrTableCol, styles.tableHeaderBackground]}>
                            <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                                {t("Units")}
                            </Text>
                        </View>
                        <View style={[styles.hrTableCol, styles.tableHeaderBackground]}>
                            <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                                {t("Value")}
                            </Text>
                        </View>
                    </View>
                    {hrStats?.time_domain_features.map((limbData) => (
                        <View key={limbData.name} style={[styles.hrTableRow]}>
                            <View style={[styles.hrTableCol]}>
                                <Text
                                    style={[
                                        styles.tableCellHeader,
                                        styles.textCenter,
                                        styles.tabletitle,
                                        styles.truncateText,
                                    ]}
                                >
                                    {limbData.name}
                                </Text>
                            </View>
                            <View style={[styles.hrTableCol]}>
                                <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                    {limbData.unit}
                                </Text>
                            </View>
                            <View style={[styles.hrTableCol]}>
                                <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                    {limbData.value ? limbData.value : "-"}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};
