/* eslint-disable react/no-array-index-key */
import { useMemo } from "react";
import { Text, View } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

import { useTranslationV2 } from "ui";

import { Assessment } from "@app-types/index";
import { useMultiAssessmentsInfoTableFormatedData } from "@hooks/index";

import { getStyles } from "./MultiAssessmentInfoTemplate.styles";

type Props = {
    style?: Style[];
    assessmentArray: Assessment[];
};

export const MultiAssessmentInfoTemplate = ({ assessmentArray, style }: Props) => {
    const styles = useMemo(() => getStyles(assessmentArray.length), [assessmentArray.length]);
    const { formatedData } = useMultiAssessmentsInfoTableFormatedData(assessmentArray);
    const t = useTranslationV2();
    const mergedStyles: Style[] = [styles.table];
    if (style) mergedStyles.push(...style);
    return (
        <View style={mergedStyles}>
            {/* table header */}
            <View style={[styles.tableRow]}>
                <View style={[styles.tableCol, styles.tableColBig]}>
                    <Text style={[styles.tableCell]} />
                </View>
                {assessmentArray.map((elm, idx) => (
                    <View key={idx} style={[styles.tableCol, styles.tableColSmall]}>
                        <Text style={[styles.tableCell, styles.tableCellCenter]}>
                            {t("assessment")} {idx + 1}
                        </Text>
                    </View>
                ))}
            </View>
            {/* table body */}
            {formatedData.map((elm, idx) => (
                <View key={idx} style={[styles.tableRow]}>
                    <View style={[styles.tableCol, styles.tableColBig]}>
                        <Text style={[styles.tableCell]}>{elm.property}</Text>
                    </View>
                    {elm.values.map((val, valIdx) => (
                        <View key={valIdx} style={[styles.tableCol, styles.tableColSmall]}>
                            <Text style={[styles.tableCell, styles.tableCellCenter]}> {val} </Text>
                        </View>
                    ))}
                </View>
            ))}
        </View>
    );
};
