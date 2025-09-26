import { useEffect } from "react";
import { useFormikContext } from "formik";

import { IconButton, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {
    FormikOutlinedSelect,
    FormikOutlinedTextField,
    HelpCircleIcon,
    Popover,
    PopoverItem,
    TimeInputContainer,
    usePopover,
    useTranslationV2,
} from "ui";

import { AssessmentsEnum } from "@app-types/index";
import { IGenerateAssessmentValues, ISelectedSessionProp, SessionSegmentEnum } from "@features/sessions/types";

import { useSelectOptions } from "./GenerateAssessmentButton.hooks";
import { popoverStyles } from "./inlineStyles";

type Props = ISelectedSessionProp;

export const GenerateAssessmentForm = ({ selectedSession }: Props) => {
    const t = useTranslationV2();
    const theme = useTheme();
    const popoverStyle = popoverStyles(theme);
    const { values, setValues } = useFormikContext<IGenerateAssessmentValues>();
    const { CATEGORY_OPTIONS, SESSION_SEGMENT_OPTIONS, taskOptions } = useSelectOptions(selectedSession.id);
    const { open, anchorEl, onOpen, onClose } = usePopover();
    const marginBottom = "22px";

    useEffect(() => {
        // reset values when session segment changes
        setValues((prev) => ({
            ...prev,
            task: "",
            start_time: "",
            end_time: "",
        }));
    }, [values.sessionSegment, setValues]);

    return (
        <Box display="flex" flexDirection="column" my={2}>
            <Box mb={marginBottom}>
                <FormikOutlinedSelect
                    id="category"
                    name="category"
                    label={t("assesment_category")}
                    options={CATEGORY_OPTIONS}
                    required
                />
            </Box>
            <Box mb={marginBottom}>
                <FormikOutlinedSelect
                    id="sessionSegment"
                    name="sessionSegment"
                    label={t("session_segment")}
                    options={SESSION_SEGMENT_OPTIONS}
                    required
                />
            </Box>
            {values.sessionSegment === SessionSegmentEnum.specificTask && (
                <Box mb={marginBottom}>
                    <FormikOutlinedSelect id="task" name="task" label={t("task")} options={taskOptions} required />
                </Box>
            )}
            {values.sessionSegment === SessionSegmentEnum.specificTimeframe && (
                <Box marginBottom={marginBottom} display="flex" alignItems="center" gap="10px">
                    <TimeInputContainer
                        required
                        label={t("start_time")}
                        name="start_time"
                        style={{ flexBasis: "50%" }}
                    />
                    <TimeInputContainer required label={t("end_time")} name="end_time" style={{ flexBasis: "50%" }} />
                </Box>
            )}
            {values.category === AssessmentsEnum.MEC && (
                <Box mb={marginBottom}>
                    <FormikOutlinedTextField
                        id="takt_time"
                        name="takt_time"
                        label={t("assessments.takt_time_seconds")}
                        type="number"
                        required
                        endAdornment={
                            <IconButton onClick={onOpen} sx={{ padding: 1 }}>
                                <HelpCircleIcon />
                            </IconButton>
                        }
                    />
                    <Box sx={{ color: theme.color_system.text.secondary, fontSize: "12px" }}>
                        {t("assessments.modify_default_takt_time")}
                    </Box>

                    <Popover
                        id={open ? "takt-time-popover" : undefined}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={onClose}
                    >
                        <PopoverItem sx={popoverStyle.popoverContent}>
                            <Box sx={popoverStyle.popoverArrow} />
                            <Typography>{t("assessments.takt_time_description")}</Typography>
                        </PopoverItem>
                    </Popover>
                </Box>
            )}
        </Box>
    );
};
