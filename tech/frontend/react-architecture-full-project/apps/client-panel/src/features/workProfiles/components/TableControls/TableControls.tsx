import { type HTMLDivProps, URLSearchInput } from "ui";

type Props = HTMLDivProps;

export const TableControls = (props: Props) => {
    return (
        <div {...props}>
            <div className="inputs">
                <URLSearchInput className="search-input" />
            </div>
        </div>
    );
};
