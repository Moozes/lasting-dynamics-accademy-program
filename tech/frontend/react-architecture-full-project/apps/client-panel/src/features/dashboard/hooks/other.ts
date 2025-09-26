import { useAtom } from "jotai";

import useMediaQuery from "@mui/material/useMediaQuery";

import { isDrawerOpenAtom } from "@atoms/index";
import { MIN_SCREEN_WIDTH_FOR_PERMANENT_DRAWER } from "@utils/index";

export const useIsPermanentDrawer = () => useMediaQuery(`(min-width: ${MIN_SCREEN_WIDTH_FOR_PERMANENT_DRAWER}px)`);

export const useIsDrawerOpenCustomState = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useAtom(isDrawerOpenAtom);
    const isPermanentDrawer = useIsPermanentDrawer();

    const toggleDrawer = () => {
        setIsDrawerOpen((prev) => !prev);
    };

    return {
        // if permanent drawer (ie: large screen) then always open, else it can open/close
        isDrawerOpenCustomState: isPermanentDrawer ? true : isDrawerOpen,
        // if permanent drawer (ie: large screen) then no toggle function, else it can toggle
        toggleDrawer: isPermanentDrawer ? () => {} : toggleDrawer,
        // if permanent drawer (ie: large screen) then no state change, else it can change state
        setIsDrawerOpen: isPermanentDrawer ? () => {} : setIsDrawerOpen,
    };
};
