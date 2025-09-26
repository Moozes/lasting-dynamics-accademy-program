import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { ISelectedSessionProp, SessionStatusEnum } from "@features/sessions/types";

import { GenerateAssessmentButton } from "./GenerateAssessmentButton";
import { MenuItemStyles, StyledSettingsIcon } from "./inlineStyles";
import { RedoCalculationsButton } from "./RedoCalculationsButton";

type Props = ISelectedSessionProp;

export const FinishedSessionSettingsButton = ({ selectedSession }: Props) => {
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
                <MenuItem
                    disabled={
                        !selectedSession.calculations_completed || selectedSession.status === SessionStatusEnum.FAILED
                    }
                    onKeyDown={(e) => e.stopPropagation()}
                    sx={MenuItemStyles(true)}
                >
                    <GenerateAssessmentButton handleMenuClose={handleClose} selectedSession={selectedSession} />
                </MenuItem>
                <MenuItem onKeyDown={(e) => e.stopPropagation()} sx={MenuItemStyles(true)}>
                    <RedoCalculationsButton handleMenuClose={handleClose} selectedSession={selectedSession} />
                </MenuItem>
            </Menu>
        </>
    );
};
