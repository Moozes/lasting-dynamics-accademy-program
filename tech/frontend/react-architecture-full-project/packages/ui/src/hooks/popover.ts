import { useState } from "react";

export const usePopover = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const onOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const onClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    return {
        onClose,
        onOpen,
        open,
        anchorEl,
    };
};
