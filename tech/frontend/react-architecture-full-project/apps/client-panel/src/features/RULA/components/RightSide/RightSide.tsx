import { useEffect } from "react";
import { useFormikContext } from "formik";
import { useSetAtom } from "jotai";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { RULAAssessmentDetail as AssessmentDetail } from "@app-types/index";
import { ImagesFormCard, TextOnlyFormCard } from "@components/index";

import { tabsVisitedStatusAtom } from "../../atoms";
import { CheckboxCard } from "../CheckboxCard";

import { useFormatedData } from "./RightSide.hooks";

type Props = HTMLDivProps;

export const RightSide = (props: Props) => {
    const t = useTranslationV2();
    const formatedData = useFormatedData();
    const { values, setFieldValue } = useFormikContext<AssessmentDetail>();
    const setTabsVisitedStatus = useSetAtom(tabsVisitedStatusAtom);
    useEffect(() => {
        return () =>
            setTabsVisitedStatus((prev) => ({
                ...prev,
                rightVisited: true,
            }));
    }, []);

    useEffect(() => {
        if (values.noLeftSide) {
            setFieldValue("noRightSide", false);
        }
    }, [values, setFieldValue]);

    return (
        <div {...props}>
            <CheckboxCard
                name="noRightSide"
                label={t("rula_assessments.no_right_side")}
                className="form-card"
                disabled={values.noLeftSide}
            />
            {formatedData.imagesFormCards.map((elm) => (
                <ImagesFormCard className="form-card" key={elm.title} {...elm} />
            ))}
            {formatedData.textOnlyFormCards.map((elm) => (
                <TextOnlyFormCard className="form-card" key={elm.title} {...elm} />
            ))}
        </div>
    );
};
