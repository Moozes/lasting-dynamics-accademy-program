import { TOptionsBase } from "i18next";

import { IEvent } from "@app-types/index";

export enum SessionStatusEnum {
    ONGOING = "ONGOING",
    PAUSED = "PAUSED",
    FAILED = "FAILED",
    FINISHED = "FINISHED",
    INTERRUPTED = "INTERRUPTED",
}

interface IWorker {
    id: string;
    first_name: string;
    last_name: string;
    gender: string;
    age: string;
    dominant_arm: string;
    weight: string;
    resting_heart_rate: string;
    comment: string;
}

interface IRecordedBy {
    id: string;
    first_name: string;
    last_name: string;
}
export interface ISession {
    id: string;
    worker: IWorker;
    recorded_by: IRecordedBy;
    started_at: string;
    update_at: string;
    ended_at: string;
    status: string;
    device: any;
    measurments_csv: string;
    logs: string;
    calculations_completed: boolean;
    processing: boolean;
    workplace: string | null;
    duration: number | null;
    ai_report: {
        content: string;
        language: string;
    } | null;
    has_all_limbs: boolean;
    has_measurments: boolean;
    limbs_info: {
        missing_limbs: string[];
    } | null;
}

export type IServerResponseSession = ISession & {
    assessments: {
        id: string;
        status: string;
        assesment_category: string;
        source: string;
    }[];
    events: IEvent[];
};

export interface FinishedSessionsAPIResponse {
    results: Array<ISession>;
    count: string;
    next: string;
    previous: string;
    num_pages: number;
}

export interface IBarDataItem {
    label: string;
    value: number;
}

export interface ILineDataItem {
    x: string;
    y: number;
}

export interface IDetailedChartStatsItem {
    bar_data: IBarDataItem[];
    line_data: ILineDataItem[];
    id: string;
    title: string;
    maxVal: number;
    minVal: number;
    percentile_10: number;
    percentile_50: number;
    percentile_90: number;
    percentile_99: number;
}

interface TimeData {
    [key: string]: number;
}

export interface ITnoStatsData {
    limb: string;
    time: TimeData;
}

export interface IHrStatsData {
    name: string;
    unit: string;
    value: string | number | null;
}

export interface IHrStatsResponse {
    nonlinear_results: IHrStatsData[];
    time_domain_features: IHrStatsData[];
    frequency_domain_features: IHrStatsData[];
}

export interface ITempStatsData {
    max: number;
    min: number;
    limb: string;
    mean: number;
    median: number;
}

export interface IWristDistanceItem {
    line_data: ILineDataItem[];
    maxVal: number;
    minVal: number;
    zone_under_30cm: number;
    zone_30_to_50cm: number;
    zone_above_50cm: number;
}

export interface IDetailedChartStatsAPIResponse {
    posture: IDetailedChartStatsItem[];
    speed_of_movement: IDetailedChartStatsItem[];
    wrist_distance: IWristDistanceItem[];
}

export interface IViewLogsButton {
    selectedRow: ISession;
}

export interface IEndSessionButton {
    selectedSession: ISession;
}

export type ISelectedSessionProp = {
    selectedSession: IServerResponseSession;
};

export interface ISessionBasicStats {
    average: number;
    data: {
        duration: number;
        id: string;
        label: string;
        value: number;
    }[];
    title: string;
}

export interface SessionStatsPageProps {
    session: ISession;
    sessionStats?: any;
    tnoStats?: ITnoStatsData[];
    hrStats?: IHrStatsResponse;
    tempStats?: ITempStatsData[];
    tasksStats?: TaskData[];
}

export interface ResultsPdfCardProps {
    session: ISession;
    sessionStats?: any;
    tnoStats?: ITnoStatsData[];
    hrStats?: IHrStatsResponse;
    tempStats?: ITempStatsData[];
    tasksStats?: TaskData[];
}

export interface ResultsPdfTemplateProps {
    session: ISession;
    sessionStats?: any;
    tnoStats?: ITnoStatsData[];
    hrStats?: IHrStatsResponse;
    tempStats?: ITempStatsData[];
    tasksStats?: TaskData[];
    postureChartImage?: string | null;
    speedOfMovementChartImage?: string | null;
}

export interface generateExcelSessionStatsProps {
    dataObj?: ISessionBasicStats;
    translateTitle: (title: string) => string;
    t: (
        key: string | string[],
        options?:
            | (TOptionsBase &
                  object & {
                      defaultValue: string;
                  })
            | undefined
    ) => string;
}

export interface generateExcelSessionStatsHookProps {
    dataList?: ISessionBasicStats[];
    translateTitle: (title: string) => string;
    t: (
        key: string | string[],
        options?:
            | (TOptionsBase &
                  object & {
                      defaultValue: string;
                  })
            | undefined
    ) => string;
}

export type IMultiSessionTemperatureStats = {
    mean: string;
    max: string;
    min: string;
    median: string;
};

export type IMultiSessionTemperatureTableProps = {
    sessionsArray: {
        rightArm: IMultiSessionTemperatureStats;
        leftArm: IMultiSessionTemperatureStats;
        trunk: IMultiSessionTemperatureStats;
        chestStrap: IMultiSessionTemperatureStats;
    }[];
};

export type IMultiSessionNonlinearStats = {
    SD1: string;
    SD2: string;
    SD2_SD1: string;
    sampleEntropy: string;
    cardiacSympatheticIndex: string;
    cardiacVagalIndex: string;
    modifiedCardiacSympatheticIndex: string;
};

export type IMultiSessionNonlinearTableProps = {
    sessionArray: Record<string, string | number>[];
};

export type IHorizontalVariableUnitTableProps = {
    sessionArray: Record<string, string | number>[];
    variableUnitArray: {
        variableObjectKey: string;
        variable: string;
        unit: string;
    }[];
};

export type IMultiSessionAnglesTableProps = {
    tableTitle: string;
    scale: string;
    measurement1: string;
    measurement2: string;
    sessionCount: number;
    rowsArray: (string | number)[][];
    hasStatusCircles: boolean;
};

export enum LimbsCamelCaseEnum {
    chestStrap = "chestStrap",
    trunk = "trunk",
    leftArm = "leftArm",
    rightArm = "rightArm",
}

export type IGetSelectedSessionsStatsQueryResponse = {
    id: string;
    calculations: {
        posture: Record<LimbsCamelCaseEnum, ISessionBasicStats>;
        speed_of_movement: Record<LimbsCamelCaseEnum, ISessionBasicStats>;
    } | null;
    tno_calculations: ITnoStatsData[] | null;
    temperature_calculations: ITempStatsData[] | null;
    heart_rate_calculations: IHrStatsResponse | null;
    tasks_percentiles_calculations: string | null;
    worker_details: {
        first_name: string;
        last_name: string;
    };
    started_at: string;
}[];
interface Percentiles {
    [limb: string]: number;
}

export interface percentiles {
    [percentile: string]: Percentiles;
}

export interface TaskData {
    task: string;
    total_duration: number;
    elevation_angle: percentiles;
    angular_velocity: percentiles;
    forward_bending: percentiles;
    side_bending: percentiles;
}

export enum SessionDetailsTabsEnum {
    posture = "Posture",
    speedOfMovement = "Speed of movement",
}

export enum SessionSegmentEnum {
    wholeMeasurement = "wholeMeasurement", // this enum starts from 1 instead of 0
    specificTask = "specificTask",
    specificTimeframe = "specificTimeframe",
}

export type IGenerateAssessmentValues = {
    category: string;
    task: string;
    start_time: string;
    end_time: string;
    sessionSegment: SessionSegmentEnum | "";
    takt_time: number;
};

export interface IUpdateUserData {
    ai_consent?: boolean;
}

export enum TNOAnglesEnum {
    // trunk
    _0_to_20 = "0°-20°",
    lt0_or_gt20 = "<0° or >20°",
    // other limbs
    _10_to_20 = "10°-20°",
    _20_to_60 = "20°-60°",
    lt10_or_gt60 = "<10° or >60°",
}
