import { useEffect } from "react";
import { useFormikContext } from "formik";
import { useSetAtom } from "jotai";

import { useTranslationV2 } from "ui";

import { REBAAssessmentDetail as AssessmentDetail } from "@app-types/index";
import { useSingleAssessmentQueryCache } from "@hooks/index";
import { constructStatusArray, formatNonFilledFields } from "@utils/index";

import { initialVisitedTabsStatus, visitedTabsStatusAtom } from "../atoms";
import { IVisitedTabsStatus, REBAAssessment, ResultsPdfTemplateProps } from "../types";

import { useDetailedSummaryFormatedData } from "./detailedSummary";

export const useSetVisitedStatusOnUnMount = (tabName: keyof IVisitedTabsStatus) => {
    const setVisitedTabsStatus = useSetAtom(visitedTabsStatusAtom);
    useEffect(() => {
        return () =>
            setVisitedTabsStatus((prev) => ({
                ...prev,
                [tabName]: true,
            }));
    }, []);
};

export const useInitialiseVisitedStatusOnMount = () => {
    const setVisitedTabsStatus = useSetAtom(visitedTabsStatusAtom);
    useEffect(() => {
        setVisitedTabsStatus(initialVisitedTabsStatus);
    }, []);
};

export const useResultsPdfTemplate = (): ResultsPdfTemplateProps => {
    const cache = useSingleAssessmentQueryCache<REBAAssessment>()!;
    const resultSummaryFormatedData = useDetailedSummaryFormatedData(cache.data.assessment);

    return {
        cache,
        resultSummaryFormatedData,
    };
};

export const useREBAFormValidation = () => {
    const t = useTranslationV2();
    const { values } = useFormikContext<AssessmentDetail>();

    type AssessmentDetailKeys = keyof AssessmentDetail;
    const neckTrunkandLegAnalysisRequiredFields: AssessmentDetailKeys[] = [
        "neckPosition",
        "trunkPosition",
        "legsDownOrRaised",
        "forceLoadScore",
    ];
    const neckTrunkandLegAnalysisRequiredFieldsStatuses = constructStatusArray(
        neckTrunkandLegAnalysisRequiredFields,
        values
    );
    const neckTrunkandLegAnalysisNonFilledRequiredFields = formatNonFilledFields(
        neckTrunkandLegAnalysisRequiredFieldsStatuses,
        [
            t("reba_assessments.locate_neck_position"),
            t("reba_assessments.locate_trunk_position"),
            t("legs"),
            t("reba_assessments.force_load_score"),
        ]
    );

    const armandWristAnalysisRequiredFields: AssessmentDetailKeys[] = [
        "upperArmPosition",
        "lowerArmPosition",
        "wristPosition",
        "couplingScore",
    ];
    const armandWristAnalysisRequiredFieldsStatuses = constructStatusArray(armandWristAnalysisRequiredFields, values);
    const armandWristAnalysisNonFilledRequiredFields = formatNonFilledFields(
        armandWristAnalysisRequiredFieldsStatuses,
        [
            t("reba_assessments.locate_upper_arm_position"),
            t("reba_assessments.locate_lower_arm_position"),
            t("reba_assessments.locate_wrist_position"),
            t("reba_assessments.coupling_score"),
        ]
    );

    return {
        neckTrunkandLegAnalysisCompleted: neckTrunkandLegAnalysisRequiredFields.every((elm) => values[elm]),
        armandWristAnalysisCompleted: armandWristAnalysisRequiredFields.every((elm) => values[elm]),
        neckTrunkandLegAnalysisNonFilledRequiredFields,
        armandWristAnalysisNonFilledRequiredFields,
    };
};
