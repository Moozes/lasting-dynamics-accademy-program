import { useEffect } from "react";
import { usePDF } from "@react-pdf/renderer";
import { format, parseISO } from "date-fns";

import { ExcelExportIcon, PdfExportIcon, useTranslationV2 } from "ui";

import { CustomMenuItem, DropDownButton } from "@components/index";
import { ResultsPdfCardProps } from "@features/sessions/types";

import { useDownloadExcel } from "./ReportExportButton.hooks";
import { ResultsPdfTemplate } from "./ResultsPdfTemplate";

export const ReportExportButton: React.FC<ResultsPdfCardProps> = ({
    session,
    hrStats,
    sessionStats,
    tempStats,
    tnoStats,
    tasksStats,
}) => {
    const t = useTranslationV2();
    const formattedDatetime = format(parseISO(session.started_at), "yyyyMMdd_HHmmss");
    const fileName = `measurement_${session.id}_${formattedDatetime}_${session.worker.first_name}${session.worker.last_name}`;

    const [instance, updateInstance] = usePDF({
        document: (
            <ResultsPdfTemplate
                session={session}
                sessionStats={sessionStats}
                tnoStats={tnoStats}
                hrStats={hrStats}
                tempStats={tempStats}
                tasksStats={tasksStats}
            />
        ),
    });

    useEffect(() => {
        const generatePDF = async () => {
            await updateInstance(
                <ResultsPdfTemplate
                    session={session}
                    sessionStats={sessionStats}
                    tnoStats={tnoStats}
                    hrStats={hrStats}
                    tempStats={tempStats}
                    tasksStats={tasksStats}
                />
            );
        };

        generatePDF();
    }, [session, sessionStats, tnoStats, hrStats, tempStats, tasksStats, session.ai_report?.content]);

    const { getFiles, isLoading: isExcelLoading } = useDownloadExcel(fileName);
    const downloadExcelFile = () => {
        getFiles(session.id);
    };

    return (
        <DropDownButton
            isLoading={isExcelLoading || instance.loading}
            MenuItemsArray={[
                <a key="pdf" style={{ textDecoration: "none" }} href={instance.url ?? "#"} download={fileName}>
                    <CustomMenuItem
                        Icon={<PdfExportIcon />}
                        text={t("pdf")}
                        disabled={Boolean(instance.loading || instance.error)}
                    />
                </a>,
                <CustomMenuItem
                    key="excel"
                    Icon={<ExcelExportIcon />}
                    text={t("excel")}
                    onClick={downloadExcelFile}
                    disabled={isExcelLoading}
                />,
            ]}
        />
    );
};
