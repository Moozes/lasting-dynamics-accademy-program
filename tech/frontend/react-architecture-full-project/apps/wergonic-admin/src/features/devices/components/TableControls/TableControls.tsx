import { type HTMLDivProps, URLSearchInput } from "ui";

type Props = HTMLDivProps;

export const TableControls = (props: Props) => {
    return (
        <div {...props}>
            <URLSearchInput className="search-input" />
        </div>
    );
};
