import { IPaginatedServerResponse } from "ui";

import { TOrganization } from "@app-types/index";
import { api } from "@services/index";

import { apiRoutes } from "./apiRoutes";

export const readAllOrganizations = (params?: {
    search?: string;
    ordering?: string;
    page?: string;
    page_size?: string;
    country?: string;
    is_active?: string;
    is_archived?: boolean;
    license_expiration_range?: string;
}) => api.get<IPaginatedServerResponse<TOrganization>>(apiRoutes.organizations.getAllOrganizationsRoute(params));

export const createOrganization = (data: FormData) =>
    api.post(apiRoutes.organizations.getAllOrganizationsRoute(), data);

export const readSingleOrganization = (id: string) =>
    api.get<TOrganization>(apiRoutes.organizations.getSingleOrganizationRoute(id));

export const updateOrganization = (data: { id: string; formData: FormData }) =>
    api.patch(apiRoutes.organizations.getSingleOrganizationRoute(data.id), data.formData);

export const readAllOrganizationNames = (params?: { search?: string }) =>
    api.get<{ organization_names: string[] }>(apiRoutes.organizations.getAllOrganizationNamesRoute(params));

export const archiveOrganizations = (data: { organizations_ids: string[]; is_archived: boolean }) => {
    return api.put(apiRoutes.organizations.changeToArchiveRoute, data);
};
