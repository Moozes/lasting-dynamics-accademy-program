import { IPaginatedServerResponse } from "ui";

import { TDevice } from "@app-types/index";
import { api } from "@services/index";

import { apiRoutes } from "./apiRoutes";

export const readAllDevices = (params?: { search?: string; page?: string; page_size?: string }) => {
    return api.get<IPaginatedServerResponse<TDevice>>(apiRoutes.devices.getAllDevicesRoute(params));
};

export const readSingleDevice = (id: string) => {
    return api.get<TDevice>(apiRoutes.devices.getSingleDeviceRoute(id));
};
