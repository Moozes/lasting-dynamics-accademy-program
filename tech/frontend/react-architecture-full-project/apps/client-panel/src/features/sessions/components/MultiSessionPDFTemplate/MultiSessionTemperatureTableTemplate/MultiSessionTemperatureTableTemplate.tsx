/* eslint-disable react/no-array-index-key */
import { Fragment } from "react";
import { Text, View } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

import { useTranslationV2 } from "ui";

import { useLimbsArray } from "@features/sessions/hooks";
import { IMultiSessionTemperatureTableProps } from "@features/sessions/types";

import { getStyles } from "./MultiSessionTemperatureTableTemplate.styles";

type Props = IMultiSessionTemperatureTableProps;

export const MultiSessionTemperatureTableTemplate = ({ sessionsArray }: Props) => {
    const t = useTranslationV2();
    const styles = getStyles(sessionsArray.length);
    const { limbsArray } = useLimbsArray();
    return (
        <View style={[styles.table]}>
            {/* header */}
            <View style={[styles.tr]}>
                <View style={[styles.td, styles.tdHeadSmall, styles.noBorderRight, styles.transparent]}>
                    <Text style={[styles.tdInner]} />
                </View>
                {sessionsArray.map((session, sessionIdx) => {
                    const stylesArray: Style[] = [];
                    if (sessionIdx === 0) stylesArray.push(styles.tdFirstSessionColumn);
                    if (sessionIdx === sessionsArray.length - 1)
                        stylesArray.push(styles.tdLastSessionColumn, styles.noBorderRight);
                    return (
                        <View key={sessionIdx} style={[styles.td, styles.tdHeadBig, ...stylesArray]}>
                            <Text style={[styles.tdInner]}>
                                {t("session")} {sessionIdx + 1}
                            </Text>
                        </View>
                    );
                })}
            </View>

            <View style={[styles.tr]}>
                <View style={[styles.td, styles.tdHeadSmall, styles.fontSizeSmall, styles.borderLeft]}>
                    <Text style={[styles.tdInner]}>{t("limbs_other")}</Text>
                </View>

                {sessionsArray.map((session, sessionIdx) => (
                    <Fragment key={sessionIdx}>
                        <View style={[styles.td, styles.tdSubCol, styles.fontSizeSmall]}>
                            <Text style={[styles.tdInner]}>{t("mean")}</Text>
                        </View>
                        <View style={[styles.td, styles.tdSubCol, styles.fontSizeSmall]}>
                            <Text style={[styles.tdInner]}>{t("max")}</Text>
                        </View>
                        <View style={[styles.td, styles.tdSubCol, styles.fontSizeSmall]}>
                            <Text style={[styles.tdInner]}>{t("min")}</Text>
                        </View>
                        <View style={[styles.td, styles.tdSubCol, styles.fontSizeSmall]}>
                            <Text style={[styles.tdInner]}>{t("median")}</Text>
                        </View>
                    </Fragment>
                ))}
            </View>
            {/* header */}

            {/* body */}
            {limbsArray.map((elm, elmIdx, elmArr) => {
                const bottomLeftCellStyles: Style[] = [];
                const isLastRow = elmIdx === elmArr.length - 1;
                if (isLastRow) bottomLeftCellStyles.push(styles.tdBottomLeft);
                return (
                    <View key={elmIdx} style={[styles.tr]}>
                        <View
                            style={[
                                styles.td,
                                styles.tdHeadSmall,
                                styles.fontSizeSmall,
                                styles.borderLeft,
                                ...bottomLeftCellStyles,
                            ]}
                        >
                            <Text style={[styles.tdInner]}>{elm.limbName}</Text>
                        </View>

                        {sessionsArray.map((session, sessionIdx) => {
                            const bottomRightCellStyles: Style[] = [];
                            const isLastColumn = sessionIdx === sessionsArray.length - 1;
                            if (isLastRow && isLastColumn) bottomRightCellStyles.push(styles.tdBottomRight);
                            return (
                                <Fragment key={sessionIdx}>
                                    <View style={[styles.td, styles.tdSubCol, styles.fontSizeSmall]}>
                                        <Text style={[styles.tdInner]}>{session[elm.limbObjectKeyName].mean}</Text>
                                    </View>
                                    <View style={[styles.td, styles.tdSubCol, styles.fontSizeSmall]}>
                                        <Text style={[styles.tdInner]}>{session[elm.limbObjectKeyName].max}</Text>
                                    </View>
                                    <View style={[styles.td, styles.tdSubCol, styles.fontSizeSmall]}>
                                        <Text style={[styles.tdInner]}>{session[elm.limbObjectKeyName].min}</Text>
                                    </View>
                                    <View
                                        style={[
                                            styles.td,
                                            styles.tdSubCol,
                                            styles.fontSizeSmall,
                                            ...bottomRightCellStyles,
                                        ]}
                                    >
                                        <Text style={[styles.tdInner]}>{session[elm.limbObjectKeyName].median}</Text>
                                    </View>
                                </Fragment>
                            );
                        })}
                    </View>
                );
            })}
            {/* body */}
        </View>
    );
};
