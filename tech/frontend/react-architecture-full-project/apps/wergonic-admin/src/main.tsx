import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

import "regenerator-runtime";
import "@utils/i18n";

import App from "./App";

Sentry.init({
    dsn: "https://ea4e47d8f4094c26897d0b94382adf67@o4504418544648192.ingest.sentry.io/4504765615243264",
    integrations: [new BrowserTracing()],
    environment: import.meta.env.MODE,
    tracesSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
