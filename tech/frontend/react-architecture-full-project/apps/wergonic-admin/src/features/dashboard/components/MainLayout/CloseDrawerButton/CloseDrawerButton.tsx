import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";

import type { HTMLDivProps } from "ui";

import { useDrawer } from "@atoms/index";

type Props = HTMLDivProps;

export const CloseDrawerButton = (props: Props) => {
    const { setOpen } = useDrawer();
    return (
        <div {...props}>
            <IconButton className="icon-button" onClick={() => setOpen(false)}>
                <ClearIcon className="icon" />
            </IconButton>
        </div>
    );
};
