import { useTheme } from "@mui/material";

export const ColumnDesc = () => {
    const theme = useTheme();
    const mode = theme.palette.mode;
    return (
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.60275 1.31208C3.99624 0.698676 4.89265 0.698676 5.28614 1.31208L7.30557 4.46005C7.73252 5.12561 7.2546 6 6.46387 6H2.42502C1.63429 6 1.15637 5.12561 1.58332 4.46005L3.60275 1.31208Z"
                fill={mode === "light" ? theme.color_system.text.light : theme.color_system.text.secondary}
            />
            <path
                d="M5.28614 12.0212C4.89264 12.6346 3.99624 12.6346 3.60274 12.0212L1.58332 8.8732C1.15636 8.20764 1.63428 7.33325 2.42501 7.33325L6.46387 7.33325C7.2546 7.33325 7.73252 8.20764 7.30556 8.8732L5.28614 12.0212Z"
                fill={mode === "light" ? theme.color_system.text.primary : theme.color_system.text.light}
            />
        </svg>
    );
};
