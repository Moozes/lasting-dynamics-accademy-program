import { Btn, useTranslationV2 } from "ui";

import { useDownloadCsv } from "./RawDataExportTemplate.hooks";

export const RawDataExportTemplate = ({ sessionId }: { sessionId: string | number }) => {
    const t = useTranslationV2();
    const { getFiles, isLoading } = useDownloadCsv(sessionId);
    const downloadFile = () => {
        getFiles(sessionId);
    };
    return (
        <Btn disabled={isLoading} loading={isLoading} variant="primary-outlined" onClick={downloadFile}>
            {t("export_raw_measurement_other")}
        </Btn>
    );
};
