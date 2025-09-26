import { Dispatch, SetStateAction } from "react";
import { Row } from "react-table";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { AnyObjectWithId, useTranslationV2 } from "ui";

import { archiveOrganizations } from "@queries/index";

export const useArchiveOrganizationsMutation = (
    selectedRows: Row<AnyObjectWithId>[],
    setSelectedRows: Dispatch<SetStateAction<Row<AnyObjectWithId>[]>>,
    archive: boolean
) => {
    const queryClient = useQueryClient();
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();

    return useMutation({
        mutationFn: async () => {
            const organizationIds = selectedRows.map((row) => row.original.id);
            return archiveOrganizations({
                organizations_ids: organizationIds,
                is_archived: archive,
            });
        },
        onSuccess: () => {
            enqueueSnackbar(t("queries.entity_updated_successfully", { entity: t("queries.entities.organization") }));
            setSelectedRows([]);
            queryClient.invalidateQueries(["organizations"]);
        },
        onError: () => {
            enqueueSnackbar(t("queries.something_went_wrong"), { severity: "error" });
        },
    });
};
