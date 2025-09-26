import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { GoBackButton } from "@components/index";

type Props = HTMLDivProps;

export const RULADetailPageSkeleton = (props: Props) => {
    const t = useTranslationV2();
    return (
        <div {...props}>
            <GoBackButton className="goback-button" />
            <Typography className="page-title">{t("rula_assessments.rula_assessment")}</Typography>
            <div className="assessment-info">
                <Skeleton variant="rectangular" className="left" />
                <Skeleton variant="rectangular" className="right" />
            </div>
            <Skeleton variant="rectangular" className="navigation" />
            <Skeleton variant="rectangular" className="form-card-1" />
            <Skeleton variant="rectangular" className="form-card-2" />
            <Skeleton variant="rectangular" className="form-card-2" />
            <Skeleton variant="rectangular" className="form-card-2" />
        </div>
    );
};
