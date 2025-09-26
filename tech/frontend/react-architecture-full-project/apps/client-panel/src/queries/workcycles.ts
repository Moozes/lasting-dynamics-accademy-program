import { useMutation, useQuery } from "@tanstack/react-query";

import {
    TAddLine,
    TAddTask,
    TAddTaskModel,
    TAddWorkstation,
    TFactory,
    TUpdateLine,
    TUpdateTask,
    TUpdateTaskModel,
    TUpdateWorkstation,
} from "@app-types/index";
import { api, apiRoutes } from "@services/index";

// Task Queries
export const useGetAllTasksQuery = ({
    URLPageNumber,
    URLPageSize,
    URLOrder,
    URLsearchterm,
    URLWorkstationId,
    URLFactoryId,
    URLLineId,
}: {
    URLPageNumber?: string;
    URLPageSize?: string;
    URLOrder?: string;
    URLsearchterm?: string;
    URLWorkstationId?: string;
    URLFactoryId?: string;
    URLLineId?: string;
}) => {
    return useQuery(
        [
            "workcycles",
            "tasks",
            URLPageNumber,
            URLPageSize,
            URLOrder,
            URLsearchterm,
            URLWorkstationId,
            URLFactoryId,
            URLLineId,
        ],
        () => {
            return api.get(
                apiRoutes.workcycles.getAllTasksRoute(
                    URLPageNumber,
                    URLPageSize,
                    URLOrder,
                    URLsearchterm,
                    URLWorkstationId,
                    URLFactoryId,
                    URLLineId
                )
            );
        }
    );
};

export const useAddTaskMutation = ({ onSuccess, onError }: { onSuccess?: any; onError?: any }) => {
    return useMutation({
        mutationFn: (data: TAddTask) => api.post(apiRoutes.workcycles.getAllTasksRoute(), data),
        onSuccess,
        onError,
    });
};

export const useUpdateTaskMutation = ({ onSuccess, onError }: { onSuccess?: any; onError?: any }) => {
    return useMutation({
        mutationFn: (data: TUpdateTask) => api.patch(apiRoutes.workcycles.getSingleTaskRoute(data.id), data),
        onSuccess,
        onError,
    });
};

export const useDeleteTaskMutation = ({ onSuccess, onError }: { onSuccess?: any; onError?: any }) => {
    return useMutation({
        mutationFn: (taskId: string) => api.delete(apiRoutes.workcycles.getSingleTaskRoute(taskId)),
        onSuccess,
        onError,
    });
};

// Factory Queries
export const useGetAllFactoriesQuery = ({
    URLPageNumber,
    URLPageSize,
    URLsearchterm,
}: {
    URLPageNumber?: string;
    URLPageSize?: string;
    URLsearchterm?: string;
}) => {
    return useQuery(["workcycles", "factories", URLPageNumber, URLPageSize, URLsearchterm], () => {
        return api.get(apiRoutes.workcycles.getAllFactoriesRoute(URLPageNumber, URLPageSize, URLsearchterm));
    });
};

export const useAddFactoryMutation = ({ onSuccess, onError }: { onSuccess?: any; onError?: any }) => {
    return useMutation({
        mutationFn: (data: TFactory) => api.post(apiRoutes.workcycles.getAllFactoriesRoute(), data),
        onSuccess,
        onError,
    });
};

export const useUpdateFactoryMutation = ({ onSuccess, onError }: { onSuccess?: any; onError?: any }) => {
    return useMutation({
        mutationFn: (data: TFactory) => {
            if (!data.id) {
                throw new Error("Factory ID is required");
            }
            return api.patch(apiRoutes.workcycles.getSingleFactoryRoute(data.id), data);
        },
        onSuccess,
        onError,
    });
};

export const useDeleteFactoryMutation = ({ onSuccess, onError }: { onSuccess?: any; onError?: any }) => {
    return useMutation({
        mutationFn: (factoryId: string) => api.delete(apiRoutes.workcycles.getSingleFactoryRoute(factoryId)),
        onSuccess,
        onError,
    });
};

// Line Queries
export const useGetAllLinesQuery = ({
    URLPageNumber,
    URLPageSize,
    URLsearchterm,
    URLFactoryId,
}: {
    URLPageNumber?: string;
    URLPageSize?: string;
    URLsearchterm?: string;
    URLFactoryId?: string;
}) => {
    return useQuery(["workcycles", "lines", URLPageNumber, URLPageSize, URLsearchterm, URLFactoryId], () => {
        return api.get(apiRoutes.workcycles.getAllLinesRoute(URLPageNumber, URLPageSize, URLsearchterm, URLFactoryId));
    });
};

export const useAddLineMutation = ({ onSuccess, onError }: { onSuccess?: any; onError?: any }) => {
    return useMutation({
        mutationFn: (data: TAddLine) => api.post(apiRoutes.workcycles.getAllLinesRoute(), data),
        onSuccess,
        onError,
    });
};

export const useUpdateLineMutation = ({ onSuccess, onError }: { onSuccess?: any; onError?: any }) => {
    return useMutation({
        mutationFn: (data: TUpdateLine) => {
            return api.patch(apiRoutes.workcycles.getSingleLineRoute(data.id), data);
        },
        onSuccess,
        onError,
    });
};

export const useDeleteLineMutation = ({ onSuccess, onError }: { onSuccess?: any; onError?: any }) => {
    return useMutation({
        mutationFn: (lineId: string) => api.delete(apiRoutes.workcycles.getSingleLineRoute(lineId)),
        onSuccess,
        onError,
    });
};

// Workstation Queries
export const useGetAllWorkstationsQuery = ({
    URLPageNumber,
    URLPageSize,
    URLsearchterm,
    URLLineId,
}: {
    URLPageNumber?: string;
    URLPageSize?: string;
    URLsearchterm?: string;
    URLLineId?: string;
}) => {
    return useQuery(["workcycles", "workstations", URLPageNumber, URLPageSize, URLsearchterm, URLLineId], () => {
        return api.get(
            apiRoutes.workcycles.getAllWorkstationsRoute(URLPageNumber, URLPageSize, URLsearchterm, URLLineId)
        );
    });
};

export const useAddWorkstationMutation = ({ onSuccess, onError }: { onSuccess?: any; onError?: any }) => {
    return useMutation({
        mutationFn: (data: TAddWorkstation) => api.post(apiRoutes.workcycles.getAllWorkstationsRoute(), data),
        onSuccess,
        onError,
    });
};

export const useUpdateWorkstationMutation = ({ onSuccess, onError }: { onSuccess?: any; onError?: any }) => {
    return useMutation({
        mutationFn: (data: TUpdateWorkstation) => {
            return api.patch(apiRoutes.workcycles.getSingleWorkstationRoute(data.id), data);
        },
        onSuccess,
        onError,
    });
};

export const useDeleteWorkstationMutation = ({ onSuccess, onError }: { onSuccess?: any; onError?: any }) => {
    return useMutation({
        mutationFn: (workstationId: string) =>
            api.delete(apiRoutes.workcycles.getSingleWorkstationRoute(workstationId)),
        onSuccess,
        onError,
    });
};

// Model Queries
export const useGetAllTaskModelsQuery = ({
    URLPageNumber,
    URLPageSize,
    URLsearchterm,
    URLWorkstationId,
}: {
    URLPageNumber?: string;
    URLPageSize?: string;
    URLsearchterm?: string;
    URLWorkstationId?: string;
}) => {
    return useQuery(["workcycles", "models", URLPageNumber, URLPageSize, URLsearchterm, URLWorkstationId], () => {
        return api.get(
            apiRoutes.workcycles.getAllTaskModelsRoute(URLPageNumber, URLPageSize, URLsearchterm, URLWorkstationId)
        );
    });
};

export const useAddTaskModelMutation = ({ onSuccess, onError }: { onSuccess?: any; onError?: any }) => {
    return useMutation({
        mutationFn: (data: TAddTaskModel) => api.post(apiRoutes.workcycles.getAllTaskModelsRoute(), data),
        onSuccess,
        onError,
    });
};

export const useUpdateTaskModelMutation = ({ onSuccess, onError }: { onSuccess?: any; onError?: any }) => {
    return useMutation({
        mutationFn: (data: TUpdateTaskModel) => {
            return api.patch(apiRoutes.workcycles.getSingleTaskModelRoute(data.id), data);
        },
        onSuccess,
        onError,
    });
};

export const useDeleteTaskModelMutation = ({ onSuccess, onError }: { onSuccess?: any; onError?: any }) => {
    return useMutation({
        mutationFn: (taskModelId: string) => api.delete(apiRoutes.workcycles.getSingleTaskModelRoute(taskModelId)),
        onSuccess,
        onError,
    });
};

export const useImportDataMutation = ({ onSuccess, onError }: { onSuccess?: any; onError?: any }) => {
    return useMutation({
        mutationFn: (formData: FormData) => api.post(apiRoutes.workcycles.importDataRoute, formData),
        onSuccess,
        onError,
    });
};
