/* eslint-disable react/no-array-index-key */
import { useMemo } from "react";
import { Text, View } from "@react-pdf/renderer";

import { Assessment, RAMPAssessment } from "@app-types/index";
import { useMultiDetailedSummaryFormatedData } from "@features/RAMP/hooks";

import { getStyles } from "./MultiRAMPAssessmentsResultsTemplate.styles";

type Props = {
    assessmentArray: Assessment[];
};

export const MultiRAMPAssessmentsResultsTemplate = ({ assessmentArray }: Props) => {
    const { styles, getStatusStyles } = useMemo(() => getStyles(assessmentArray.length), [assessmentArray.length]);
    const { formatedData } = useMultiDetailedSummaryFormatedData(assessmentArray as RAMPAssessment[]);
    return (
        <View style={[styles.table]}>
            {formatedData.map((elm, idx) => (
                <View key={idx} style={[styles.tableRow]}>
                    <View style={[styles.tableCol, elm.colSpan ? styles.tableColFullWidth : styles.tableColBig]}>
                        <Text style={[styles.tableCell]}>{elm.text}</Text>
                    </View>
                    {elm.values &&
                        elm.values.map((val, valIdx) => {
                            const statusStyles = getStatusStyles(val.className);
                            return (
                                <View key={valIdx} style={[styles.tableCol, styles.tableColSmall, statusStyles]}>
                                    <Text style={[styles.tableCell, styles.tableCellCenter]}> {val.score} </Text>
                                </View>
                            );
                        })}
                </View>
            ))}
        </View>
    );
};
