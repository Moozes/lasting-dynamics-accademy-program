import { useEffect } from "react";
import { useSetAtom } from "jotai";

import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { tabsVisitedStatusAtom } from "@features/RAMP/atoms";

import { FormCard } from "../FormCard";

import { useMovementsAndRepetitionFormFormData } from "./MovementsAndRepetitionForm.hooks";

type Props = HTMLDivProps;

export const MovementsAndRepetitionForm = (props: Props) => {
    const { data } = useMovementsAndRepetitionFormFormData();
    const t = useTranslationV2();
    const setTabsVisitedStatus = useSetAtom(tabsVisitedStatusAtom);
    useEffect(() => {
        return () =>
            setTabsVisitedStatus((prev) => ({
                ...prev,
                movementsAndRepetitionVisited: true,
            }));
    }, []);
    return (
        <div {...props}>
            <Typography className="title" variant="h4">
                {t("ramp_assessments.movements_repetition_form.title")}
            </Typography>
            {data.map((formCardProps) => (
                <FormCard className="form-card" key={formCardProps.title} {...formCardProps} />
            ))}
        </div>
    );
};
