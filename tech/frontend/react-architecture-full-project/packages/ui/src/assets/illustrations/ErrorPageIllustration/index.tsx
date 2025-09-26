import { useTheme } from "@mui/material";

import { Dark } from "./Dark";
import { Light } from "./Light";

export function ErrorPageIllustration() {
    const theme = useTheme();
    return theme.palette.mode === "light" ? <Light /> : <Dark />;
}
