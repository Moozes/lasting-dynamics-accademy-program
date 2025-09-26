import { useAtom } from "jotai";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { IconButton, IconButtonProps } from "@mui/material";

import { themeAtom } from "@atoms/index";

type Props = IconButtonProps;

export const ToggleTheme = (props: Props) => {
    const [theme, setTheme] = useAtom(themeAtom);
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };
    return (
        <IconButton {...props} onClick={toggleTheme}>
            {theme === "light" ? <DarkModeOutlinedIcon className="icon" /> : <Brightness4Icon className="icon" />}
        </IconButton>
    );
};
