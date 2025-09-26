import { useMediaQuery } from "@mui/material";

import { AUTH_BREAKPOINT } from "../utils";

export const useAuthBreakpoint = () => {
    const matches = useMediaQuery(`(max-width:${AUTH_BREAKPOINT})`);
    return {
        tabletBreakpoint: matches,
    };
};
