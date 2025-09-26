import { Btn, type HTMLDivProps, useTranslationV2 } from "ui";

import { ICompareButtonProps } from "@app-types/index";
import { ComparisonInfoDialog } from "@components/index";

type Props = HTMLDivProps & ICompareButtonProps;
export const CompareButton = ({ comparisonHook, ...props }: Props) => {
    const t = useTranslationV2();
    return (
        <div {...props}>
            <Btn variant="primary-outlined" onClick={comparisonHook.clickHandler}>
                {t("compare")}
            </Btn>
            <ComparisonInfoDialog
                open={comparisonHook.showInfoDialog}
                onClose={() => comparisonHook.setShowInfoDialog(false)}
                infoArray={comparisonHook.comparisonInfoArray}
            />
        </div>
    );
};
