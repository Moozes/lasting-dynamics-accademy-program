import { Route, Routes } from "react-router-dom";
import { User } from "firebase/auth";

import { UnauthenticatedUserRoutes } from "@components/index";
import AccountCreationPage from "@pages/auth/AccountCreationPage";
import EmailLoginPage from "@pages/auth/EmailLoginPage";
import InitialPasswordResetPage from "@pages/auth/InitialPasswordResetPage";
import LoginPage from "@pages/auth/LoginPage";
import PasswordResetPage from "@pages/auth/PasswordResetForm";
import ProcessEmailLinkLogin from "@pages/auth/ProcessEmailLinkLogin";
import NotFound from "@pages/NotFound";

import routes from "./routes";

type Props = {
    user: User | null;
};

const AuthSubRoutes = ({ user }: Props) => {
    return (
        <Routes>
            <Route element={<UnauthenticatedUserRoutes user={user} />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="login/email" element={<EmailLoginPage />} />
                <Route path="signup" element={<AccountCreationPage />} />
                <Route path="process-login" element={<ProcessEmailLinkLogin />} />
            </Route>
            <Route path="password-reset" element={<InitialPasswordResetPage />} />
            <Route path="password-reset/new" element={<PasswordResetPage />} />
            <Route path={routes.rest} element={<NotFound />} />
        </Routes>
    );
};

export default AuthSubRoutes;
