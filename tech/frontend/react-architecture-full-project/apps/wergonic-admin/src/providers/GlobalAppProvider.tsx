import { Suspense } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { BrowserRouter, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useAtom } from "jotai";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { darktheme, GlobalLoader, lightTheme, ScrollToTop } from "ui";

import { themeAtom } from "@atoms/index";
import { r } from "@routes/routes";

import { NotistackProvider } from "./NotistackProvider";

interface IGlobalAppProviderProps {
    children: React.ReactNode;
}

const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
    resetErrorBoundary();
    const errorPageRoute = r.gar(r.routes.error);
    return <Navigate to={errorPageRoute} replace />;
};

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            keepPreviousData: true,
            retry: false,
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 15,
        },
    },
});

export const GlobalAppProvider = ({ children }: IGlobalAppProviderProps) => {
    const [theme] = useAtom(themeAtom);
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darktheme}>
            <CssBaseline />
            <Suspense fallback={<GlobalLoader />}>
                <QueryClientProvider client={queryClient}>
                    <NotistackProvider>
                        <BrowserRouter>
                            <ErrorBoundary FallbackComponent={ErrorFallback}>
                                {/* scroll to top on pathname change */}
                                <ScrollToTop />
                                {children}
                            </ErrorBoundary>
                        </BrowserRouter>
                        <ReactQueryDevtools position="bottom-right" />
                    </NotistackProvider>
                </QueryClientProvider>
            </Suspense>
        </ThemeProvider>
    );
};
