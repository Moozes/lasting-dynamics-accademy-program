/* eslint-disable react/no-array-index-key */
import { Image, Text, View } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

import { useTranslationV2 } from "ui";

import { IMECResultsFormatedData } from "@features/MEC/types";
import { getStatusStyles } from "@features/MEC/utils";
import { useHandleMissingSensor } from "@hooks/index";

import { styles } from "./TableTemplate.styles";

type Props = {
    style?: Style[];
    tableData: IMECResultsFormatedData;
};

export const TableTemplate = ({ style, tableData }: Props) => {
    const t = useTranslationV2();
    const { handleMissingSensor } = useHandleMissingSensor();
    const statusStyles: Style[] = getStatusStyles(tableData.status, styles);
    const mergedStyles: Style[] = [styles.table];
    if (style) mergedStyles.push(...style);
    return (
        <View style={mergedStyles}>
            {/* header */}
            <View style={[styles.tr]}>
                <View style={[styles.td, styles.tdHeader]}>
                    <Text style={[styles.tdHeaderInner]}>{tableData.question}</Text>
                </View>
            </View>
            <View style={[styles.tr]}>
                <View style={[styles.td, styles.tdSmall]}>
                    <Text style={[styles.tdInner]}>Q</Text>
                </View>
                <View style={[styles.td, styles.tdBig]}>
                    <Text style={[styles.tdInner]}>{t("mec_assessments.mec_assessment")}</Text>
                </View>
                <View style={[styles.td, styles.tdSmall]}>
                    <Text style={[styles.tdInner]}>{t("mec_assessments.dynamic_movements")}</Text>
                </View>
                <View style={[styles.td, styles.tdSmall]}>
                    <Text style={[styles.tdInner]}>{t("mec_assessments.static_postures_time")}</Text>
                </View>
                <View style={[styles.td, styles.tdSmall]}>
                    <Text style={[styles.tdInner]}>{t("Result")}</Text>
                </View>
                <View style={[styles.td, styles.tdSmall]}>
                    <Text style={[styles.tdInner]}>{t("justification")}</Text>
                </View>
            </View>

            {tableData.subQuestion.map((elm, idx, array) => {
                let borderBottomStyles: Style[] = [];
                const isFirstRow = idx == 0;
                const isLastRow = idx == array.length - 1;
                if (!isLastRow) {
                    borderBottomStyles = [styles.tdNoBorderBottom];
                }
                const time = handleMissingSensor(elm.time, elm.missing_limb);
                const count_freq = handleMissingSensor(elm.count_freq, elm.missing_limb);
                return (
                    <View key={idx} style={[styles.tr]}>
                        <View style={[styles.td, styles.tdSmall]}>
                            <Text style={[styles.tdInner]}>{elm.question}</Text>
                        </View>
                        <View style={[styles.td, styles.tdBig]}>
                            <Image src={elm.illustrationPDF} style={[styles.image]} />
                        </View>
                        <View style={[styles.td, styles.tdSmall]}>
                            <Text style={[styles.tdInner]}>{count_freq}</Text>
                        </View>
                        <View style={[styles.td, styles.tdSmall]}>
                            <Text style={[styles.tdInner]}>{time}</Text>
                        </View>
                        <View style={[styles.td, styles.tdSmall, ...borderBottomStyles, ...statusStyles]}>
                            <Text style={[styles.tdInner]} />
                        </View>
                        <View style={[styles.td, styles.tdSmall, ...borderBottomStyles]}>
                            <Text style={[styles.tdInner]}>{isFirstRow && tableData.justification}</Text>
                        </View>
                    </View>
                );
            })}
        </View>
    );
};
