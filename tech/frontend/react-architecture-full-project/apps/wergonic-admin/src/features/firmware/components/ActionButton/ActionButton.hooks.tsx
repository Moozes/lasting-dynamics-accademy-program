import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { useTranslationV2 } from "ui";

import { updateFirmware } from "@queries/index";

export const useRevertFirmwareMutation = () => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => {
            const formData = new FormData();
            formData.append("is_current", "true");
            return updateFirmware(id, formData);
        },
        onSuccess: () => {
            enqueueSnackbar(t("queries.firmware_reverted_success"), { severity: "success" });
            queryClient.invalidateQueries(["devices", "firmwares"]);
        },
        onError: () => {
            enqueueSnackbar(t("queries.something_went_wrong"), { severity: "error" });
        },
    });
};
