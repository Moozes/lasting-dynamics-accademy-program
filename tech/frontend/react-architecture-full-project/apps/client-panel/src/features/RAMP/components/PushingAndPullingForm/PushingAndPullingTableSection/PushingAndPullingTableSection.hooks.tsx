import { useTranslationV2 } from "ui";

import { CheckboxAndDiaplay } from "@features/RAMP/components/CheckboxAndDiaplay";
import { DisplaySquare } from "@features/RAMP/components/DisplaySquare";
import { TextAndQuestionIcon } from "@features/RAMP/components/TextAndQuestionIcon";
import {
    useInformationDialog,
    usePushingAndPullingRiskScores,
    usePushingAndPullingTable1Result,
    usePushingAndPullingTable2Result,
} from "@features/RAMP/hooks";

export const useTableUniformRows = () => {
    const t = useTranslationV2();
    const { pushingAndPullingTable1Result: table1Average } = usePushingAndPullingTable1Result("average");
    const { pushingAndPullingTable1Result: table1WorstCase } = usePushingAndPullingTable1Result("worst_case");
    const { pushingAndPullingTable2Result: table2Average } = usePushingAndPullingTable2Result("average");
    const { pushingAndPullingTable2Result: table2WorstCase } = usePushingAndPullingTable2Result("worst_case");
    const { initialForceRiskScore1, initialForceRiskScore2, continuousForceRiskScore1, continuousForceRiskScore2 } =
        usePushingAndPullingRiskScores();
    const { openInformationDialog } = useInformationDialog();
    return {
        rows1: [
            {
                cell1: t("ramp_assessments.pushing_and_pulling_form.table_1_and_2_factor_text"),
                cell2: <DisplaySquare value={table1Average} width="96px" height="42px" color="disabled" />,
                cell3: <DisplaySquare value={table2Average} width="96px" height="42px" color="disabled" />,
                cell4: <DisplaySquare value={table1WorstCase} width="96px" height="42px" color="disabled" />,
                cell5: <DisplaySquare value={table2WorstCase} width="96px" height="42px" color="disabled" />,
            },
        ],
        rows2: [
            {
                rowKey: t("ramp_assessments.pushing_and_pulling_form.pushing_and_pulling_1"),
                cell1: (
                    <TextAndQuestionIcon
                        text={t("ramp_assessments.pushing_and_pulling_form.pushing_and_pulling_1")}
                        onQuestionIconClick={() =>
                            openInformationDialog(
                                t("ramp_assessments.pushing_and_pulling_form.pushing_and_pulling_1_info")
                            )
                        }
                    />
                ),
                cell2: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_1_initial_force_factor" />
                ),
                cell3: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_1_continuous_force_factor" />
                ),
                cell4: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_1_initial_force_worst_factor" />
                ),
                cell5: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_1_continuous_force_worst_factor" />
                ),
            },
            {
                rowKey: t("ramp_assessments.pushing_and_pulling_form.pushing_and_pulling_2"),
                cell1: t("ramp_assessments.pushing_and_pulling_form.pushing_and_pulling_2"),
                cell2: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_2_initial_force_factor" />
                ),
                cell3: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_2_continuous_force_factor" />
                ),
                cell4: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_2_initial_force_worst_factor" />
                ),
                cell5: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_2_continuous_force_worst_factor" />
                ),
            },
            {
                rowKey: t("ramp_assessments.pushing_and_pulling_form.pushing_and_pulling_3"),
                cell1: t("ramp_assessments.pushing_and_pulling_form.pushing_and_pulling_3"),
                cell2: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_3_initial_force_factor" />
                ),
                cell3: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_3_continuous_force_factor" />
                ),
                cell4: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_3_initial_force_worst_factor" />
                ),
                cell5: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_3_continuous_force_worst_factor" />
                ),
            },
            {
                rowKey: t("ramp_assessments.pushing_and_pulling_form.pushing_and_pulling_4"),
                cell1: t("ramp_assessments.pushing_and_pulling_form.pushing_and_pulling_4"),
                cell2: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_4_initial_force_factor" />
                ),
                cell3: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_4_continuous_force_factor" />
                ),
                cell4: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_4_initial_force_worst_factor" />
                ),
                cell5: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_4_continuous_force_worst_factor" />
                ),
            },
            {
                rowKey: t("ramp_assessments.pushing_and_pulling_form.pushing_and_pulling_5"),
                cell1: t("ramp_assessments.pushing_and_pulling_form.pushing_and_pulling_5"),
                cell2: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_5_initial_force_factor" />
                ),
                cell3: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_5_continuous_force_factor" />
                ),
                cell4: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_5_initial_force_worst_factor" />
                ),
                cell5: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_5_continuous_force_worst_factor" />
                ),
            },
            {
                rowKey: t("ramp_assessments.pushing_and_pulling_form.pushing_and_pulling_6"),
                cell1: t("ramp_assessments.pushing_and_pulling_form.pushing_and_pulling_6"),
                cell2: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_6_initial_force_factor" />
                ),
                cell3: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_6_continuous_force_factor" />
                ),
                cell4: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_6_initial_force_worst_factor" />
                ),
                cell5: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_6_continuous_force_worst_factor" />
                ),
            },
            {
                rowKey: t("ramp_assessments.pushing_and_pulling_form.pushing_and_pulling_7"),
                cell1: (
                    <TextAndQuestionIcon
                        text={t("ramp_assessments.pushing_and_pulling_form.pushing_and_pulling_7")}
                        onQuestionIconClick={() =>
                            openInformationDialog(
                                t("ramp_assessments.pushing_and_pulling_form.pushing_and_pulling_7_info")
                            )
                        }
                    />
                ),
                cell2: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_7_initial_force_factor" />
                ),
                cell3: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_7_continuous_force_factor" />
                ),
                cell4: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_7_initial_force_worst_factor" />
                ),
                cell5: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_7_continuous_force_worst_factor" />
                ),
            },
            {
                rowKey: t("ramp_assessments.pushing_and_pulling_form.pushing_and_pulling_8"),
                cell1: t("ramp_assessments.pushing_and_pulling_form.pushing_and_pulling_8"),
                cell2: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_8_initial_force_factor" />
                ),
                cell3: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_8_continuous_force_factor" />
                ),
                cell4: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_8_initial_force_worst_factor" />
                ),
                cell5: (
                    <CheckboxAndDiaplay formikFieldNameToBeControlled="pushing_and_pulling_8_continuous_force_worst_factor" />
                ),
            },
            {
                rowKey: t("ramp_assessments.pushing_and_pulling_form.risk_score"),
                cell1: t("ramp_assessments.pushing_and_pulling_form.risk_score"),
                cell2: <DisplaySquare value={initialForceRiskScore1} width="96px" height="42px" color="disabled" />,
                cell3: <DisplaySquare value={continuousForceRiskScore1} width="96px" height="42px" color="disabled" />,
                cell4: <DisplaySquare value={initialForceRiskScore2} width="96px" height="42px" color="disabled" />,
                cell5: <DisplaySquare value={continuousForceRiskScore2} width="96px" height="42px" color="disabled" />,
            },
        ],
    };
};
