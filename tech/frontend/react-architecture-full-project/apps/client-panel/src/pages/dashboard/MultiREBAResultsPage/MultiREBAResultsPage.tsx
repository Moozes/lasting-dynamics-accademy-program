import { useSearchParams } from "react-router-dom";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import {
    MultiAssessmentsInfoTable,
    MultiResultsCard,
    MultiResultsContainer,
    MultiResultsPageSkeleton,
} from "@components/index";
import { MultiREBAAssessmentsResultsTable, MultiResultsPdfTemplate } from "@features/REBA/index";
import { useGetSelectedAssessmentsQuery } from "@queries/index";

type Props = HTMLDivProps;

export const MultiREBAResultsPage = (props: Props) => {
    const t = useTranslationV2();
    const [searchParams] = useSearchParams();
    const ids = searchParams.get("ids") || "";
    const { data, isError, isLoading, error } = useGetSelectedAssessmentsQuery(ids);
    if (isLoading) return <MultiResultsPageSkeleton title={t("reba_assessments.reba_assessments")} />;
    if (isError) throw new Error("React query error thrown manually from MultiREBAResultsPage", { cause: error });
    return (
        <div {...props}>
            <MultiResultsContainer
                title={t("reba_assessments.reba_assessments")}
                PDFTemplate={<MultiResultsPdfTemplate assessmentArray={data.data} />}
                PDFName="Multi-REBA-comparison"
            >
                <MultiResultsCard title={t("reba_assessments.compare_reba_assessments")}>
                    <MultiAssessmentsInfoTable assessmentsArray={data.data} />
                    <MultiREBAAssessmentsResultsTable assessments={data.data} />
                </MultiResultsCard>
            </MultiResultsContainer>
        </div>
    );
};
