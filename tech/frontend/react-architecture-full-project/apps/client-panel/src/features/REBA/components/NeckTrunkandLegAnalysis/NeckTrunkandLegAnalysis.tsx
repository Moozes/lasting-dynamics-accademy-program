import type { HTMLDivProps } from "ui";

import { ImagesFormCard, TextOnlyFormCard } from "@components/index";
import { useSetVisitedStatusOnUnMount } from "@features/REBA/hooks";

import { LegsFormCard } from "./LegsFormCard";
import { useFormatedData } from "./NeckTrunkandLegAnalysis.hooks";

type Props = HTMLDivProps;

export const NeckTrunkandLegAnalysis = (props: Props) => {
    useSetVisitedStatusOnUnMount("neckTrunkandLegAnalysis");
    const formatedData = useFormatedData();
    return (
        <div {...props}>
            {formatedData.imagesFormCards.map((elm) => (
                <ImagesFormCard className="form-card" key={elm.title} {...elm} />
            ))}
            <LegsFormCard className="form-card" {...formatedData.legsFormCard} />
            {formatedData.textOnlyFormCards.map((elm) => (
                <TextOnlyFormCard className="form-card" key={elm.title} {...elm} />
            ))}
        </div>
    );
};
