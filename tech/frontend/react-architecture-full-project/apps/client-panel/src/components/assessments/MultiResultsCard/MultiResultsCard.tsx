import Typography from "@mui/material/Typography";

import type { HTMLDivProps } from "ui";

type Props = HTMLDivProps & { title: string };

export const MultiResultsCard = ({ title, children, ...props }: Props) => {
    return (
        <div {...props}>
            <Typography variant="h4" className="title">
                {title}
            </Typography>
            {children}
        </div>
    );
};
