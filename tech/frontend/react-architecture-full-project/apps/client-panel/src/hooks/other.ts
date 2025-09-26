/* eslint-disable default-case */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row } from "react-table";
import { AxiosResponse } from "axios";
import { useAtom } from "jotai";

import { UserRoleEnum, useTranslationV2 } from "ui";

import {
    Assessment,
    AssessmentsEnum,
    AssessmentSourceEnum,
    AssessmentStatusEnum,
    IuseComparison,
} from "@app-types/index";
import { settingsModalOpenAtom } from "@atoms/index";
import routes from "@routes/routes";

export const useComparison = (typedSelectedRows: Row<Assessment>[]): IuseComparison => {
    const t = useTranslationV2();
    const [showInfoDialog, setShowInfoDialog] = useState(false);
    const comparisonInfoArray: string[] = [];

    const navigate = useNavigate();
    // constraint 1: you can select from 2 to 4 assessments only
    const count = typedSelectedRows.length;
    const constraint_2_to_4_only = count >= 2 && count <= 4;

    // constraint 2: all selected assessments need to be of same categoty: RULA or RAMP for example
    const RULACount = typedSelectedRows.filter(
        (elm) => elm.original.assesment_category === AssessmentsEnum.RULA
    ).length;
    const RAMPCount = typedSelectedRows.filter(
        (elm) => elm.original.assesment_category === AssessmentsEnum.RAMP
    ).length;
    const REBACount = typedSelectedRows.filter(
        (elm) => elm.original.assesment_category === AssessmentsEnum.REBA
    ).length;
    const MECCount = typedSelectedRows.filter((elm) => elm.original.assesment_category === AssessmentsEnum.MEC).length;
    const constraint_same_category =
        RULACount === count || RAMPCount === count || REBACount === count || MECCount === count;

    // constraint 3: all selected assessments need to be COMPLETED
    const constraint_all_completed =
        typedSelectedRows.filter((elm) => elm.original.status === AssessmentStatusEnum.COMPLETED).length === count;

    // constraint 4: We can only compare RAMP assessments coming from "manual" source
    const constraint_all_ramp_are_manual = typedSelectedRows
        .filter((elm) => elm.original.assesment_category === AssessmentsEnum.RAMP)
        .every((elm) => elm.original.source === AssessmentSourceEnum.MANUAL);

    const allConstraintsAreVerified =
        constraint_2_to_4_only &&
        constraint_same_category &&
        constraint_all_completed &&
        constraint_all_ramp_are_manual;
    const clickHandler = () => {
        const ids = typedSelectedRows.map((row) => row.original.id).join(",");
        if (allConstraintsAreVerified) {
            switch (count) {
                case REBACount:
                    navigate(`${routes.dashboard.rebaMultiAssessmentsResults}?ids=${ids}`);
                    break;
                case RAMPCount:
                    navigate(`${routes.dashboard.rampMultiAssessmentsResults}?ids=${ids}`);
                    break;
                case RULACount:
                    navigate(`${routes.dashboard.rulaMultiAssessmentsResults}?ids=${ids}`);
                    break;
                case MECCount:
                    navigate(`${routes.dashboard.mecMultiAssessmentsResults}?ids=${ids}`);
                    break;
            }
        } else {
            setShowInfoDialog(true);
        }
    };

    if (!constraint_2_to_4_only) comparisonInfoArray.push(t("assessments.constraint_2_to_4"));
    if (!constraint_same_category) comparisonInfoArray.push(t("assessments.constraint_same_category"));
    if (!constraint_all_completed) comparisonInfoArray.push(t("assessments.constraint_all_completed"));
    if (!constraint_all_ramp_are_manual) {
        comparisonInfoArray.push(t("assessments.constraint_generated_ramp"));
    }

    return {
        clickHandler,
        showInfoDialog,
        setShowInfoDialog,
        comparisonInfoArray,
    };
};

export const usePreventAccessToCompletedAssessmentForm = (
    data: AxiosResponse<any, any> | undefined,
    isLoading: boolean,
    isError: boolean
) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoading && !isError && data?.data?.status === AssessmentStatusEnum.COMPLETED) {
            navigate(routes.dashboard.assessments, { replace: true });
        }
    }, [isLoading]); // apply this test only for first fetched data
};

export const useSettingsModalOpenAtom = () => {
    const [settingsModalOpen, setSettingsModalOpen] = useAtom(settingsModalOpenAtom);

    const toggleSettingsModalOpen = () => {
        setSettingsModalOpen((prev) => !prev);
    };

    return {
        settingsModalOpen,
        toggleSettingsModalOpen,
    };
};

export const useSelectRoles = () => {
    const t = useTranslationV2();
    return {
        SELECTROLES: [
            { value: UserRoleEnum.WORKER, label: t("Worker") },
            { value: UserRoleEnum.ERGONOMIST, label: t("Ergonomist") },
            { value: UserRoleEnum.ORG_ADMIN, label: t("Admin") },
        ],
    };
};

export const useSexSelectRoles = () => {
    const t = useTranslationV2();
    return {
        SEXSELECTROLES: [
            { value: "MALE", label: t("male") },
            { value: "FEMALE", label: t("female") },
            { value: "OTHER", label: t("other") },
        ],
    };
};

export const useArmSelectRoles = () => {
    const t = useTranslationV2();
    return {
        ARMSELECTROLES: [
            { value: "RIGHT", label: t("right") },
            { value: "LEFT", label: t("left") },
        ],
    };
};
