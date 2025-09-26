import { AxiosResponse } from "axios";
import { useSnackbar } from "notistack";

import { useTranslationV2 } from "ui";

import { useDownloadMultiSessionExcelStatsMutation } from "@features/sessions/index";

const createAndDownloadFile = (response: AxiosResponse<Blob>, fileName: string) => {
    const data = response?.data;
    const url = window.URL.createObjectURL(new Blob([data]));

    const link = document.createElement("a");
    link.href = url;

    const contentDisposition = response?.headers?.["content-disposition"];
    const filename = contentDisposition ? contentDisposition.split("filename=")[1] : `${fileName}.xlsx`;
    link.setAttribute("download", filename);

    document.body.appendChild(link);
    link.click();

    link.parentNode?.removeChild(link);
    window.URL.revokeObjectURL(url);
};

export const useDownloadExcel = (fileName: string) => {
    const { enqueueSnackbar } = useSnackbar();
    const t = useTranslationV2();
    const {
        mutate: getFiles,
        isLoading,
        reset,
    } = useDownloadMultiSessionExcelStatsMutation({
        onSuccess: (response: AxiosResponse<Blob>) => {
            const data = response?.data;
            if (!data) {
                const message = t("sessions_management.session_stats.no_download_data");
                enqueueSnackbar(message, { severity: "error" });
                return;
            }
            createAndDownloadFile(response, fileName);
            reset();
        },
        onError: () => {
            const message = t("Something_went_Wrong");
            enqueueSnackbar(message, { severity: "error" });
        },
    });

    return { getFiles, isLoading };
};
