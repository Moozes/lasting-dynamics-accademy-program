import { IPaginatedServerResponse } from "ui";

export type ILabelAndCategory = {
    id: number;
    label_name: string;
    label_category: {
        id: number;
        parent: number | null;
        organization: number;
        category_name: string;
    };
    is_private: boolean;
};

export type IuseGetLabelsQueryResponse = IPaginatedServerResponse<ILabelAndCategory>;

export type IAddEvent = {
    start_time?: string;
    end_time?: string;
    labels: number[];
};

export type IUpdateEvent = {
    id: number;
    start_time?: string;
    end_time?: string;
    whole_session?: boolean;
    labels?: number[];
};

export type IEvent = {
    id: number;
    labels: ILabelAndCategory[];
    start_time: string | null;
    end_time: string | null;
    session: number;
    created_by: number;
};

export enum CategoryTypesEnum {
    WORK_TASK = "WORK_TASK",
    WORK_LABEL = "WORK_LABEL",
}
