import React from "react";

export interface AuthPageLayoutProps {
    TopMessage?: string;
    form?: React.ReactNode;
    footer?: React.ReactNode;
    rightSideAsset: React.ReactNode;
    rightSideBgColor: string;
    leftSideAsset?: React.ReactNode;
}
