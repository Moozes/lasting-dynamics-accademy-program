import { type HTMLDivProps, URLSearchInput } from "ui";

import { AddCategoryButton } from "./AddCategoryButton";

type Props = HTMLDivProps;

export const CategoryAndLabelsTableControls = (props: Props) => {
    return (
        <div {...props}>
            <URLSearchInput className="search-input" />
            <AddCategoryButton />
        </div>
    );
};
