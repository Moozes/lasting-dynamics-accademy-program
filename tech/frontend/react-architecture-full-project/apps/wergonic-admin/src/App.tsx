import * as Sentry from "@sentry/react";
import { Provider as JotaiProvider } from "jotai";

import { GlobalAppProvider } from "@providers/index";
import { AppRoutes } from "@routes/AppRoutes";

const App = () => {
    return (
        <JotaiProvider>
            <GlobalAppProvider>
                <AppRoutes />
            </GlobalAppProvider>
        </JotaiProvider>
    );
};

export default Sentry.withProfiler(App);
