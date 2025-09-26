import { SessionStatusEnum } from "@features/sessions";

const apiRoutes = {
    auth: {
        passwordReset: "/users/password/reset/",
        magicLinkLogin: "/users/auth/passwordless-signin/",
        signup: "users/auth/register/",
        createWorkerAccount: "users/create-worker-account/",
        // !these routes need to be refactored to thier own property
        getOrganizationUsersRoute: (
            URLPageNumber: string,
            URLPageSize: string,
            URLsearchterm: string,
            URLOrder?: string,
            URLRoleIn?: string,
            URLIsActive?: string
        ) => {
            let route = `/organizations/users/?page=${URLPageNumber}&page_size=${URLPageSize}`;
            if (URLsearchterm) {
                route = `${route}&search=${URLsearchterm}`;
            }

            if (URLOrder) {
                route = `${route}&ordering=${URLOrder}`;
            }

            if (URLRoleIn) {
                route = `${route}&role__in=${URLRoleIn}`;
            }
            if (URLIsActive) {
                route = `${route}&is_active=${URLIsActive}`;
            }
            return route;
        },
        getOrganizationProfilesRoute: (
            URLPageNumber: string,
            URLPageSize: string,
            URLsearchterm?: string,
            URLOrder?: string
        ) => {
            let route = `/organizations/profiles/?page=${URLPageNumber}&page_size=${URLPageSize}`;
            if (URLsearchterm) {
                route = `${route}&search=${URLsearchterm}`;
            }
            if (URLOrder) {
                route = `${route}&ordering=${URLOrder}`;
            }
            return route;
        },
        getOrganizationUsersByRoleRoute: (URLPageNumber: string, URLPageSize: string, URLRole: string) => {
            const route = `/organizations/users/?page=${URLPageNumber}&page_size=${URLPageSize}&role=${URLRole}`;
            return route;
        },
        updateUserRoute: (id: string) => `/organizations/users/${id}/`,
        deactivateUserRoute: (id: string) => `/organizations/users/${id}/deactivate/`,
        deleteSingleUserRoute: (id: string) => `/users/${id}/`,
        deleteMultipleUsersRoute: `/organizations/users/`,
        getCheckUserFieldRoute: (fieldName: string) => `/users/${fieldName}/check/`,
        getUserOrganizationsRoute: () => `/users/organizations`,
        UpdateUserActiveOrgRoute: (organizationID: string | number) =>
            `/users/organizations/${organizationID}/change-to-active/`,
        acceptInvitationRoute: (invitationId: string | number) => `/organizations/invitation/${invitationId}/`,
        addNewUserRoute: `/organizations/users/`,
        getOrganizationAdminsAndErgonomists: "/organizations/admins/",
    },
    sessions: {
        getOrganizationSessionsRoute: (
            organizationId: string,
            URLPageNumber: string,
            URLPageSize: string,
            URLsearchterm: string,
            URLOrder?: string,
            workerId?: string
        ) => {
            const statuses = [SessionStatusEnum.FAILED, SessionStatusEnum.FINISHED].join(",");
            let route = `/sessions/organizations/${organizationId}/?status__in=${statuses}&page=${URLPageNumber}&page_size=${URLPageSize}`;
            if (URLsearchterm) {
                route = `${route}&search=${URLsearchterm}`;
            }

            if (URLOrder) {
                route = `${route}&ordering=${URLOrder}`;
            }

            if (workerId) {
                route = `${route}&worker_id=${workerId}`;
            }
            return route;
        },
        getOrganizationInterruptedSessionsRoute: (
            organizationId: string,
            URLPageNumber: string,
            URLPageSize: string,
            URLOrder?: string
        ) => {
            let route = `/sessions/organizations/${organizationId}/?status=${SessionStatusEnum.INTERRUPTED}&page=${URLPageNumber}&page_size=${URLPageSize}`;

            if (URLOrder) {
                route = `${route}&ordering=${URLOrder}`;
            }
            return route;
        },
        getDeleteMultipleSessionsRoute: (organizationId: string) => `/sessions/organizations/${organizationId}/`,
        getSingleSessionRoute: (sessionId: number | string) => `/sessions/${sessionId}/`,
        getSessionStatRoute: (sessionId: number | string) => `/sessions/${sessionId}/stats/`,
        getSessionDetailedStatRoute: (sessionId: number | string) => `/sessions/${sessionId}/stats/details/`,
        getSessionTnoStatRoute: (sessionId: number | string) => `/sessions/${sessionId}/stats/tno/`,
        getSessionHrStatRoute: (sessionId: number | string) => `/sessions/${sessionId}/stats/hr/`,
        getSessionTempStatRoute: (sessionId: number | string) => `/sessions/${sessionId}/stats/temperature/`,
        getSessionTasksStatRoute: (sessionId: number | string) => `/sessions/${sessionId}/stats/tasks/`,
        getSessionLogsRoute: (sessionId: number | string) => `/sessions/${sessionId}/logs/`,
        sessionMeasurementDownloadRoute: (sessionId: number | string) => `/sessions/${sessionId}/stats/export/`,
        sessionStatsDownloadRoute: (sessionId: number | string) => `/sessions/${sessionId}/stats/export/excel/`,
        MultiSessionStatsDownloadRoute: (sessionsIds: string) => `/sessions/stats/compare/excel/?ids=${sessionsIds}`,
        updateSessionRoute: (id: string) => `/sessions/${id}/`,
        redoSessionCalculationsRoute: (id: number | string) => `/sessions/${id}/stats/recalculate/`,
        getSelectedSessionsStatsRoute: (ids: string) => `/sessions/stats/compare/?ids=${ids}`,
        getGenerateAssessmentRoute: (sessionId: string) => `sessions/${sessionId}/assesments/mappings/`,
        getAIExplanationRoute: (sessionId: string) => `/sessions/${sessionId}/generate-gemini-analysis/`,
        mergeSessionsRoute: "/sessions/merge/",
    },
    statistics: {
        getOrganizationStataisticsRoute: (
            user_start_date: string,
            user_end_date: string,
            session_start_date: string,
            session_end_date: string,
            RAMP_start_date: string,
            RAMP_end_date: string
        ) =>
            `/organizations/stats/?session_start_date=${session_start_date}&session_end_date=${session_end_date}&user_start_date=${user_start_date}&user_end_date=${user_end_date}&RAMP_start_date=${RAMP_start_date}&RAMP_end_date=${RAMP_end_date}`,
    },
    assessments: {
        getSelectedAssessmentsRoute: (ids: string) => `/assesments/multi/?ids=${ids}`,
        getOrganizationAssessmentsRoute: (
            URLPageNumber: string,
            URLPageSize: string,
            URLOrder?: string,
            URLsearchterm?: string,
            URLStatus?: string,
            URLDateRange?: string,
            URLAssessmentCategory?: string,
            workerId?: string
        ) => {
            let route = `/assesments/?page=${URLPageNumber}&page_size=${URLPageSize}`;

            if (URLsearchterm) {
                route = `${route}&search=${URLsearchterm}`;
            }

            if (URLOrder) {
                route = `${route}&ordering=${URLOrder}`;
            }

            if (URLStatus) {
                route = `${route}&status=${URLStatus}`;
            }

            if (URLDateRange) {
                route = `${route}&date_range=${URLDateRange}`;
            }

            if (URLAssessmentCategory) {
                route = `${route}&assesment_category=${URLAssessmentCategory}`;
            }

            if (workerId) {
                route = `${route}&worker_id=${workerId}`;
            }

            return route;
        },
        deleteMultipleAssessmentsRoute: "/assesments/",
        addNewAssessmentRoute: "/assesments/",
        getSingleAssessmentRoute: (id: string) => `/assesments/${id}/`,
        updateAssessmentRoute: (id: string) => `/assesments/${id}/`,
    },
    notifications: {
        getNotificationsRoute: (URLPageNumber?: string, URLPageSize?: string) => {
            let route = "/notifications/";
            if (URLPageNumber && URLPageSize) {
                route += `?page=${URLPageNumber}&page_size=${URLPageSize}`;
            }
            return route;
        },
        updateSingleNotificationRoute: (id: number) => `/notifications/${id}/`,
        markMultipleNotificationsAsReadRoute: "/notifications/mark-as-read/",
    },
    categoryAndLabels: {
        deleteCategoryRoute: (categoryId: number, orgId: string | undefined) =>
            `/categories/${categoryId}/organizations/${orgId}/`,
        getCategoriesAndLabelsRoute: (
            URLPageNumber: string,
            URLPageSize: string,
            URLOrder?: string,
            URLsearchterm?: string,
            URLCategoryType?: string,
            organizationId?: string
        ) => {
            let route = `/categories/organizations/${organizationId}/category-with-labels/?page=${URLPageNumber}&page_size=${URLPageSize}`;

            if (URLCategoryType) {
                route = `${route}&category_type=${URLCategoryType}`;
            }

            if (URLsearchterm) {
                route = `${route}&search=${URLsearchterm}`;
            }

            if (URLOrder) {
                route = `${route}&ordering=${URLOrder}`;
            }

            return route;
        },
        getLabelsRoute: (
            organizationId?: string,
            URLPageNumber?: string,
            URLPageSize?: string,
            URLsearchterm?: string
        ) => {
            let route = `/categories/organizations/${organizationId}/labels/?`;

            if (URLPageNumber) {
                route = `${route}&page=${URLPageNumber}`;
            }

            if (URLPageSize) {
                route = `${route}&page_size=${URLPageSize}`;
            }

            if (URLsearchterm) {
                route = `${route}&search=${URLsearchterm}`;
            }

            return route;
        },
        addCategoryAndLabelsRoute: (organizationId?: string) =>
            `/categories/organizations/${organizationId}/category-with-labels/`,
        editCategoryAndLabelsRoute: (categoryId: string, organizationId?: string) =>
            `/categories/organizations/${organizationId}/category-with-labels/${categoryId}/`,
        addEventRoute: (sessionId: string) => `/categories/labels/events/sessions/${sessionId}/`,
        deleteEventRoute: (eventId: number) => `/categories/labels/events/${eventId}/`,
        updateEventRoute: (eventId: number) => `/categories/labels/events/${eventId}/`,
    },
    workcycles: {
        // Task Routes
        getAllTasksRoute: (
            URLPageNumber?: string,
            URLPageSize?: string,
            URLOrder?: string,
            URLsearchterm?: string,
            URLWorkstationId?: string,
            URLFactoryId?: string,
            URLLineId?: string
        ) => {
            let route = "/workcycles/tasks/";

            const queryParams: string[] = [];

            if (URLPageNumber) queryParams.push(`page=${URLPageNumber}`);
            if (URLPageSize) queryParams.push(`page_size=${URLPageSize}`);
            if (URLOrder) queryParams.push(`ordering=${URLOrder}`);
            if (URLsearchterm) queryParams.push(`search=${URLsearchterm}`);
            if (URLWorkstationId) queryParams.push(`workstation_id=${URLWorkstationId}`);
            if (URLFactoryId) queryParams.push(`task_model__workstation__line__factory=${URLFactoryId}`);
            if (URLLineId) queryParams.push(`task_model__workstation__line=${URLLineId}`);

            if (queryParams.length > 0) route += `?${queryParams.join("&")}`;
            return route;
        },
        getSingleTaskRoute: (id: string) => `/workcycles/tasks/${id}/`,

        // Factory Routes
        getAllFactoriesRoute: (URLPageNumber?: string, URLPageSize?: string, URLsearchterm?: string) => {
            let route = "/workcycles/factories/";

            const queryParams: string[] = [];

            if (URLPageNumber) queryParams.push(`page=${URLPageNumber}`);
            if (URLPageSize) queryParams.push(`page_size=${URLPageSize}`);
            if (URLsearchterm) queryParams.push(`search=${URLsearchterm}`);

            if (queryParams.length > 0) route += `?${queryParams.join("&")}`;
            return route;
        },
        getSingleFactoryRoute: (id: string) => `/workcycles/factories/${id}/`,

        // Line Routes
        getAllLinesRoute: (
            URLPageNumber?: string,
            URLPageSize?: string,
            URLsearchterm?: string,
            URLFactoryId?: string
        ) => {
            let route = "/workcycles/lines/";

            const queryParams: string[] = [];

            if (URLPageNumber) queryParams.push(`page=${URLPageNumber}`);
            if (URLPageSize) queryParams.push(`page_size=${URLPageSize}`);
            if (URLsearchterm) queryParams.push(`search=${URLsearchterm}`);
            if (URLFactoryId) queryParams.push(`factory=${URLFactoryId}`);

            if (queryParams.length > 0) route += `?${queryParams.join("&")}`;
            return route;
        },
        getSingleLineRoute: (id: string) => `/workcycles/lines/${id}/`,

        // Workstation Routes
        getAllWorkstationsRoute: (
            URLPageNumber?: string,
            URLPageSize?: string,
            URLsearchterm?: string,
            URLLineId?: string
        ) => {
            let route = "/workcycles/workstations/";

            const queryParams: string[] = [];

            if (URLPageNumber) queryParams.push(`page=${URLPageNumber}`);
            if (URLPageSize) queryParams.push(`page_size=${URLPageSize}`);
            if (URLsearchterm) queryParams.push(`search=${URLsearchterm}`);
            if (URLLineId) queryParams.push(`line=${URLLineId}`);

            if (queryParams.length > 0) route += `?${queryParams.join("&")}`;
            return route;
        },
        getSingleWorkstationRoute: (id: string) => `/workcycles/workstations/${id}/`,

        // Task Model Routes
        getAllTaskModelsRoute: (
            URLPageNumber?: string,
            URLPageSize?: string,
            URLsearchterm?: string,
            URLWorkstationId?: string
        ) => {
            let route = "/workcycles/models/";

            const queryParams: string[] = [];

            if (URLPageNumber) queryParams.push(`page=${URLPageNumber}`);
            if (URLPageSize) queryParams.push(`page_size=${URLPageSize}`);
            if (URLsearchterm) queryParams.push(`search=${URLsearchterm}`);
            if (URLWorkstationId) queryParams.push(`workstation=${URLWorkstationId}`);

            if (queryParams.length > 0) route += `?${queryParams.join("&")}`;
            return route;
        },
        getSingleTaskModelRoute: (id: string) => `/workcycles/models/${id}/`,
        importDataRoute: `/workcycles/import/`,
    },
};

export default apiRoutes;
