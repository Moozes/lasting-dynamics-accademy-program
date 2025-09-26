import { ChangeEvent } from "react";
import { useField } from "formik";

import { Box, Typography } from "@mui/material";

import { FormikOutlinedTextField, type HTMLDivProps, UploadIcon, useTranslationV2 } from "ui";

type Props = HTMLDivProps & {
    fileInputChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    selectedFileName?: string;
};

export const AddFirmwareForm = ({ fileInputChangeHandler, selectedFileName, ...props }: Props) => {
    const t = useTranslationV2();

    const [, , helpers] = useField("zip_file");

    return (
        <div {...props}>
            <div className="add-firmware-form">
                <div className="text">
                    <div className="title">{t("firmware_management.upload_firmware")}</div>
                </div>
                <FormikOutlinedTextField
                    required
                    className="input"
                    id="mobile_version"
                    name="mobile_version"
                    placeholder={t("firmware_management.enter_mobile_version")}
                    label={t("mobile_version")}
                />
                <FormikOutlinedTextField
                    required
                    className="input"
                    id="firmware_version"
                    name="firmware_version"
                    placeholder={t("firmware_management.enter_firmware_version")}
                    label={t("firmware_version")}
                />
                <FormikOutlinedTextField
                    multiline
                    rows={3}
                    className="input"
                    id="description"
                    name="description"
                    placeholder={t("firmware_management.enter_description")}
                    label={t("description")}
                />

                {/* File Input Section */}
                <Box className="file-input">
                    <input
                        id="zip_file"
                        type="file"
                        accept=".zip"
                        onChange={(e) => {
                            fileInputChangeHandler(e);
                            helpers.setValue(e.target.files?.[0] || null);
                        }}
                        style={{ display: "none" }}
                    />
                    <label htmlFor="zip_file" className="file-input-label">
                        <UploadIcon />
                        <Typography variant="body2" className="upload-instruction">
                            {t("firmware_management.upload_file_or_drag_and_drop")}
                        </Typography>
                        <Typography variant="caption" className="file-size-instruction">
                            {t("firmware_management.you_can_upload_up_to_10_MB")}
                        </Typography>
                    </label>
                    {selectedFileName && (
                        <Typography variant="caption" className="selected-file-name">
                            {t("Selected file:")} {selectedFileName}
                        </Typography>
                    )}
                </Box>
            </div>
        </div>
    );
};
