import { Box } from "@mui/material";

import { IBoxProps } from "./CenterBox.app";
import CenterBoxStyle from "./inlineStyles";

function CenterBox({ children }: IBoxProps) {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={CenterBoxStyle}
            gap={2}
        >
            {children}
        </Box>
    );
}

export default CenterBox;
