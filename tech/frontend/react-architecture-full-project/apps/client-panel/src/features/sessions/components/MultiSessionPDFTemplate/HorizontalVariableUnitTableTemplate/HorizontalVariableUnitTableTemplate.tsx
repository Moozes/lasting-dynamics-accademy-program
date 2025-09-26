/* eslint-disable react/no-array-index-key */
import { Text, View } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

import { useTranslationV2 } from "ui";

import { IHorizontalVariableUnitTableProps } from "@features/sessions/types";

import { getStyles } from "./HorizontalVariableUnitTableTemplate.styles";

type Props = IHorizontalVariableUnitTableProps & {
    style?: Style[];
};

export const HorizontalVariableUnitTableTemplate = ({ sessionArray, variableUnitArray, style = [] }: Props) => {
    const t = useTranslationV2();
    const styles = getStyles(variableUnitArray.length);
    return (
        <View style={[styles.table, ...style]}>
            {/* body */}
            <View style={[styles.tr]}>
                <View style={[styles.td, styles.paddingBig, styles.borderTop, styles.borderLeft, styles.bgColor]}>
                    <Text style={[styles.tdInner]}>{t("variable")}</Text>
                </View>
                {variableUnitArray.map((elm, idx) => {
                    const topRightCellStyles: Style[] = [];
                    if (idx === variableUnitArray.length - 1) topRightCellStyles.push(styles.tdTopRight);
                    return (
                        <View key={idx} style={[styles.td, styles.paddingBig, styles.borderTop, ...topRightCellStyles]}>
                            <Text style={[styles.tdInner]}>{elm.variable}</Text>
                        </View>
                    );
                })}
            </View>

            <View style={[styles.tr, styles.fontSizeSmall]}>
                <View style={[styles.td, styles.paddingSmall, styles.borderLeft, styles.bgColor]}>
                    <Text style={[styles.tdInner]}>{t("Unit")}</Text>
                </View>
                {variableUnitArray.map((elm, idx) => (
                    <View key={idx} style={[styles.td, styles.paddingSmall]}>
                        <Text style={[styles.tdInner]}>{elm.unit}</Text>
                    </View>
                ))}
            </View>

            {sessionArray.map((session, sessionIdx) => {
                const bottomLeftCellStyles: Style[] = [];
                const isLastRow = sessionIdx === sessionArray.length - 1;
                if (isLastRow) bottomLeftCellStyles.push(styles.tdBottomLeft);
                return (
                    <View key={sessionIdx} style={[styles.tr, styles.fontSizeSmall]}>
                        <View
                            style={[
                                styles.td,
                                styles.paddingSmall,
                                styles.borderLeft,
                                styles.bgColor,
                                ...bottomLeftCellStyles,
                            ]}
                        >
                            <Text style={[styles.tdInner]}>
                                {t("session")} {sessionIdx + 1}
                            </Text>
                        </View>
                        {variableUnitArray.map((elm, idx) => {
                            const bottomRightCellStyles: Style[] = [];
                            const isLastColumn = idx === variableUnitArray.length - 1;
                            if (isLastRow && isLastColumn) bottomRightCellStyles.push(styles.tdBottomRight);
                            return (
                                <View key={idx} style={[styles.td, styles.paddingSmall, ...bottomRightCellStyles]}>
                                    <Text style={[styles.tdInner]}>{session[elm.variableObjectKey]}</Text>
                                </View>
                            );
                        })}
                    </View>
                );
            })}
            {/* body */}
        </View>
    );
};
