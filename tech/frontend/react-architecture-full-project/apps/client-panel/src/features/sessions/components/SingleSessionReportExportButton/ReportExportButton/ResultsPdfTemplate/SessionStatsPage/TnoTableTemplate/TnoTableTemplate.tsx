/* eslint-disable react/no-array-index-key */
import { Text, View } from "@react-pdf/renderer";

import { useTranslateLimb, useTranslationV2 } from "ui";

import { formatAndTranslateTitle } from "@features/sessions/components/BaseSessionTab/BaseSessionTab.utils";
import { ITnoStatsData, TNOAnglesEnum } from "@features/sessions/types";
import { formatAndSortTime } from "@features/sessions/utils";
import { format_hh_mm_ss } from "@utils/index";

import { styles } from "../../styles";

export const TnoTableTemplate = ({ tnoStats }: { tnoStats?: ITnoStatsData[] }) => {
    const t = useTranslationV2();
    const { translateLimb } = useTranslateLimb();
    return (
        <>
            <Text style={[styles.boldBody, styles.separator]}>{t("sessions_management.session_stats.tno_result")}</Text>
            <View style={[styles.flexView, styles.separator]}>
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
                                        {t("Range")}
                                    </Text>
                                </View>
                                <View style={[styles.tnoTableCol, styles.tableHeaderBackground]}>
                                    <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                                        {t("Static")}
                                    </Text>
                                </View>
                                <View style={[styles.tnoTableCol, styles.tableHeaderBackground]}>
                                    <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                                        {t("Dynamic")}
                                    </Text>
                                </View>
                            </View>
                            {formattedTime?.map((limbData: any) => (
                                <View key={limbData.label} style={[styles.tableRow]}>
                                    {limbData.label === "-" ? (
                                        <View style={[styles.tnoTableCol, styles.tnoFlexView]}>
                                            <Text
                                                style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}
                                            >
                                                {limbData.label}
                                            </Text>
                                        </View>
                                    ) : (
                                        <View style={[styles.tnoTableCol, styles.tnoFlexView]}>
                                            <View
                                                style={
                                                    /* eslint-disable no-nested-ternary */
                                                    limbData.label === TNOAnglesEnum._10_to_20 ||
                                                    limbData.label === TNOAnglesEnum._0_to_20
                                                        ? styles.low
                                                        : limbData.label === TNOAnglesEnum._20_to_60 ||
                                                          limbData.label === TNOAnglesEnum.lt0_or_gt20
                                                        ? styles.medium
                                                        : styles.high
                                                }
                                            />
                                            <Text
                                                style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}
                                            >
                                                {limbData.label}
                                            </Text>
                                        </View>
                                    )}

                                    <View style={[styles.tnoTableCol]}>
                                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                            {limbData.static === "-"
                                                ? limbData.static
                                                : format_hh_mm_ss(limbData.static * 1000)}
                                        </Text>
                                    </View>
                                    <View style={[styles.tnoTableCol]}>
                                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                            {limbData.dynamic === "-"
                                                ? limbData.dynamic
                                                : `${parseInt(limbData.dynamic, 10)}x/min`}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    );
                })}
            </View>
        </>
    );
};
