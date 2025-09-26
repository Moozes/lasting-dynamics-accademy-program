import { useEffect } from "react";
import { usePDF } from "@react-pdf/renderer";

import { Btn, type HTMLDivProps, useTranslationV2 } from "ui";

import { LinkToSession } from "@components/index";
import { useResultsPdfTemplate } from "@features/MEC/hooks";

import { ResultsPdfTemplate } from "./ResultsPdfTemplate";

type Props = HTMLDivProps & { sessionId: string | null };
export const PDFDownloadCard = ({ sessionId, ...props }: Props) => {
    const t = useTranslationV2();
    const PDFTemplateProps = useResultsPdfTemplate();
    const [instance, updateInstance] = usePDF({ document: <ResultsPdfTemplate {...PDFTemplateProps} /> });
    useEffect(() => {
        updateInstance(<ResultsPdfTemplate {...PDFTemplateProps} />);
    }, [PDFTemplateProps]);
    return (
        <div {...props} id="m">
            <div>
                <LinkToSession sessionId={sessionId} />
            </div>
            <a href={instance.url ?? "#"} download="MEC-results.pdf">
                <Btn loading={instance.loading} disabled={Boolean(instance.loading || instance.error)}>
                    {t("download_pdf")}
                </Btn>
            </a>
        </div>
    );
};
