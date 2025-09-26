import { Row } from "react-table";

import { IconButton } from "@mui/material";

import { type HTMLDivProps, Popover, PopoverItem, SettingsIcon, URLSearchInput, usePopover } from "ui";

import { ISelectedRowsProp } from "@app-types/index";
import { useComparison } from "@features/sessions/hooks";
import { ISession } from "@features/sessions/types";

import { CompareButton } from "./CompareButton";
import { DeleteMultipleSessionButton } from "./DeleteMultipleSessionButton";
import { MergeMultipleSessionButton } from "./MergeMultipleSessionButton";

type Props = HTMLDivProps & ISelectedRowsProp;

export const FinishedSessionsTableControls = ({ selectedRows, setSelectedRows, ...props }: Props) => {
    const typedSelectedRows = selectedRows as unknown as Row<ISession>[];
    const comparisonHook = useComparison(typedSelectedRows);
    const { onOpen, ...rest } = usePopover();
    return (
        <div {...props}>
            <URLSearchInput className="search-input" />
            <div className="buttons">
                <IconButton className="icon-button" onClick={onOpen}>
                    <SettingsIcon className="icon" />
                </IconButton>
                <Popover {...rest}>
                    <PopoverItem>
                        <CompareButton comparisonHook={comparisonHook} />
                    </PopoverItem>
                    <PopoverItem>
                        <MergeMultipleSessionButton
                            className="merge-button"
                            selectedRows={selectedRows}
                            setSelectedRows={setSelectedRows}
                        />
                    </PopoverItem>
                    <PopoverItem>
                        <DeleteMultipleSessionButton
                            className="delete-multiple"
                            selectedRows={selectedRows}
                            setSelectedRows={setSelectedRows}
                        />
                    </PopoverItem>
                </Popover>
            </div>
        </div>
    );
};
