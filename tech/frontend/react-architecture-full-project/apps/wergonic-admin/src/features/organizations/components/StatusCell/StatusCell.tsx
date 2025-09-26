import { Box } from "@mui/material";

import { HTMLDivProps, useTranslationV2 } from "ui";

type Props = HTMLDivProps & {
    is_active: boolean;
};

export const StatusCell = ({ is_active, ...props }: Props) => {
    const t = useTranslationV2();
    return (
        <div {...props} className="status-cell">
            <Box className={`status-indicator ${is_active ? "active" : "inactive"}`} />
            <div>{is_active ? t("Active") : t("Inactive")}</div>
        </div>
    );
};
