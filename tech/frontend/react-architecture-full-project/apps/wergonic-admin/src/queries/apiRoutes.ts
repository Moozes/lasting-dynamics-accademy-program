// for functions start with get
// examples:
//  currentUserRoute: /users/current
//  usersRoute: /users
//  getUserRoute: (id) => /users/id
export const apiRoutes = {
    auth: {
        currentUserRoute: "/users/current",
        passwordResetRoute: "/users/password/reset/",
    },
    organizations: {
        getAllOrganizationNamesRoute: (params?: { search?: string }) => {
            const queryParams = [params?.search ? `search=${params.search}` : ""].filter(Boolean).join("&");
            return `/organizations/names?${queryParams}`;
        },
        getAllOrganizationsRoute: (params?: {
            search?: string;
            ordering?: string;
            page?: string;
            page_size?: string;
            country?: string;
            is_active?: string;
            is_archived?: boolean;
            license_expiration_range?: string;
        }) => {
            const queryParams = [
                params?.search ? `search=${params.search}` : "",
                params?.ordering ? `ordering=${params.ordering}` : "",
                params?.page ? `page=${params.page}` : "",
                params?.page_size ? `page_size=${params.page_size}` : "",
                params?.country ? `country=${params.country}` : "",
                params?.is_active ? `is_active=${params.is_active}` : "",
                params?.is_archived ? `is_archived=${params.is_archived}` : "",
                params?.license_expiration_range ? `license_expiration_range=${params.license_expiration_range}` : "",
            ]
                .filter(Boolean)
                .join("&");
            return `/organizations/?${queryParams}`;
        },
        getSingleOrganizationRoute: (id: string) => `/organizations/${id}/`,
        changeToArchiveRoute: `/organizations/change-to-archive/`,
    },
    devices: {
        getAllDevicesRoute: (params?: { search?: string; page?: string; page_size?: string }) => {
            const queryParams = [
                params?.search ? `search=${params.search}` : "",
                params?.page ? `page=${params.page}` : "",
                params?.page_size ? `page_size=${params.page_size}` : "",
            ]
                .filter(Boolean)
                .join("&");
            return `/devices/?${queryParams}`;
        },
        getSingleDeviceRoute: (id: string) => `/devices/${id}/`,
    },
    users: {
        getAllUsersRoute: (params?: {
            search?: string;
            ordering?: string;
            page?: string;
            page_size?: string;
            organization_names?: string;
            role_in?: string;
        }) => {
            const queryParams = [
                params?.search ? `search=${params.search}` : "",
                params?.ordering ? `ordering=${params.ordering}` : "",
                params?.page ? `page=${params.page}` : "",
                params?.page_size ? `page_size=${params.page_size}` : "",
                params?.organization_names ? `organization_names=${params.organization_names}` : "",
                params?.role_in ? `role_in=${params.role_in}` : "",
            ]
                .filter(Boolean)
                .join("&");
            return `/users/user-organizations/?${queryParams}`;
        },
    },
    firmwares: {
        getAllFirmwaresRoute: (params?: {
            search?: string;
            page?: string;
            page_size?: string;
            is_current?: boolean;
        }) => {
            const queryParams = [
                params?.search ? `search=${params.search}` : "",
                params?.page ? `page=${params.page}` : "",
                params?.page_size ? `page_size=${params.page_size}` : "",
                params?.is_current ? `is_current=${params.is_current}` : "",
            ]
                .filter(Boolean)
                .join("&");
            return `/devices/firmwares/?${queryParams}`;
        },
        getSingleFirmwareRoute: (id: string) => `/devices/firmwares/${id}/`,
    },
};
