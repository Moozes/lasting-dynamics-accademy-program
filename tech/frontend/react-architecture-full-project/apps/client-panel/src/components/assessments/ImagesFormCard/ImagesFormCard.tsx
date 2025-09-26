/* eslint-disable react/no-array-index-key */
import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { ImagesFormCardProps } from "@app-types/index";
import { ImageRadioButton } from "@components/assessments/ImageRadioButton";
import { TextCheckbox } from "@components/assessments/TextCheckbox";
import { TextRadioButton } from "@components/assessments/TextRadioButton";

type Props = HTMLDivProps & ImagesFormCardProps;

export const ImagesFormCard = ({
    title,
    radioItems,
    checkboxItems,
    checkboxImage,
    radioButtonItems,
    ...props
}: Props) => {
    const t = useTranslationV2();
    return (
        <div {...props}>
            <Typography className="title" variant="h4" fontWeight="700">
                {title}
            </Typography>
            <div className="main">
                <div className="radio-buttons">
                    {radioItems.map((elm, idx) => (
                        <ImageRadioButton key={idx} className="item" {...elm} />
                    ))}
                </div>
                {(checkboxItems || radioButtonItems) && (
                    <div className="adjust-section">
                        <div className="adjust">{t("adjust")}</div>
                        {checkboxItems?.map((elm, idx) => (
                            <TextCheckbox key={idx} className="item" {...elm} />
                        ))}
                        {radioButtonItems?.map((elm, idx) => (
                            <TextRadioButton key={idx} className="item" noBorder {...elm} />
                        ))}
                        <div className="checkbox-image">
                            {checkboxImage && <img src={checkboxImage} alt="illustration" />}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
