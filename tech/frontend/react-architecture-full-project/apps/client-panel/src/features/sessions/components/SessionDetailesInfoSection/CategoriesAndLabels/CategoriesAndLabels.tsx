import { type HTMLDivProps, LabelIcon } from "ui";

import { IServerResponseSession } from "@features/sessions/types";

import { getFormatedData } from "./CategoriesAndLabels.helpers";

type Props = HTMLDivProps & {
    sessionData: IServerResponseSession;
};

export const CategoriesAndLabels = ({ sessionData, ...props }: Props) => {
    const { formatedData } = getFormatedData(sessionData.events);
    return (
        <div {...props}>
            {formatedData.map((category) => (
                <div key={category.categoryId} className="category">
                    <div className="category-name">{category.categoryName} /</div>
                    {category.labels.map((label, labelIdx) => (
                        <div key={label.labelId} className={`label _${labelIdx % 4}`}>
                            <LabelIcon />
                            <div className="label-name">
                                {label.labelName} {label.duration && `: ${label.duration}`}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
