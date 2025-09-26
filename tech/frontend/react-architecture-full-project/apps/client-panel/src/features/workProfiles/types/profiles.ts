export interface IWorkerAccountCreationRequest {
    email: string;
    profile_id: string;
    org_id: number;
}

export interface IWorkerProfile {
    id: number;
    consultant?: string;
    weight?: string;
    resting_heart_rate?: string;
    gender?: string;
    dominant_arm?: string;
    date_of_birth?: string;
    age?: string;
    comment?: string;
    first_name: string;
    last_name: string;
    unit?: string;
    image?: string;
    personal_number?: string;
    is_main?: boolean;
}

export interface IWorkerProfileApiResponse {
    results: Array<IWorkerProfile>;
    count: string;
    next: string;
    previous: string;
    num_pages: number;
}
