/* eslint-disable react/no-array-index-key */
import { Fragment } from "react";
import { Text, View } from "@react-pdf/renderer";

import { useTranslationV2 } from "ui";

import { DetailedSummaryAccordionProps } from "@features/RAMP/types";

import { styles } from "./DetailedSummaryTemplate.styles";

type Props = {
    formatedData: DetailedSummaryAccordionProps[];
};

export const DetailedSummaryTemplate = ({ formatedData }: Props) => {
    const t = useTranslationV2();
    return (
        <View style={[styles.table]}>
            {/* table head */}
            <View style={[styles.tableRow]}>
                <View style={[styles.tableCol, styles.textCol]}>
                    <Text style={[styles.tableCell, styles.tableCellAlignStart]}>
                        {t("ramp_assessments.results.table_header_1")}
                    </Text>
                </View>
                <View style={[styles.tableCol, styles.assessmentCol]}>
                    <Text style={[styles.tableCell]}>{t("ramp_assessments.results.table_header_2")}</Text>
                </View>
                <View style={[styles.tableCol, styles.scoreCol]}>
                    <Text style={[styles.tableCell]}>{t("ramp_assessments.results.table_header_3")}</Text>
                </View>
                <View style={[styles.tableCol, styles.commentCol]}>
                    <Text style={[styles.tableCell]}>{t("ramp_assessments.results.table_header_4")}</Text>
                </View>
            </View>

            {formatedData.map((elm) => {
                return (
                    <Fragment key={elm.title}>
                        {/* table title */}
                        <View style={[styles.tableRow]}>
                            <View
                                style={[
                                    styles.tableCol,
                                    styles.textCol,
                                    styles.tableColFullWidth,
                                    styles.tableColTitle,
                                ]}
                            >
                                <Text style={[styles.tableCell, styles.tableCellAlignStart]}>{elm.title}</Text>
                            </View>
                        </View>

                        {elm.tables.map((table, tableIndex) => {
                            return (
                                <Fragment key={tableIndex}>
                                    {/* table sub title */}
                                    {table.title && (
                                        <View style={[styles.tableRow]}>
                                            <View
                                                style={[
                                                    styles.tableCol,
                                                    styles.textCol,
                                                    styles.tableColFullWidth,
                                                    styles.tableColSubTitle,
                                                ]}
                                            >
                                                <Text style={[styles.tableCell, styles.tableCellAlignStart]}>
                                                    {table.title}
                                                </Text>
                                            </View>
                                        </View>
                                    )}

                                    {/* rows */}
                                    {table.dataRows.map((row, rowIndex) => {
                                        let status = styles.tableColNoColor;
                                        if (row.staus === "red") status = styles.tableColRed;
                                        else if (row.staus === "yellow") status = styles.tableColYellow;
                                        else if (row.staus === "green") status = styles.tableColGreen;
                                        return (
                                            <View key={rowIndex} style={[styles.tableRow]}>
                                                <View style={[styles.tableCol, styles.textCol]}>
                                                    <Text style={[styles.tableCell, styles.tableCellAlignStart]}>
                                                        {row.text}
                                                    </Text>
                                                </View>
                                                <View style={[styles.tableCol, styles.assessmentCol, status]}>
                                                    <Text style={[styles.tableCell]} />
                                                </View>
                                                <View style={[styles.tableCol, styles.scoreCol]}>
                                                    <Text style={[styles.tableCell]}>{row.score}</Text>
                                                </View>
                                                <View style={[styles.tableCol, styles.commentCol]}>
                                                    <Text style={[styles.tableCell]}>{row.userComment}</Text>
                                                </View>
                                            </View>
                                        );
                                    })}
                                </Fragment>
                            );
                        })}
                    </Fragment>
                );
            })}
        </View>
    );
};
