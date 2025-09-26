import { useState } from "react";
import { useAtomValue } from "jotai";

import { useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { DialogWithCloseIcon, FormikOutlinedSelect, type HTMLDivProps, QuestionCircleIcon, useTranslationV2 } from "ui";

import { liftingWork2 } from "@features/RAMP/assets";
import { liftingWorkSelectedTabAtom } from "@features/RAMP/atoms";
import { DisplaySquare } from "@features/RAMP/components/DisplaySquare";
import { useLiftingWorkTable1Result } from "@features/RAMP/hooks";

import { LiftingAreaFactorTable } from "./LiftingAreaFactorTable";
import { LiftingWorkInfo } from "./LiftingWorkInfo";
import { LIFTS_PER_DAY_OPTIONS, useLoadOptions } from "./LiftingWorkInputs.helpers";

type Props = HTMLDivProps;

export const LiftingWorkInputs = (props: Props) => {
    const t = useTranslationV2();
    const {
        palette: { mode },
    } = useTheme();
    const [infoDialogOpen, setInfoDialogOpen] = useState(false);
    const liftingWorkSelectedTab = useAtomValue(liftingWorkSelectedTabAtom);
    const { liftingWorkTable1Result } = useLiftingWorkTable1Result(liftingWorkSelectedTab);
    const { LOAD_OPTIONS } = useLoadOptions();

    return (
        <div {...props}>
            <div className="padding-x">
                <Typography variant="subtitle2" className="table-1">
                    {t("table")} 1
                </Typography>
                <div className="info">
                    <Typography variant="h5" className="info-text">
                        {t("ramp_assessments.lifting_work_form.info_title")}
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
                                liftingWorkSelectedTab === "average"
                                    ? "lifting_work_table_1_factor_y"
                                    : "lifting_work_table_1_worst_factor_y"
                            }
                            label={t("ramp_assessments.lifting_work_form.select_1_label")}
                            options={LIFTS_PER_DAY_OPTIONS}
                        />
                    </div>
                    <div className="select-input-container">
                        <FormikOutlinedSelect
                            id="select2"
                            name={
                                liftingWorkSelectedTab === "average"
                                    ? "lifting_work_table_1_factor_x"
                                    : "lifting_work_table_1_worst_factor_x"
                            }
                            label={t("ramp_assessments.lifting_work_form.select_2_label")}
                            options={LOAD_OPTIONS}
                        />
                    </div>
                    <div className="result">
                        <DisplaySquare value={liftingWorkTable1Result} color="disabled" width="123px" height="45.8px" />
                    </div>
                </div>
            </div>
            <div className="divider" />
            <div className="padding-x">
                <Typography className="title" variant="h5">
                    {t("ramp_assessments.lifting_work_form.lifting_area_factor")}
                </Typography>
                <div className="table-container">
                    <LiftingAreaFactorTable />
                    <img src={liftingWork2(mode)} alt="illustration" />
                </div>
            </div>
            <DialogWithCloseIcon open={infoDialogOpen} onClose={() => setInfoDialogOpen(false)}>
                <LiftingWorkInfo />
            </DialogWithCloseIcon>
        </div>
    );
};
