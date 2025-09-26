import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

import type { HTMLDivProps } from "ui";

import { GoBackButton } from "@components/GoBackButton";

type Props = HTMLDivProps & {
    title: string;
};

export const MultiResultsPageSkeleton = ({ title, ...props }: Props) => {
    return (
        <div {...props}>
            <GoBackButton />
            <Typography className="title" variant="h4">
                {title}
            </Typography>
            <div className="btn-skeleton">
                <Skeleton variant="rectangular" className="btn" />
            </div>
            <Skeleton variant="rectangular" className="card" />
        </div>
    );
};
