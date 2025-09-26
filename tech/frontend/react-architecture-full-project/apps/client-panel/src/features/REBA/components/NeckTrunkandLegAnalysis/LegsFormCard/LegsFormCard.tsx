/* eslint-disable react/no-array-index-key */
import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { ImageRadioButton } from "@components/index";
import { LegsFormCardProps } from "@features/REBA/types";

type Props = HTMLDivProps & LegsFormCardProps;

export const LegsFormCard = ({ title, mainRadioItems, adjustRadioItems, ...props }: Props) => {
    const t = useTranslationV2();
    return (
        <div {...props}>
            <div className="main-section">
                <Typography className="title" variant="h4" fontWeight="700">
                    {title}
                </Typography>
                <div className="content">
                    {mainRadioItems.map((elm, idx) => (
                        <ImageRadioButton key={idx} className="item" {...elm} />
                    ))}
                </div>
            </div>
            <div className="adjust-section">
                <Typography className="title" variant="h5" fontWeight="700">
                    {t("adjust")}
                </Typography>
                <div className="content">
                    {adjustRadioItems.map((elm, idx) => (
                        <ImageRadioButton key={idx} className="item" {...elm} />
                    ))}
                </div>
            </div>
        </div>
    );
};
