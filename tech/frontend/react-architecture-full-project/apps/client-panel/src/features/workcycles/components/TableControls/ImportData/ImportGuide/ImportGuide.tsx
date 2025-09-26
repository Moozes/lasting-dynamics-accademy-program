import { MouseEventHandler, useRef } from "react";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { CSVImportGuide } from "@assets/index";

type Props = HTMLDivProps;

export const ImportGuide = (props: Props) => {
    const t = useTranslationV2();
    const zoomedImageRef = useRef<HTMLImageElement>(null);
    const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        if (zoomedImageRef.current) {
            zoomedImageRef.current.style.transform = `translate(-${xPercent}%, -${yPercent}%) scale(1.5)`;
        }
    };
    const onMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
        if (zoomedImageRef.current) {
            zoomedImageRef.current.style.transform = "scale(1)";
        }
    };
    return (
        <div {...props} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
            <div className="title">{t("workcycles.csv_import_guide_title")}</div>
            <img src={CSVImportGuide} alt="CSV import guide" />
            <img ref={zoomedImageRef} src={CSVImportGuide} alt="CSV import guide zoomed" className="zoomed-image" />
        </div>
    );
};
