import { Document, Page } from "@react-pdf/renderer";

import { Assessment } from "@app-types/index";
import { FooterTemplate, MultiAssessmentInfoTemplate } from "@components/index";

import { styles } from "./MultiResultsPdfTemplate.styles";
import { MultiRULAAssessmentsResultsTemplate } from "./MultiRULAAssessmentsResultsTemplate";

type Props = {
    assessmentArray: Assessment[];
};

export const MultiResultsPdfTemplate = ({ assessmentArray }: Props) => {
    return (
        <Document>
            <Page style={[styles.page]}>
                <MultiAssessmentInfoTemplate assessmentArray={assessmentArray} />
                <MultiRULAAssessmentsResultsTemplate assessmentArray={assessmentArray} />
                <FooterTemplate />
            </Page>
        </Document>
    );
};
