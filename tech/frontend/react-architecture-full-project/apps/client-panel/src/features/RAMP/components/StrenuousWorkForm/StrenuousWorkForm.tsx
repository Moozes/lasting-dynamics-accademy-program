import { useEffect } from "react";
import { useSetAtom } from "jotai";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { tabsVisitedStatusAtom } from "@features/RAMP/atoms";
import { useInformationDialog } from "@features/RAMP/hooks";

import { TextAndQuestionIcon } from "../TextAndQuestionIcon/TextAndQuestionIcon";
import { YesNoFormCard } from "../YesNoFormCard";

import { useStrenuousWorkFormData } from "./StrenuousWorkForm.hooks";

type Props = HTMLDivProps;

export const StrenuousWorkForm = (props: Props) => {
    const { data } = useStrenuousWorkFormData();
    const t = useTranslationV2();
    const setTabsVisitedStatus = useSetAtom(tabsVisitedStatusAtom);
    useEffect(() => {
        return () =>
            setTabsVisitedStatus((prev) => ({
                ...prev,
                strenuousWorkVisited: true,
            }));
    }, []);
    const { openInformationDialog } = useInformationDialog();
    return (
        <div {...props}>
            <TextAndQuestionIcon
                className="title"
                text={t("ramp_assessments.strenuous_work_form.title")}
                onQuestionIconClick={() => openInformationDialog(t("ramp_assessments.strenuous_work_form.info"))}
            />
            {data.map((elm) => (
                <YesNoFormCard className="form-card" key={elm.title} {...elm} />
            ))}
        </div>
    );
};
