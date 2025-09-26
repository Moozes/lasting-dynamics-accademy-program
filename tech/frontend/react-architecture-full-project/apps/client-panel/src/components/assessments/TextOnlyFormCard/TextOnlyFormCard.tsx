/* eslint-disable react/no-array-index-key */
import Typography from "@mui/material/Typography";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { FormControlTypeEnum, TextOnlyFormCardProps } from "@app-types/index";
import { TextCheckbox, TextRadioButton } from "@components/index";

type Props = HTMLDivProps & TextOnlyFormCardProps;

export const TextOnlyFormCard = ({ title, items, itemsType, adjustCheckboxItems, ...props }: Props) => {
    const t = useTranslationV2();
    return (
        <div {...props}>
            <Typography variant="h4" fontWeight="700" className="title">
                {title}
            </Typography>
            <div className="group">
                <div className="main-section">
                    {items.map((elm, idx) =>
                        itemsType === FormControlTypeEnum.radio ? (
                            <TextRadioButton
                                key={idx}
                                className="item"
                                label={elm.label}
                                name={elm.name}
                                value={elm.value}
                                score={elm.score}
                            />
                        ) : (
                            <TextCheckbox
                                key={idx}
                                className="item"
                                label={elm.label}
                                name={elm.name}
                                score={elm.score}
                                withBorder
                            />
                        )
                    )}
                </div>
                {adjustCheckboxItems && (
                    <div className="adjust-section">
                        <div className="adjust">{t("adjust")}</div>
                        {adjustCheckboxItems.map((elm, idx) => (
                            <TextCheckbox key={idx} {...elm} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
