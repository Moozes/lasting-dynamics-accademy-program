import { Image, Text, View } from "@react-pdf/renderer";

import { useTranslationV2 } from "ui";

import { wergonicLogo } from "@assets/index";
import { formatAiReportForPdf } from "@features/sessions/utils";

import { styles } from "../styles";

interface AIReportPageProps {
    report_content: string;
}

export const AIReportPage = ({ report_content }: AIReportPageProps) => {
    const t = useTranslationV2();
    const formattedContent = formatAiReportForPdf(report_content);
    return (
        <View>
            <Image src={wergonicLogo} style={styles.smallImage} />
            <View style={styles.pagePadding}>
                <Text style={[styles.boldTitle]}>{t("sessions_management.ai_generated_report")}</Text>
                <View style={styles.separator}>{formattedContent.map((element) => element)}</View>
            </View>
        </View>
    );
};
