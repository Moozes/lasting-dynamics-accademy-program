import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { GlobalLoader } from "ui";

import { AuthGuards } from "@components/index";
import { MainLayout } from "@features/dashboard";
import { useAuth } from "@hooks/index";

import { r } from "./routes";

const LoginPage = lazy(() => import("@pages/auth/LoginPage"));
const NotFound = lazy(() => import("@pages/NotFound"));
const ErrorPage = lazy(() => import("@pages/ErrorPage"));
const OrganizationsPage = lazy(() => import("@pages/OrganizationsPage"));
const DevicesPage = lazy(() => import("@pages/DevicesPage"));
const UsersPage = lazy(() => import("@pages/UsersPage"));
const FirmwarePage = lazy(() => import("@pages/FirmwarePage"));

export const AppRoutes = () => {
    const { pendingAuthState } = useAuth();

    if (pendingAuthState) return <GlobalLoader />;

    return (
        <Routes>
            <Route
                path={r.gar(r.routes.root)}
                element={<Navigate to={r.gar(r.routes.organizations.index)} replace />}
            />

            <Route element={<AuthGuards.AuthenticatedUserGuard />}>
                {/* you can access these routes when authenticated */}
                <Route element={<MainLayout />}>
                    <Route path={r.gar(r.routes.organizations.index)} element={<OrganizationsPage />} />
                    <Route path={r.gar(r.routes.users.index)} element={<UsersPage />} />
                    <Route path={r.gar(r.routes.devices.index)} element={<DevicesPage />} />
                    <Route path={r.gar(r.routes.firmwares.index)} element={<FirmwarePage />} />
                </Route>
            </Route>

            <Route element={<AuthGuards.UnauthenticatedUserGuard />}>
                {/* you can access these routes when not authenticated */}
                <Route path={r.gar(r.routes.auth.login)} element={<LoginPage />} />
            </Route>

            {/* Error boundry will redirect to this error page */}
            <Route path={r.gar(r.routes.error)} element={<ErrorPage />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
