export type TSensor = {
    sensor_id: string;
    limb: string;
};

export type TDevice = {
    id: string;
    created_at: string;
    serial: string;
    firmware_version: string;
    organization: string;
    worker: string;
    locale: string;
    device_model: string;
    sensors: TSensor[];
};
