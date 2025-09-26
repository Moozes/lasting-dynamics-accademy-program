/* eslint-disable react/no-array-index-key */
import { Fragment } from "react";
import { Text, View } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

import { useTranslationV2 } from "ui";

import { IMultiSessionAnglesTableProps } from "@features/sessions/types";

import { getStatusColor } from "./MultiSessionAnglesTableTemplate.helpers";
import { getStyles } from "./MultiSessionAnglesTableTemplate.styles";

type Props = IMultiSessionAnglesTableProps & { style?: Style[] };

export const MultiSessionAnglesTableTemplate = ({
    tableTitle,
    scale,
    measurement1,
    measurement2,
    sessionCount,
    rowsArray,
    hasStatusCircles,
    style = [],
}: Props) => {
    const t = useTranslationV2();
    const styles = getStyles(sessionCount);
    return (
        <View style={[styles.table, ...style]}>
            {/* header */}
            <View style={[styles.tr]}>
                <View style={[styles.td, styles.tdHeadSmall, styles.title]}>
                    <Text style={[styles.tdInner]}>{tableTitle}</Text>
                </View>
                {Array.from({ length: sessionCount }).map((session, sessionIdx) => (
                    <View key={sessionIdx} style={[styles.td, styles.tdHeadBig]}>
                        <Text style={[styles.tdInner]}>
                            {t("session")} {sessionIdx + 1}
                        </Text>
                    </View>
                ))}
            </View>

            <View style={[styles.tr]}>
                <View style={[styles.td, styles.tdHeadSmall]}>
                    <Text style={[styles.tdInner]}>{scale}</Text>
                </View>
                {Array.from({ length: sessionCount }).map((session, sessionIdx) => (
                    <Fragment key={sessionIdx}>
                        <View style={[styles.td, styles.tdSubCol]}>
                            <Text style={[styles.tdInner]}>{measurement1}</Text>
                        </View>
                        <View style={[styles.td, styles.tdSubCol]}>
                            <Text style={[styles.tdInner]}>{measurement2}</Text>
                        </View>
                    </Fragment>
                ))}
            </View>
            {/* header */}

            {/* body */}
            {rowsArray.map((row, rowIdx) => (
                <View key={rowIdx} style={[styles.tr]}>
                    {row.map((str, strIdx) => {
                        const statusCircleStyles = getStatusColor(rowIdx, styles);
                        return (
                            <View
                                key={strIdx}
                                style={[
                                    styles.td,
                                    strIdx === 0 ? styles.tdHeadSmall : styles.tdSubCol,
                                    strIdx === 0 ? styles.angle : styles.td,
                                ]}
                            >
                                {strIdx === 0 && hasStatusCircles && (
                                    <Text style={[styles.statusCircle, statusCircleStyles]} />
                                )}
                                <Text style={[styles.tdInner]}>{str}</Text>
                            </View>
                        );
                    })}
                </View>
            ))}
            {/* body */}
        </View>
    );
};
