import { usePDF } from "@react-pdf/renderer";

import Typography from "@mui/material/Typography";

import { Btn, type HTMLDivProps, useTranslationV2 } from "ui";

import { PDFDownloadLinkContainerProps } from "@app-types/index";
import { GoBackButton } from "@components/GoBackButton";

type Props = HTMLDivProps & { title: string } & Omit<
        PDFDownloadLinkContainerProps,
        "DownloadButton" | "DownloadButtonDisabled"
    >;

export const MultiResultsContainer = ({ title, children, PDFTemplate, PDFName, ...props }: Props) => {
    const t = useTranslationV2();
    const [instance] = usePDF({ document: PDFTemplate });
    return (
        <div {...props}>
            <GoBackButton />
            <Typography variant="h4" className="title">
                {title}
            </Typography>
            <div className="export-pdf-container">
                <a href={instance.url ?? "#"} download={`${PDFName}.pdf`}>
                    <Btn loading={instance.loading} disabled={Boolean(instance.loading || instance.error)}>
                        {t("export_pdf")}
                    </Btn>
                </a>
            </div>
            {children}
        </div>
    );
};
