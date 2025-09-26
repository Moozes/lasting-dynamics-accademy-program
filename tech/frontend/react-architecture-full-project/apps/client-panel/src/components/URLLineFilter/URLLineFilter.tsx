import { useEffect } from "react";

import { Box } from "@mui/material";

import { type HTMLDivProps, Popover, SearchInput, useTranslationV2 } from "ui";

import { popoverContentStyles } from "./inlineStyles";
import { useLineFilterState } from "./URLLineFilter.hooks";

type Props = HTMLDivProps;

export const URLLineFilter = (props: Props) => {
    const t = useTranslationV2();
    const {
        onOpen,
        searchValue,
        onChangeHandler,
        isFetching,
        isError,
        formattedData,
        popoverProps,
        onPopoverClose,
        handleLineSelection,
        handleRemoveFilter,
        selectedLineName,
    } = useLineFilterState();

    useEffect(() => {}, []);

    return (
        <>
            <div {...props} role="button" onClick={onOpen}>
                <div className="text">{selectedLineName || t("workcycles.line")}</div>
            </div>
            <Popover onClose={onPopoverClose} {...popoverProps}>
                <Box sx={popoverContentStyles}>
                    <SearchInput
                        value={searchValue}
                        onChange={onChangeHandler}
                        className="search-input"
                        placeholder={`${t("Search")}...`}
                    />
                    {isFetching && <div className="center">{t("Loading")}...</div>}
                    {isError && <div className="center">{t("error")}</div>}
                    <div
                        className="line-item"
                        role="button"
                        tabIndex={0}
                        onClick={handleRemoveFilter}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                handleRemoveFilter();
                            }
                        }}
                    >
                        {t("none")}
                    </div>
                    {formattedData &&
                        formattedData.length > 0 &&
                        formattedData.map((line) => (
                            <div
                                key={line.id}
                                className="line-item"
                                role="button"
                                tabIndex={0}
                                onClick={() => handleLineSelection(line.id, line.name)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        handleLineSelection(line.id, line.name);
                                    }
                                }}
                            >
                                {line.name}
                            </div>
                        ))}
                </Box>
            </Popover>
        </>
    );
};
