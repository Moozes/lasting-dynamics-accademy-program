/* eslint-disable react/no-array-index-key */
import { Text, View } from "@react-pdf/renderer";

import { useTranslationV2 } from "ui";

import { TaskData } from "@features/sessions/types";

import { styles } from "../../styles";
import { formatTime } from "../SessionStatsPage3.utils";

export const TaskTable = ({ percentile, tasksStats }: { percentile: string; tasksStats?: TaskData[] }) => {
    const t = useTranslationV2();
    return (
        <View style={styles.separator}>
            <View style={[styles.hrTable]}>
                <View style={[styles.tableRow]}>
                    <View style={[styles.taskmediumTableCol, styles.tableHeaderBackground, styles.truncateText]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                            {t("Percentile")} {percentile}
                        </Text>
                    </View>
                    <View style={[styles.taskmediumTableCol, styles.tableHeaderBackground, styles.truncateText]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                            {t("Time")}
                        </Text>
                    </View>
                    <View style={[styles.tasksmallTableCol, styles.tableHeaderBackground, styles.truncateText]} />
                    <View style={[styles.taskLargeTableCol, styles.tableHeaderBackground, styles.truncateText]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                            {t("Angle")}
                        </Text>
                    </View>
                    <View style={[styles.tasksmallTableCol, styles.tableHeaderBackground, styles.truncateText]} />
                    <View style={[styles.taskLargeTableCol, styles.tableHeaderBackground, styles.truncateText]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                            {t("Velocity")}
                        </Text>
                    </View>
                </View>

                <View style={[styles.tableRow]}>
                    <View style={[styles.taskmediumTableCol, styles.tableHeaderBackground, styles.truncateText]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                            {t("Activity")}
                        </Text>
                    </View>
                    <View style={[styles.taskExtrasmallTableCol]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.smallTabletitle]}>
                            {t("In_Seconds")}
                        </Text>
                    </View>
                    <View style={[styles.taskExtrasmallTableCol]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.smallTabletitle]}>
                            {t("In_Minutes")}
                        </Text>
                    </View>
                    <View style={[styles.tasksmallTableCol, styles.truncateText]} />
                    <View style={[styles.taskExtrasmallTableCol, styles.truncateText]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                            {t("Back")}
                        </Text>
                    </View>
                    <View style={[styles.taskExtrasmallTableCol, styles.truncateText]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                            {t("left_arm")}
                        </Text>
                    </View>
                    <View style={[styles.taskExtrasmallTableCol, styles.truncateText]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                            {t("right_arm")}
                        </Text>
                    </View>
                    <View style={[styles.tasksmallTableCol, styles.truncateText]} />
                    <View style={[styles.taskExtrasmallTableCol, styles.truncateText]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                            {t("Back")}
                        </Text>
                    </View>
                    <View style={[styles.taskExtrasmallTableCol, styles.truncateText]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                            {t("left_arm")}
                        </Text>
                    </View>
                    <View style={[styles.taskExtrasmallTableCol, styles.truncateText]}>
                        <Text style={[styles.tableCellHeader, styles.textCenter, styles.boldTableTitle]}>
                            {t("right_arm")}
                        </Text>
                    </View>
                </View>
                {tasksStats?.map((task) => (
                    <View key={task.task} style={[styles.tableRow]}>
                        <View style={[styles.taskmediumTableCol, styles.tableHeaderBackground, styles.truncateText]}>
                            <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                {task.task}
                            </Text>
                        </View>
                        <View style={[styles.taskExtrasmallTableCol]}>
                            <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                {formatTime(task.total_duration, "s")}
                            </Text>
                        </View>
                        <View style={[styles.taskExtrasmallTableCol]}>
                            <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                {formatTime(task.total_duration, "m")}
                            </Text>
                        </View>
                        <View style={[styles.tasksmallTableCol, styles.truncateText]} />
                        <View style={[styles.taskExtrasmallTableCol, styles.truncateText]}>
                            <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                {task.elevation_angle?.[`percentile_${percentile}`]?.trunk !== undefined
                                    ? task.elevation_angle[`percentile_${percentile}`]?.trunk
                                    : "-"}
                            </Text>
                        </View>
                        <View style={[styles.taskExtrasmallTableCol, styles.truncateText]}>
                            <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                {task.elevation_angle?.[`percentile_${percentile}`]?.leftArm !== undefined
                                    ? task.elevation_angle[`percentile_${percentile}`]?.leftArm
                                    : "-"}
                            </Text>
                        </View>
                        <View style={[styles.taskExtrasmallTableCol, styles.truncateText]}>
                            <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                {task.elevation_angle?.[`percentile_${percentile}`]?.rightArm !== undefined
                                    ? task.elevation_angle[`percentile_${percentile}`]?.rightArm
                                    : "-"}
                            </Text>
                        </View>
                        <View style={[styles.tasksmallTableCol, styles.truncateText]} />
                        <View style={[styles.taskExtrasmallTableCol, styles.truncateText]}>
                            <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                {task.angular_velocity?.[`percentile_${percentile}`]?.trunk !== undefined
                                    ? task.angular_velocity[`percentile_${percentile}`]?.trunk
                                    : "-"}
                            </Text>
                        </View>
                        <View style={[styles.taskExtrasmallTableCol, styles.truncateText]}>
                            <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                {task.angular_velocity?.[`percentile_${percentile}`]?.leftArm !== undefined
                                    ? task.angular_velocity[`percentile_${percentile}`]?.leftArm
                                    : "-"}
                            </Text>
                        </View>
                        <View style={[styles.taskExtrasmallTableCol, styles.truncateText]}>
                            <Text style={[styles.tableCellHeader, styles.textCenter, styles.tabletitle]}>
                                {task.angular_velocity?.[`percentile_${percentile}`]?.rightArm !== undefined
                                    ? task.angular_velocity[`percentile_${percentile}`]?.rightArm
                                    : "-"}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};
