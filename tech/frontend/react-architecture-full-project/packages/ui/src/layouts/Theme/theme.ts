import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles/createTheme";

const SecondaryViolet = "rgba(184, 132, 248, 0.15)";

// const PrimaryVioletLight = "#994FF5";
const PrimaryVioletDark = "#670DD6";

// const PrimaryBlueLight = "#16D1F4";
const PrimaryBlueDark = "#03003D";

const SecondaryVioletLight = "#B884F8";
const SecondaryVioletDark = "#853DDE";

const PrimaryTextLight = "#212121";
const PrimaryTextDark = "#FFFFFF";
const DisabledText = "#BDBDBD";

const SecondaryText = "#757575";

const SuccessStatus = "#0ACF83";
const ErrorStatus = "#F24E1E";
const ErrorSecondaryStatus = "#FF8787";
const WarningStatus = "#FFA450";
const InfoStatus = "#2196F3";

const DividerLight = "#E8E8E8";
const Dividerdark = "#424242";

const PaperBgColorLight = "#FFFFFF";
const PaperBgColorDark = "#1C1B1B";

const BlueFade = "rgba(103, 13, 214, 0.05)";
const BlueFade2 = "rgba(240, 231, 251, 1)";

const GreyColors = {
    50: "rgba(232, 232, 232, 0.4)",
    200: "#F9F9F9",
    300: "rgba(232, 232, 232, 0.2)",
    500: "#424242",
};

// New color system
const WHITE = "#FFFFFF";

const PURPLE = {
    1: "#F9F6FE",
    2: "#F4EFFD",
    3: "#E1D1F8",
    4: "#D2BCF5",
    5: "#7635DC",
    6: "#9A69E5",
    7: "#2E1E40",
    8: "#E9DAFF",
};

const RED = {
    1: "#B8211C",
    2: "#FF5630",
    3: "#FFE4DE",
};

const ORANGE = {
    1: "#B87003",
    2: "#FFAB00",
    3: "#FFF1D6",
};

const BLUE = {
    1: "#036E9D",
    2: "#00B8D9",
    3: "#D6F4F9",
};

const GREEN = {
    1: "#138E59",
    2: "#22C55E",
    3: "#DBF6E5",
};

const GREY = {
    1: "#F4F6F8",
    2: "#DFE2E7",
    3: "#E0E4E8",
    4: "#A1ACB7",
    5: "#657582",
    6: "#424B54",
    7: "#212B36",
    8: "#273745",
    9: "#F9FAFB",
    10: "#F4F2FA",
    11: "#FDFCFF",
    12: "#E4E9EE",
    13: "#2D323A",
    14: "#8D9AA7",
    15: "#2F3944",
    16: "#454D56",
    17: "#3F4751",
    18: "#818C99",
    19: "#161C24",
    20: "#4B535C",
    21: "#242E37",
    22: "#424B5466",
    23: "#8D9AA780",
};

// for cards, papers
const BOX_SHADOW_GRAY = "0px 0px 20px 0px rgba(183, 183, 183, 0.20)";
// for inner cards
const BOX_SHADOW_PURPLE_ELEVATION_10 = "0px 4px 10px 0px rgba(103, 13, 214, 0.1)";
// for menus and popups
const BOX_SHADOW_PURPLE_ELEVATION_20_LIGHT = "0px 4px 20px 0px rgba(103, 13, 214, 0.1)";
const BOX_SHADOW_PURPLE_ELEVATION_20_DARK = "0px 0px 8px 0px rgba(133, 61, 222, 0.15)";

export const FONT_FAMILY_MANROPE = '"Manrope", "Helvetica", "Noto Sans", "Arial", sans-serif';
export const FONT_FAMILY_NOTOSANS = '"Noto Sans", "Arial", sans-serif';

const commonThemeOption: ThemeOptions = {
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    /* Firefox */
                    "*": {
                        scrollbarWidth: "auto",
                        scrollbarColor: "#a7a7a7 #f4f4f4",
                    },

                    /* Chrome, Edge, and Safari */
                    "*::-webkit-scrollbar": {
                        width: "6px",
                        height: "6px",
                    },

                    "*::-webkit-scrollbar-track": {
                        background: "#f4f4f4",
                        borderRadius: "10px",
                        border: "0px solid transparent",
                        marginTop: "5px",
                        marginBottom: "5px",
                    },
                    "*::-webkit-scrollbar-thumb": {
                        backgroundColor: "#a7a7a7",
                        borderRadius: "10px",
                        border: "0px solid transparent",
                    },
                },
                body: {
                    margin: 0,
                    padding: 0,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "capitalize",
                    borderWidth: "2px",
                    "&:hover": { borderWidth: "2px" },
                    "&.Mui-disabled": {
                        borderWidth: "2px",
                    },
                },
            },
        },
        MuiListItemButton: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiMenu: {
            styleOverrides: {
                root: {
                    borderRadius: 3,
                    filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.32))",
                    elevation: 0,
                    "& .MuiMenu-list": {
                        padding: 0,
                    },
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    paddingTop: 13,
                    paddingBottom: 10,
                    paddingRight: 45,
                    paddingLeft: 25,
                    "&:hover": {
                        backgroundColor: SecondaryViolet,
                    },
                },
            },
        },
    },
    typography: {
        h1: {
            fontFamily: FONT_FAMILY_MANROPE,
            fontSize: 64,
            fontStyle: "normal",
            fontWeight: 800,
            lineHeight: "normal",
        },
        h2: {
            fontFamily: FONT_FAMILY_MANROPE,
            fontSize: 48,
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
        },
        h3: {
            fontFamily: FONT_FAMILY_MANROPE,
            fontSize: 36,
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
        },
        h4: {
            fontFamily: FONT_FAMILY_MANROPE,
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
        },
        h5: {
            fontFamily: FONT_FAMILY_MANROPE,
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
        },
        h6: {
            fontFamily: FONT_FAMILY_MANROPE,
            fontSize: 18,
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
        },
        subtitle1: {
            fontFamily: FONT_FAMILY_NOTOSANS,
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
        },
        subtitle2: {
            fontFamily: FONT_FAMILY_NOTOSANS,
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
        },
        body1: {
            fontFamily: FONT_FAMILY_NOTOSANS,
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
        },
        body2: {
            fontFamily: FONT_FAMILY_NOTOSANS,
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
        },
        button: {
            fontFamily: FONT_FAMILY_MANROPE,
            fontSize: 18,
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            textTransform: "none",
        },
        caption: {
            fontFamily: FONT_FAMILY_NOTOSANS,
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
        },
        overline: {
            fontFamily: FONT_FAMILY_NOTOSANS,
            fontSize: 10,
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            fontVariant: "all-small-caps",
        },
    },
};

export const lightThemeOptions: ThemeOptions = {
    ...commonThemeOption,
    palette: {
        mode: "light",
        primary: {
            main: PrimaryVioletDark, // ==> using the light violet is not in the design
            blue: PrimaryBlueDark,
            blueFade: BlueFade,
            blueFade2: BlueFade2,
        },
        secondary: {
            main: SecondaryVioletLight,
        },
        background: {
            paper: PaperBgColorLight,
            default: PaperBgColorLight,
        },
        text: {
            primary: PrimaryTextLight,
            secondary: SecondaryText,
            disabled: DisabledText,
        },
        success: {
            main: SuccessStatus,
        },
        error: {
            main: ErrorStatus,
            secondary: ErrorSecondaryStatus,
        },
        info: {
            main: InfoStatus,
        },
        warning: {
            main: WarningStatus,
        },
        divider: DividerLight,
        grey: GreyColors,
    },
    color_system: {
        primary: {
            light_20: PURPLE[1],
            light_35: PURPLE[2],
            light_light: PURPLE[3],
            light: PURPLE[4],
            dark: PURPLE[5],
        },
        status: {
            error: {
                dark: RED[1],
                light: RED[2],
                light_light: RED[3],
            },
            warning: {
                dark: ORANGE[1],
                light: ORANGE[2],
                light_light: ORANGE[3],
            },
            infos: {
                dark: BLUE[1],
                light: BLUE[2],
                light_light: BLUE[3],
            },
            success: {
                dark: GREEN[1],
                light: GREEN[2],
                light_light: GREEN[3],
            },
        },
        text: {
            primary: GREY[7],
            secondary: GREY[6],
            light: GREY[5],
        },
        divider: {
            light_grey_20: GREY[1],
            light_purple: PURPLE[2],
            light_grey: GREY[2],
            white: WHITE,
            dark_grey: GREY[8],
        },
        button: {
            disabled: {
                text: GREY[4],
                background: GREY[3],
            },
            enabled: {
                text: WHITE,
                background: PURPLE[5],
            },
        },
        background: {
            default: GREY[9],
            paper: WHITE,
            popup: GREY[22],
        },
        accent: {
            light_purple: GREY[10],
            purple: PURPLE[8],
            light_grey: GREY[11],
            grey: GREY[12],
        },
        boxShadow: {
            gray: BOX_SHADOW_GRAY,
            purple_10: BOX_SHADOW_PURPLE_ELEVATION_10,
            purple_20: BOX_SHADOW_PURPLE_ELEVATION_20_LIGHT,
        },
    },
};

export const darkThemeOptions: ThemeOptions = {
    ...commonThemeOption,
    palette: {
        mode: "dark",
        primary: {
            main: PrimaryVioletDark, // ==> using the light violet is not in the design
            blue: PrimaryBlueDark,
            blueFade: BlueFade,
            blueFade2: BlueFade2,
        },
        secondary: {
            main: SecondaryVioletDark,
        },
        background: {
            paper: PaperBgColorDark,
            default: PaperBgColorDark,
        },
        text: {
            primary: PrimaryTextDark,
            secondary: SecondaryText,
            disabled: DisabledText,
        },
        success: {
            main: SuccessStatus,
        },
        error: {
            main: ErrorStatus,
            secondary: ErrorSecondaryStatus,
        },
        info: {
            main: InfoStatus,
        },
        warning: {
            main: WarningStatus,
        },
        divider: Dividerdark,
        grey: GreyColors,
    },
    color_system: {
        primary: {
            light_20: GREY[13],
            light_35: PURPLE[2],
            light_light: PURPLE[3],
            light: PURPLE[4],
            dark: PURPLE[6],
        },
        status: {
            error: {
                dark: RED[2],
                light: RED[2],
                light_light: RED[3],
            },
            warning: {
                dark: ORANGE[2],
                light: ORANGE[2],
                light_light: ORANGE[3],
            },
            infos: {
                dark: BLUE[2],
                light: BLUE[2],
                light_light: BLUE[3],
            },
            success: {
                dark: GREEN[2],
                light: GREEN[2],
                light_light: GREEN[3],
            },
        },
        text: {
            primary: WHITE,
            secondary: GREY[14],
            light: WHITE,
        },
        divider: {
            light_grey_20: GREY[8],
            light_purple: GREY[15],
            light_grey: GREY[16],
            white: GREY[7],
            dark_grey: GREY[2],
        },
        button: {
            disabled: {
                text: GREY[18],
                background: GREY[17],
            },
            enabled: {
                text: WHITE,
                background: PURPLE[6],
            },
        },
        background: {
            default: GREY[19],
            paper: GREY[7],
            popup: GREY[23],
        },
        accent: {
            light_purple: GREY[7],
            purple: PURPLE[7],
            light_grey: GREY[20],
            grey: GREY[21],
        },
        boxShadow: {
            gray: "none",
            purple_10: BOX_SHADOW_PURPLE_ELEVATION_10,
            purple_20: BOX_SHADOW_PURPLE_ELEVATION_20_DARK,
        },
    },
};

export const lightTheme = createTheme(lightThemeOptions);
export const darktheme = createTheme(darkThemeOptions);
