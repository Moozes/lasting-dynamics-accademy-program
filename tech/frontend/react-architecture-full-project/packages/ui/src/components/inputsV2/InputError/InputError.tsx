import { useState } from "react";

import ErrorIcon from "@mui/icons-material/Error";
import { IconButton, Tooltip } from "@mui/material";

import { useTranslationV2 } from "../../../i18n/hooks/useTranslation";
import { HTMLDivProps } from "../../../types/global";

import { tooltipCustomSlotProps } from "./inlineStyles";

type Props = HTMLDivProps & {
    errorText: string | undefined;
};

export const InputError = ({ errorText, ...props }: Props) => {
    const t = useTranslationV2();
    const [open, setOpen] = useState(false);
    const toggleTooltip = () => {
        setOpen((prev) => !prev);
    };
    const formatedErrorText = errorText || "";
    return (
        <div {...props}>
            {formatedErrorText.length < 60 ? (
                formatedErrorText
            ) : (
                <>
                    {`${t("invalid")}, ${t("see_why")}`}
                    <Tooltip open={open} title={formatedErrorText} slotProps={tooltipCustomSlotProps}>
                        <IconButton className="icon-button" onClick={toggleTooltip}>
                            <ErrorIcon className="error-icon" />
                        </IconButton>
                    </Tooltip>
                </>
            )}
        </div>
    );
};
