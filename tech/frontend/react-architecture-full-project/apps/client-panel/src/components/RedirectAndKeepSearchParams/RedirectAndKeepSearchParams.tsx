import { Navigate, NavigateProps, useLocation } from "react-router-dom";

type Props = NavigateProps;

export const RedirectAndKeepSearchParams = ({ to, ...props }: Props) => {
    const location = useLocation();

    return <Navigate {...props} to={`${to}${location.search}`} />;
};
