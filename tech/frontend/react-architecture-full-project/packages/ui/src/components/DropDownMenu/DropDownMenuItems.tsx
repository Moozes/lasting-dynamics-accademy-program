import { FC, useMemo, useState } from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import { DropDownMenuItemsProps } from "./DropDownMenu.types";
import { DropDownButtomStyles, DropDownListStyles } from "./inlineStyles";

export const DropDownMenuItems: FC<DropDownMenuItemsProps> = ({ items, header, onItemClick, initialSelecteditem }) => {
    function IsItemsHasIcons() {
        if (items && items.length > 0) {
            return items.some((item) => "icon" in item);
        }
        return false;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const itemsHaveIcons = useMemo(() => IsItemsHasIcons(), [items]);
    const [selectedItem, setselectedItem] = useState<string | null>(initialSelecteditem || null);
    return (
        <List subheader={header ? <ListSubheader>{header}</ListSubheader> : null} sx={DropDownListStyles}>
            {items?.map((item) => (
                <ListItemButton
                    selected={item.text === selectedItem}
                    key={item.text}
                    onClick={() => {
                        setselectedItem(item.text);
                        if (onItemClick) onItemClick(item);
                    }}
                    sx={DropDownButtomStyles}
                >
                    {itemsHaveIcons && item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                    <ListItemText
                        inset={itemsHaveIcons && !item.icon}
                        primary={item.text}
                        secondary={item.secondaryAction}
                        sx={{ ml: itemsHaveIcons ? -1.5 : "initial" }}
                    />
                </ListItemButton>
            ))}
        </List>
    );
};
