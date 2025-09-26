import { useAtom } from "jotai";

import { Avatar, Box, useTheme } from "@mui/material";

import { Btn, FormikOutlinedSelect, FormikOutlinedTextField, PencilIcon, Typography, useTranslationV2 } from "ui";

import { authAtom } from "@atoms/index";
import { useUploadAvatar } from "@features/dashboard/hooks";
import { useArmSelectRoles } from "@hooks/index";
import { GetInitials, getRoleValue } from "@utils/index";

import * as styles from "../inlineStyles";

import { ACCOUNT_INPUTS_DATA } from "./AccountScreen.helpers";

export function AccountScreen() {
    const t = useTranslationV2();
    const [auth] = useAtom(authAtom);
    const theme = useTheme();
    const { ARMSELECTROLES } = useArmSelectRoles();
    const user = auth.wergonicUser;
    const firebaseUserPhotoURL = auth.user && auth.user.photoURL ? auth.user.photoURL : "";
    const userInitials = GetInitials(user?.first_name, user?.last_name);

    const { avatarPreview, selectedAvatar, loading, onUploadClick, fileInputChangeHandler } = useUploadAvatar();

    return (
        <>
            <Box display="flex" alignItems="center">
                <Box sx={styles.ProfilePictureContainerStyle}>
                    <Avatar alt="Profile" src={avatarPreview || firebaseUserPhotoURL} sx={styles.ProfilePictureStyle2}>
                        {userInitials}
                    </Avatar>
                    <Box sx={styles.EditIconContainerStyle}>
                        <PencilIcon />
                        <input type="file" accept="image/*" onChange={fileInputChangeHandler} />
                    </Box>
                </Box>

                <Box>
                    <Typography
                        mb={1}
                        variant="h4"
                        sx={styles.ProfileHeaderTextStyle}
                        color={theme.color_system.text.primary}
                    >
                        {t("settings.personal_information")}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={styles.ProfileHeaderSecondaryTextStyle}
                        weight="meduim"
                        color={theme.color_system.text.secondary}
                    >
                        {t("settings.personal_information_text")}
                    </Typography>
                </Box>
                {selectedAvatar && (
                    <Box sx={styles.UploadButtonContainerStyle}>
                        <Btn disabled={loading} onClick={onUploadClick} variant="text">
                            {t("upload")}
                        </Btn>
                    </Box>
                )}
            </Box>
            <Box
                display="flex"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="space-between"
                flexDirection="row"
                my={4}
            >
                {ACCOUNT_INPUTS_DATA.map((input: any) => {
                    if (input.isTextField) {
                        if (input.name === "role") {
                            return (
                                <Box key={input.name} width="47%">
                                    <FormikOutlinedTextField
                                        id={input.name}
                                        type={input.type}
                                        name={input.name}
                                        label={`${t(input.lable)} ( ${t("unmodifiable")} )`}
                                        disabled
                                        value={getRoleValue(user?.role).text}
                                    />
                                </Box>
                            );
                        }
                        return (
                            <Box key={input.name} width="47%">
                                <FormikOutlinedTextField
                                    id={input.name}
                                    type={input.type}
                                    name={input.name}
                                    label={t(input.lable)}
                                />
                            </Box>
                        );
                    }
                    return (
                        <Box key={input.name} width="47%" alignSelf="start">
                            <FormikOutlinedSelect
                                id={input.name}
                                name={input.name}
                                label={t(input.lable)}
                                options={ARMSELECTROLES}
                            />
                        </Box>
                    );
                })}
            </Box>
        </>
    );
}
