import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { collection, onSnapshot } from "firebase/firestore";
import { useAtomValue } from "jotai";

import { authAtom } from "@atoms/index";
import { Firestore } from "@services/index";

export const usePopper = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const onClose = () => {
        setAnchorEl(null);
    };

    return {
        open,
        anchorEl,
        handleClick,
        onClose,
    };
};

// subscribe to firestore
// refetch sessions, assessments and notifications on each notification change
export const useSubscribeToNotifications = () => {
    const auth = useAtomValue(authAtom);
    const organizationId = auth.wergonicUser?.organization?.id;
    const userId = auth.wergonicUser?.id;
    const queryClient = useQueryClient();
    useEffect(() => {
        const notificationsRef = collection(Firestore, `organizations/${organizationId}/users/${userId}/notifications`);
        const unsubscribe = onSnapshot(notificationsRef, () => {
            queryClient.invalidateQueries({ queryKey: ["notifications"] });
            queryClient.invalidateQueries({ queryKey: ["sessions"] });
            queryClient.invalidateQueries({ queryKey: ["Assessments"] });
        });
        return unsubscribe;
    }, [organizationId, userId]);
};
