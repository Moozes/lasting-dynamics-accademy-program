import { useEffect } from "react";
import { useSetAtom } from "jotai";

import type { HTMLDivProps } from "ui";

import { ImagesFormCard, TextOnlyFormCard } from "@components/index";

import { tabsVisitedStatusAtom } from "../../atoms";

import { useFormatedData } from "./HeadTrunkAndLegs.hooks";

type Props = HTMLDivProps;

export const HeadTrunkAndLegs = (props: Props) => {
    const formatedData = useFormatedData();
    const setTabsVisitedStatus = useSetAtom(tabsVisitedStatusAtom);
    useEffect(() => {
        return () =>
            setTabsVisitedStatus((prev) => ({
                ...prev,
                headTrunkAndLegsVisited: true,
            }));
    }, []);
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
