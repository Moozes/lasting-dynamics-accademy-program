import { HTMLProps, useEffect } from "react";
import { usePDF } from "@react-pdf/renderer";

import { Btn, useTranslationV2 } from "ui";

import { useGeneratedRAMPResultsPdfTemplate } from "@features/RAMP/hooks";

import { ResultsPdfTemplate } from "./ResultsPdfTemplate";

type Props = HTMLProps<HTMLAnchorElement>;
export const GeneratedPDFDownloadButton = (props: Props) => {
    const t = useTranslationV2();
    const PDFTemplateProps = useGeneratedRAMPResultsPdfTemplate();
    const [instance, updateInstance] = usePDF({ document: <ResultsPdfTemplate {...PDFTemplateProps} /> });
    useEffect(() => {
        updateInstance(<ResultsPdfTemplate {...PDFTemplateProps} />);
    }, [PDFTemplateProps]);
    return (
        <a {...props} href={instance.url ?? "#"} download="generated-ramp-results.pdf">
            <Btn loading={instance.loading} disabled={Boolean(instance.loading || instance.error)}>
                {t("download_pdf")}
            </Btn>
        </a>
    );
};
