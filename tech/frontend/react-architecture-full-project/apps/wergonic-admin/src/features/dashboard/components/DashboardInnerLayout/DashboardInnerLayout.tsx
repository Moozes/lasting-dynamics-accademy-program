import { FC, PropsWithChildren, ReactNode } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { type HTMLDivProps } from "ui";

interface IDashboardInnerLayout {
    header: string;
    pageActions?: ReactNode;
    goBackButton?: ReactNode;
}

type Props = HTMLDivProps & PropsWithChildren<IDashboardInnerLayout>;

export const DashboardInnerLayout: FC<Props> = ({ children, header, pageActions, goBackButton, ...props }: Props) => {
    return (
        <div {...props}>
            <Container className="dashboard-inner-container">
                {goBackButton && <Box className="go-back-button">{goBackButton}</Box>}
                <Box className="header-container">
                    <div className="header-title">{header}</div>
                    {pageActions && <div className="page-actions">{pageActions}</div>}
                </Box>
                {children}
            </Container>
        </div>
    );
};
