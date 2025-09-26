import { useEffect } from "react";
import { usePDF } from "@react-pdf/renderer";

import { PDFDownloadCard } from "@components/index";
import { useResultsPdfTemplate } from "@features/RAMP/hooks";

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

    const sourceSessionId = PDFTemplateProps.cache.data.session;

    return <PDFDownloadCard {...props} sessionId={sourceSessionId} instance={instance} PDFName="RAMP-results" />;
};
