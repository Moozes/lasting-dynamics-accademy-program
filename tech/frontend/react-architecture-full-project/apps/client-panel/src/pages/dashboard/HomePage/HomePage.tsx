import { HTMLProps } from "react";
import { useSearchParams } from "react-router-dom";

import {
    getTodayDateString,
    HomePageSkeleton,
    LicenseStatistics,
    SessionsStatistics,
    useGetOrganizationStatisticsQuery,
    UsersStatistics,
    useSetURLParamsOnMount,
    WelcomeCard,
} from "@features/statistics/index";

export const HomePage = (props: HTMLProps<HTMLDivElement>) => {
    useSetURLParamsOnMount();
    const [searchParams] = useSearchParams();
    const { data, isLoading, isError, error } = useGetOrganizationStatisticsQuery(
        searchParams.get("user_start_date") || getTodayDateString(),
        searchParams.get("user_end_date") || getTodayDateString(),
        searchParams.get("session_start_date") || getTodayDateString(),
        searchParams.get("session_end_date") || getTodayDateString(),
        searchParams.get("RAMP_start_date") || getTodayDateString(),
        searchParams.get("RAMP_end_date") || getTodayDateString()
    );

    let template = null;
    if (isLoading) {
        template = <HomePageSkeleton />;
    } else if (isError) {
        throw new Error("React query error thrown manually from home page", { cause: error });
    } else {
        template = (
            <>
                <WelcomeCard className="welcome-card" />
                <UsersStatistics className="users-statistics" statistics={data.data.stats} />
                <SessionsStatistics className="sessions-statistics" statistics={data.data.stats} />
                <LicenseStatistics className="license-statistics" statistics={data.data.stats} />
            </>
        );
    }

    return (
        <div {...props}>
            <div className="container">{template}</div>
        </div>
    );
};
