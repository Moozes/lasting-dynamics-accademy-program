import { TWergonicUser } from "@app-types/auth";
import { api } from "@services/index";

import { apiRoutes } from "./apiRoutes";

export const readCurrentUser = () => {
    return api.get<{ user: TWergonicUser }>(apiRoutes.auth.currentUserRoute);
};

export const resetPassword = (email: string) => {
    return api.post(apiRoutes.auth.passwordResetRoute, { email });
};
