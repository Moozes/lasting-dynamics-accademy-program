// if large screen drawer is permanent (always shown, same surface level as main content)
// if small screen drawer is temporary (toggles, displays over main content and has a backdrop)

import { atom, useAtom } from "jotai";

import { DrawerProps, useMediaQuery } from "@mui/material";

const LARGE_SCREEN_MIN_WIDTH = 1190;

const useIsLargeScreen = () => useMediaQuery(`(min-width: ${LARGE_SCREEN_MIN_WIDTH}px)`);

const isDrawerOpenAtom = atom<boolean>(false);

export const useDrawer = () => {
    const [open, setOpen] = useAtom(isDrawerOpenAtom);
    const isPermanentDrawer = useIsLargeScreen();

    return {
        variant: (isPermanentDrawer ? "permanent" : "temporary") as DrawerProps["variant"],
        open: isPermanentDrawer ? undefined : open,
        setOpen: isPermanentDrawer ? () => {} : setOpen,
    };
};
