import { useSearchParams } from "react-router-dom";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import {
    MultiAssessmentsInfoTable,
    MultiResultsCard,
    MultiResultsContainer,
    MultiResultsPageSkeleton,
} from "@components/index";
import { MultiMECAssessmentsResultsTable, MultiResultsPdfTemplate } from "@features/MEC/index";
import { useGetSelectedAssessmentsQuery } from "@queries/index";

type Props = HTMLDivProps;

export const MultiMECResultsPage = (props: Props) => {
    const t = useTranslationV2();
    const [searchParams] = useSearchParams();
    const ids = searchParams.get("ids") || "";
    const { data, isError, isLoading, error } = useGetSelectedAssessmentsQuery(ids);
    if (isLoading) return <MultiResultsPageSkeleton title={t("mec_assessments.mec_assessments")} />;
    if (isError) throw new Error("React query error thrown manually from MultiMECResultsPage", { cause: error });
    return (
        <div {...props}>
            <MultiResultsContainer
                title={t("mec_assessments.mec_assessments")}
                PDFTemplate={<MultiResultsPdfTemplate assessments={data.data} />}
                PDFName="Multi-MEC-comparison"
            >
                <MultiResultsCard title={t("mec_assessments.compare_mec_assessments")}>
                    <MultiAssessmentsInfoTable className="multi-assessments-info-table" assessmentsArray={data.data} />
                    <MultiMECAssessmentsResultsTable assessments={data.data} />
                </MultiResultsCard>
            </MultiResultsContainer>
        </div>
    );
};
