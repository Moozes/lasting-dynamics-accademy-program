/* eslint-disable react/no-array-index-key */
import { Image, Text, View } from "@react-pdf/renderer";
import { format, parseISO } from "date-fns";

import { useTranslationV2 } from "ui";

import { wergonicLogo } from "@assets/index";
import { SessionStatsPageProps } from "@features/sessions/types";

import { styles } from "../styles";

import { FrequencyDomainTableTemplate } from "./FrequencyDomainTableTemplate";
import { StatsTableTemplate } from "./StatsTableTemplate";
import { StatsTableTemplate2 } from "./StatsTableTemplate2";
import { TemperatureTableTemplate } from "./TemperatureTableTemplate";
import { TimeDomainTableTemplate } from "./TimeDomainTableTemplate";
import { TnoTableTemplate } from "./TnoTableTemplate";

export const SessionStatsPage = ({ session, sessionStats, tnoStats, hrStats, tempStats }: SessionStatsPageProps) => {
    const t = useTranslationV2();
    const speedOfMovementStats = Object.values(sessionStats?.data.speed_of_movement);
    return (
        <View>
            <Image src={wergonicLogo} style={styles.smallImage} />
            <View style={styles.textMargin}>
                <Text style={[styles.boldCaption]}>{t("Review_work_session")}</Text>
            </View>
            <View>
                <Text style={[styles.caption]}>
                    {t("sessions_management.sessions_detailes_paragraph.summary_for")} {session.worker.first_name}{" "}
                    {session.worker.last_name} {t("sessions_management.sessions_detailes_paragraph.session")},{" "}
                    {format(parseISO(session.started_at), "yyyy-MM-dd")},{" "}
                    {t("sessions_management.sessions_detailes_paragraph.recorded_by")} {session.recorded_by.first_name}{" "}
                    {session.recorded_by.last_name}
                </Text>
            </View>

            <Text style={[styles.boldBody, styles.separator]}>{t("Posture")}</Text>
            {sessionStats && <StatsTableTemplate sessionStats={sessionStats} />}

            <Text style={[styles.boldBody, styles.separator]}>{t("Speed of movement")}</Text>
            {sessionStats && <StatsTableTemplate2 stats={speedOfMovementStats} />}

            {tnoStats && <TnoTableTemplate tnoStats={tnoStats} />}

            {tempStats && <TemperatureTableTemplate tempStats={tempStats} />}

            {hrStats && <TimeDomainTableTemplate hrStats={hrStats} />}

            {hrStats && <FrequencyDomainTableTemplate hrStats={hrStats} />}
        </View>
    );
};
