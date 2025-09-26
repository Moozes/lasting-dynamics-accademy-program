import { type HTMLDivProps, URLSearchInput } from "ui";

import { AddFirmware } from "./AddFirmware";

type Props = HTMLDivProps;

export const TableControls = (props: Props) => {
    return (
        <div {...props}>
            <div className="inputs">
                <URLSearchInput className="search-input" />
            </div>
            <AddFirmware className="add-firmware" />
        </div>
    );
};
