/* eslint-disable react/no-array-index-key */
import { Text, View } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";
import { parseISO } from "date-fns";

import { getFormatedDateString, useTranslationV2 } from "ui";

import { IGetSelectedSessionsStatsQueryResponse } from "@features/sessions/types";

import { getStyles } from "./MultiSessionWorkersTableTemplate.styles";

type Props = {
    style?: Style[];
    sessions: IGetSelectedSessionsStatsQueryResponse;
};

export const MultiSessionWorkersTableTemplate = ({ sessions, style = [] }: Props) => {
    const t = useTranslationV2();
    const styles = getStyles(sessions.length);
    return (
        <View style={[styles.table, ...style]}>
            {/* header */}
            <View style={[styles.tr]}>
                <View
                    style={[
                        styles.td,
                        styles.tdHeadSmall,
                        styles.title,
                        styles.borderLeft,
                        styles.borderTop,
                        styles.tdTopLeft,
                    ]}
                >
                    <Text style={[styles.tdInner]}>{t("session")}</Text>
                </View>
                {sessions.map((session, sessionIdx) => {
                    const topRightCellStyles: Style[] = [];
                    const isLastColumn = sessionIdx === sessions.length - 1;
                    if (isLastColumn) topRightCellStyles.push(styles.tdTopRight);
                    return (
                        <View
                            key={sessionIdx}
                            style={[styles.td, styles.tdHeadBig, styles.title, styles.borderTop, ...topRightCellStyles]}
                        >
                            <Text style={[styles.tdInner]}>
                                {t("session")} {sessionIdx + 1}
                            </Text>
                        </View>
                    );
                })}
            </View>
            {/* header */}

            {/* body */}
            <View style={[styles.tr]}>
                <View style={[styles.td, styles.tdHeadSmall, styles.borderLeft]}>
                    <Text style={[styles.tdInner]}>{t("date")}</Text>
                </View>
                {sessions.map((session, idx) => (
                    <View key={idx} style={[styles.td, styles.tdHeadBig]}>
                        <Text style={[styles.tdInner]}>{getFormatedDateString(parseISO(session.started_at))}</Text>
                    </View>
                ))}
            </View>
            <View style={[styles.tr]}>
                <View style={[styles.td, styles.tdHeadSmall, styles.borderLeft, styles.tdBottomLeft]}>
                    <Text style={[styles.tdInner]}>{t("worker")}</Text>
                </View>
                {sessions.map((session, idx) => {
                    const fullName = `${session.worker_details.first_name} ${session.worker_details.last_name}`;
                    const bottomRightCellStyles: Style[] = [];
                    const isLastColumn = idx === sessions.length - 1;
                    if (isLastColumn) bottomRightCellStyles.push(styles.tdBottomRight);
                    return (
                        <View key={idx} style={[styles.td, styles.tdHeadBig, ...bottomRightCellStyles]}>
                            <Text style={[styles.tdInner]}>{fullName}</Text>
                        </View>
                    );
                })}
            </View>
            {/* body */}
        </View>
    );
};
