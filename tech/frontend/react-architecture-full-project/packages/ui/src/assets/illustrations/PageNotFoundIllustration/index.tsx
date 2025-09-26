import { useTheme } from "@mui/material";

import { Dark } from "./Dark";
import { Light } from "./Light";

export function PageNotFoundIllustration() {
    const theme = useTheme();
    return theme.palette.mode === "light" ? <Light /> : <Dark />;
}
