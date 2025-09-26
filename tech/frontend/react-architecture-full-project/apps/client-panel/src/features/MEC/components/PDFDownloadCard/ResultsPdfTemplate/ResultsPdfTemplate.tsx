/* eslint-disable react/no-array-index-key */
import { Document, Page } from "@react-pdf/renderer";

import { useTranslationV2 } from "ui";

import { AssessmentInformationTemplate, FooterTemplate, ResultsCommentTemplate } from "@components/index";
import { ResultsPdfTemplateProps } from "@features/MEC/types";

import { styles } from "./ResultsPdfTemplate.styles";
import { TableTemplate } from "./TableTemplate";

type Props = ResultsPdfTemplateProps;

export const ResultsPdfTemplate = ({ detailedSummaryFormatedData, cache }: Props) => {
    const t = useTranslationV2();
    return (
        <Document>
            <Page style={[styles.page]}>
                <AssessmentInformationTemplate
                    style={[styles.assessmentInformation]}
                    assessment={cache.data}
                    title={t("mec_assessments.results_pdf_title")}
                />
                {detailedSummaryFormatedData.map((elm, idx) => (
                    <TableTemplate key={idx} style={[styles.table]} tableData={elm} />
                ))}
                <ResultsCommentTemplate assessment={cache.data} />
                <FooterTemplate />
            </Page>
        </Document>
    );
};
