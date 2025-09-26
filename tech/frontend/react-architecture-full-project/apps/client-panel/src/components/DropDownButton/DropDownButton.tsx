import { useRef, useState } from "react";

import { KeyboardArrowDown } from "@mui/icons-material";
import Menu from "@mui/material/Menu";

import { Btn, type HTMLDivProps, useTranslationV2 } from "ui";

import * as styles from "./inlineStyles";

type Props = HTMLDivProps & { MenuItemsArray: JSX.Element[]; isLoading?: boolean };

export const DropDownButton = ({ MenuItemsArray, isLoading, ...props }: Props) => {
    const t = useTranslationV2();
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    let buttonWidth = "";
    if (buttonRef.current) {
        buttonWidth = `${buttonRef.current.offsetWidth}px`;
    }
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = async () => {
        setAnchorEl(null);
    };

    return (
        <div {...props}>
            <Btn ref={buttonRef} variant="primary-contained" endIcon={<KeyboardArrowDown />} onClick={handleClick}>
                {t("export_report")}
            </Btn>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                PaperProps={styles.MenuStyle(buttonWidth)}
            >
                {MenuItemsArray}
            </Menu>
        </div>
    );
};
