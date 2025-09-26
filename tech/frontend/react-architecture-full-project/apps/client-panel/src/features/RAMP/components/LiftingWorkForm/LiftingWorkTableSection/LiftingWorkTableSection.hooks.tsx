import { useTranslationV2 } from "ui";

import { CheckboxAndDiaplay } from "@features/RAMP/components/CheckboxAndDiaplay";
import { DisplaySquare } from "@features/RAMP/components/DisplaySquare";
import { TextAndQuestionIcon } from "@features/RAMP/components/TextAndQuestionIcon";
import {
    useInformationDialog,
    useLiftingWorkRiskScores,
    useLiftingWorkTable1Result,
    useLiftingWorkTable2Result,
} from "@features/RAMP/hooks";

export const useTableUniformRows = () => {
    const t = useTranslationV2();
    const { liftingWorkTable1Result: table1Average } = useLiftingWorkTable1Result("average");
    const { liftingWorkTable1Result: table1WorstCase } = useLiftingWorkTable1Result("worst_case");
    const { liftingWorkTable2Result: table2Average } = useLiftingWorkTable2Result("average");
    const { liftingWorkTable2Result: table2WorstCase } = useLiftingWorkTable2Result("worst_case");
    const { riskScore1, riskScore2 } = useLiftingWorkRiskScores();
    const { openInformationDialog } = useInformationDialog();
    return {
        rows1: [
            {
                cell1: t("ramp_assessments.lifting_work_form.table_1_factor_text"),
                cell2: <DisplaySquare value={table1Average} width="96px" height="42px" color="disabled" />,
                cell3: <DisplaySquare value={table1WorstCase} width="96px" height="42px" color="disabled" />,
            },
            {
                cell1: t("ramp_assessments.lifting_work_form.table_2_factor_text"),
                cell2: <DisplaySquare value={table2Average} width="96px" height="42px" color="disabled" />,
                cell3: <DisplaySquare value={table2WorstCase} width="96px" height="42px" color="disabled" />,
            },
        ],
        rows2: [
            {
                rowKey: t("ramp_assessments.lifting_work_form.lifting_work_1"),
                cell1: t("ramp_assessments.lifting_work_form.lifting_work_1"),
                cell2: <CheckboxAndDiaplay formikFieldNameToBeControlled="lifting_work_1_factor" />,
                cell3: <CheckboxAndDiaplay formikFieldNameToBeControlled="lifting_work_1_worst_factor" />,
            },
            {
                rowKey: t("ramp_assessments.lifting_work_form.lifting_work_2"),
                cell1: (
                    <TextAndQuestionIcon
                        text={t("ramp_assessments.lifting_work_form.lifting_work_2")}
                        onQuestionIconClick={() =>
                            openInformationDialog(t("ramp_assessments.lifting_work_form.lifting_work_2_info"))
                        }
                    />
                ),
                cell2: <CheckboxAndDiaplay formikFieldNameToBeControlled="lifting_work_2_factor" />,
                cell3: <CheckboxAndDiaplay formikFieldNameToBeControlled="lifting_work_2_worst_factor" />,
            },
            {
                rowKey: t("ramp_assessments.lifting_work_form.lifting_work_3"),
                cell1: (
                    <TextAndQuestionIcon
                        text={t("ramp_assessments.lifting_work_form.lifting_work_3")}
                        onQuestionIconClick={() =>
                            openInformationDialog(t("ramp_assessments.lifting_work_form.lifting_work_3_info"))
                        }
                    />
                ),
                cell2: <CheckboxAndDiaplay formikFieldNameToBeControlled="lifting_work_3_factor" />,
                cell3: <CheckboxAndDiaplay formikFieldNameToBeControlled="lifting_work_3_worst_factor" />,
            },
            {
                rowKey: t("ramp_assessments.lifting_work_form.lifting_work_4"),
                cell1: (
                    <TextAndQuestionIcon
                        text={t("ramp_assessments.lifting_work_form.lifting_work_4")}
                        onQuestionIconClick={() =>
                            openInformationDialog(t("ramp_assessments.lifting_work_form.lifting_work_4_info"))
                        }
                    />
                ),
                cell2: <CheckboxAndDiaplay formikFieldNameToBeControlled="lifting_work_4_factor" />,
                cell3: <CheckboxAndDiaplay formikFieldNameToBeControlled="lifting_work_4_worst_factor" />,
            },
            {
                rowKey: t("ramp_assessments.lifting_work_form.lifting_work_5"),
                cell1: t("ramp_assessments.lifting_work_form.lifting_work_5"),
                cell2: <CheckboxAndDiaplay formikFieldNameToBeControlled="lifting_work_5_factor" />,
                cell3: <CheckboxAndDiaplay formikFieldNameToBeControlled="lifting_work_5_worst_factor" />,
            },
            {
                rowKey: t("ramp_assessments.lifting_work_form.risk_score"),
                cell1: t("ramp_assessments.lifting_work_form.risk_score"),
                cell2: <DisplaySquare value={riskScore1} width="96px" height="42px" color="disabled" />,
                cell3: <DisplaySquare value={riskScore2} width="96px" height="42px" color="disabled" />,
            },
        ],
    };
};
