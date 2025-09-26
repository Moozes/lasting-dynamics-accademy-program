import { useMutation } from "@tanstack/react-query";

import { api, apiRoutes } from "@services/index";

import { IAddCategoryAndLabels, IEditCategoryAndLabels } from "../types";

export const useAddCategoryAndLabelsMutation = ({
    organizationId,
    onSuccess,
    onError,
}: {
    organizationId?: string;
    onSuccess?: any;
    onError?: any;
}) => {
    return useMutation({
        mutationFn: (data: IAddCategoryAndLabels) => {
            return api.post(apiRoutes.categoryAndLabels.addCategoryAndLabelsRoute(organizationId), {
                ...data,
            });
        },
        onSuccess,
        onError,
    });
};

export const useEditCategotyAndLabelsMutation = ({
    organizationId,
    onSuccess,
    onError,
}: {
    organizationId?: string;
    onSuccess?: any;
    onError?: any;
}) => {
    return useMutation({
        mutationFn: (data: IEditCategoryAndLabels) => {
            return api.patch(apiRoutes.categoryAndLabels.editCategoryAndLabelsRoute(data.id, organizationId), {
                ...data,
            });
        },
        onSuccess,
        onError,
    });
};
