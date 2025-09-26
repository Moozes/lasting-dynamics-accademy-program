import { FC, useState } from "react";
import { useAtom } from "jotai";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { ISelectedUser } from "@app-types/index";
import { authAtom } from "@atoms/index";

import DeactivateUserButton from "./DeactivateUserButton";
import { MenuItemStyles, StyledSettingsIcon } from "./inlineStyles";
import { SendResetPasswordEmailButton } from "./SendResetPasswordEmailButton";
import { UpdateUserButton2 } from "./UpdateUserButton2";

export const UserSettingsButton: FC<ISelectedUser> = ({ selectedUser }) => {
    const [auth] = useAtom(authAtom);
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
                {selectedUser.id !== auth.wergonicUser?.id && (
                    <div>
                        {/* we have to use onKeyDown otherwise we cant write "e" or "a" since it will be considered as key down press */}
                        <MenuItem onKeyDown={(e) => e.stopPropagation()} sx={MenuItemStyles(true)}>
                            <DeactivateUserButton handleMenuClose={handleClose} selectedUser={selectedUser} />
                        </MenuItem>
                        {selectedUser.is_active && (
                            <>
                                <MenuItem onKeyDown={(e) => e.stopPropagation()} sx={MenuItemStyles(true)}>
                                    <UpdateUserButton2 handleMenuClose={handleClose} selectedUser={selectedUser} />
                                </MenuItem>
                                <MenuItem onKeyDown={(e) => e.stopPropagation()} sx={MenuItemStyles(true)}>
                                    <SendResetPasswordEmailButton
                                        handleMenuClose={handleClose}
                                        selectedUser={selectedUser}
                                    />
                                </MenuItem>
                            </>
                        )}
                    </div>
                )}
            </Menu>
        </>
    );
};

export default UserSettingsButton;
