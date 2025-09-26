import { useEffect } from "react";
import { useSetAtom } from "jotai";

import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { tabsVisitedStatusAtom } from "@features/RAMP/atoms";

import { YesNoFormCard } from "../YesNoFormCard";

import { useInfluencingFactorsFormData } from "./InfluencingFactorsForm.hooks";

type Props = HTMLDivProps;

export const InfluencingFactorsForm = (props: Props) => {
    const { data } = useInfluencingFactorsFormData();
    const t = useTranslationV2();
    const setTabsVisitedStatus = useSetAtom(tabsVisitedStatusAtom);
    useEffect(() => {
        return () =>
            setTabsVisitedStatus((prev) => ({
                ...prev,
                influencingFactorsVisited: true,
            }));
    }, []);
    return (
        <div {...props}>
            <Typography className="title" variant="h4">
                {t("ramp_assessments.influencing_factors_form.title")}
            </Typography>
            {data.map((elm) => (
                <YesNoFormCard className="form-card" key={elm.title} {...elm} />
            ))}
        </div>
    );
};
