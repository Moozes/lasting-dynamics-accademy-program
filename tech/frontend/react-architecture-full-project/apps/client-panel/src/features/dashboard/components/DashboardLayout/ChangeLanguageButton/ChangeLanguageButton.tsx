import { useState } from "react";

import { Box, Menu, MenuItem, useTheme } from "@mui/material";

import { Btn, SUPPORTED_LANGUAGES, useLanguage } from "ui";

import { StyledGlobIcon } from "../../styles";

import { handleChangeLanguage } from "./ChangeLanguageButton.helpers";
import { buttonStyles } from "./inlineStyles";

export const ChangeLanguageButton = () => {
    const currentLanguageCode = useLanguage();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const theme = useTheme();
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Btn onClick={handleClick} startIcon={<StyledGlobIcon />} variant="text" sx={buttonStyles}>
                {currentLanguageCode}
            </Btn>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ horizontal: "left", vertical: "center" }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                PaperProps={{
                    sx: {
                        boxShadow: theme.color_system.boxShadow.purple_20,
                        bgcolor: theme.color_system.background.paper,
                        backgroundImage: "none",
                    },
                }}
            >
                {SUPPORTED_LANGUAGES.map((lang) => (
                    <MenuItem
                        key={lang.code}
                        onClick={() => {
                            handleChangeLanguage(lang.code);
                            handleClose();
                        }}
                        sx={{
                            "&:hover": {
                                background: theme.color_system.divider.light_grey,
                            },
                        }}
                    >
                        <Box
                            color={theme.color_system.text.primary}
                            display="flex"
                            gap={2}
                            justifyContent="center"
                            alignItems="center"
                            paddingRight={3}
                            sx={theme.typography.h6}
                        >
                            {lang.flag}
                            {lang.name}
                        </Box>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};
