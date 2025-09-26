import { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

import { ChevronDownIcon, HTMLDivProps } from "ui";

import { TRAMPAccordionProps } from "@features/RAMP/types";

type Props = HTMLDivProps & TRAMPAccordionProps;

export const RAMPAccordion = ({ title, status, children, ...props }: Props) => {
    const [expanded, setExpanded] = useState(false);
    const ovalClassName = `oval ${status || ""}`;
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
                    <div className={ovalClassName} />
                </AccordionSummary>
                <AccordionDetails className="accordion-details">{children}</AccordionDetails>
            </Accordion>
        </div>
    );
};
