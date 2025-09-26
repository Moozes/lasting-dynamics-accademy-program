import { ReactNode } from "react";

export type TFirmware = {
    id: string;
    description: string;
    mobile_version: string;
    release_date: string;
    file_size: string;
    firmware_version: string;
    firmware_url: string;
    is_current: boolean;
};

export type TAddFirmwareValues = Pick<TFirmware, "description" | "mobile_version" | "firmware_version"> & {
    zip_file: File | null;
};

export type TColumn = {
    Header: ReactNode | ((props: { column: TColumn }) => ReactNode);
    accessor: keyof TFirmware;
    Cell?: (props: { value: any; row: TFirmware }) => ReactNode;
    id?: string;
};
