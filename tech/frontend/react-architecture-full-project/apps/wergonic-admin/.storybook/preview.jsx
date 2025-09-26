import GlobalAppProvider from "../src/providers/GlobalAppProvider";

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
    <GlobalAppProvider>
        <Story />
    </GlobalAppProvider>
);

export const decorators = [withThemeDecorator];
