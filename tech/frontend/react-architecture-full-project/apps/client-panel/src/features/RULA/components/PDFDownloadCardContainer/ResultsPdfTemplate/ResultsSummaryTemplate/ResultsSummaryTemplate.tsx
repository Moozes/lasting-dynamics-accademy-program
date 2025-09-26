/* eslint-disable react/no-array-index-key */
import { Text, View } from "@react-pdf/renderer";

import { useTranslationV2 } from "ui";

import { FinalScoreClassNamesEnum, IResultSummaryFormatedData } from "@features/RULA/types";

import { styles } from "./ResultsSummaryTemplate.styles";

type Props = IResultSummaryFormatedData;

export const ResultsSummaryTemplate = ({ scoresFormatedData, summaryFormatedData }: Props) => {
    const t = useTranslationV2();
    return (
        <View style={[styles.container]}>
            <Text style={[styles.borderBottom]} />
            <View style={[styles.table]}>
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, styles.tableColFullWidth]}>
                        <Text style={[styles.tableCell, styles.tableCellHeader]}>{t("table_scores")}</Text>
                    </View>
                </View>

                {scoresFormatedData.map((elm, idx) => {
                    if (elm.colSpan) {
                        return (
                            <View style={[styles.tableRow]} key={idx}>
                                <View style={[styles.tableCol, styles.tableColFullWidth]}>
                                    <Text style={[styles.tableCell]}>{elm.text}</Text>
                                </View>
                            </View>
                        );
                    }

                    let scoreStyles;
                    switch (elm.className) {
                        case FinalScoreClassNamesEnum.veryLow:
                            scoreStyles = styles.veryLow;
                            break;
                        case FinalScoreClassNamesEnum.low:
                            scoreStyles = styles.low;
                            break;
                        case FinalScoreClassNamesEnum.medium:
                            scoreStyles = styles.medium;
                            break;
                        case FinalScoreClassNamesEnum.high:
                            scoreStyles = styles.high;
                            break;
                        default:
                            scoreStyles = styles.tableColSmall;
                    }
                    return (
                        <View key={idx} style={[styles.tableRow]}>
                            <View style={[styles.tableCol, styles.tableColBig]}>
                                <Text style={[styles.tableCell]}>{elm.text}</Text>
                            </View>
                            <View style={[styles.tableCol, styles.tableColSmall, scoreStyles]}>
                                <Text style={[styles.tableCell, styles.textCenter]}>{elm.score}</Text>
                            </View>
                        </View>
                    );
                })}
            </View>

            <View style={[styles.tableRow]}>
                <View style={[styles.tableCol, styles.tableColFullWidth, styles.tableColEmpty]}>
                    <Text style={[styles.tableCellEmpty]} />
                </View>
            </View>

            <Text style={[styles.borderBottom]} />
            <View style={[styles.table]}>
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, styles.tableColFullWidth]}>
                        <Text style={[styles.tableCell, styles.tableCellHeader]}>
                            {t("ramp_assessments.results.detailed_summary")}
                        </Text>
                    </View>
                </View>
                {summaryFormatedData.map((elm, idx) => {
                    if (elm.colSpan) {
                        return (
                            <View style={[styles.tableRow]} key={idx}>
                                <View style={[styles.tableCol, styles.tableColFullWidth]}>
                                    <Text style={[styles.tableCell]}>{elm.text}</Text>
                                </View>
                            </View>
                        );
                    }

                    return (
                        <View key={idx} style={[styles.tableRow]}>
                            <View style={[styles.tableCol, styles.tableColBig]}>
                                <Text style={[styles.tableCell]}>{elm.text}</Text>
                            </View>
                            <View style={[styles.tableCol, styles.tableColSmall]}>
                                <Text style={[styles.tableCell, styles.textCenter]}>{elm.score}</Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};
