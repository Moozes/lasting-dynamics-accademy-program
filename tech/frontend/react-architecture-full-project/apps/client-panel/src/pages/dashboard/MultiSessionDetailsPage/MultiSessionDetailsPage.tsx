import { Outlet, useSearchParams } from "react-router-dom";

import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { GoBackButton, SubNavbar } from "@components/index";
import {
    MultiSessionDetailsPageSkeleton,
    MultiSessionWorkersTable,
    useGetSelectedSessionsStatsQuery,
} from "@features/sessions/index";
import routes from "@routes/routes";

import { DownloadReportsButton } from "./DownloadReportsButton";
import { useMultiSessionDetailsLinks } from "./MultiSessionDetailsPage.hooks";

type Props = HTMLDivProps;

export const MultiSessionDetailsPage = (props: Props) => {
    const t = useTranslationV2();
    const subNavProps = useMultiSessionDetailsLinks();
    const [searchParams] = useSearchParams();
    const ids = searchParams.get("ids") || "";
    const { data, isError, isLoading, error } = useGetSelectedSessionsStatsQuery(ids);

    if (isLoading) return <MultiSessionDetailsPageSkeleton />;
    if (isError)
        throw Error(`React query error thrown manually from MultiSessionDetailsPage ${error.response?.data.detail}`);
    return (
        <div {...props}>
            <GoBackButton to={`${routes.dashboard.sessions}?tab=Finished`} className="back-button" />
            <Typography variant="h4" className="title">
                {t("sessions_management.multi_sessions_comparison")}
            </Typography>
            <div className="export-pdf-container">
                <DownloadReportsButton />
            </div>
            <SubNavbar {...subNavProps} className="sub-navbar" />
            <div className="outlet-container">
                <MultiSessionWorkersTable className="workers-table" sessions={data.data} />
                <Outlet />
            </div>
        </div>
    );
};
