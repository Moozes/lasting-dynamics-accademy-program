import { SxProps, Theme as MuiTheme } from "@mui/material";

export const SearchInputContainer2: SxProps<MuiTheme> = {
    border: (theme) => `.5px solid ${theme.color_system.divider.light_grey}`,
    background: (theme) => theme.color_system.divider.white,
    borderRadius: 2,
    height: 39,
    padding: 0.5,
};

export const SearchInputIconButton2: SxProps<MuiTheme> = {
    maxWidth: 42,
    "svg path": { stroke: (theme) => theme.color_system.divider.dark_grey },
};

export const SearchInput2: SxProps<MuiTheme> = {
    ml: "-2px",
    flex: 1,
    width: "calc(100% - 42px)",
    "& input": {
        p: 0,
    },
    "& input::placeholder": {
        fontWeight: "700",
        color: (theme) => theme.color_system.divider.light_grey,
    },
};
