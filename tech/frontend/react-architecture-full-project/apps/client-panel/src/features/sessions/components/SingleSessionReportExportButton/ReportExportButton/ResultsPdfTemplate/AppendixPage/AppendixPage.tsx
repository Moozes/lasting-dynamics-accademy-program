/* eslint-disable react/no-array-index-key */
import { Image, Link, Text, View } from "@react-pdf/renderer";

import { useTranslationV2 } from "ui";

import { wergonicLogo } from "@assets/index";

import { styles } from "../styles";

export const AppendixPage = () => {
    const t = useTranslationV2();

    return (
        <View style={styles.pagePadding}>
            <Image src={wergonicLogo} style={styles.smallImage} />
            <View style={styles.separator}>
                <Text style={styles.boldTitle}>
                    {t("sessions_management.pdf_appendix.references_behind_assessment_title")}
                </Text>
                <Text style={styles.body2}>
                    {t("sessions_management.pdf_appendix.references_behind_assessment_description")}
                </Text>
                <View style={styles.separator}>
                    <Text style={styles.boldTitle}>{t("sessions_management.pdf_appendix.ramp_tool_title")}</Text>
                    <Text style={styles.body2}>{t("sessions_management.pdf_appendix.ramp_purpose_title")}</Text>
                    <Text style={styles.body2}>{t("sessions_management.pdf_appendix.ramp_purpose_description")}</Text>
                    <Text style={styles.body2}>{t("sessions_management.pdf_appendix.key_features_title")}</Text>
                    <Text style={styles.body2}>
                        {"\n"}• {t("sessions_management.pdf_appendix.key_feature_1")}
                        {"\n"}• {t("sessions_management.pdf_appendix.key_feature_2")}
                        {"\n"}• {t("sessions_management.pdf_appendix.key_feature_3")}
                    </Text>
                    <Text style={styles.body2}>{t("sessions_management.pdf_appendix.application_in_assessment")}</Text>
                    <Text style={styles.body2}>
                        {t("sessions_management.pdf_appendix.application_in_assessment_description_2")}
                    </Text>
                </View>
            </View>

            {/* Reference Publication Section */}
            <View style={styles.separator}>
                <Text style={styles.boldTitle}>
                    {t("sessions_management.pdf_appendix.reference_publication_title")}
                </Text>
                <Text style={styles.body2}>
                    {t("sessions_management.pdf_appendix.reference_publication_ramp")}
                    {"\n"}
                    {t("sessions_management.pdf_appendix.reference_publication_royal_institute")}
                </Text>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link src="https://www.kth.se/mth/ergonomi/forskning/ramp-utveckling-implementering-och-spridning-av-belastningsergonomiskt-bedomningsktyg-och-atga-1.60371">
                    https://www.kth.se/mth/ergonomi/forskning/ramp-utveckling-implementering-och-spridning-av-belastningsergonomiskt-bedomningsktyg-och-atga-1.60371
                </Link>
            </View>

            {/* Intervention Levels Section */}
            <View style={styles.separator}>
                <Text style={styles.boldTitle}>{t("sessions_management.pdf_appendix.intervention_levels_title")} </Text>
                <Text style={styles.body2}>
                    {t("sessions_management.pdf_appendix.contributions")}
                    {"\n"}
                    {t("sessions_management.pdf_appendix.contributions_description")}
                </Text>
                <Text style={styles.body2}>
                    {t("sessions_management.pdf_appendix.application_in_assessment")}
                    {"\n"}
                    {t("sessions_management.pdf_appendix.application_in_assessment_description")}
                </Text>
                <Text style={styles.body2}>
                    {t("sessions_management.pdf_appendix.reference_publication")}
                    {"\n"}
                    {t("sessions_management.pdf_appendix.reference_publication_details")}
                </Text>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link src="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11214778/">
                    https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11214778/
                </Link>
            </View>

            {/* Risk Zones Classification Section */}
            <View style={styles.separator}>
                <Text style={styles.boldTitle}>
                    {t("sessions_management.pdf_appendix.risk_zones_classification_title")}
                </Text>
                <Text style={styles.body2}>
                    {t("sessions_management.pdf_appendix.percentile_description")}
                    {"\n"}• {t("sessions_management.pdf_appendix.percentile_50th_description")}
                    {"\n"}• {t("sessions_management.pdf_appendix.percentile_90th_description")}
                </Text>
                <Text style={styles.body2}>
                    {t("sessions_management.pdf_appendix.risk_zones_title")}
                    {"\n"}• {t("sessions_management.pdf_appendix.green_zone")}**
                    {"\n"}• {t("sessions_management.pdf_appendix.yellow_zone")}**
                    {"\n"}• {t("sessions_management.pdf_appendix.red_zone")}**
                </Text>
            </View>

            {/* Importance of Risk Zones */}
            <View style={styles.separator}>
                <Text style={styles.boldTitle}>{t("sessions_management.pdf_appendix.importance_of_risk_zones")}</Text>
                <Text style={styles.body2}>
                    {t("sessions_management.pdf_appendix.importance_of_risk_zones_description")}
                </Text>
            </View>
        </View>
    );
};
