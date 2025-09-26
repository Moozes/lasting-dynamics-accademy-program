import { Row } from "react-table";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { useTranslationV2 } from "ui";

import { TOrganization } from "@app-types/index";
import { updateOrganization } from "@queries/index";

export const useActivateOrganizationMutation = (row: Row<TOrganization>) => {
    const queryClient = useQueryClient();
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();

    return useMutation({
        mutationFn: async () => {
            const formData = new FormData();
            formData.append("is_active", (!row.original.is_active).toString());

            return updateOrganization({
                id: row.original.id,
                formData,
            });
        },
        onSuccess: () => {
            enqueueSnackbar(t("queries.entity_updated_successfully", { entity: t("queries.entities.organization") }));
            queryClient.invalidateQueries(["organizations"]);
        },
        onError: () => {
            enqueueSnackbar(t("queries.something_went_wrong"), { severity: "error" });
        },
    });
};
