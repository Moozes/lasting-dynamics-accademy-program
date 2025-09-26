/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { liftingWork1 } from "@features/RAMP/assets";
import { useLiftingWorkTable2 } from "@features/RAMP/utils";

import { useLiftingAreaFactorTable } from "./LiftingAreaFactorTable.hooks";

type Props = HTMLDivProps;

export const LiftingAreaFactorTable = (props: Props) => {
    const t = useTranslationV2();
    const {
        palette: { mode },
    } = useTheme();
    const { cellClickHandler, floatingBoxClickHandler, getSelectedClassName } = useLiftingAreaFactorTable();
    const { LIFTING_WORK_TABLE_2 } = useLiftingWorkTable2();
    return (
        <div {...props}>
            <img src={liftingWork1(mode)} alt="illustration" />
            <div className={`floating-box ${getSelectedClassName(0.9, 0.9)}`} onClick={floatingBoxClickHandler}>
                0.9
            </div>
            <table>
                <thead>
                    <tr>
                        <th>{t("ramp_assessments.lifting_work_form.fore_arm_dist")}</th>
                        <th>{t("ramp_assessments.lifting_work_form.3/4_arm_dist")}</th>
                        <th>{t("ramp_assessments.lifting_work_form.up_to_63cm")}</th>
                    </tr>
                </thead>
                <tbody>
                    {LIFTING_WORK_TABLE_2.map((row, rowIndex) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cell}
                                    className={`${
                                        cellIndex === row.length - 1 ? "border-0" : ""
                                    } ${getSelectedClassName(rowIndex, cellIndex)}`}
                                    onClick={() => {
                                        if (cellIndex !== row.length - 1) {
                                            // not the final cell in a row
                                            cellClickHandler(rowIndex, cellIndex);
                                        }
                                    }}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Typography variant="subtitle2" className="table-2">
                {t("table")} 2
            </Typography>
        </div>
    );
};
