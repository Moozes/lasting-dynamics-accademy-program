import { SVGProps } from "react";

import { useTheme } from "@mui/material";

import { Dark } from "./Dark";
import { Light } from "./Light";

export default function PrivacyAndDataDeletionPolicyPageIllustration(props: SVGProps<SVGSVGElement>) {
    const theme = useTheme();
    return theme.palette.mode === "light" ? <Light {...props} /> : <Dark {...props} />;
}
