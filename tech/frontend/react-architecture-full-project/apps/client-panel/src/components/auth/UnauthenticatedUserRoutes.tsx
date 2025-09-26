import { Navigate, Outlet } from "react-router-dom";

const UnauthenticatedUserRoutes = ({ user }: { user: any }) => {
    if (user) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default UnauthenticatedUserRoutes;
