import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { IconButton, IconButtonProps } from "@mui/material";

type Props = IconButtonProps;

export const Notifications = (props: Props) => {
    return (
        <IconButton {...props}>
            <NotificationsNoneIcon className="icon" />
        </IconButton>
    );
};
