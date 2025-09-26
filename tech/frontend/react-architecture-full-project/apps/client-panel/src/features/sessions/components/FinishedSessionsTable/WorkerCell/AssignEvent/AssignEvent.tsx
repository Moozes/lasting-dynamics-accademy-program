import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";

import { type HTMLDivProps, LabelIcon, SearchInput, SmallColoredCircleIcon, useTranslationV2 } from "ui";

import { popoverProps } from "../inlineStyles";
import { usePopover } from "../WorkerCell.hooks";

import { useAddEvent, useSearchData } from "./AssignEvent.hooks";
import { StyledDiv } from "./StyledDiv";

type Props = HTMLDivProps & {
    sessionId: string;
};

export const AssignEvent = ({ sessionId, ...props }: Props) => {
    const t = useTranslationV2();
    const { handleClick, handleClose, open, anchorEl } = usePopover();
    const { data, isError, isFetching, onChangeHandler, searchValue } = useSearchData();
    const { addEvent, isLastMutationLoading } = useAddEvent(sessionId, handleClose);
    let thereIsData = false;
    if (data && data.data.results.length > 0) thereIsData = true;
    const searchInputClassName = `search-input ${
        thereIsData || isFetching || isLastMutationLoading ? "margin-bottom" : ""
    }`;
    return (
        <div {...props}>
            <IconButton className="icon-button" onClick={handleClick}>
                <LabelIcon className="icon" />
            </IconButton>
            <Popover open={open} anchorEl={anchorEl} onClose={handleClose} {...popoverProps}>
                <StyledDiv>
                    <div className="search-input-container">
                        <SearchInput
                            value={searchValue}
                            onChange={onChangeHandler}
                            placeholder={`${t("search_labels")}...`}
                            className={searchInputClassName}
                        />
                    </div>
                    {(isFetching || isLastMutationLoading) && <div className="loading">{t("loading")}...</div>}
                    {isError && <div className="loading">{t("error")}</div>}
                    {data && (
                        <div className="list">
                            {data.data.results.map((label) => (
                                <div
                                    className={`list-item ${isLastMutationLoading ? "loading" : ""}`}
                                    key={label.id}
                                    role="button"
                                    onClick={() => {
                                        // only allow one mutation call at a time
                                        if (!isLastMutationLoading) addEvent({ labels: [label.id] });
                                    }}
                                >
                                    <div className="label">{label.label_name}</div>
                                    <SmallColoredCircleIcon className="small-colored-circle-icon" />
                                    <div className="category">{label.label_category.category_name}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </StyledDiv>
            </Popover>
        </div>
    );
};
