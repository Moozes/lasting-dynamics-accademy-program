import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getTodayDateString } from "../utils";

export const useSetURLParamsOnMount = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setSearchParams(
            {
                user_start_date: searchParams.get("user_start_date") || getTodayDateString(),
                user_end_date: searchParams.get("user_end_date") || getTodayDateString(),
                session_start_date: searchParams.get("session_start_date") || getTodayDateString(),
                session_end_date: searchParams.get("session_end_date") || getTodayDateString(),
                RAMP_start_date: searchParams.get("RAMP_start_date") || getTodayDateString(),
                RAMP_end_date: searchParams.get("RAMP_end_date") || getTodayDateString(),
            },
            { replace: true }
        );
    }, [searchParams]);
};
