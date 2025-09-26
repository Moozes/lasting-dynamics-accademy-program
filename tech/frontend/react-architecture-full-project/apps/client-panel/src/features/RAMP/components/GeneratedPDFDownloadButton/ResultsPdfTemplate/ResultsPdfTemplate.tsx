/* eslint-disable react/no-array-index-key */
import { Document, Page } from "@react-pdf/renderer";

import { useTranslationV2 } from "ui";

import { AssessmentInformationTemplate, FooterTemplate, ResultsCommentTemplate } from "@components/index";
import { TGeneratedRAMPResultsPdfTemplateProps } from "@features/RAMP/types";

import { styles } from "./ResultsPdfTemplate.styles";
import { TableTemplate } from "./TableTemplate";

type Props = TGeneratedRAMPResultsPdfTemplateProps;

export const ResultsPdfTemplate = ({
    generatedRAMPFormatedDataFirstPage,
    generatedRAMPFormatedDataSecondPage,
    assessment,
}: Props) => {
    const t = useTranslationV2();
    return (
        <Document>
            <Page style={[styles.page]}>
                <AssessmentInformationTemplate
                    style={[styles.assessmentInformation]}
                    assessment={assessment}
                    title={t("ramp_assessments.generated_ramp_results")}
                />
                {generatedRAMPFormatedDataFirstPage.map((elm, idx) => (
                    <TableTemplate key={idx} style={[styles.table]} tableData={elm} />
                ))}
                <FooterTemplate />
            </Page>
            <Page style={[styles.page]}>
                {generatedRAMPFormatedDataSecondPage.map((elm, idx) => (
                    <TableTemplate key={idx} style={[styles.table]} tableData={elm} />
                ))}
                <ResultsCommentTemplate assessment={assessment} />
                <FooterTemplate />
            </Page>
        </Document>
    );
};
