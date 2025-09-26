import { useSearchParams } from "react-router-dom";
import { usePDF } from "@react-pdf/renderer";

import { ExcelExportIcon, type HTMLDivProps, PdfExportIcon, useTranslationV2 } from "ui";

import { CustomMenuItem, DropDownButton } from "@components/index";
import { MultiSessionPDFTemplate, useGetSelectedSessionsStatsQuery } from "@features/sessions/index";

import { useDownloadExcel } from "./DownloadReportsButton.hooks";

type Props = HTMLDivProps;

export const DownloadReportsButton = (props: Props) => {
    const t = useTranslationV2();
    const [searchParams] = useSearchParams();
    const ids = searchParams.get("ids") || "";
    const filename = `sessions-${ids.split(",").join("-")}`;
    const { getFiles, isLoading: isExcelLoading } = useDownloadExcel(filename);
    const downloadExcelFile = () => {
        getFiles(ids);
    };
    const { data } = useGetSelectedSessionsStatsQuery(ids);
    // date is not undefined because im already checking it in parent component
    const [instance] = usePDF({ document: <MultiSessionPDFTemplate data={data!} /> });

    return (
        <div {...props}>
            <DropDownButton
                disabled={isExcelLoading}
                isLoading={isExcelLoading}
                MenuItemsArray={[
                    <a
                        style={{ textDecoration: "none" }}
                        key={0}
                        href={instance.url ?? "#"}
                        download="Multi-session-comparison"
                    >
                        <CustomMenuItem
                            Icon={<PdfExportIcon />}
                            text={t("pdf")}
                            disabled={Boolean(instance.loading || instance.error)}
                        />
                    </a>,
                    <CustomMenuItem
                        key={1}
                        Icon={<ExcelExportIcon />}
                        text={t("excel")}
                        onClick={downloadExcelFile}
                        disabled={isExcelLoading}
                    />,
                ]}
            />
        </div>
    );
};
