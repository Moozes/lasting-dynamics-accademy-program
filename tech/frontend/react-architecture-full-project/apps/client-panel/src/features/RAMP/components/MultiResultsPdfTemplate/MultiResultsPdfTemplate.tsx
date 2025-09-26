import { Document, Page } from "@react-pdf/renderer";

import { Assessment } from "@app-types/index";
import { FooterTemplate, MultiAssessmentInfoTemplate } from "@components/index";

import { MultiRAMPAssessmentsResultsTemplate } from "./MultiRAMPAssessmentsResultsTemplate";
import { styles } from "./MultiResultsPdfTemplate.styles";

type Props = {
    assessmentArray: Assessment[];
};

export const MultiResultsPdfTemplate = ({ assessmentArray }: Props) => {
    return (
        <Document>
            <Page style={[styles.page]}>
                <MultiAssessmentInfoTemplate assessmentArray={assessmentArray} />
                <MultiRAMPAssessmentsResultsTemplate assessmentArray={assessmentArray} />
                <FooterTemplate />
            </Page>
        </Document>
    );
};
