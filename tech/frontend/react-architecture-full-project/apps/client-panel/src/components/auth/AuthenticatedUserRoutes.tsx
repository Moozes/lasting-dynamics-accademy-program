import { Navigate, Outlet } from "react-router-dom";

const AuthenticatedUserRoutes = ({ user }: { user: any }) => {
    if (!user) {
        return <Navigate to="/auth/login" replace />;
    }

    return <Outlet />;
};

export default AuthenticatedUserRoutes;
