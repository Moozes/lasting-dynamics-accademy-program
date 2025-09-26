import ReactPDF from "@react-pdf/renderer";

import { Btn, type HTMLDivProps, useTranslationV2 } from "ui";

import { LinkToSession } from "@components/LinkToSession";

type Props = HTMLDivProps & {
    PDFName: string;
    instance: ReactPDF.UsePDFInstance;
    sessionId?: string | null;
};
export const PDFDownloadCard = ({ PDFName, instance, sessionId, ...props }: Props) => {
    const t = useTranslationV2();

    return (
        <div {...props}>
            <div>
                <LinkToSession sessionId={sessionId} />
            </div>
            <a href={instance.url ?? "#"} download={`${PDFName}.pdf`}>
                <Btn loading={instance.loading} disabled={Boolean(instance.loading || instance.error)}>
                    {t("download_pdf")}
                </Btn>
            </a>
        </div>
    );
};
