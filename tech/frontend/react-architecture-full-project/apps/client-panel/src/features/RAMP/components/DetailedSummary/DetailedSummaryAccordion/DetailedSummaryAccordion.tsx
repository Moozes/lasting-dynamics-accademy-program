/* eslint-disable react/no-array-index-key */
import { Fragment, useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

import { ChevronDownIcon, HTMLDivProps, useTranslationV2 } from "ui";

import { DetailedSummaryAccordionProps } from "@features/RAMP/types";

import { StatusGroup } from "./StatusGroup";

type Props = HTMLDivProps & DetailedSummaryAccordionProps;

export const DetailedSummaryAccordion = ({ title, nbRed, nbYellow, nbGreen, tables, ...props }: Props) => {
    const t = useTranslationV2();
    const [expanded, setExpanded] = useState(false);
    return (
        <div {...props}>
            <Accordion
                elevation={0}
                className="accordion"
                expanded={expanded}
                onChange={() => setExpanded((prev) => !prev)}
            >
                <AccordionSummary
                    className={`accordion-summary ${expanded ? "expanded" : ""}`}
                    expandIcon={<ChevronDownIcon />}
                >
                    <Typography variant={expanded ? "h4" : "body1"}>{title}</Typography>
                    <StatusGroup
                        className="status-group"
                        dangerValue={nbRed}
                        mediumValue={nbYellow}
                        normalValue={nbGreen}
                    />
                </AccordionSummary>
                <AccordionDetails className="accordion-details">
                    {tables.map((table, tableIndex) => (
                        <Fragment key={tableIndex}>
                            {table.title && (
                                <Typography className="table-title" variant="h5">
                                    {table.title}{" "}
                                </Typography>
                            )}
                            <table>
                                <thead>
                                    <tr>
                                        <th className="text-align-start">
                                            {t("ramp_assessments.results.table_header_1")}
                                        </th>
                                        <th className="assessment">{t("ramp_assessments.results.table_header_2")}</th>
                                        <th className="score">{t("ramp_assessments.results.table_header_3")}</th>
                                        <th className="user-comment">{t("ramp_assessments.results.table_header_4")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {table.dataRows.map((elm) => (
                                        <tr key={elm.text}>
                                            <td className="text-align-start">{elm.text}</td>
                                            <td className={elm.staus} />
                                            <td>{elm.score}</td>
                                            <td>{elm.userComment}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Fragment>
                    ))}
                </AccordionDetails>
            </Accordion>
        </div>
    );
};
