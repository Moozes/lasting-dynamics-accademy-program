import { Row } from "react-table";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { AssessmentsEnum, AssessmentSourceEnum } from "@app-types/index";

type Props = HTMLDivProps & {
    row: Row<any>;
    assessmentName: string;
};

export const NameCell = ({ row, assessmentName, ...props }: Props) => {
    const t = useTranslationV2();
    const isGeneratedAndRAMP =
        row.original.source === AssessmentSourceEnum.GENERATED &&
        row.original.assesment_category === AssessmentsEnum.RAMP;
    let title = assessmentName;
    if (isGeneratedAndRAMP) {
        title += `, ${t("generated")}`;
    }
    return (
        <div title={title} {...props}>
            <div className="name">{assessmentName}</div>
            {isGeneratedAndRAMP && <div className="tag">{t("generated")}</div>}
        </div>
    );
};
