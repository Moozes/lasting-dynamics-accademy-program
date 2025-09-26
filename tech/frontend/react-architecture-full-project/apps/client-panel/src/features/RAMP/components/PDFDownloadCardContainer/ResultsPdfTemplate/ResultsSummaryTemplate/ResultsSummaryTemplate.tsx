import { Text, View } from "@react-pdf/renderer";

import { ResultSummaryFormatedData } from "@features/RAMP/types";

import { styles } from "./ResultsSummaryTemplate.styles";

type Props = ResultSummaryFormatedData & { title: string };

export const ResultsSummaryTemplate = ({ formatedData, title }: Props) => {
    return (
        <View style={[styles.container]}>
            <Text>{title}:</Text>

            <Text style={[styles.borderBottom]} />
            <View style={[styles.table]}>
                {formatedData.map((elm) => {
                    let status = styles.tableColGreen;
                    if (elm.ovalClassName === "danger") {
                        status = styles.tableColRed;
                    } else if (elm.ovalClassName === "medium") {
                        status = styles.tableColYellow;
                    }
                    return (
                        <View key={elm.text} style={[styles.tableRow]}>
                            <View style={[styles.tableCol, styles.tableColBig]}>
                                <Text style={[styles.tableCell, styles.tableCellNoMargin]}>{elm.text}</Text>
                            </View>
                            <View style={[styles.tableCol, styles.tableColSmall, status]}>
                                <Text style={[styles.tableCell]}>{elm.riskScore}</Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};
