import { Box } from "@mui/material";

import { FormikOutlinedSelect, type HTMLDivProps, useTranslationV2 } from "ui";

import { AI_ENGINE_OPTIONS } from "./AiEngineSettings.helpers";

type Props = HTMLDivProps;

export const AiEngineSettings = ({ ...props }: Props) => {
    const t = useTranslationV2();

    return (
        <div {...props}>
            <div className="title">{t("settings.customize_ai_experience")}</div>
            <div className="description">{t("settings.choose_ai_engine_description")}</div>

            <Box className="selectBox">
                <FormikOutlinedSelect
                    id="aiEngine"
                    name="aiEngine"
                    label={t("settings.ai_engine")}
                    options={AI_ENGINE_OPTIONS}
                />
            </Box>
        </div>
    );
};
