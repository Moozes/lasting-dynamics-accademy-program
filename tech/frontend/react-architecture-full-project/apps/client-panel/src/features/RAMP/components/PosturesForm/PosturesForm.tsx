import { useEffect } from "react";
import { useSetAtom } from "jotai";

import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { tabsVisitedStatusAtom } from "@features/RAMP/atoms";

import { FormCard } from "../FormCard";

import { usePosturesFormData } from "./PosturesForm.hooks";

type Props = HTMLDivProps;

export const PosturesForm = (props: Props) => {
    const { data } = usePosturesFormData();
    const t = useTranslationV2();
    const setTabsVisitedStatus = useSetAtom(tabsVisitedStatusAtom);
    useEffect(() => {
        return () =>
            setTabsVisitedStatus((prev) => ({
                ...prev,
                posturesVisited: true,
            }));
    }, []);
    return (
        <div {...props}>
            <Typography className="title" variant="h4">
                {t("ramp_assessments.postures_form.title")}
            </Typography>
            {data.map((formCardProps) => (
                <FormCard className="form-card" key={formCardProps.title} {...formCardProps} />
            ))}
        </div>
    );
};
