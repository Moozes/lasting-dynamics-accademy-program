import { Document, Page } from "@react-pdf/renderer";

import { useTranslationV2 } from "ui";

import { AssessmentInformationTemplate, FooterTemplate, ResultsCommentTemplate } from "@components/index";
import { ResultsPdfTemplateProps } from "@features/REBA/types";

import { styles } from "./ResultsPdfTemplate.styles";
import { ResultsSummaryTemplate } from "./ResultsSummaryTemplate";

type Props = ResultsPdfTemplateProps;

export const ResultsPdfTemplate = ({ resultSummaryFormatedData, cache }: Props) => {
    const t = useTranslationV2();
    return (
        <Document>
            <Page style={[styles.page]}>
                <AssessmentInformationTemplate
                    assessment={cache.data}
                    title={t("reba_assessments.results_pdf_title")}
                />
                <ResultsSummaryTemplate {...resultSummaryFormatedData} />
                <ResultsCommentTemplate assessment={cache.data} />
                <FooterTemplate />
            </Page>
        </Document>
    );
};
