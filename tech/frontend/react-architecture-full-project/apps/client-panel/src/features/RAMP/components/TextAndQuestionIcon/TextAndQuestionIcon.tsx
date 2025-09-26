import IconButton from "@mui/material/IconButton";

import { type HTMLDivProps, QuestionCircleIcon } from "ui";

type Props = HTMLDivProps & {
    text: string;
    onQuestionIconClick: () => void;
};

export const TextAndQuestionIcon = ({ text, onQuestionIconClick, ...props }: Props) => {
    return (
        <div {...props}>
            <span>{text}</span>
            <IconButton onClick={onQuestionIconClick} className="icon-button">
                <QuestionCircleIcon />
            </IconButton>
        </div>
    );
};
