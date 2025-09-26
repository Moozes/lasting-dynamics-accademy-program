import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import { MenuItemStyle } from "./inlineStyles";

type Props = MenuItemProps & { Icon: JSX.Element; text: string };

export const CustomMenuItem = ({ Icon, text, ...props }: Props) => {
    return (
        <MenuItem {...props} sx={MenuItemStyle}>
            <ListItemIcon>{Icon}</ListItemIcon>
            <Typography variant="body1" noWrap>
                {text}
            </Typography>
        </MenuItem>
    );
};
