import { useSearchParams } from "react-router-dom";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import {
    MultiAssessmentsInfoTable,
    MultiResultsCard,
    MultiResultsContainer,
    MultiResultsPageSkeleton,
} from "@components/index";
import { MultiRAMPAssessmentsResultsTable, MultiResultsPdfTemplate } from "@features/RAMP/index";
import { useGetSelectedAssessmentsQuery } from "@queries/index";

type Props = HTMLDivProps;

export const MultiRAMPResultsPage = (props: Props) => {
    const t = useTranslationV2();
    const [searchParams] = useSearchParams();
    const ids = searchParams.get("ids") || "";
    const { data, isError, isLoading, error } = useGetSelectedAssessmentsQuery(ids);
    if (isLoading) return <MultiResultsPageSkeleton title={t("ramp_assessments.ramp_assessments")} />;
    if (isError) throw new Error("React query error thrown manually from MultiRAMPResultsPage", { cause: error });
    return (
        <div {...props}>
            <MultiResultsContainer
                title={t("ramp_assessments.ramp_assessments")}
                PDFTemplate={<MultiResultsPdfTemplate assessmentArray={data.data} />}
                PDFName="Multi-RAMP-comparison"
            >
                <MultiResultsCard title={t("ramp_assessments.compare_ramp_assessments")}>
                    <MultiAssessmentsInfoTable assessmentsArray={data.data} />
                    <MultiRAMPAssessmentsResultsTable assessments={data.data} />
                </MultiResultsCard>
            </MultiResultsContainer>
        </div>
    );
};
