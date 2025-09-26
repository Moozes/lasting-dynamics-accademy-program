import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { GlobalLoader } from "ui";

import { useAuth } from "@hooks/index";
import InvitationPage from "@pages/dashboard/InvitationPage";
import PrivacyAndDataDeletionPolicyPage from "@pages/PrivacyAndDataDeletionPolicyPage";
import PrivacyPolicyPage from "@pages/PrivacyPolicyPage";

import routes from "./routes";

const AuthSubRoutes = lazy(() => import("./AuthSubRoutes"));
const DashboardSubRoutes = lazy(() => import("./DashboardSubRoutes"));

const NotFound = lazy(() => import("@pages/NotFound"));
const ErrorPage = lazy(() => import("@pages/ErrorPage"));

const AppRoutes = () => {
    const { pendingAuthState, auth } = useAuth();

    if (pendingAuthState) return <GlobalLoader />;

    return (
        <Routes>
            <Route path={routes.root} element={<Navigate to={routes.dashboard.home} replace />} />

            {/* Dashboard routes */}
            <Route path={`${routes.dashboard.index}/*`} element={<DashboardSubRoutes user={auth.user} />} />

            {/* Auth routes */}
            <Route path={`${routes.auth.index}/*`} element={<AuthSubRoutes user={auth.user} />} />

            <Route path={routes.privacyAndDataDeletionPolicy} element={<PrivacyAndDataDeletionPolicyPage />} />

            <Route path={routes.privacyPolicy} element={<PrivacyPolicyPage />} />

            {/* Error boundry will redirect to this error page */}
            <Route path={routes.error} element={<ErrorPage />} />

            {/* Invitations will be displayed in this page */}
            <Route path={routes.invitation} element={<InvitationPage />} />

            {/* 404 */}
            <Route path={routes.rest} element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
