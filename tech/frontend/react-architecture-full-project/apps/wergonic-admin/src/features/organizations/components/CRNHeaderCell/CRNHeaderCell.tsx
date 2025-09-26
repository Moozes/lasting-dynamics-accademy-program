import { IconButton } from "@mui/material";

import { type HTMLDivProps, QuestionCircleIcon, Tooltip, useTranslationV2 } from "ui";

type Props = HTMLDivProps;

export const CRNHeaderCell = (props: Props) => {
    const t = useTranslationV2();
    return (
        <div {...props}>
            CRN
            <Tooltip disableFocusListener title={t("organization_management.company_registration_number")}>
                {/* tooltip will open on hover or long touch for tablet devices */}
                {/* check mui docs */}
                <IconButton className="icon-button">
                    <QuestionCircleIcon className="icon" />
                </IconButton>
            </Tooltip>
        </div>
    );
};
