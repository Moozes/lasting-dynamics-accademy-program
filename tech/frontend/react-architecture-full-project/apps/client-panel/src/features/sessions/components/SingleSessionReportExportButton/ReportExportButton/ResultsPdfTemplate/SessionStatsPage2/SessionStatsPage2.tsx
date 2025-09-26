/* eslint-disable react/no-array-index-key */
import { Image, Text, View } from "@react-pdf/renderer";

import { useTranslationV2 } from "ui";

import { wergonicLogo } from "@assets/index";
import { SessionStatsPageProps } from "@features/sessions/types";

import { styles } from "../styles";

export const SessionStatsPage2 = ({ hrStats }: SessionStatsPageProps) => {
    const t = useTranslationV2();
    return (
        <View>
            <Image src={wergonicLogo} style={styles.smallImage} />
            <View style={[styles.hrTable, styles.separator]}>
                <View style={[styles.tableRow]}>
                    <View style={[styles.tnoTableCol, styles.tableColFullWidth]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.tableHeader]}>
                            {t("sessions_management.session_stats.nonlinear_results")}
                        </Text>
                    </View>
                </View>
                <View style={[styles.tableRow]}>
                    <View style={[styles.hrTableCol2, styles.tableHeaderBackground, styles.hrTableColbig]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                            {t("Variable")}
                        </Text>
                    </View>
                    <View style={[styles.hrTableCol2, styles.tableHeaderBackground, styles.hrTableColMediuim]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                            {t("Units")}
                        </Text>
                    </View>
                    <View style={[styles.hrTableCol2, styles.tableHeaderBackground, styles.hrTableColMediuim]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                            {t("Value")}
                        </Text>
                    </View>
                </View>
                {hrStats?.nonlinear_results?.map((hr) => (
                    <View key={hr.name} style={[styles.tableRow]}>
                        <View style={[styles.hrTableCol2, styles.hrTableColbig]}>
                            <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                {hr.name}
                            </Text>
                        </View>
                        <View style={[styles.hrTableCol2, styles.hrTableColMediuim]}>
                            <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                {hr.unit}
                            </Text>
                        </View>
                        <View style={[styles.hrTableCol2, styles.hrTableColMediuim]}>
                            <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                {hr.value}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};
