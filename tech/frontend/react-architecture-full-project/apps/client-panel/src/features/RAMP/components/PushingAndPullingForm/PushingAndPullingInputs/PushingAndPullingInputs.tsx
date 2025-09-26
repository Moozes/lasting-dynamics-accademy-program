import { useAtomValue, useSetAtom } from "jotai";

import { useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { FormikOutlinedSelect, type HTMLDivProps, QuestionCircleIcon, useTranslationV2 } from "ui";

import { pulling, pushing } from "@features/RAMP/assets";
import { PushingAndPullingInfoDialogOpenAtom, PushingAndPullingSelectedTabAtom } from "@features/RAMP/atoms";
import { DisplaySquare } from "@features/RAMP/components/DisplaySquare";
import { usePushingAndPullingTable1Result, usePushingAndPullingTable2Result } from "@features/RAMP/hooks";

import { FORCE_OPTIONS, FREQUENCY_OPTIONS } from "./PushingAndPullingInputs.helpers";

type Props = HTMLDivProps;

export const PushingAndPullingInputs = (props: Props) => {
    const t = useTranslationV2();
    const {
        palette: { mode },
    } = useTheme();
    const pushingAndPullingSelectedTab = useAtomValue(PushingAndPullingSelectedTabAtom);
    const { pushingAndPullingTable1Result } = usePushingAndPullingTable1Result(pushingAndPullingSelectedTab);
    const { pushingAndPullingTable2Result } = usePushingAndPullingTable2Result(pushingAndPullingSelectedTab);
    const setInfoDialogOpen = useSetAtom(PushingAndPullingInfoDialogOpenAtom);
    return (
        <div {...props}>
            <Typography variant="subtitle2" className="table-title">
                {t("table")} 4
            </Typography>
            <div className="info">
                <Typography variant="h5" className="info-text">
                    {t("ramp_assessments.pushing_and_pulling_form.info_title_1")}
                </Typography>
                <IconButton className="icon-button" onClick={() => setInfoDialogOpen(true)}>
                    <QuestionCircleIcon />
                </IconButton>
            </div>
            <div className="select-inputs">
                <div className="select-input-container">
                    <FormikOutlinedSelect
                        id="select1"
                        name={
                            pushingAndPullingSelectedTab === "average"
                                ? "pushing_and_pulling_table_1_initial_force_factor_y"
                                : "pushing_and_pulling_table_1_initial_force_worst_factor_y"
                        }
                        label={t("ramp_assessments.pushing_and_pulling_form.select_1_label")}
                        options={FREQUENCY_OPTIONS}
                    />
                </div>
                <div className="select-input-container">
                    <FormikOutlinedSelect
                        id="select2"
                        name={
                            pushingAndPullingSelectedTab === "average"
                                ? "pushing_and_pulling_table_1_initial_force_factor_x"
                                : "pushing_and_pulling_table_1_initial_force_worst_factor_x"
                        }
                        label={t("ramp_assessments.pushing_and_pulling_form.select_2_label")}
                        options={FORCE_OPTIONS}
                    />
                </div>
                <div className="result">
                    <DisplaySquare
                        value={pushingAndPullingTable1Result}
                        color="disabled"
                        width="123px"
                        height="45.8px"
                    />
                </div>
            </div>
            <div className="images">
                <img src={pushing(mode)} alt="illustration" />
                <img src={pulling(mode)} alt="illustration" />
            </div>
            <Typography variant="subtitle2" className="table-title">
                {t("table")} 5
            </Typography>
            <div className="info">
                <Typography variant="h5" className="info-text">
                    {t("ramp_assessments.pushing_and_pulling_form.info_title_2")}
                </Typography>
                <IconButton className="icon-button" onClick={() => setInfoDialogOpen(true)}>
                    <QuestionCircleIcon />
                </IconButton>
            </div>
            <div className="select-inputs margin-0">
                <div className="select-input-container">
                    <FormikOutlinedSelect
                        id="select3"
                        name={
                            pushingAndPullingSelectedTab === "average"
                                ? "pushing_and_pulling_table_2_continuous_force_factor_y"
                                : "pushing_and_pulling_table_2_continuous_force_worst_factor_y"
                        }
                        label={t("ramp_assessments.pushing_and_pulling_form.select_1_label")}
                        options={FREQUENCY_OPTIONS}
                    />
                </div>
                <div className="select-input-container">
                    <FormikOutlinedSelect
                        id="select4"
                        name={
                            pushingAndPullingSelectedTab === "average"
                                ? "pushing_and_pulling_table_2_continuous_force_factor_x"
                                : "pushing_and_pulling_table_2_continuous_force_worst_factor_x"
                        }
                        label={t("ramp_assessments.pushing_and_pulling_form.select_2_label")}
                        options={FORCE_OPTIONS}
                    />
                </div>
                <div className="result">
                    <DisplaySquare
                        value={pushingAndPullingTable2Result}
                        color="disabled"
                        width="123px"
                        height="45.8px"
                    />
                </div>
            </div>
        </div>
    );
};
