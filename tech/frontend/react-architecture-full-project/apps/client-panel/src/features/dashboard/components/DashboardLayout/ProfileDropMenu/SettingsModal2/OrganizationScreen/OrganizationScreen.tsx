import { useAtom } from "jotai";

import { Avatar, Box, Typography as MuiTypography, useTheme } from "@mui/material";

import { useTranslationV2 } from "ui";

import { authAtom } from "@atoms/index";
import { GetInitials } from "@utils/index";

import * as styles from "../inlineStyles";

import { organizationDetailsStyles, organizationIdStyles, organizationNameStyles } from "./inlineStyles";
import { OrganizationInfoItem } from "./OrganizationInfoItem";

export function OrganizationScreen() {
    const t = useTranslationV2();
    const [auth] = useAtom(authAtom);
    const theme = useTheme();

    const organization = auth.wergonicUser?.organization;
    const organizationInitials = GetInitials(organization?.name);

    const userCount = `${organization?.number_of_employees}/${organization?.max_number_workers}`;
    const adminCount = `${organization?.number_of_admins}/${organization?.max_number_admins}`;
    const sessionCount = `${organization?.number_of_sessions_per_month}/${organization?.max_number_sessions_month}`;
    const assessmentCount = `${organization?.number_of_assessments_per_month}/${organization?.max_number_assessments_month}`;

    return (
        <>
            <Box display="flex" alignItems="center">
                <Avatar sx={styles.ProfilePictureStyle2}>{organizationInitials}</Avatar>
                <Box>
                    <MuiTypography mb={1} color={theme.color_system.text.primary} sx={organizationNameStyles}>
                        {organization?.name}
                    </MuiTypography>
                    <MuiTypography color={theme.color_system.text.secondary} sx={organizationIdStyles}>
                        ID: {organization?.id}
                    </MuiTypography>
                </Box>
            </Box>
            <MuiTypography mt="59px" color={theme.color_system.text.primary} sx={organizationDetailsStyles}>
                {t("settings.organisation_details")}
            </MuiTypography>
            <Box
                display="flex"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="space-between"
                flexDirection="row"
                my={3}
                gap={3}
            >
                <OrganizationInfoItem title={t("settings.number_of_users")} text={userCount} />
                <OrganizationInfoItem title={t("settings.number_of_admins")} text={adminCount} />
                <OrganizationInfoItem title={t("settings.number_of_worksessions")} text={sessionCount} />
                <OrganizationInfoItem title={t("settings.assessment_reports_per_month")} text={assessmentCount} />
                <OrganizationInfoItem title={t("settings.current_subscription")} text="123456" />
                <OrganizationInfoItem title={t("settings.license_expiration_date")} text="05/12/2022" />
            </Box>
        </>
    );
}
