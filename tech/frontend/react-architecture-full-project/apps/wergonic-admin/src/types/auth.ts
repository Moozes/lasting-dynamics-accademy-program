import { User } from "firebase/auth";

export type TWergonicUser = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    start_date: string;
    personal_number: string;
    is_active: boolean;
    is_verified: boolean;
    send_email_to_creator: boolean;
    organization: {
        id: string;
        name: string;
        max_number_admins: string;
        max_number_sessions_month: string;
        max_number_workers: string;
        number_of_admins: string;
        number_of_employees: string;
        max_number_ramp_month: string;
        number_of_sessions_per_month: string;
        country: string | null;
        ai_engine: string;
        current_subscription: string | null;
        license_expiration: string | null;
    };
    profile: {
        id: string;
        comment: string;
        date_of_birth: string;
        dominant_arm: string;
        gender: string;
        is_main: boolean;
        resting_heart_rate: string;
        weight: string;
        consultant: {
            id: string;
        };
    }[];
    user_local: string;
    role: string;
    image: string;
    unit: string;
    is_activated_in_org: boolean;
};

export type TUser = {
    firebaseUser: User | null;
    wergonicUser: TWergonicUser | null;
};

export type TOrganizationUser = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    user_locale: string;
    personal_number: string | null;
    subject_ID: number | null;
    organization: string;
    role: string;
};
