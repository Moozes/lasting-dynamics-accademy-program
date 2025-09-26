declare type Theme = import("@mui/material").Theme;
export interface IMuiTheme extends Theme {}

declare module "@mui/material/styles" {
    interface PaletteColor {
        secondary?: string;
        secondary?: string;
        blue?: string;
        blueDark?: string;
    }

    interface SimplePaletteColorOptions {
        secondary?: string;
        blue?: string;
        blueDark?: string;
        blueFade?: string;
        blueFade2?: string;
    }

    // eslint-disable-next-line @typescript-eslint/no-shadow
    interface Theme {
        color_system: {
            primary: {
                light_20: string;
                light_35: string;
                light_light: string;
                light: string;
                dark: string;
            };
            status: {
                error: {
                    dark: string;
                    light: string;
                    light_light: string;
                };
                warning: {
                    dark: string;
                    light: string;
                    light_light: string;
                };
                infos: {
                    dark: string;
                    light: string;
                    light_light: string;
                };
                success: {
                    dark: string;
                    light: string;
                    light_light: string;
                };
            };
            text: {
                primary: string;
                secondary: string;
                light: string;
            };
            divider: {
                light_grey_20: string;
                light_purple: string;
                light_grey: string;
                white: string;
                dark_grey: string;
            };
            button: {
                enabled: {
                    text: string;
                    background: string;
                };
                disabled: {
                    text: string;
                    background: string;
                };
            };
            background: {
                default: string;
                paper: string;
                popup: string;
            };
            accent: {
                light_purple: string;
                purple: string;
                light_grey: string;
                grey: string;
            };
            boxShadow: {
                gray: string;
                purple_10: string;
                purple_20: string;
            };
        };
    }

    interface ThemeOptions {
        color_system?: {
            primary: {
                light_20: string;
                light_35: string;
                light_light: string;
                light: string;
                dark: string;
            };
            status: {
                error: {
                    dark: string;
                    light: string;
                    light_light: string;
                };
                warning: {
                    dark: string;
                    light: string;
                    light_light: string;
                };
                infos: {
                    dark: string;
                    light: string;
                    light_light: string;
                };
                success: {
                    dark: string;
                    light: string;
                    light_light: string;
                };
            };
            text: {
                primary: string;
                secondary: string;
                light: string;
            };
            divider: {
                light_grey_20: string;
                light_purple: string;
                light_grey: string;
                white: string;
                dark_grey: string;
            };
            button: {
                enabled: {
                    text: string;
                    background: string;
                };
                disabled: {
                    text: string;
                    background: string;
                };
            };
            background: {
                default: string;
                paper: string;
                popup: string;
            };
            accent: {
                light_purple: string;
                purple: string;
                light_grey: string;
                grey: string;
            };
            boxShadow: {
                gray: string;
                purple_10: string;
                purple_20: string;
            };
        };
    }
}
