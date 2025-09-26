import { styled } from "@mui/material/styles";

import { PrivacyPolicyLink } from "./PrivacyPolicyLink";

export const StyledPrivacyPolicyLink = styled(PrivacyPolicyLink)(({ theme }) => ({
    color: theme.color_system.text.primary,
    textDecoration: "underline",
    ...theme.typography.caption,
    textAlign: "center",
    cursor: "pointer",
}));
