import { Row } from "react-table";

export interface IDeleteMultipleUsersButton {
    selectedRows: Row[];
}

export type IAddNewUser = {
    email: string;
    first_name: string;
    last_name: string;
    role: string;
    personal_number: string;
    unit: string;
    send_email_to_creator: boolean;
    weight: string;
    resting_heart_rate: string;
    dominant_arm: string;
    date_of_birth: string;
    gender: string;
    consultant_id: string | undefined;
};

export type IHandleMenuClose = {
    handleMenuClose: () => void;
};
