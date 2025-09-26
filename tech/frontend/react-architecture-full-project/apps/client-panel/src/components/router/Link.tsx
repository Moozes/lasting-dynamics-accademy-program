import { FC } from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

import { Link as MuiLink, SxProps, Theme } from "@mui/material";

interface LinkProps extends RouterLinkProps {
    sx?: SxProps | SxProps<Theme>;
}

const Link: FC<LinkProps> = ({ children, to, sx, ...rest }) => {
    return (
        <MuiLink component={RouterLink} to={to} sx={{ textDecoration: "none", ...sx }} {...rest}>
            {children}
        </MuiLink>
    );
};

export default Link;
