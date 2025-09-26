import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useSnackbar } from "notistack";

import { useTranslationV2 } from "ui";

import { WergonicUser } from "@app-types/index";
import { authAtom } from "@atoms/index";
import { useUpdateActiveOrganizationMutation } from "@features/dashboard/queries";
import routes from "@routes/routes";
import { api } from "@services/index";

export const useUpdateActiveOrganization = () => {
    const [auth, setAuth] = useAtom(authAtom);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const t = useTranslationV2();
    const queryClient = useQueryClient();

    const {
        mutate: updateActiveOrganization,
        isLoading: updateActiveOrganizationIsLoading,
        reset: updateActiveOrganizationReset,
    } = useUpdateActiveOrganizationMutation({
        onSuccess: async () => {
            enqueueSnackbar(t("auth.login.organization_change"));
            updateActiveOrganizationReset();
            const newWergonicUser = await api.get<{ user: WergonicUser }>("/users/current");
            const authTmp = {
                ...auth,
                wergonicUser: { ...newWergonicUser.data.user },
            };
            setAuth(authTmp);
            queryClient.clear();
            // redirect to root route
            navigate(routes.root);
        },
        onError: () => {
            enqueueSnackbar(t("auth.change_organization_error"), { severity: "error" });
            updateActiveOrganizationReset();
        },
    });

    return {
        updateActiveOrganization,
        updateActiveOrganizationIsLoading,
    };
};
