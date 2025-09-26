import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { GoBackButton } from "@components/index";

type Props = HTMLDivProps;

export const MultiSessionDetailsPageSkeleton = (props: Props) => {
    const t = useTranslationV2();
    return (
        <div {...props}>
            <GoBackButton className="back-button" />
            <Typography variant="h4" className="title">
                {t("sessions_management.multi_sessions_comparison")}
            </Typography>
            <div className="export-pdf-container">
                <Skeleton variant="rectangular" className="btn" />
            </div>
            <Skeleton variant="rectangular" className="navbar" />
            <Skeleton variant="rectangular" className="table" />
            <Skeleton variant="rectangular" className="table" />
            <Skeleton variant="rectangular" className="table" />
        </div>
    );
};
