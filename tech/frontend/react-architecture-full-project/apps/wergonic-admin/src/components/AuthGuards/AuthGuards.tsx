import { Navigate, Outlet } from "react-router-dom";
import { useAtomValue } from "jotai";

import { authAtom } from "@atoms/index";
import { r } from "@routes/routes";

const AuthenticatedUserGuard = () => {
    const { firebaseUser } = useAtomValue(authAtom);
    if (!firebaseUser) {
        return <Navigate to={r.gar(r.routes.auth.login)} replace />;
    }

    return <Outlet />;
};

const UnauthenticatedUserGuard = () => {
    const { firebaseUser } = useAtomValue(authAtom);
    if (firebaseUser) {
        return <Navigate to={r.gar(r.routes.root)} replace />;
    }

    return <Outlet />;
};

export const AuthGuards = {
    AuthenticatedUserGuard,
    UnauthenticatedUserGuard,
};
