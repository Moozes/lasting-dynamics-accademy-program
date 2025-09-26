/* eslint-disable react/no-array-index-key */
import { Text, View } from "@react-pdf/renderer";

import { useTranslationV2 } from "ui";

import { IHrStatsResponse } from "@features/sessions/types";

import { styles } from "../../styles";

export const FrequencyDomainTableTemplate = ({ hrStats }: { hrStats?: IHrStatsResponse }) => {
    const t = useTranslationV2();
    return (
        <View style={styles.separator}>
            <View style={[styles.hrTable, styles.separator]}>
                <View style={[styles.tableRow]}>
                    <View style={[styles.tnoTableCol, styles.tableColFullWidth]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.tableHeader]}>
                            {t("sessions_management.session_stats.frequency_domain_results")}
                        </Text>
                    </View>
                </View>
                <View style={[styles.tableRow]}>
                    <View style={[styles.hrTableRow]}>
                        <View style={[styles.hrTableCol2, styles.tableHeaderBackground, styles.truncateText]}>
                            <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                                {t("Variable")}
                            </Text>
                        </View>
                        <View style={[styles.hrTableCol2, styles.tableHeaderBackground]}>
                            <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                                {t("Units")}
                            </Text>
                        </View>
                        <View style={[styles.hrTableCol2, styles.tableHeaderBackground]}>
                            <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                                {t("Value")}
                            </Text>
                        </View>
                    </View>
                    {hrStats?.frequency_domain_features.map((limbData) => (
                        <View key={limbData.name} style={[styles.hrTableRow]}>
                            <View style={[styles.hrTableCol2]}>
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
                            <View style={[styles.hrTableCol2]}>
                                <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                    {limbData.unit}
                                </Text>
                            </View>
                            <View style={[styles.hrTableCol2]}>
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
