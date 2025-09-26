import { FC } from "react";
import { SnackbarProvider } from "notistack";

import { NotistackAlert } from "ui";

interface INotistackProviderProps {
    children: React.ReactNode;
}

export const NotistackProvider: FC<INotistackProviderProps> = ({ children }) => {
    return (
        <SnackbarProvider
            preventDuplicate
            autoHideDuration={3000}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            Components={{
                default: NotistackAlert,
            }}
        >
            {children}
        </SnackbarProvider>
    );
};
