import Typography from "@mui/material/Typography";

import { HTMLDivProps, PageNotFoundIllustration, useTranslationV2 } from "ui";

type Props = HTMLDivProps;

export const NotFound = (props: Props) => {
    const t = useTranslationV2();
    return (
        <div {...props}>
            <PageNotFoundIllustration />
            <Typography className="text" variant="h3">
                {t("page_not_found")}
            </Typography>
            <Typography variant="h5">{t("page_not_found_sub_text")}</Typography>
        </div>
    );
};
