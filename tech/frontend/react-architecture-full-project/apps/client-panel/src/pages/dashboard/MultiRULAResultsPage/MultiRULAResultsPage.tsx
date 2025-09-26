import { useSearchParams } from "react-router-dom";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import {
    MultiAssessmentsInfoTable,
    MultiResultsCard,
    MultiResultsContainer,
    MultiResultsPageSkeleton,
} from "@components/index";
import { MultiResultsPdfTemplate, MultiRULAAssessmentsResultsTable } from "@features/RULA/index";
import { useGetSelectedAssessmentsQuery } from "@queries/index";

type Props = HTMLDivProps;

export const MultiRULAResultsPage = (props: Props) => {
    const t = useTranslationV2();
    const [searchParams] = useSearchParams();
    const ids = searchParams.get("ids") || "";
    const { data, isError, isLoading, error } = useGetSelectedAssessmentsQuery(ids);
    if (isLoading) return <MultiResultsPageSkeleton title={t("rula_assessments.rula_assessments")} />;
    if (isError) throw new Error("React query error thrown manually from MultiRULAResultsPage", { cause: error });

    return (
        <div {...props}>
            <MultiResultsContainer
                title={t("rula_assessments.rula_assessments")}
                PDFTemplate={<MultiResultsPdfTemplate assessmentArray={data.data} />}
                PDFName="Multi-RULA-comparison"
            >
                <MultiResultsCard title={t("rula_assessments.compare_rula_assessments")}>
                    <MultiAssessmentsInfoTable assessmentsArray={data.data} />
                    <MultiRULAAssessmentsResultsTable assessments={data.data} />
                </MultiResultsCard>
            </MultiResultsContainer>
        </div>
    );
};
