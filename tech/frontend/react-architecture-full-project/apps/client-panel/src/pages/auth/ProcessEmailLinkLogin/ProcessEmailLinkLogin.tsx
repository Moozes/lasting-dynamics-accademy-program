import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailLink } from "firebase/auth";

import { Box, CircularProgress } from "@mui/material";

export const ProcessEmailLinkLogin: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const link = queryParams.get("link");
        const email = localStorage.getItem("login-email");
        if (link) {
            // Validate the sign-in link

            signInWithEmailLink(auth, email || "", link)
                .then(() => {
                    // Successfully signed in
                    // User will be redirected to root automatically when authAtom is updated
                })
                .catch(() => {
                    // Handle error
                    navigate("/auth/login");
                });
        } else {
            navigate("/auth/login");
        }
    }, [location, navigate, auth]);

    return (
        <Box width="100vw" height="100vh" display="flex" alignItems="center" justifyContent="center">
            <CircularProgress />
        </Box>
    );
};
