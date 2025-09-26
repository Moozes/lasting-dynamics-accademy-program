/* eslint-disable react/no-array-index-key */
import { Fragment, useMemo } from "react";
import { Image, Text, View } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

import { useTranslationV2 } from "ui";

import { TUseMultiDetailedSummaryData } from "@features/MEC/types";
import { getStatusStyles } from "@features/MEC/utils";
import { useHandleMissingSensor } from "@hooks/index";

import { getStyles } from "./MultiResultsTablePdfTemplate.styles";

type Props = {
    style?: Style[];
    data: TUseMultiDetailedSummaryData;
};

export const MultiResultsTablePdfTemplate = ({ data, style }: Props) => {
    const t = useTranslationV2();
    const { handleMissingSensor } = useHandleMissingSensor();
    const { styles } = useMemo(() => getStyles(), []);
    const subQuestionsLength = data.subQuestions.length;
    // const assessmentColumnStyles: Style[] = subQuestionsLength == 2 ? [styles.td30] : [styles.td10];
    let assessmentColumnStyles: Style[] = [];
    switch (subQuestionsLength) {
        case 1:
            assessmentColumnStyles = [styles.td50];
            break;
        case 2:
            assessmentColumnStyles = [styles.td30];
            break;
        case 3:
            assessmentColumnStyles = [styles.td10];
            break;
        default:
            assessmentColumnStyles = [];
    }
    const mergedStyles: Style[] = [styles.table];
    if (style) mergedStyles.push(...style);
    return (
        <View style={mergedStyles}>
            {/* question rows */}
            <View style={[styles.tr]}>
                <View style={[styles.td, styles.tdFullWidth]}>
                    <Text style={[styles.tdInner]}>{data.question}</Text>
                </View>
            </View>

            <View style={[styles.tr]}>
                <View style={[styles.td, ...assessmentColumnStyles]}>
                    <Text style={[styles.tdInner]} />
                </View>
                {data.subQuestions.map((sub, subIdx) => (
                    <View key={subIdx} style={[styles.td, styles.td20]}>
                        <Text style={[styles.tdInner, styles.fontSize7]}>{sub.q}</Text>
                        <View style={[styles.center]}>
                            <Image src={sub.illustrationPDF} style={[styles.image]} />
                        </View>
                    </View>
                ))}
                <View style={[styles.td, styles.td10]}>
                    <Text style={[styles.tdInner]} />
                </View>
                <View style={[styles.td, styles.td20]}>
                    <Text style={[styles.tdInner]} />
                </View>
            </View>

            <View style={[styles.tr]}>
                <View style={[styles.td, ...assessmentColumnStyles]}>
                    <Text style={[styles.tdInner]} />
                </View>
                {data.subQuestions.map((sub, subIdx) => (
                    <Fragment key={subIdx}>
                        <View style={[styles.td, styles.td10, styles.tdCenter]}>
                            <Text style={[styles.tdInner, styles.fontSize7]}>
                                {t("mec_assessments.dynamic_movements")}
                            </Text>
                        </View>
                        <View style={[styles.td, styles.td10, styles.tdCenter]}>
                            <Text style={[styles.tdInner, styles.fontSize7]}>
                                {t("mec_assessments.static_postures_time")}
                            </Text>
                        </View>
                    </Fragment>
                ))}
                <View style={[styles.td, styles.td10, styles.tdCenter]}>
                    <Text style={[styles.tdInner, styles.fontSize7]}>{t("result")}</Text>
                </View>
                <View style={[styles.td, styles.td20, styles.tdCenter]}>
                    <Text style={[styles.tdInner, styles.fontSize7]}>{t("justification")}</Text>
                </View>
            </View>

            {/* assessment rows */}
            {data.assessments.map((a, aIdx) => (
                <View key={aIdx} style={[styles.tr]}>
                    <View style={[styles.td, ...assessmentColumnStyles]}>
                        <Text style={[styles.tdInner]}>
                            {t("assessment")} {aIdx + 1}
                        </Text>
                    </View>
                    {a.subQuestions.map((sub, subIdx) => (
                        <Fragment key={subIdx}>
                            <View style={[styles.td, styles.td10, styles.tdCenter]}>
                                <Text style={[styles.tdInner, styles.fontSize7]}>
                                    {handleMissingSensor(sub.count_freq, sub.missing_limb)}
                                </Text>
                            </View>
                            <View style={[styles.td, styles.td10, styles.tdCenter]}>
                                <Text style={[styles.tdInner, styles.fontSize7]}>
                                    {handleMissingSensor(sub.time, sub.missing_limb)}
                                </Text>
                            </View>
                        </Fragment>
                    ))}
                    <View style={[styles.td, styles.td10, ...getStatusStyles(a.status, styles)]}>
                        <Text style={[styles.tdInner]} />
                    </View>
                    <View style={[styles.td, styles.td20, styles.tdCenter]}>
                        <Text style={[styles.tdInner, styles.fontSize7]}>{a.justification}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
};
