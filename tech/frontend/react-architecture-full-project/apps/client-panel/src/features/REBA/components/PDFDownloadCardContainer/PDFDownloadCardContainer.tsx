import { useEffect } from "react";
import { usePDF } from "@react-pdf/renderer";

import { PDFDownloadCard } from "@components/index";
import { useResultsPdfTemplate } from "@features/REBA/hooks";

import { ResultsPdfTemplate } from "./ResultsPdfTemplate";

type Props = {
    className: string;
};

export const PDFDownloadCardContainer = (props: Props) => {
    const PDFTemplateProps = useResultsPdfTemplate();
    const [instance, updateInstance] = usePDF({ document: <ResultsPdfTemplate {...PDFTemplateProps} /> });
    useEffect(() => {
        updateInstance(<ResultsPdfTemplate {...PDFTemplateProps} />);
    }, [PDFTemplateProps]);
    return <PDFDownloadCard {...props} instance={instance} PDFName="REBA-results" />;
};
