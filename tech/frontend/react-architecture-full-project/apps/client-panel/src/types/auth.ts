import { User as FirebaseUser } from "firebase/auth";

export type WergonicUser = {
    id?: string;
    first_name?: string;
    last_name?: string;
    full_name?: string;
    email?: string;
    start_date?: string;
    personal_number?: string;
    is_active?: boolean;
    is_verified?: boolean;
    send_email_to_creator?: boolean;
    organization?: {
        id?: string;
        name: string;
        max_number_admins: string;
        max_number_sessions_month: string;
        max_number_workers: string;
        number_of_admins: string;
        number_of_employees: string;
        max_number_assessments_month: string;
        number_of_sessions_per_month: string;
        number_of_assessments_per_month: string;
        country: string | null;
    };
    profile?: {
        id?: string;
        comment?: string;
        date_of_birth?: string;
        dominant_arm?: string;
        gender?: string;
        is_main?: boolean;
        resting_heart_rate?: string;
        weight?: string;
        consultant?: {
            id: string;
        };
    }[];
    user_local?: string;
    role?: string;
    image?: string;
    unit?: string;
    is_activated_in_org: boolean;
    ai_consent: boolean;
    ramp_limit_display: string;
};

export interface AuthUser {
    user: FirebaseUser | null;
    wergonicUser: WergonicUser | null;
}

export type WergonicUserError = {
    response: {
        data?: {
            detail?: string;
            error?: string;
        };
    };
};

export type SetAtom<Args extends unknown[], Result> = (...args: Args) => Result;
