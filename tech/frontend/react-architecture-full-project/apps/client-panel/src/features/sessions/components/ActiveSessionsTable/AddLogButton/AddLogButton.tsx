import { FC, useReducer, useRef } from "react";
import Webcam from "react-webcam";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { Box, IconButton, InputLabel, useTheme } from "@mui/material";

import {
    Btn,
    CameraAltOutlinedIcon,
    Carrousel,
    EditIcon,
    FormikOutlinedTextarea,
    PictureIcon,
    Typography,
    useTranslationV2,
} from "ui";

import { FormDialog } from "@components/index";
import * as styles from "@features/sessions/components/styles";
import { ISession } from "@features/sessions/types";

import { useAddLogForm, UseSelectFiles, UseUploadFile } from "./AddLogButton.hooks";

interface IAddLogButton {
    selectedRow: ISession;
}
export const AddLogButton: FC<IAddLogButton> = ({ selectedRow }) => {
    const t = useTranslationV2();
    const theme = useTheme();
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();

    const webcamRef = useRef<Webcam>(null);
    const { newLogInitialValues, AddNewLogSchema } = useAddLogForm();
    const {
        imageFiles,
        handleImageChange,
        handleDeleteSelectedFile,
        handleToggleCamera,
        cameraActive,
        handleCameraCapture,
        resetFiles,
    } = UseSelectFiles();

    const [isAddLogActionOpen, setIsAddLogActionOpen] = useReducer((state) => {
        return !state;
    }, false);

    const {
        mutate: addLog,
        isLoading,
        reset,
    } = useMutation({
        mutationFn: async (data) => UseUploadFile(selectedRow.id, data, imageFiles),
        onSuccess: () => {
            setIsAddLogActionOpen();
            queryClient.invalidateQueries({
                queryKey: ["sessions", "Logs", "get", selectedRow.id.toString()],
            });
            enqueueSnackbar(t("sessions_management.add_log_dialog.upload_log_success"));
            resetFiles();
            reset();
        },
        onError: () => {
            enqueueSnackbar(t("Something_went_Wrong"), { severity: "error" });
            setIsAddLogActionOpen();
            resetFiles();
        },
    });
    return (
        <>
            <Btn variant="text" startIcon={<EditIcon />} sx={styles.AddLogButtonStyles} onClick={setIsAddLogActionOpen}>
                {t("sessions_management.Add_Log")}
            </Btn>
            <FormDialog
                header={t("sessions_management.Add_Log")}
                dialogOpen={isAddLogActionOpen}
                toggleDialog={setIsAddLogActionOpen}
                onSubmit={(values) => {
                    addLog(values);
                }}
                initialValues={newLogInitialValues}
                validationSchema={AddNewLogSchema}
                rightSideAction={
                    <Btn loading={isLoading} variant="primary-contained" type="submit">
                        {t("sessions_management.Add_Log")}
                    </Btn>
                }
            >
                <Box width="600px" marginX={2}>
                    <Typography
                        marginBottom={1.5}
                        color={theme.color_system.text.secondary}
                        variant="body1"
                        weight="meduim"
                    >
                        {t("sessions_management.add_log_dialog.textArea_label")}
                    </Typography>
                    <FormikOutlinedTextarea
                        id="description"
                        name="description"
                        placeholder={t("sessions_management.add_log_dialog.textArea_placeholder")}
                    />

                    {imageFiles.length > 0 ? (
                        <Carrousel
                            images={imageFiles}
                            HandleDeleteFile={handleDeleteSelectedFile}
                            leftInput={
                                <InputLabel htmlFor="raised-button-file">
                                    <Box sx={styles.CarrouselInputStyle2}>
                                        <IconButton disableRipple sx={styles.CarrouselInputIconStyle2}>
                                            <PictureIcon />
                                        </IconButton>
                                        <Typography
                                            marginY={1}
                                            color={theme.color_system.primary.dark}
                                            variant="caption"
                                        >
                                            {t("sessions_management.add_log_dialog.add_new_picture")}
                                        </Typography>
                                    </Box>
                                </InputLabel>
                            }
                            secondLeftInput={
                                <Box>
                                    <Box sx={styles.CarrouselInputStyle2} onClick={handleToggleCamera}>
                                        <IconButton disableRipple sx={styles.CarrouselInputIconStyle2}>
                                            <CameraAltOutlinedIcon />
                                        </IconButton>
                                        <Typography
                                            marginY={1}
                                            color={theme.color_system.primary.dark}
                                            variant="caption"
                                        >
                                            {t("sessions_management.add_log_dialog.take_new_picture")}
                                        </Typography>
                                    </Box>
                                </Box>
                            }
                        />
                    ) : (
                        <Box display="flex" gap={3}>
                            <Box
                                sx={styles.UploadButtonStyles}
                                display="flex"
                                alignItems="center"
                                onClick={handleToggleCamera}
                            >
                                <CameraAltOutlinedIcon />
                                <Typography
                                    marginX={1}
                                    color={theme.color_system.primary.dark}
                                    variant="body1"
                                    weight="bold"
                                >
                                    {t("sessions_management.add_log_dialog.take_new_picture")}
                                </Typography>
                            </Box>
                            <InputLabel htmlFor="raised-button-file">
                                <Box sx={styles.UploadButtonStyles} display="flex" alignItems="center">
                                    <PictureIcon />
                                    <Typography
                                        marginX={1}
                                        color={theme.color_system.primary.dark}
                                        variant="body1"
                                        weight="bold"
                                    >
                                        {t("sessions_management.add_log_dialog.upload_pictures")}
                                    </Typography>
                                </Box>
                            </InputLabel>
                        </Box>
                    )}
                    <input
                        id="raised-button-file"
                        name="file"
                        autoComplete="off"
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                        accept="image/*"
                        multiple
                    />
                    {cameraActive && (
                        <Box>
                            <Webcam
                                audio={false}
                                ref={webcamRef}
                                screenshotFormat="image/png"
                                videoConstraints={{ facingMode: "environment" }}
                                style={styles.AddLogWebcamStyle}
                            />
                            <Box sx={styles.AddLogButtonsContanerStyle}>
                                <Btn variant="secondary-contained" onClick={handleToggleCamera} type="button">
                                    {t("Cancel")}
                                </Btn>
                                <Btn
                                    variant="primary-contained"
                                    onClick={() => handleCameraCapture(webcamRef)}
                                    type="button"
                                >
                                    {t("sessions_management.add_log_dialog.take_new_picture")}
                                </Btn>
                            </Box>
                        </Box>
                    )}
                </Box>
            </FormDialog>
        </>
    );
};
