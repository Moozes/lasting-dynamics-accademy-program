import { IPaginatedServerResponse } from "ui";

import { TFirmware } from "@app-types/index";
import { api } from "@services/index";

import { apiRoutes } from "./apiRoutes";

export const createFirmware = (data: FormData) => api.post(apiRoutes.firmwares.getAllFirmwaresRoute(), data);

export const updateFirmware = (id: string, data: FormData) =>
    api.patch(apiRoutes.firmwares.getSingleFirmwareRoute(id), data);

export const readAllFirmwares = (params?: {
    search?: string;
    page?: string;
    page_size?: string;
    is_current?: boolean;
}) => api.get<IPaginatedServerResponse<TFirmware>>(apiRoutes.firmwares.getAllFirmwaresRoute(params));

export const readSingleFirmware = (id: string) => api.get<TFirmware>(apiRoutes.firmwares.getSingleFirmwareRoute(id));
