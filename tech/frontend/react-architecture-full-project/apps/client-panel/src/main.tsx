import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserTracing } from "@sentry/tracing";

import "regenerator-runtime";
import "@utils/i18n";

import App from "./App";

Sentry.init({
    dsn: "https://457423ec4c4449009f1b018080091513@o4504418544648192.ingest.sentry.io/4504765616750592",
    integrations: [new BrowserTracing()],
    environment: import.meta.env.MODE,
    tracesSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
