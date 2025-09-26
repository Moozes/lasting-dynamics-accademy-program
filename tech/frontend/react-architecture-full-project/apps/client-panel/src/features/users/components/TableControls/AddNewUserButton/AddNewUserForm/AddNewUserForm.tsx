import { Dispatch } from "react";
import { useFormikContext } from "formik";

import { Alert, Box } from "@mui/material";

import {
    FormikOutlinedSelect,
    FormikOutlinedTextField,
    type HTMLDivProps,
    InfoIcon,
    UserRoleEnum,
    useTranslationV2,
} from "ui";

import * as styles from "@features/users/components/styles";
import { useManagedByOptions } from "@features/users/hooks";
import { IAddNewUser } from "@features/users/types";
import { useArmSelectRoles, useSelectRoles, useSexSelectRoles } from "@hooks/index";

type Props = HTMLDivProps & {
    showProfileModel: boolean;
    role: any;
    setRole: Dispatch<any>;
};

export const AddNewUserForm = ({ showProfileModel, role, setRole, ...props }: Props) => {
    const t = useTranslationV2();
    const { SELECTROLES } = useSelectRoles();
    const { ARMSELECTROLES } = useArmSelectRoles();
    const { SEXSELECTROLES } = useSexSelectRoles();
    const { options } = useManagedByOptions();
    const { setFieldValue } = useFormikContext<IAddNewUser>();
    return (
        <div {...props}>
            <Box
                display="flex"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="space-between"
                flexDirection="row"
                margin={2}
            >
                {showProfileModel ? (
                    <>
                        <Box sx={styles.InputStyle}>
                            <FormikOutlinedTextField
                                id="date_of_birth"
                                name="date_of_birth"
                                type="date"
                                label={t("Date_of_birth")}
                            />
                        </Box>
                        <Box alignSelf="start" sx={styles.InputStyle}>
                            <FormikOutlinedSelect id="gender" name="gender" label={t("Sex")} options={SEXSELECTROLES} />
                        </Box>
                        <Box alignSelf="start" sx={styles.InputStyle}>
                            <FormikOutlinedSelect
                                id="dominant_arm"
                                name="dominant_arm"
                                label={t("Dominant_arm")}
                                options={ARMSELECTROLES}
                            />
                        </Box>
                        <Box sx={styles.InputStyle}>
                            <FormikOutlinedTextField id="weight" name="weight" type="text" label={t("Weight")} />
                        </Box>

                        <Box sx={styles.InputStyle}>
                            <FormikOutlinedTextField
                                id="resting_heart_rate"
                                name="resting_heart_rate"
                                type="text"
                                label={t("Resting_heart_rate")}
                            />
                        </Box>
                        <Box alignSelf="start" sx={styles.InputStyle}>
                            <FormikOutlinedSelect
                                id="consultant_id"
                                name="consultant_id"
                                label={t("Managed_by")}
                                options={options}
                            />
                        </Box>
                        <Alert icon={<InfoIcon />} severity="info" sx={styles.AddNewuserAlertStyle2}>
                            {t("users_management.add_new_user.add_new_user_alert")}
                        </Alert>
                    </>
                ) : (
                    <>
                        <Box sx={styles.InputStyle}>
                            <FormikOutlinedTextField
                                id="first_name"
                                name="first_name"
                                type="text"
                                label={t("First Name")}
                                required
                            />
                        </Box>
                        <Box sx={styles.InputStyle}>
                            <FormikOutlinedTextField
                                id="last_name"
                                name="last_name"
                                type="text"
                                label={t("Last Name")}
                                required
                            />
                        </Box>
                        <Box sx={styles.InputStyle}>
                            <FormikOutlinedTextField
                                id="personal_number"
                                name="personal_number"
                                type="text"
                                label={t("Phone_number")}
                            />
                        </Box>
                        <Box sx={styles.InputStyle}>
                            <FormikOutlinedTextField id="email" name="email" type="email" label={t("email")} required />
                        </Box>

                        <Box alignSelf="start" sx={styles.InputStyle}>
                            <FormikOutlinedSelect
                                id="role"
                                name="role"
                                label={t("Role")}
                                options={SELECTROLES}
                                value={role}
                                onChange={(e) => {
                                    setRole(e.target.value);
                                    setFieldValue("role", e.target.value);
                                }}
                                required
                            />
                        </Box>
                        <Box sx={styles.InputStyle}>
                            <FormikOutlinedTextField id="unit" name="unit" type="text" label={t("Unit")} />
                        </Box>
                        {role !== UserRoleEnum.WORKER && (
                            <Alert icon={<InfoIcon />} severity="info" sx={styles.AddNewuserAlertStyle2}>
                                {t("users_management.add_new_user.add_new_user_alert")}
                            </Alert>
                        )}
                    </>
                )}
            </Box>
        </div>
    );
};
