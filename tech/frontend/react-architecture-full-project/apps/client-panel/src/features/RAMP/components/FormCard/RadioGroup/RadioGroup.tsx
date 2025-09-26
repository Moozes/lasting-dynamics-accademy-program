import Typography from "@mui/material/Typography";

import { FormikRadio, type HTMLDivProps } from "ui";

import { RadioGroupChoice } from "@features/RAMP/types";

type Props = HTMLDivProps & {
    name: string;
    title?: string;
    choices: RadioGroupChoice[];
};

export const RadioGroup = ({ name, choices, title, ...props }: Props) => {
    return (
        <div {...props}>
            {title && (
                <Typography className="title" variant="h6">
                    {title}
                </Typography>
            )}
            <div className="radio-group">
                <div className="choices">
                    {choices.map((choice) => (
                        <label key={choice.label}>
                            <FormikRadio name={name} value={choice.actualValue} />
                            <div className="text">{choice.label}</div>
                        </label>
                    ))}
                </div>
                <div className="statuses">
                    {choices.map((choice) => (
                        <div
                            key={choice.label}
                            className={`status ${choice.status} ${choice.firstStatus ? "first" : ""}`}
                        >
                            {choice.displayValue}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
