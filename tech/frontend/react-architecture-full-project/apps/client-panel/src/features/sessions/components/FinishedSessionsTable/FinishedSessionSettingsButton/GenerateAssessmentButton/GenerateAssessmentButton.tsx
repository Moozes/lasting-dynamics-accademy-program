import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";

import { Btn, GenerateIcon, Modal, Typography, useTranslationV2 } from "ui";

import { FormDialog } from "@components/index";
import { useGenerateAssessmentMutation } from "@features/sessions/queries";
import { IGenerateAssessmentValues, ISelectedSessionProp } from "@features/sessions/types";
import { SETTINGS_ICON_DIMENSIONS } from "@features/sessions/utils";
import { IHandleMenuClose } from "@features/users/types";
import { TABLE_SETTINGS_MENU_ITEM_TEXT_ML } from "@utils/index";

import { useGenerateAssessmentForm } from "./GenerateAssessmentButton.hooks";
import { GenerateAssessmentForm } from "./GenerateAssessmentForm";
import { generateAssessmentButtonStyles } from "./inlineStyles";
import { StyledMessage as Message } from "./Message.styles";
import { MissingLimbsWarning } from "./MissingLimbsWarning";

type Props = ISelectedSessionProp & IHandleMenuClose;

export const GenerateAssessmentButton = ({ selectedSession, handleMenuClose }: Props) => {
    const t = useTranslationV2();
    const theme = useTheme();
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [warningOpen, setWarningOpen] = useState(false);

    const toggleDialog = () => {
        setDialogOpen((prev) => !prev);
        handleMenuClose();
    };

    const { initialValues, validationSchema } = useGenerateAssessmentForm(selectedSession.duration);

    const {
        mutate: generateAssessment,
        isLoading,
        reset,
    } = useGenerateAssessmentMutation(selectedSession.id, {
        onSuccess: () => {
            enqueueSnackbar(t("assessments.generate_assessment_success"));
            queryClient.invalidateQueries({ queryKey: ["Assessments"] });
            queryClient.invalidateQueries({ queryKey: ["sessions"] });
            setDialogOpen(false);
            handleMenuClose();
            reset();
        },
        onError: (error) => {
            const serverErrorMessage = error.response?.data.detail || "";
            enqueueSnackbar(`${t("assessments.generate_assessment_error")}. ${serverErrorMessage}`, {
                severity: "error",
            });
            setDialogOpen(false);
            handleMenuClose();
        },
    });

    const handleWarningClose = () => setWarningOpen(false);

    let hasAllLimbs = false;
    if (selectedSession.limbs_info && selectedSession.limbs_info.missing_limbs.length === 0) {
        hasAllLimbs = true;
    }

    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                onClick={() => {
                    if (hasAllLimbs) {
                        setDialogOpen(true);
                    } else {
                        setWarningOpen(true);
                    }
                }}
                sx={generateAssessmentButtonStyles}
            >
                <GenerateIcon {...SETTINGS_ICON_DIMENSIONS} />
                <Typography
                    ml={TABLE_SETTINGS_MENU_ITEM_TEXT_ML}
                    variant="body1"
                    color={theme.color_system.text.primary}
                >
                    {t("assessments.generate_assessment")}
                </Typography>
            </Box>

            {/* Missing Limbs Warning Modal */}
            <Modal open={warningOpen} onClose={handleWarningClose}>
                <MissingLimbsWarning
                    onCancel={handleWarningClose}
                    selectedSession={selectedSession}
                    onProceed={() => {
                        setDialogOpen(true);
                        handleWarningClose();
                    }}
                />
            </Modal>

            {/* Form Dialog for Generating Assessment */}
            <FormDialog
                dialogOpen={dialogOpen}
                toggleDialog={toggleDialog}
                header={t("assessments.generate_assessment")}
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values: IGenerateAssessmentValues) => {
                    generateAssessment(values);
                }}
                rightSideAction={
                    <Btn loading={isLoading} variant="primary-contained" type="submit">
                        {t("generate")}
                    </Btn>
                }
            >
                <GenerateAssessmentForm selectedSession={selectedSession} />
                <Message />
            </FormDialog>
        </>
    );
};
