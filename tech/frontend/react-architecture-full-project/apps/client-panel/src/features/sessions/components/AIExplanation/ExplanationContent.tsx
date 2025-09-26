import React, { useEffect, useState } from "react";

import { Box, CircularProgress, Typography } from "@mui/material";

import { useTranslationV2 } from "ui";

import { useFetchAIReportQuery } from "@queries/index";

import { formatAiResponse } from "../../utils";

interface ExplanationContentProps {
    sessionId: string;
}

const ExplanationContent: React.FC<ExplanationContentProps> = ({ sessionId }) => {
    const t = useTranslationV2();
    const { data, isLoading, error } = useFetchAIReportQuery(sessionId);
    const [content, setContent] = useState<JSX.Element | null>(<CircularProgress size={20} />);

    useEffect(() => {
        if (data?.data) {
            const result = data.data.data.content;
            setContent(<Box mt={2}>{formatAiResponse(result)}</Box>);
        } else if (isLoading) {
            setContent(<CircularProgress size={20} />);
        } else if (error) {
            setContent(<Typography color="error">{t("ai_explanation.error.fetch_failed")}</Typography>);
        }
    }, [data, isLoading, error, t]);

    return <Box>{content}</Box>;
};

export default ExplanationContent;
