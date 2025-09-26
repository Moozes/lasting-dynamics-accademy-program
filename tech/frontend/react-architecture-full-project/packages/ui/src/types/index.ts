import { Row } from "react-table";

import { AnyObject } from "./global";

export { UserRoleEnum } from "./roles";

export type ISelectedReactTableRowsAtom = {
    toggleRowSelection: (row: Row) => void;
    selectedReactTableRows: Row<{
        id: string;
    }>[];
    selectedRowIds: Record<string, boolean>;
    setSelectedReactTableRows: React.Dispatch<React.SetStateAction<Row<{ id: string }>[]>>;
};

export type IServerError = {
    detail: string;
};

export type IPaginatedServerResponse<IResult = AnyObject> = {
    count: number;
    num_pages: number;
    next: string | null;
    previous: string | null;
    results: IResult[];
};

export enum LimbsEnum {
    chestStrap = "Chest Strap",
    trunk = "Trunk",
    leftArm = "Left Arm",
    rightArm = "Right Arm",
    head = "Head",
    hand = "Hand",
    forearm = "Forearm",
    wrist = "Wrist",
    headForwardBackwardBending = "Head (Forward/Backward Bending)",
    trunkForwardBackwardBending = "Trunk (Forward/Backward Bending)",
    rightArmElevationAngle = "Right arm (Elevation Angle)",
    leftArmElevationAngle = "Left arm (Elevation Angle)",
}
