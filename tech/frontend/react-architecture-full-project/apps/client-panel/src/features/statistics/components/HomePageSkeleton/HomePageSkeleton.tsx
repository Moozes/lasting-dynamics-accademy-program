import Skeleton from "@mui/material/Skeleton";

import type { HTMLDivProps } from "ui";

type Props = HTMLDivProps;

export const HomePageSkeleton = (props: Props) => {
    return (
        <div {...props}>
            <Skeleton variant="rectangular" className="welcome-card" />
            <div className="grid">
                <Skeleton variant="rectangular" className="item" />
                <Skeleton variant="rectangular" className="item" />
            </div>
            <Skeleton variant="rectangular" className="sessions-statistics" />
            <Skeleton variant="rectangular" className="license-statistics" />
        </div>
    );
};
