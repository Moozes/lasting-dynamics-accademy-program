import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { useSnackbar } from "notistack";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Box, Button, CircularProgress, IconButton, Typography } from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";

import { Popover, PopoverItem, useLanguage, usePopover, useTranslationV2 } from "ui";

import { authAtom } from "@atoms/index";
import { useGetSessionQuery, useUpdateUserMutation } from "@features/sessions/queries";
import { useGenerateAIReportMutation } from "@queries/index";

import ConsentRequest from "./ConsentRequest";
import ExplanationContent from "./ExplanationContent";
import InitialView from "./InitialView";
import { aiExplanationStyles, defaultPositionAndPaperProps } from "./inlineStyles";
import RegenerateReport from "./RegenerateReport";
import TagInput from "./TagsInput";

interface AIExplanationProps {
    sessionId: string;
}

const AIExplanation: React.FC<AIExplanationProps> = ({ sessionId }) => {
    const t = useTranslationV2();
    const theme: Theme = useTheme();
    const styles = aiExplanationStyles(theme);
    const currentLanguage = useLanguage();
    const { enqueueSnackbar } = useSnackbar();
    const [auth, setAuth] = useAtom(authAtom);
    const user = auth.wergonicUser;
    const aiConsent = user?.ai_consent;
    const [loading, setLoading] = useState<boolean>(false);
    const [showConsent, setShowConsent] = useState<boolean>(false);
    const [showTagInput, setShowTagInput] = useState<boolean>(false);
    const [showExplanation, setShowExplanation] = useState<boolean>(false);
    const [expanded, setExpanded] = useState<boolean>(true);
    const [, setTags] = useState<string[]>([]);
    const { data: sessionData, isLoading: sessionLoading, refetch } = useGetSessionQuery(sessionId);
    const { anchorEl, onOpen, onClose, open } = usePopover();
    const [aiReportGenerated, setAiReportGenerated] = useState(false);

    const { mutate: generateAIReport, isLoading: reportGenerateLoading } = useGenerateAIReportMutation({
        onSuccess: (response) => {
            setTags(response.data.tags);
            enqueueSnackbar(t("ai_explanation.report_generation_success"), { severity: "success" });
            setShowExplanation(true);
            setShowTagInput(false);
            setAiReportGenerated(true);
            refetch();
        },
        onError: () => {
            enqueueSnackbar(t("ai_explanation.report_generation_error"), { severity: "error" });
            setLoading(false);
        },
    });

    const { mutate: updateUser, isLoading: updateUserLoading } = useUpdateUserMutation({
        org_id: user?.organization?.id as string,
        onSuccess: (response) => {
            enqueueSnackbar(t("users_management.update_delete_single_user.user_update_success"), {
                severity: "success",
            });
            setAuth({ ...auth, wergonicUser: response.data.user });
            if (!response.data.user.ai_consent) {
                setShowConsent(true);
                setShowTagInput(false);
                setShowExplanation(false);
            } else {
                setShowTagInput(true);
                setShowConsent(false);
                setShowExplanation(false);
            }
        },
        onError: (err) => {
            const message = err.response?.data?.detail || t("Something_went_Wrong");
            enqueueSnackbar(message, { severity: "error" });
            setLoading(false);
        },
    });

    useEffect(() => {
        const report = sessionData?.data?.ai_report;

        if (!report || (report?.content && report?.language !== currentLanguage)) {
            setShowExplanation(false);
            setShowConsent(false);
            setShowTagInput(false);
        } else if (report?.content && report?.language === currentLanguage) {
            if (aiReportGenerated) {
                setShowExplanation(true);
            } else {
                setShowExplanation(false);
            }
            setShowConsent(false);
            setShowTagInput(false);
        } else if (!aiConsent) {
            setShowExplanation(false);
            setShowConsent(false);
            setShowTagInput(false);
        }
    }, [sessionData, aiConsent, currentLanguage, aiReportGenerated]);

    const handleViewExplanation = () => {
        setShowExplanation(true);
        setShowTagInput(false);
    };

    const handleGenerateReport = () => {
        setShowTagInput(true);
        setShowExplanation(false);
        setAiReportGenerated(false);
    };

    const submitTagsAndFetchContent = (tagString: string) => {
        const processedTags = tagString.split(",").map((tag) => tag.trim());
        setTags(processedTags);
        generateAIReport({
            sessionId,
            tags: processedTags,
        });
    };

    if (sessionLoading || loading || updateUserLoading || reportGenerateLoading) {
        return <CircularProgress />;
    }

    if (!sessionData) return <Typography>{t("ai_explanation.error_data_loading")}</Typography>;

    const report = sessionData?.data?.ai_report;

    return (
        <Box sx={styles.box}>
            <Box sx={styles.header}>
                <Typography variant="subtitle1" sx={styles.subtitle}>
                    {t("ai_explanation.AI_Solution")}
                    <IconButton size="small" sx={styles.infoIcon} onClick={onOpen}>
                        <InfoOutlinedIcon fontSize="small" />
                    </IconButton>
                </Typography>
                <Popover
                    id={open ? "ai-explanation-popover" : undefined}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={onClose}
                    {...defaultPositionAndPaperProps}
                >
                    <PopoverItem sx={styles.popoverContent}>
                        <Box sx={styles.popoverArrow} />
                        <Typography>{t("ai_explanation.popover_text")}</Typography>
                    </PopoverItem>
                </Popover>
                {showExplanation && (
                    <Button onClick={() => setExpanded(!expanded)} sx={styles.toggleButton}>
                        {expanded ? t("ai_explanation.Hide_Suggestion") : t("ai_explanation.See_All_Suggestions")}
                        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </Button>
                )}
            </Box>

            {showExplanation && expanded && <ExplanationContent sessionId={sessionId} />}

            {showTagInput && <TagInput onSubmit={submitTagsAndFetchContent} loading={loading} />}

            {!aiReportGenerated &&
                !showExplanation &&
                !showTagInput &&
                report?.content &&
                report.language === currentLanguage && (
                    <RegenerateReport
                        onViewExistingReport={handleViewExplanation}
                        onRegenerateReport={handleGenerateReport}
                    />
                )}

            {!aiReportGenerated &&
                !showConsent &&
                !showExplanation &&
                !showTagInput &&
                (!report || (report?.content && report.language !== currentLanguage)) && (
                    <InitialView onViewExplanation={handleGenerateReport} />
                )}

            {showConsent && (
                <ConsentRequest
                    onDismiss={() => setShowConsent(false)}
                    onConfirm={() => updateUser({ ai_consent: true })}
                    loading={loading || updateUserLoading}
                />
            )}
        </Box>
    );
};

export default AIExplanation;
