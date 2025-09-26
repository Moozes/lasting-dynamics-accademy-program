import { styled } from "@mui/material/styles";

import { PrivacyAndDataDeletionPolicyLink } from "./PrivacyAndDataDeletionPolicyLink";

export const StyledPrivacyAndDataDeletionPolicyLink = styled(PrivacyAndDataDeletionPolicyLink)(({ theme }) => ({
    color: theme.color_system.text.primary,
    textDecoration: "underline",
    ...theme.typography.caption,
    textAlign: "center",
    cursor: "pointer",
}));
