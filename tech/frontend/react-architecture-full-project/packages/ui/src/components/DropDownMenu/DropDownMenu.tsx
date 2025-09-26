import { FC } from "react";

import { Box, Popper } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Popover from "@mui/material/Popover";

import { DropDownMenuProps } from "./DropDownMenu.types";
import { DropDownMenuItems } from "./DropDownMenuItems";

export const DropDownMenu: FC<DropDownMenuProps> = ({
    children,
    type = "popover",
    anchorEl,
    onClose,
    open,
    header,
    initialSelecteditem,
    items,
    onItemClick,
    PopElementProps,
}) => {
    return (
        <Box p={0} m={0}>
            {type === "popover" ? (
                <Popover {...PopElementProps} open={open} anchorEl={anchorEl} onClose={onClose}>
                    {children ||
                        (items && (
                            <DropDownMenuItems
                                header={header}
                                initialSelecteditem={initialSelecteditem}
                                onItemClick={onItemClick}
                                items={items}
                            />
                        ))}
                </Popover>
            ) : (
                <Popper {...PopElementProps} open={open} anchorEl={anchorEl}>
                    <ClickAwayListener
                        onClickAway={() => {
                            onClose();
                        }}
                    >
                        <Box>
                            {children ||
                                (items && (
                                    <DropDownMenuItems
                                        header={header}
                                        initialSelecteditem={initialSelecteditem}
                                        onItemClick={onItemClick}
                                        items={items}
                                    />
                                ))}
                        </Box>
                    </ClickAwayListener>
                </Popper>
            )}
        </Box>
    );
};
