/* eslint prefer-template: off */
import { AxiosResponse } from "axios";
import { useSnackbar } from "notistack";

import { useTranslationV2 } from "ui";

import { useDownloadSessionsStatsMutation } from "../../queries";

const decodeBase64Utf8 = (s: string): string => {
    // Decode a base64 string to UTF-8 using template literals for constructing the percent-encoded string
    return decodeURIComponent(
        atob(s)
            .split("")
            .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
            .join("")
    );
};

const decodeContentDisposition = (contentDisposition: string | null): string | null => {
    if (!contentDisposition) return null;

    // Check for RFC 5987 encoding, which can include UTF-8 characters directly in the filename*= field.
    let match = contentDisposition.match(/filename\*=UTF-8''(.+)/i);
    if (match && match[1]) {
        return decodeURIComponent(match[1]);
    }

    // Check for encoded-word syntax (RFC 2047)
    match = contentDisposition.match(/=\?utf-8\?b\?(.+?)\?=/i);
    if (match && match[1]) {
        return decodeBase64Utf8(match[1]);
    }

    // Fallback to basic filename extraction
    match = contentDisposition.match(/filename="(.+?)"/i);
    if (match && match[1]) {
        return match[1].replace(/['"]/g, ""); // Remove potential quotes around the filename
    }

    return null;
};

const createAndDownloadFile = (response: AxiosResponse, sessionId: string | number) => {
    const data = response?.data;
    const url = window.URL.createObjectURL(new Blob([data]));

    const link = document.createElement("a");
    link.href = url;

    const contentDisposition = response.headers["content-disposition"];
    const filename = decodeContentDisposition(contentDisposition) || `session-${sessionId}.zip`;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();

    link.parentNode?.removeChild(link);
    window.URL.revokeObjectURL(url);
};

export const useDownloadCsv = (sessionId: string | number) => {
    const { enqueueSnackbar } = useSnackbar();
    const t = useTranslationV2();
    const {
        mutate: getFiles,
        isLoading,
        reset,
    } = useDownloadSessionsStatsMutation({
        onSuccess: (response: AxiosResponse) => {
            const data = response?.data;
            if (!data) {
                const message = t("sessions_management.session_stats.no_download_data");
                enqueueSnackbar(message, { severity: "error" });
                return;
            }
            createAndDownloadFile(response, sessionId);
            reset();
        },
        onError: () => {
            const message = t("Something_went_Wrong");
            enqueueSnackbar(message, { severity: "error" });
        },
    });

    return { getFiles, isLoading };
};
