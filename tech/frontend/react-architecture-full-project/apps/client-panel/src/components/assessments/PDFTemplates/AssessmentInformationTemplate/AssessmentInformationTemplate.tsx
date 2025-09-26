import { Text, View } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

import { useTranslationV2 } from "ui";

import { Assessment } from "@app-types/index";

import { styles } from "./AssessmentInformationTemplate.styles";

type Props = {
    style?: Style[];
    title: string;
    assessment: Assessment;
};

export const AssessmentInformationTemplate = ({ style, assessment, title }: Props) => {
    const t = useTranslationV2();
    const mergedStyles: Style[] = [];
    if (style) mergedStyles.push(...style);
    return (
        <View style={mergedStyles}>
            <Text style={[styles.title]}>{title}</Text>
            <View style={[styles.table]}>
                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, styles.borderRightNone]}>
                        <Text style={[styles.tableCell, styles.tableCellRight]}>
                            {t("ramp_assessments.assessment_name")}:
                        </Text>
                    </View>
                    <View style={[styles.tableCol]}>
                        <Text style={[styles.tableCell, styles.tableLeft]}> {assessment.assessment_name}</Text>
                    </View>
                    <View style={[styles.tableCol, styles.borderRightNone]}>
                        <Text style={[styles.tableCell, styles.tableCellRight]}>{t("date")}:</Text>
                    </View>
                    <View style={[styles.tableCol]}>
                        <Text style={[styles.tableCell, styles.tableLeft]}> {assessment.date}</Text>
                    </View>
                </View>

                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, styles.borderRightNone]}>
                        <Text style={[styles.tableCell, styles.tableCellRight]}>
                            {`${t("work")}/${t("work_task")}`}:
                        </Text>
                    </View>
                    <View style={[styles.tableCol]}>
                        <Text style={[styles.tableCell, styles.tableLeft]}> {assessment.work_task}</Text>
                    </View>
                    <View style={[styles.tableCol, styles.borderRightNone]}>
                        <Text style={[styles.tableCell, styles.tableCellRight]}>{t("country")}:</Text>
                    </View>
                    <View style={[styles.tableCol]}>
                        <Text style={[styles.tableCell, styles.tableLeft]}> {assessment.country}</Text>
                    </View>
                </View>

                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, styles.borderRightNone]}>
                        <Text style={[styles.tableCell, styles.tableCellRight]}>{t("Company_representative")}:</Text>
                    </View>
                    <View style={[styles.tableCol]}>
                        <Text style={[styles.tableCell, styles.tableLeft]}> {assessment.company_representative}</Text>
                    </View>
                    <View style={[styles.tableCol, styles.borderRightNone]}>
                        <Text style={[styles.tableCell, styles.tableCellRight]}>{t("Worker")}:</Text>
                    </View>
                    <View style={[styles.tableCol]}>
                        <Text style={[styles.tableCell, styles.tableLeft]}> {assessment.worker}</Text>
                    </View>
                </View>

                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, styles.borderRightNone]}>
                        <Text style={[styles.tableCell, styles.tableCellRight]}>{t("type")}:</Text>
                    </View>
                    <View style={[styles.tableCol]}>
                        <Text style={[styles.tableCell, styles.tableLeft]}> {assessment.assessment_type}</Text>
                    </View>
                    <View style={[styles.tableCol, styles.borderRightNone]}>
                        <Text style={[styles.tableCell, styles.tableCellRight]}>{t("site")}:</Text>
                    </View>
                    <View style={[styles.tableCol]}>
                        <Text style={[styles.tableCell, styles.tableLeft]}> {assessment.site}</Text>
                    </View>
                </View>

                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, styles.borderRightNone]}>
                        <Text style={[styles.tableCell, styles.tableCellRight]}>{t("Unit")}:</Text>
                    </View>
                    <View style={[styles.tableCol]}>
                        <Text style={[styles.tableCell, styles.tableLeft]}> {assessment.unit}</Text>
                    </View>
                    <View style={[styles.tableCol, styles.borderRightNone]}>
                        <Text style={[styles.tableCell, styles.tableCellRight]}>
                            {t("ramp_assessments.assessment_completed_by")} :
                        </Text>
                    </View>
                    <View style={[styles.tableCol]}>
                        <Text style={[styles.tableCell, styles.tableLeft]}> {assessment.assessment_completed_by}</Text>
                    </View>
                </View>

                <View style={[styles.tableRow]}>
                    <View style={[styles.tableCol, styles.tableColFullWidth]}>
                        <Text style={[styles.tableCell]}>
                            {t("comment")}: {assessment.comment}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
