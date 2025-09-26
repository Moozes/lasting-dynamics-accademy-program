import { IconButton, IconButtonProps } from "@mui/material";

import { MenuIcon } from "ui";

import { useDrawer } from "@atoms/index";

type Props = IconButtonProps;

export const OpenDrawerButton = (props: Props) => {
    const { setOpen } = useDrawer();
    return (
        <IconButton {...props} onClick={() => setOpen(true)}>
            <MenuIcon className="icon" />
        </IconButton>
    );
};
