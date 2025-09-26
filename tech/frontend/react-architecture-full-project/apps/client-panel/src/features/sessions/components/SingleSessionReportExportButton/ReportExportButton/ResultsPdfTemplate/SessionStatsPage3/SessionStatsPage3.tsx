/* eslint-disable react/no-array-index-key */
import { Image, Text, View } from "@react-pdf/renderer";

import { useTranslationV2 } from "ui";

import { wergonicLogo } from "@assets/index";
import { SessionStatsPageProps } from "@features/sessions/types";

import { styles } from "../styles";

import { TaskTable } from "./TaskTable";

export const SessionStatsPage3 = ({ tasksStats }: SessionStatsPageProps) => {
    const t = useTranslationV2();
    return (
        <View>
            <Image src={wergonicLogo} style={styles.smallImage} />
            <View style={styles.separator} />
            <Text style={styles.boldBody}>{t("tasks")}</Text>
            <TaskTable percentile="10" tasksStats={tasksStats} />
            <TaskTable percentile="50" tasksStats={tasksStats} />
            <TaskTable percentile="90" tasksStats={tasksStats} />
            <TaskTable percentile="99" tasksStats={tasksStats} />
        </View>
    );
};
