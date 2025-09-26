import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { signOut } from "firebase/auth";

import { FirebaseAuth } from "@services/index";

export const useFirebaseLogout = () => {
    const queryClient = useQueryClient();
    const [logoutLoading, setLogoutLoading] = useState(false);
    const handleLogout = async () => {
        setLogoutLoading(true);
        await signOut(FirebaseAuth);
        queryClient.clear();
        setLogoutLoading(false);
    };
    return {
        handleLogout,
        logoutLoading,
    };
};
