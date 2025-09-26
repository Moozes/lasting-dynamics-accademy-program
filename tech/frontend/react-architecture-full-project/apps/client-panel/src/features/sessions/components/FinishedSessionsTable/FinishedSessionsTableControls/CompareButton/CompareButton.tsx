/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Box } from "@mui/material";

import { HTMLDivProps, useTranslationV2 } from "ui";

import { ICompareButtonProps } from "@app-types/index";

import { AlertModal } from "../AlertModal";

type Props = HTMLDivProps & ICompareButtonProps;

export const CompareButton = ({ comparisonHook, ...props }: Props) => {
    const t = useTranslationV2();
    const { showInfoDialog, setShowInfoDialog, clickHandler, comparisonInfoArray } = comparisonHook;
    return (
        <div {...props}>
            <Box onClick={clickHandler} className="compare">
                {t("compare")}
            </Box>
            <AlertModal
                title="Comparison Error"
                list={comparisonInfoArray}
                open={showInfoDialog}
                onClose={() => setShowInfoDialog(false)}
            />
        </div>
    );
};
