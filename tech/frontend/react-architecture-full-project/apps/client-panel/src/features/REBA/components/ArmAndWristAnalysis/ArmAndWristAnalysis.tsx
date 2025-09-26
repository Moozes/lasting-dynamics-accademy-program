import type { HTMLDivProps } from "ui";

import { ImagesFormCard, TextOnlyFormCard } from "@components/index";
import { useSetVisitedStatusOnUnMount } from "@features/REBA/hooks";

import { useFormatedData } from "./ArmAndWristAnalysis.hooks";

type Props = HTMLDivProps;

export const ArmAndWristAnalysis = (props: Props) => {
    useSetVisitedStatusOnUnMount("armAndWristAnalysis");
    const formatedData = useFormatedData();
    return (
        <div {...props}>
            {formatedData.imagesFormCards.map((elm) => (
                <ImagesFormCard className="form-card" key={elm.title} {...elm} />
            ))}
            {formatedData.textOnlyFormCards.map((elm) => (
                <TextOnlyFormCard className="form-card" key={elm.title} {...elm} />
            ))}
        </div>
    );
};
