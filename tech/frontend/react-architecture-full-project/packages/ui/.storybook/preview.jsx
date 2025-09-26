import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "../src/layouts/Theme/theme";
export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
const withThemeDecorator = (Story) => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
    </ThemeProvider>
);

export const decorators = [withThemeDecorator];
