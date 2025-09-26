import { ReactNode } from "react";

export interface ICarrousel {
    images: File[];
    leftInput?: ReactNode;
    secondLeftInput?: ReactNode;
    HandleDeleteFile: (file: File) => void;
}

export interface ArrowButtonProps {
    currentSlide: number;
}
