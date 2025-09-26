import { IPaginatedServerResponse } from "ui";

import { TOrganizationUser } from "@app-types/index";
import { api } from "@services/index";

import { apiRoutes } from "./apiRoutes";

export const readAllUsers = (params?: {
    search?: string;
    ordering?: string;
    page?: string;
    page_size?: string;
    organization_names?: string;
    role_in?: string;
}) => api.get<IPaginatedServerResponse<TOrganizationUser>>(apiRoutes.users.getAllUsersRoute(params));
