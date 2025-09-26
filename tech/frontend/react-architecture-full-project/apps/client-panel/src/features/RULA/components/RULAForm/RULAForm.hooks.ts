import { useLocation } from "react-router-dom";
import { useAtomValue, useSetAtom } from "jotai";
import { round } from "lodash";

import { useTranslationV2 } from "ui";

import { CompletedNonCompletedClassnamesEnum, IFormControlsProps, ISubNavbarProps } from "@app-types/index";

import { tabsVisitedStatusAtom } from "../../atoms";
import { useRULAFormValidation } from "../../hooks";
import { ASSESSMENT_FORM_ROUTES, RULASubRoutesEnum } from "../../utils";

export const useFormProgress = () => {
    const formValidation = useRULAFormValidation();
    const formTabs = [
        formValidation.leftCompleted,
        formValidation.rightCompleted,
        formValidation.headTrunkAndLegsCompleted,
    ];
    const finishedTabsNumber = formTabs.filter((tabStatus) => tabStatus).length;
    return {
        progress: round((finishedTabsNumber / formTabs.length) * 100),
    };
};

export const useFormControls = (): IFormControlsProps => {
    const setTabsVisitedStatus = useSetAtom(tabsVisitedStatusAtom);
    const formValidation = useRULAFormValidation();

    const getCanSubmit = (): boolean => {
        return (
            formValidation.rightCompleted && formValidation.leftCompleted && formValidation.headTrunkAndLegsCompleted
        );
    };

    const setAllTabsAsVisited = () => {
        setTabsVisitedStatus({
            rightVisited: true,
            leftVisited: true,
            headTrunkAndLegsVisited: true,
        });
    };

    return {
        assessmentFormSubRoutes: ASSESSMENT_FORM_ROUTES,
        canSubmit: getCanSubmit(),
        setAllTabsAsVisited,
    };
};

export const useRULAFormLinks = (): ISubNavbarProps => {
    const t = useTranslationV2();
    const statuses = useRULAFormValidation();
    const tabsVisitedStatus = useAtomValue(tabsVisitedStatusAtom);

    let rightClassName = "";
    if (tabsVisitedStatus.rightVisited) {
        if (statuses.rightCompleted) rightClassName = CompletedNonCompletedClassnamesEnum.completedClassName;
        else rightClassName = CompletedNonCompletedClassnamesEnum.nonCompletedClassName;
    }

    let leftClassName = "";
    if (tabsVisitedStatus.leftVisited) {
        if (statuses.leftCompleted) leftClassName = CompletedNonCompletedClassnamesEnum.completedClassName;
        else leftClassName = CompletedNonCompletedClassnamesEnum.nonCompletedClassName;
    }

    let headTrunkAndLegsClassName = "";
    if (tabsVisitedStatus.headTrunkAndLegsVisited) {
        if (statuses.headTrunkAndLegsCompleted)
            headTrunkAndLegsClassName = CompletedNonCompletedClassnamesEnum.completedClassName;
        else headTrunkAndLegsClassName = CompletedNonCompletedClassnamesEnum.nonCompletedClassName;
    }

    return {
        links: [
            {
                text: t("rula_assessments.nav_link1"),
                to: RULASubRoutesEnum.right,
                className: rightClassName,
            },
            {
                text: t("rula_assessments.nav_link2"),
                to: RULASubRoutesEnum.left,
                className: leftClassName,
            },
            {
                text: t("rula_assessments.nav_link3"),
                to: RULASubRoutesEnum.neckTrunkAndLegs,
                className: headTrunkAndLegsClassName,
            },
        ],
    };
};

export const useRULAAlertMessage = () => {
    const { pathname } = useLocation();
    const lastSectionOfURL = pathname.split("/").filter(Boolean).pop();
    const { links } = useRULAFormLinks();
    const { rightNonFilledRequiredFields, leftNonFilledRequiredFields, headTrunkAndLegsNonFilledRequiredFields } =
        useRULAFormValidation();

    let showAlertMessage = false;
    let errorList: string[] = [];
    if (
        lastSectionOfURL === RULASubRoutesEnum.right &&
        links.find((elm) => elm.to === RULASubRoutesEnum.right)?.className ===
            CompletedNonCompletedClassnamesEnum.nonCompletedClassName
    ) {
        showAlertMessage = true;
        errorList = rightNonFilledRequiredFields;
    } else if (
        lastSectionOfURL === RULASubRoutesEnum.left &&
        links.find((elm) => elm.to === RULASubRoutesEnum.left)?.className ===
            CompletedNonCompletedClassnamesEnum.nonCompletedClassName
    ) {
        showAlertMessage = true;
        errorList = leftNonFilledRequiredFields;
    } else if (
        lastSectionOfURL === RULASubRoutesEnum.neckTrunkAndLegs &&
        links.find((elm) => elm.to === RULASubRoutesEnum.neckTrunkAndLegs)?.className ===
            CompletedNonCompletedClassnamesEnum.nonCompletedClassName
    ) {
        showAlertMessage = true;
        errorList = headTrunkAndLegsNonFilledRequiredFields;
    }

    return {
        showAlertMessage,
        errorList,
    };
};
