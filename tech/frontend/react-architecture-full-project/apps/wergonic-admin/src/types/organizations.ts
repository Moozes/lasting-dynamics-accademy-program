export type TOrganization = {
    id: string;
    name: string;
    country: string;
    type: string;
    cnr: string;
    industry: string;
    number_of_employees: string;
    number_of_admins: string;
    number_of_sessions_per_month: string;
    max_number_assessments_month: string;
    max_number_workers: string;
    max_number_admins: string;
    max_number_sessions_month: string;
    ai_engine: string;
    current_subscription: string | null;
    license_expiration: string | null;
    logo: string | null;
    is_archived: boolean;
    is_active: boolean;
};

export type TAddOrganizationValues = Pick<
    TOrganization,
    | "name"
    | "country"
    | "type"
    | "industry"
    | "cnr"
    | "max_number_workers"
    | "max_number_admins"
    | "max_number_sessions_month"
    | "max_number_assessments_month"
> & { admin_email: string };

export type TEditOrganizationValues = Pick<
    TOrganization,
    | "id"
    | "name"
    | "country"
    | "type"
    | "industry"
    | "cnr"
    | "max_number_workers"
    | "max_number_admins"
    | "max_number_sessions_month"
    | "max_number_assessments_month"
>;
