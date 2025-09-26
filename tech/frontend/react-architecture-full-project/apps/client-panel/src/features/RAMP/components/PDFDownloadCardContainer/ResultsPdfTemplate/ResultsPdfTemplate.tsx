import { Document, Page } from "@react-pdf/renderer";

import { useTranslationV2 } from "ui";

import { AssessmentInformationTemplate, FooterTemplate, ResultsCommentTemplate } from "@components/index";
import { ResultsPdfTemplateProps } from "@features/RAMP/types";

import { DetailedSummaryTemplate } from "./DetailedSummaryTemplate";
import { styles } from "./ResultsPdfTemplate.styles";
import { ResultsSummaryTemplate } from "./ResultsSummaryTemplate";

type Props = ResultsPdfTemplateProps;

export const ResultsPdfTemplate = ({
    resultSummaryFormatedData,
    detailedSummaryFormatedData,
    cache,
    resultSummaryTitle,
}: Props) => {
    const t = useTranslationV2();
    return (
        <Document>
            <Page style={[styles.page]}>
                <AssessmentInformationTemplate
                    title={t("ramp_assessments.results_pdf_title")}
                    assessment={cache.data}
                />
                <DetailedSummaryTemplate formatedData={detailedSummaryFormatedData.formatedData} />
                <ResultsSummaryTemplate
                    title={resultSummaryTitle}
                    formatedData={resultSummaryFormatedData.formatedData}
                />
                <ResultsCommentTemplate assessment={cache.data} />
                <FooterTemplate />
            </Page>
        </Document>
    );
};
