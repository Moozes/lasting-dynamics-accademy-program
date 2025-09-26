import { useNavigate } from "react-router-dom";

import { useTheme } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";

import { Typography } from "ui";

import { TABLE_SETTINGS_MENU_ITEM_TEXT_ML } from "@utils/index";

import { BoxStyles } from "./inlineStyles";

type Props = BoxProps & {
    Icon: React.FC;
    text: string;
    to: string;
};

export const ShortcutLink = ({ Icon, text, to, ...props }: Props) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate(to);
    };
    return (
        <Box display="flex" alignItems="center" onClick={onClickHandler} sx={BoxStyles} {...props}>
            <Icon />

            <Typography ml={TABLE_SETTINGS_MENU_ITEM_TEXT_ML} variant="body1" color={theme.color_system.text.primary}>
                {text}
            </Typography>
        </Box>
    );
};
