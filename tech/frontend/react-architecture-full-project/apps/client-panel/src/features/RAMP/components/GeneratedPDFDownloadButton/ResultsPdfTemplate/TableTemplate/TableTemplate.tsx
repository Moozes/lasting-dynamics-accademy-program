/* eslint-disable react/no-array-index-key */
import { Image, Text, View } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

import { useTranslationV2 } from "ui";

import { IGeneratedRAMPResultsFormatedData } from "@features/RAMP/types";
import { useHandleMissingSensor } from "@hooks/index";

import { getStatusStyles } from "./TableTemplate.helpers";
import { styles } from "./TableTemplate.styles";

type Props = {
    style?: Style[];
    tableData: IGeneratedRAMPResultsFormatedData;
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
                <View style={[styles.td, styles.tdHeader, styles.flex]}>
                    <Text style={[styles.tdHeaderInner]}>{tableData.question}</Text>
                    <Text style={[styles.statusSquare, ...statusStyles]} />
                </View>
            </View>
            <View style={[styles.tr]}>
                <View style={[styles.td, styles.tdSmall]}>
                    <Text style={[styles.tdInner]}>Q</Text>
                </View>
                <View style={[styles.td, styles.tdBig]}>
                    <Text style={[styles.tdInner]}>{t("ramp_assessments.pageHeader")}</Text>
                </View>
                <View style={[styles.td, styles.tdSmall]}>
                    <Text style={[styles.tdInner]}>{t("Time")}</Text>
                </View>
                <View style={[styles.td, styles.tdSmall]}>
                    <Text style={[styles.tdInner]}>{t("variables")}</Text>
                </View>
                <View style={[styles.td, styles.tdSmall]}>
                    <Text style={[styles.tdInner]}>{t("calculations")}</Text>
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
                return (
                    <View key={idx} style={[styles.tr]}>
                        <View style={[styles.td, styles.tdSmall]}>
                            <Text style={[styles.tdInner]}>{elm.question}</Text>
                        </View>
                        <View style={[styles.td, styles.tdBig]}>
                            <Image src={elm.illustrationPDF} style={[styles.image]} />
                        </View>
                        <View style={[styles.td, styles.tdSmall]}>
                            <Text style={[styles.tdInner]}>{time}</Text>
                        </View>
                        <View style={[styles.td, styles.tdSmall, ...borderBottomStyles]}>
                            <Text style={[styles.tdInner]}>{isFirstRow && tableData.variables}</Text>
                        </View>
                        <View style={[styles.td, styles.tdSmall, ...borderBottomStyles]}>
                            <Text style={[styles.tdInner]}>{isFirstRow && tableData.calculations}</Text>
                        </View>
                    </View>
                );
            })}
        </View>
    );
};
