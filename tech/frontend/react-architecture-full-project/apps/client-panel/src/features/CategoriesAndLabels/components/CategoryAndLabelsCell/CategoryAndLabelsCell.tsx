/* eslint-disable react/no-array-index-key */
import type { HTMLDivProps } from "ui";

import { ICategoryAndLabels } from "@features/CategoriesAndLabels/types";

type Props = HTMLDivProps & {
    categoryAndLabels: ICategoryAndLabels;
};

export const CategoryAndLabelsCell = ({ categoryAndLabels, ...props }: Props) => {
    return (
        <div {...props}>
            <div className="category">{categoryAndLabels.category_name}/</div>
            {categoryAndLabels.labels.map((elm, index) => (
                <div key={index} className={`label _${index % 4}`}>
                    {elm.label_name}
                </div>
            ))}
        </div>
    );
};
