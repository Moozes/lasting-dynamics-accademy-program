import { Box } from "@mui/material";

import { type HTMLDivProps, useTranslationV2 } from "ui";

type Props = HTMLDivProps;

export const Appendix = (props: Props) => {
    const t = useTranslationV2();

    return (
        <div {...props}>
            <Box className="appendix-container">
                <div className="appendix-title">{t("sessions_management.appendix.title")}</div>
                <div className="appendix-content">
                    <div className="appendix-row">
                        <span className="appendix-label">{t("sessions_management.appendix.minimum_load")}</span>
                        <span className="appendix-description">
                            {t("sessions_management.appendix.minimum_load_description")}
                        </span>
                    </div>
                    <div className="appendix-row">
                        <span className="appendix-label">{t("sessions_management.appendix.median_load")}</span>
                        <span className="appendix-description">
                            {t("sessions_management.appendix.median_load_description")}
                        </span>
                    </div>
                    <div className="appendix-row">
                        <span className="appendix-label">{t("sessions_management.appendix.peak_load")}</span>
                        <span className="appendix-description">
                            {t("sessions_management.appendix.peak_load_description")}
                        </span>
                    </div>
                    <div className="appendix-row">
                        <span className="appendix-label">{t("sessions_management.appendix.extreme_load")}</span>
                        <span className="appendix-description">
                            {t("sessions_management.appendix.extreme_load_description")}
                        </span>
                    </div>
                </div>
            </Box>
        </div>
    );
};
