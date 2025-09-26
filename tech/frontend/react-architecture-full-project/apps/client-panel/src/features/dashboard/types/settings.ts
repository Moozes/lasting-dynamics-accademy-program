import { WergonicUser } from "@app-types/index";

export interface UpdateUserProps {
    email?: string;
    first_name?: string;
    last_name?: string;
    personal_number?: string;
    weight?: string;
    resting_heart_rate?: string;
    dominant_arm?: string;
    date_of_birth?: string;
    unit?: string;
    ai_consent?: boolean;
}

export type SubmitProps = WergonicUser & {
    password: string;
    new_password: string;
    password_confirmation: string;
};
