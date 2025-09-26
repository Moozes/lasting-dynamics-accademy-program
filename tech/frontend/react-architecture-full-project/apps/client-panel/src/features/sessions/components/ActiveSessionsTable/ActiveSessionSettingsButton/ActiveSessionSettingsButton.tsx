import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { IViewLogsButton } from "@features/sessions/types";

import { ViewLogsButton } from "./ViewLogsButton/ViewLogsButton";
import { EndSessionButton } from "./EndSessionButton";
import { MenuItemStyles, StyledSettingsIcon } from "./inlineStyles";

type Props = IViewLogsButton;

export const ActiveSessionSettingsButton = ({ selectedRow }: Props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <IconButton sx={{ color: "#03003D" }} onClick={handleClick}>
                <StyledSettingsIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                {/* we have to use onKeyDown otherwise we cant write "e" or "a" since it will be considered as key down press */}
                <MenuItem onKeyDown={(e) => e.stopPropagation()} sx={MenuItemStyles(true)}>
                    <ViewLogsButton handleMenuClose={handleClose} selectedRow={selectedRow} />
                </MenuItem>
                <MenuItem onKeyDown={(e) => e.stopPropagation()} sx={MenuItemStyles(false)}>
                    <EndSessionButton handleMenuClose={handleClose} selectedSession={selectedRow} />
                </MenuItem>
            </Menu>
        </>
    );
};

export default ActiveSessionSettingsButton;
