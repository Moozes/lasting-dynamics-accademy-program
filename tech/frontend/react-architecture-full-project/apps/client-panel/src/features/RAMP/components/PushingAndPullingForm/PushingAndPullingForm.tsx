import { useEffect } from "react";
import { useFormikContext } from "formik";
import { useAtom, useSetAtom } from "jotai";

import Typography from "@mui/material/Typography";

import { DialogWithCloseIcon, type HTMLDivProps, useTranslationV2 } from "ui";

import { PushingAndPullingInfoDialogOpenAtom, tabsVisitedStatusAtom } from "@features/RAMP/atoms";

import { PushingAndPullingHeader } from "./PushingAndPullingHeader";
import { PushingAndPullingInfo } from "./PushingAndPullingInfo";
import { PushingAndPullingInputs } from "./PushingAndPullingInputs";
import { PushingAndPullingTableSection } from "./PushingAndPullingTableSection";

type Props = HTMLDivProps;

export const PushingAndPullingForm = (props: Props) => {
    const t = useTranslationV2();
    const formikContext = useFormikContext();
    const [infoDialogOpen, setInfoDialogOpen] = useAtom(PushingAndPullingInfoDialogOpenAtom);
    const noPushingAndPulling = (formikContext.values as any).pushing_and_pulling_non_existent;
    const setTabsVisitedStatus = useSetAtom(tabsVisitedStatusAtom);
    useEffect(() => {
        return () =>
            setTabsVisitedStatus((prev) => ({
                ...prev,
                pushingAndPullingVisited: true,
            }));
    }, []);
    return (
        <div {...props}>
            <Typography className="title" variant="h4">
                {t("ramp_assessments.pushing_and_pulling_form.title")}
            </Typography>
            <div className="card">
                <PushingAndPullingHeader />
                {!noPushingAndPulling && (
                    <>
                        <div className="divider" />
                        <PushingAndPullingInputs />
                        <div className="divider" />
                        <PushingAndPullingTableSection />
                    </>
                )}
            </div>
            <DialogWithCloseIcon open={infoDialogOpen} onClose={() => setInfoDialogOpen(false)}>
                <PushingAndPullingInfo />
            </DialogWithCloseIcon>
        </div>
    );
};
