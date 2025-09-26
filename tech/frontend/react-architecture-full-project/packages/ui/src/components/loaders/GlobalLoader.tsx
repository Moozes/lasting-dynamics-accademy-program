import { Box, CircularProgress } from "@mui/material";

import CenterBox from "../Layout/CenterBox";

import { GlobalLoaderProps } from "./GlobalLoader.type";

export const GlobalLoader = ({ height = "100vh" }: GlobalLoaderProps) => {
    return (
        <Box height={height}>
            <CenterBox>
                <CircularProgress color="primary" />
            </CenterBox>
        </Box>
    );
};

export default GlobalLoader;
