/* eslint-disable react/no-array-index-key */
import { useMemo } from "react";
import { Document, Page } from "@react-pdf/renderer";

import { Assessment, IGeneratedMECAssessment } from "@app-types/index";
import { FooterTemplate, MultiAssessmentInfoTemplate } from "@components/index";
import { useMultiDetailedSummaryFormatedData } from "@features/MEC/hooks";

import { styles } from "./MultiResultsPdfTemplate.styles";
import { MultiResultsTablePdfTemplate } from "./MultiResultsTablePdfTemplate";

type Props = {
    assessments: Assessment[];
};

export const MultiResultsPdfTemplate = ({ assessments }: Props) => {
    const { formatedData } = useMultiDetailedSummaryFormatedData(assessments as IGeneratedMECAssessment[]);
    const { page1FormatedData, page2FormatedData } = useMemo(
        () => ({
            page1FormatedData: formatedData.slice(0, 2),
            page2FormatedData: formatedData.slice(2, 4),
        }),
        [formatedData]
    );
    return (
        <Document>
            <Page style={[styles.page]}>
                <MultiAssessmentInfoTemplate style={[styles.infoTable]} assessmentArray={assessments} />
                {page1FormatedData.map((data, idx) => (
                    <MultiResultsTablePdfTemplate style={[styles.dataTable]} key={idx} data={data} />
                ))}
                <FooterTemplate />
            </Page>
            <Page style={[styles.page]}>
                {page2FormatedData.map((data, idx) => (
                    <MultiResultsTablePdfTemplate style={[styles.dataTable]} key={idx} data={data} />
                ))}
                <FooterTemplate />
            </Page>
        </Document>
    );
};
