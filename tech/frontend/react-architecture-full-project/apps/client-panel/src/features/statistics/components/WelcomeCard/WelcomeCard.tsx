import { format } from "date-fns";
import { useAtomValue } from "jotai";
import { capitalize } from "lodash";

import { Typography } from "@mui/material";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { authAtom } from "@atoms/index";

export const WelcomeCard = (props: HTMLDivProps) => {
    const t = useTranslationV2();
    const auth = useAtomValue(authAtom);
    const fullName = capitalize(auth.wergonicUser?.first_name);
    return (
        <div {...props}>
            <Typography className="title" variant="body1">
                {t("overview")} / {t("sessions_data")}{" "}
            </Typography>
            <Typography className="welcome" variant="h4">
                {t("welcome_back")}, {fullName}
            </Typography>
            <Typography className="date" variant="caption">
                {format(new Date(), "EEEE, dd LLLL yyyy")}
            </Typography>
        </div>
    );
};
