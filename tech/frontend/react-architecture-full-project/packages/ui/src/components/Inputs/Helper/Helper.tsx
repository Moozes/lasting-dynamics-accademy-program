import { useTheme } from "@mui/material";

import Typography from "../../Typography";

import { IHelperProps } from "./Helper.app";
import { getStatusClass, root } from "./Helper.utils";

const Helper = ({ children, variant = "error", classNames }: IHelperProps) => {
    const theme = useTheme();
    const classList = { ...root, ...getStatusClass(theme)[variant], ...classNames };

    return (
        <div>
            {children !== " " && (
                <div style={classList}>
                    <Typography variant="body2">{children}</Typography>
                </div>
            )}
        </div>
    );
};

export default Helper;
