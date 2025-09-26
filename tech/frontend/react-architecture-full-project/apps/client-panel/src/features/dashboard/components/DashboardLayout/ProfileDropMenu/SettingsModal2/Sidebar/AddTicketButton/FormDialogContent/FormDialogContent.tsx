import { ChangeEvent } from "react";
import { useFormikContext } from "formik";

import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";

import {
    Btn,
    FormikOutlinedSelect,
    FormikOutlinedTextarea,
    FormikOutlinedTextField,
    HTMLDivProps,
    Typography,
    UploadIcon,
    useTranslationV2,
} from "ui";

import { TicketValuesType } from "../AddTicketButton.types";

import { useSelectOptions } from "./FormDialogContent.hooks";

type FormDialogContentProps = {
    imageFiles: File[];
    handleImageChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleDeleteSelectedFile: (file: File) => void;
    isMutationLoading: boolean;
};

type Props = HTMLDivProps & FormDialogContentProps;

export const FormDialogContent = ({
    imageFiles,
    handleImageChange,
    handleDeleteSelectedFile,
    isMutationLoading,
    ...props
}: Props) => {
    const t = useTranslationV2();
    const theme = useTheme();
    const { values } = useFormikContext<TicketValuesType>();
    const { TICKETSELECTTYPES, TICKETSELECTHELPTYPES } = useSelectOptions();
    return (
        <div {...props}>
            <div className="inputs">
                <div className="title">{t("settings.report_problem")}</div>
                <FormikOutlinedTextField
                    id="subject"
                    className="formik-input"
                    name="subject"
                    label={t("subject")}
                    required
                />
                <FormikOutlinedSelect
                    id="type"
                    className="formik-input"
                    name="type"
                    label={t("type")}
                    required
                    options={TICKETSELECTTYPES}
                />
                {values.type === "help" && (
                    <Box mb="21.98px">
                        <FormikOutlinedSelect
                            id="help_type"
                            className="formik-input"
                            name="help_type"
                            label={t("help")}
                            required
                            options={TICKETSELECTHELPTYPES}
                        />
                    </Box>
                )}
                <FormikOutlinedTextarea
                    id="message"
                    className="formik-input"
                    name="message"
                    label={t("message")}
                    required
                />
                <InputLabel htmlFor="raised-button-file">
                    <Typography
                        variant="body2"
                        color={theme.color_system.text.primary}
                        ml={1}
                        mb={1}
                        textTransform="capitalize"
                    >
                        {t("attachment")}
                    </Typography>
                    <Box className="upload-file">
                        <Box display="flex" gap={1}>
                            <UploadIcon />
                            <Typography variant="body2" color={theme.color_system.text.primary}>
                                {t("settings.upload_file")}
                            </Typography>
                        </Box>
                    </Box>
                </InputLabel>
                <Box display="flex" flexWrap="wrap" gap={2}>
                    {imageFiles.map((file) => (
                        <Box display="flex" alignItems="center" justifyContent="stretch" key={file.name}>
                            <Typography variant="overline" mr={1}>
                                {file.name}
                            </Typography>
                            <Box
                                sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
                                onClick={() => handleDeleteSelectedFile(file)}
                            >
                                <Typography variant="overline">X</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
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
            </div>
            <div className="actions">
                <Btn loading={isMutationLoading} type="submit">
                    {t("send")}
                </Btn>
            </div>
        </div>
    );
};
