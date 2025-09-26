import { useLocation } from "react-router-dom";
import { useAtomValue, useSetAtom } from "jotai";
import { round } from "lodash";

import { useTranslationV2 } from "ui";

import { CompletedNonCompletedClassnamesEnum, IFormControlsProps, ISubNavbarProps } from "@app-types/index";
import { visitedTabsStatusAtom } from "@features/REBA/atoms";
import { useREBAFormValidation } from "@features/REBA/hooks";
import { ASSESSMENT_FORM_ROUTES, REBASubRoutesEnum } from "@features/REBA/utils";

export const useFormProgress = () => {
    const formValidation = useREBAFormValidation();
    const formTabs = [formValidation.neckTrunkandLegAnalysisCompleted, formValidation.armandWristAnalysisCompleted];
    const finishedTabsNumber = formTabs.filter((tabStatus) => tabStatus).length;
    return {
        progress: round((finishedTabsNumber / formTabs.length) * 100),
    };
};

export const useFormControls = (): IFormControlsProps => {
    const setTabsVisitedStatus = useSetAtom(visitedTabsStatusAtom);
    const formValidation = useREBAFormValidation();

    const getCanSubmit = (): boolean => {
        return formValidation.armandWristAnalysisCompleted && formValidation.neckTrunkandLegAnalysisCompleted;
    };

    const setAllTabsAsVisited = () => {
        setTabsVisitedStatus({
            neckTrunkandLegAnalysis: true,
            armAndWristAnalysis: true,
        });
    };

    return {
        assessmentFormSubRoutes: ASSESSMENT_FORM_ROUTES,
        canSubmit: getCanSubmit(),
        setAllTabsAsVisited,
    };
};

export const useREBAFormLinks = (): ISubNavbarProps => {
    const t = useTranslationV2();
    const statuses = useREBAFormValidation();
    const tabsVisitedStatus = useAtomValue(visitedTabsStatusAtom);

    let neckTrunkandLegAnalysisClassName = "";
    if (tabsVisitedStatus.neckTrunkandLegAnalysis) {
        if (statuses.neckTrunkandLegAnalysisCompleted)
            neckTrunkandLegAnalysisClassName = CompletedNonCompletedClassnamesEnum.completedClassName;
        else neckTrunkandLegAnalysisClassName = CompletedNonCompletedClassnamesEnum.nonCompletedClassName;
    }

    let armAndWristAnalysisClassName = "";
    if (tabsVisitedStatus.armAndWristAnalysis) {
        if (statuses.armandWristAnalysisCompleted)
            armAndWristAnalysisClassName = CompletedNonCompletedClassnamesEnum.completedClassName;
        else armAndWristAnalysisClassName = CompletedNonCompletedClassnamesEnum.nonCompletedClassName;
    }

    return {
        links: [
            {
                text: t("reba_assessments.neck_trunk_and_leg_analysis"),
                to: REBASubRoutesEnum.neckTrunkandLegAnalysis,
                className: neckTrunkandLegAnalysisClassName,
            },
            {
                text: t("reba_assessments.arm_and_wrist_analysis"),
                to: REBASubRoutesEnum.armAndWristAnalysis,
                className: armAndWristAnalysisClassName,
            },
        ],
    };
};

export const useREBAAlertMessage = () => {
    const { pathname } = useLocation();
    const lastSectionOfURL = pathname.split("/").filter(Boolean).pop();
    const { links } = useREBAFormLinks();
    const { armandWristAnalysisNonFilledRequiredFields, neckTrunkandLegAnalysisNonFilledRequiredFields } =
        useREBAFormValidation();

    let showAlertMessage = false;
    let errorList: string[] = [];
    if (
        lastSectionOfURL === REBASubRoutesEnum.neckTrunkandLegAnalysis &&
        links.find((elm) => elm.to === REBASubRoutesEnum.neckTrunkandLegAnalysis)?.className ===
            CompletedNonCompletedClassnamesEnum.nonCompletedClassName
    ) {
        showAlertMessage = true;
        errorList = neckTrunkandLegAnalysisNonFilledRequiredFields;
    } else if (
        lastSectionOfURL === REBASubRoutesEnum.armAndWristAnalysis &&
        links.find((elm) => elm.to === REBASubRoutesEnum.armAndWristAnalysis)?.className ===
            CompletedNonCompletedClassnamesEnum.nonCompletedClassName
    ) {
        showAlertMessage = true;
        errorList = armandWristAnalysisNonFilledRequiredFields;
    }

    return {
        showAlertMessage,
        errorList,
    };
};
