import Typography from "@mui/material/Typography";

import { type HTMLDivProps, InfoIcon, useTranslationV2 } from "ui";

type Props = HTMLDivProps;

export const Message = (props: Props) => {
    const t = useTranslationV2();
    return (
        <div {...props}>
            <InfoIcon className="icon" />
            <Typography className="text" variant="body2">
                {t("sessions_management.assessment_generation_message")}
            </Typography>
        </div>
    );
};
