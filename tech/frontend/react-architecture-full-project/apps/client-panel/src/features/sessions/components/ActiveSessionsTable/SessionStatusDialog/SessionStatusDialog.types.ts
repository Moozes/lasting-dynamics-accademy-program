type IDeviceBase = {
    limb: string;
};

export type IDeviceShape1 = {
    status: string;
    battery: number;
    deviceId: string;
};

export type IDeviceShape2 = {
    device_serial: string;
    firmware_version: string;
};

export type IDevice = IDeviceBase | IDeviceShape1 | IDeviceShape2;
