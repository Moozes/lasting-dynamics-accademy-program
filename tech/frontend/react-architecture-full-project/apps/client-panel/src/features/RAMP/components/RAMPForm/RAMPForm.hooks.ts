import { useLocation } from "react-router-dom";
import { useAtomValue, useSetAtom } from "jotai";
import { round } from "lodash";

import { useTranslationV2 } from "ui";

import { CompletedNonCompletedClassnamesEnum, IFormControlsProps, ISubNavbarProps } from "@app-types/index";
import { tabsVisitedStatusAtom } from "@features/RAMP/atoms";
import { useRAMPFormValidation } from "@features/RAMP/hooks";
import { ASSESSMENT_FORM_ROUTES, RAMPSubRoutesEnum } from "@features/RAMP/utils";

export const useFormProgress = () => {
    const formValidation = useRAMPFormValidation();
    const formTabs = [
        formValidation.posturesCompleted,
        formValidation.movementsAndRepetitionCompleted,
        formValidation.liftingWorkCompleted,
        formValidation.pushingAndPullingCompleted,
        formValidation.influencingFactorsCompleted,
        formValidation.strenuousWorkCompleted,
        formValidation.perceivedPhysicalDiscomfortCompleted,
    ];
    const finishedTabsNumber = formTabs.filter((tabStatus) => tabStatus).length;
    return {
        progress: round((finishedTabsNumber / formTabs.length) * 100),
    };
};

export const useFormControls = (): IFormControlsProps => {
    const setTabsVisitedStatus = useSetAtom(tabsVisitedStatusAtom);
    const formValidation = useRAMPFormValidation();

    const getCanSubmit = (): boolean => {
        return (
            formValidation.posturesCompleted &&
            formValidation.movementsAndRepetitionCompleted &&
            formValidation.liftingWorkCompleted &&
            formValidation.pushingAndPullingCompleted &&
            formValidation.influencingFactorsCompleted &&
            formValidation.strenuousWorkCompleted &&
            formValidation.perceivedPhysicalDiscomfortCompleted
        );
    };

    const setAllTabsAsVisited = () => {
        setTabsVisitedStatus({
            posturesVisited: true,
            movementsAndRepetitionVisited: true,
            liftingWorkVisited: true,
            pushingAndPullingVisited: true,
            influencingFactorsVisited: true,
            strenuousWorkVisited: true,
            perceivedPhysicalDiscomfortVisited: true,
        });
    };

    return {
        assessmentFormSubRoutes: ASSESSMENT_FORM_ROUTES,
        canSubmit: getCanSubmit(),
        setAllTabsAsVisited,
    };
};

export const useRAMPFormLinks = (): ISubNavbarProps => {
    const t = useTranslationV2();
    const statuses = useRAMPFormValidation();
    const tabsVisitedStatus = useAtomValue(tabsVisitedStatusAtom);

    let posturesClassName = "";
    if (tabsVisitedStatus.posturesVisited) {
        if (statuses.posturesCompleted) posturesClassName = CompletedNonCompletedClassnamesEnum.completedClassName;
        else posturesClassName = CompletedNonCompletedClassnamesEnum.nonCompletedClassName;
    }

    let movementsAndRepetitionClassName = "";
    if (tabsVisitedStatus.movementsAndRepetitionVisited) {
        if (statuses.movementsAndRepetitionCompleted)
            movementsAndRepetitionClassName = CompletedNonCompletedClassnamesEnum.completedClassName;
        else movementsAndRepetitionClassName = CompletedNonCompletedClassnamesEnum.nonCompletedClassName;
    }

    let liftingWorkClassName = "";
    if (tabsVisitedStatus.liftingWorkVisited) {
        if (statuses.liftingWorkCompleted)
            liftingWorkClassName = CompletedNonCompletedClassnamesEnum.completedClassName;
        else liftingWorkClassName = CompletedNonCompletedClassnamesEnum.nonCompletedClassName;
    }

    let pushingAndPullingClassName = "";
    if (tabsVisitedStatus.pushingAndPullingVisited) {
        if (statuses.pushingAndPullingCompleted)
            pushingAndPullingClassName = CompletedNonCompletedClassnamesEnum.completedClassName;
        else pushingAndPullingClassName = CompletedNonCompletedClassnamesEnum.nonCompletedClassName;
    }

    let influencingFactorsClassName = "";
    if (tabsVisitedStatus.influencingFactorsVisited) {
        if (statuses.influencingFactorsCompleted)
            influencingFactorsClassName = CompletedNonCompletedClassnamesEnum.completedClassName;
        else influencingFactorsClassName = CompletedNonCompletedClassnamesEnum.nonCompletedClassName;
    }

    let strenuousWorkClassName = "";
    if (tabsVisitedStatus.strenuousWorkVisited) {
        if (statuses.strenuousWorkCompleted)
            strenuousWorkClassName = CompletedNonCompletedClassnamesEnum.completedClassName;
        else strenuousWorkClassName = CompletedNonCompletedClassnamesEnum.nonCompletedClassName;
    }

    let perceivedPhysicalDiscomfortClassName = "";
    if (tabsVisitedStatus.perceivedPhysicalDiscomfortVisited) {
        if (statuses.perceivedPhysicalDiscomfortCompleted)
            perceivedPhysicalDiscomfortClassName = CompletedNonCompletedClassnamesEnum.completedClassName;
        else perceivedPhysicalDiscomfortClassName = CompletedNonCompletedClassnamesEnum.nonCompletedClassName;
    }

    return {
        links: [
            {
                text: t("ramp_assessments.postures"),
                to: RAMPSubRoutesEnum.postures,
                className: posturesClassName,
            },
            {
                text: t("ramp_assessments.movements_and_repetition"),
                to: RAMPSubRoutesEnum.movementsAndRepetition,
                className: movementsAndRepetitionClassName,
            },
            {
                text: t("ramp_assessments.lifting_work"),
                to: RAMPSubRoutesEnum.liftingWork,
                className: liftingWorkClassName,
            },
            {
                text: t("ramp_assessments.pushing_and_pulling"),
                to: RAMPSubRoutesEnum.pushingAndPulling,
                className: pushingAndPullingClassName,
            },
            {
                text: t("ramp_assessments.influencing_factors"),
                to: RAMPSubRoutesEnum.influencingFactors,
                className: influencingFactorsClassName,
            },
            {
                text: t("ramp_assessments.strenuous_work"),
                to: RAMPSubRoutesEnum.strenuousWork,
                className: strenuousWorkClassName,
            },
            {
                text: t("ramp_assessments.perceived_physical_discomfort"),
                to: RAMPSubRoutesEnum.perceivedPhysicalDiscomfort,
                className: perceivedPhysicalDiscomfortClassName,
            },
        ],
    };
};

export const useRAMPAlertMessage = () => {
    const { pathname } = useLocation();
    const lastSectionOfURL = pathname.split("/").filter(Boolean).pop();
    const { links } = useRAMPFormLinks();
    const {
        posturesNonFilledRequiredFields,
        movementsAndRepetitionNonFilledRequiredFields,
        liftingWorkNonFilledRequiredFields,
        pushingAndPullingNonFilledRequiredFields,
        strenuousWorkNonFilledRequiredFields,
        influencingFactorsNonFilledRequiredFields,
        perceivedPhysicalDiscomfortNonFilledRequiredFields,
    } = useRAMPFormValidation();

    let showAlertMessage = false;
    let errorList: string[] = [];

    if (
        lastSectionOfURL === RAMPSubRoutesEnum.postures &&
        links.find((elm) => elm.to === RAMPSubRoutesEnum.postures)?.className ===
            CompletedNonCompletedClassnamesEnum.nonCompletedClassName
    ) {
        showAlertMessage = true;
        errorList = posturesNonFilledRequiredFields;
    } else if (
        lastSectionOfURL === RAMPSubRoutesEnum.movementsAndRepetition &&
        links.find((elm) => elm.to === RAMPSubRoutesEnum.movementsAndRepetition)?.className ===
            CompletedNonCompletedClassnamesEnum.nonCompletedClassName
    ) {
        showAlertMessage = true;
        errorList = movementsAndRepetitionNonFilledRequiredFields;
    } else if (
        lastSectionOfURL === RAMPSubRoutesEnum.liftingWork &&
        links.find((elm) => elm.to === RAMPSubRoutesEnum.liftingWork)?.className ===
            CompletedNonCompletedClassnamesEnum.nonCompletedClassName
    ) {
        showAlertMessage = true;
        errorList = liftingWorkNonFilledRequiredFields;
    } else if (
        lastSectionOfURL === RAMPSubRoutesEnum.pushingAndPulling &&
        links.find((elm) => elm.to === RAMPSubRoutesEnum.pushingAndPulling)?.className ===
            CompletedNonCompletedClassnamesEnum.nonCompletedClassName
    ) {
        showAlertMessage = true;
        errorList = pushingAndPullingNonFilledRequiredFields;
    } else if (
        lastSectionOfURL === RAMPSubRoutesEnum.influencingFactors &&
        links.find((elm) => elm.to === RAMPSubRoutesEnum.influencingFactors)?.className ===
            CompletedNonCompletedClassnamesEnum.nonCompletedClassName
    ) {
        showAlertMessage = true;
        errorList = influencingFactorsNonFilledRequiredFields;
    } else if (
        lastSectionOfURL === RAMPSubRoutesEnum.strenuousWork &&
        links.find((elm) => elm.to === RAMPSubRoutesEnum.strenuousWork)?.className ===
            CompletedNonCompletedClassnamesEnum.nonCompletedClassName
    ) {
        showAlertMessage = true;
        errorList = strenuousWorkNonFilledRequiredFields;
    } else if (
        lastSectionOfURL === RAMPSubRoutesEnum.perceivedPhysicalDiscomfort &&
        links.find((elm) => elm.to === RAMPSubRoutesEnum.perceivedPhysicalDiscomfort)?.className ===
            CompletedNonCompletedClassnamesEnum.nonCompletedClassName
    ) {
        showAlertMessage = true;
        errorList = perceivedPhysicalDiscomfortNonFilledRequiredFields;
    }

    return {
        showAlertMessage,
        errorList,
    };
};
