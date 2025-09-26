import { useState } from "react";
// import { useAtom, useSetAtom } from "jotai";
import { useAtomValue } from "jotai";

import { CheckedFolder, CheckListIcon, HomeIcon, LabelIcon, LoadingFolder, UsersIcon, useTranslationV2 } from "ui";

import { AssessmentsEnum } from "@app-types/assessments";
import { CategoryTypesEnum } from "@app-types/index";
import { featureFlagsAtom } from "@atoms/index";
// import { isDrawerOpenAtom } from "@atoms/index";
// import { assessmentsDropDownOpenAtom } from "@features/dashboard/atoms";
import routes from "@routes/routes";

export interface SubItem {
    text: string;
    route: string;
}

export interface DrawerMenuItem {
    text: string;
    route: string;
    icon: React.ReactNode;
    subMenuOpen?: boolean;
    subMenuOpenToggle?: () => void;
    subMenuItems?: SubItem[];
}

export const useDrawerMenuItems = () => {
    const t = useTranslationV2();
    const featureFlags = useAtomValue(featureFlagsAtom);
    const [assessmentsDropDownOpen, setAssessmentsDropDownOpen] = useState(false);
    const [categorySubMenuOpen, setCategorySubMenuOpen] = useState(false);
    // const [assessmentsDropDownOpen, setAssessmentsDropDownOpenAtom] = useAtom(assessmentsDropDownOpenAtom);
    // const setIsDrawerOpen = useSetAtom(isDrawerOpenAtom);
    const menuItems: DrawerMenuItem[] = [
        {
            text: t("Home"),
            icon: <HomeIcon />,
            route: routes.dashboard.home,
        },
        {
            text: t("sessions_management.active_sessions"),
            icon: <LoadingFolder />,
            route: `${routes.dashboard.sessions}?tab=Active`,
        },
        {
            text: t("sessions_management.finished_sessions"),
            icon: <CheckedFolder />,
            route: `${routes.dashboard.sessions}?tab=Finished`,
        },
        // this commented section shows how to declare a dropdown menu
        // also dont forget to close submenu on side drawer close in DashboardLayout component
        // {
        //     text: t("assessment_other"),
        //     icon: <CheckListIcon />,
        //     route: "",
        //     subMenuOpen: assessmentsDropDownOpen,
        //     subMenuOpenToggle: () => {
        //         setIsDrawerOpen(true);
        //         setAssessmentsDropDownOpenAtom((prev) => !prev);
        //     },
        //     subMenuItems: [
        //         {
        //             text: "RAMP",
        //             route: routes.dashboard.rampAssessments,
        //         },
        //         {
        //             text: `${t("coming_soon")}...`,
        //             route: "",
        //         },
        //     ],
        // },
        {
            text: t("assessment_other"),
            icon: <CheckListIcon />,
            route: "",
            subMenuOpen: assessmentsDropDownOpen,
            subMenuOpenToggle: () => setAssessmentsDropDownOpen((prev) => !prev),
            subMenuItems: [
                {
                    text: `${AssessmentsEnum.RULA}`,
                    route: `${routes.dashboard.assessments}?assesment_category=${AssessmentsEnum.RULA}`,
                },
                {
                    text: `${AssessmentsEnum.RAMP}`,
                    route: `${routes.dashboard.assessments}?assesment_category=${AssessmentsEnum.RAMP}`,
                },
                {
                    text: `${AssessmentsEnum.REBA}`,
                    route: `${routes.dashboard.assessments}?assesment_category=${AssessmentsEnum.REBA}`,
                },
                {
                    text: `${AssessmentsEnum.MEC}`,
                    route: `${routes.dashboard.assessments}?assesment_category=${AssessmentsEnum.MEC}`,
                },
            ],
        },
        {
            text: t("tags"),
            icon: <LabelIcon />,
            route: "",
            subMenuOpen: categorySubMenuOpen,
            subMenuOpenToggle: () => setCategorySubMenuOpen((prev) => !prev),
            subMenuItems: [
                {
                    text: t("work_tasks"),
                    route: `${routes.dashboard.categoryAndLabels}?category_type=${CategoryTypesEnum.WORK_TASK}`,
                },
                {
                    text: t("work_labels"),
                    route: `${routes.dashboard.categoryAndLabels}?category_type=${CategoryTypesEnum.WORK_LABEL}`,
                },
                {
                    text: t("work_cycles"),
                    route: `${routes.dashboard.workcycles}`,
                },
            ],
        },
        {
            text: t("worker_profiles"),
            icon: <UsersIcon />,
            route: routes.dashboard.workProfiles,
        },
    ];

    if (featureFlags.enable_TestingNewComponentsPage)
        menuItems.push({
            text: "TNC",
            icon: null,
            route: routes.dashboard.testingNewComponents,
        });
    if (featureFlags.enable_IconsPage)
        menuItems.push({
            text: "Icons",
            icon: null,
            route: routes.dashboard.icons,
        });

    return menuItems;
};
