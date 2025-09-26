import { useEffect } from "react";
import { useFormikContext } from "formik";
import { useSetAtom } from "jotai";

import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { tabsVisitedStatusAtom } from "@features/RAMP/atoms";

import { LiftingWorkHeader } from "./LiftingWorkHeader";
import { LiftingWorkInputs } from "./LiftingWorkInputs";
import { LiftingWorkTableSection } from "./LiftingWorkTableSection";

type Props = HTMLDivProps;

export const LiftingWorkForm = (props: Props) => {
    const t = useTranslationV2();
    const formikContext = useFormikContext();
    const noLiftingWork = (formikContext.values as any).lifting_work_non_existent;
    const setTabsVisitedStatus = useSetAtom(tabsVisitedStatusAtom);
    useEffect(() => {
        return () =>
            setTabsVisitedStatus((prev) => ({
                ...prev,
                liftingWorkVisited: true,
            }));
    }, []);
    return (
        <div {...props}>
            <Typography className="title" variant="h4">
                {t("ramp_assessments.lifting_work_form.title")}
            </Typography>
            <div className="card">
                <LiftingWorkHeader />
                {!noLiftingWork && (
                    <>
                        <div className="divider" />
                        <LiftingWorkInputs />
                        <div className="divider" />
                        <LiftingWorkTableSection />
                    </>
                )}
            </div>
        </div>
    );
};
