/* eslint-disable react/no-array-index-key */
import { Text, View } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

import { useTranslationV2 } from "ui";

import { IMultiSessionNonlinearTableProps } from "@features/sessions/types";
import { variable_unit_array } from "@features/sessions/utils";

import { getStyles } from "./MultiSessionNonlinearTableTemplate.styles";

type Props = IMultiSessionNonlinearTableProps;

export const MultiSessionNonlinearTableTemplate = ({ sessionArray }: Props) => {
    const t = useTranslationV2();
    const styles = getStyles(sessionArray.length);
    return (
        <View style={[styles.table]}>
            <View style={[styles.tr]}>
                <View
                    style={[
                        styles.td,
                        styles.borderTop,
                        styles.borderLeft,
                        styles.tdTopLeft,
                        styles.paddingBig,
                        styles.variableColumn,
                    ]}
                >
                    <Text style={[styles.tdInner, styles.textAlignLeft]}>{t("variable")}</Text>
                </View>
                <View style={[styles.td, styles.borderTop, styles.paddingBig, styles.unitColumn]}>
                    <Text style={[styles.tdInner]}>{t("Unit")}</Text>
                </View>
                {sessionArray.map((session, sessionIdx) => {
                    const topRightCellStyles: Style[] = [];
                    const isLastColumn = sessionIdx === sessionArray.length - 1;
                    if (isLastColumn) topRightCellStyles.push(styles.tdTopRight);
                    return (
                        <View
                            key={sessionIdx}
                            style={[
                                styles.td,
                                styles.borderTop,
                                styles.bgColor,
                                styles.paddingBig,
                                styles.fontSizeBig,
                                styles.sessionColumn,
                                ...topRightCellStyles,
                            ]}
                        >
                            <Text style={[styles.tdInner]}>{t("session")} 1</Text>
                        </View>
                    );
                })}
            </View>

            {variable_unit_array.map((elm, idx) => {
                const bottomLeftCellStyles: Style[] = [];
                const isLastRow = idx === variable_unit_array.length - 1;
                if (isLastRow) bottomLeftCellStyles.push(styles.tdBottomLeft);
                return (
                    <View key={idx} style={[styles.tr]}>
                        <View
                            style={[
                                styles.td,
                                styles.borderLeft,
                                styles.paddingSmall,
                                styles.variableColumn,
                                ...bottomLeftCellStyles,
                            ]}
                        >
                            <Text style={[styles.tdInner, styles.textAlignLeft]}>{elm.variableText}</Text>
                        </View>
                        <View style={[styles.td, styles.paddingSmall, styles.unitColumn]}>
                            <Text style={[styles.tdInner]}>{elm.unit}</Text>
                        </View>
                        {sessionArray.map((session, sessionIdx) => {
                            const bottomRightCellStyles: Style[] = [];
                            const isLastColumn = sessionIdx === sessionArray.length - 1;
                            if (isLastRow && isLastColumn) bottomRightCellStyles.push(styles.tdBottomRight);
                            return (
                                <View
                                    key={sessionIdx}
                                    style={[
                                        styles.td,
                                        styles.paddingSmall,
                                        styles.sessionColumn,
                                        ...bottomRightCellStyles,
                                    ]}
                                >
                                    <Text style={[styles.tdInner]}>{session[elm.variableObjectKeyName]}</Text>
                                </View>
                            );
                        })}
                    </View>
                );
            })}
        </View>
    );
};
