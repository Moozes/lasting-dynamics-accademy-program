import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { GoBackButton } from "@components/index";

type Props = HTMLDivProps;

export const REBAResultsPageSkeleton = (props: Props) => {
    const t = useTranslationV2();
    return (
        <div {...props}>
            <GoBackButton />
            <Typography className="page-title">{t("rula_assessments.rula_assessment")}</Typography>
            <div className="assessment-info">
                <Skeleton variant="rectangular" className="left" />
                <Skeleton variant="rectangular" className="right" />
            </div>
            <Skeleton variant="rectangular" className="card" />
            <Skeleton variant="rectangular" className="card" />
            <Skeleton variant="rectangular" className="card" />
        </div>
    );
};
