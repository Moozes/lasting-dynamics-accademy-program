/* eslint-disable react/no-array-index-key */
import { Image, Text, View } from "@react-pdf/renderer";
import { format, parseISO } from "date-fns";

import { displayOrFallback, useTranslationV2 } from "ui";

import { wergonicLogo } from "@assets/index";
import { ISession } from "@features/sessions/types";

import { styles } from "../styles";

export const SessionInfoPage = ({ session }: { session: ISession }) => {
    const t = useTranslationV2();
    return (
        <View style={styles.pagePadding}>
            <Image src={wergonicLogo} style={styles.image} />
            <View style={styles.separator}>
                <Text style={[styles.boldTitle]}>{t("Review_work_session")}</Text>
            </View>
            <View style={styles.separator}>
                <Text style={[styles.title]}>
                    {t("sessions_management.sessions_detailes_paragraph.summary_for")}{" "}
                    {displayOrFallback(session.worker.first_name)} {displayOrFallback(session.worker.last_name)}{" "}
                    {t("sessions_management.sessions_detailes_paragraph.session")},{" "}
                    {format(parseISO(session.started_at), "yyyy-MM-dd")},{" "}
                    {t("sessions_management.sessions_detailes_paragraph.recorded_by")}{" "}
                    {displayOrFallback(session.recorded_by.first_name)}{" "}
                    {displayOrFallback(session.recorded_by.last_name)}
                </Text>
            </View>
            <View style={styles.separator}>
                <Text style={[styles.body]}>{t("workplace")}</Text>
                <Text style={[styles.boldBody, styles.textMargin]}>{displayOrFallback(session.workplace)}</Text>
            </View>
            <View style={styles.textMargin}>
                <Text style={[styles.body]}>{t("Worker_name")}</Text>
                <Text style={[styles.boldBody, styles.textMargin]}>{displayOrFallback(session.worker.first_name)}</Text>
            </View>
            <View style={styles.textMargin}>
                <Text style={[styles.body]}>{t("Worker_last_name")}</Text>
                <Text style={[styles.boldBody, styles.textMargin]}>{displayOrFallback(session.worker.last_name)}</Text>
            </View>
            <View style={styles.textMargin}>
                <Text style={[styles.body]}>{t("gender")}</Text>
                <Text style={[styles.boldBody, styles.textMargin]}>{displayOrFallback(session.worker.gender)}</Text>
            </View>
            <View style={styles.textMargin}>
                <Text style={[styles.body]}>{t("Dominant_arm")}</Text>
                <Text style={[styles.boldBody, styles.textMargin]}>
                    {displayOrFallback(session.worker.dominant_arm)}
                </Text>
            </View>
            <View style={styles.textMargin}>
                <Text style={[styles.body]}>{t("age")}</Text>
                <Text style={[styles.boldBody, styles.textMargin]}>{displayOrFallback(session.worker.age)}</Text>
            </View>
            <View style={styles.textMargin}>
                <Text style={[styles.body]}>{t("Weight")}</Text>
                <Text style={[styles.boldBody, styles.textMargin]}>{displayOrFallback(session.worker.weight)}</Text>
            </View>
            <View style={styles.textMargin}>
                <Text style={[styles.body]}>{t("Resting_heart_rate")}</Text>
                <Text style={[styles.boldBody, styles.textMargin]}>
                    {displayOrFallback(session.worker.resting_heart_rate)}
                </Text>
            </View>
            <View style={styles.textMargin}>
                <Text style={[styles.body]}>{t("Consultant")}</Text>
                <Text style={[styles.boldBody, styles.textMargin]}>
                    {displayOrFallback(session.recorded_by.first_name)}{" "}
                    {displayOrFallback(session.recorded_by.last_name)}
                </Text>
            </View>
            <View style={styles.textMargin}>
                <Text style={[styles.body]}>{t("comment")}</Text>
                <Text style={[styles.boldBody, styles.textMargin]}>{displayOrFallback(session.worker.comment)}</Text>
            </View>
        </View>
    );
};
