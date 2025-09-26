import { useFormikContext } from "formik";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { type HTMLDivProps, QuestionCircleIcon } from "ui";

import { useInformationDialog } from "@features/RAMP/hooks";
import { FormCardProps, RadioGroupChoice } from "@features/RAMP/types";

import { CommentIconButton } from "../CommentIconButton";

import { RadioGroup } from "./RadioGroup";

type Props = HTMLDivProps & FormCardProps;

export const FormCard = ({ title, description, images, forms, commentInputName, dialogText, ...props }: Props) => {
    const useMultipleForms = forms.form1Name && forms.form1Choices;
    const { values } = useFormikContext();
    const hasComment = (values as any)[commentInputName];

    const { openInformationDialog } = useInformationDialog();

    return (
        <div {...props}>
            <Typography className="title" variant="h4">
                {title}
            </Typography>
            <div className="content">
                <div className="left">
                    <div className="description">
                        <Typography className="text" variant="body1">
                            {description}
                        </Typography>
                        <IconButton className="icon-btn" onClick={() => openInformationDialog(dialogText)}>
                            <QuestionCircleIcon className="icon" />
                        </IconButton>
                    </div>
                    <div className="images">
                        {images.map((image) => (
                            <img key={image} src={image} alt="illustration" />
                        ))}
                    </div>
                </div>
                <div className="right">
                    <div className="comment-icon-Container">
                        <CommentIconButton commentDialogInputName={commentInputName} showBadge={hasComment} />
                    </div>
                    <div className="forms-container">
                        {useMultipleForms ? (
                            <RadioGroup
                                className="form-1"
                                name={forms.form1Name as string}
                                title={forms.form1Title}
                                choices={forms.form1Choices as RadioGroupChoice[]}
                            />
                        ) : (
                            <div className="form-1-empty" />
                        )}
                        <RadioGroup
                            className="form-2"
                            name={forms.form2Name}
                            title={forms.form2Title}
                            choices={forms.form2Choices}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
