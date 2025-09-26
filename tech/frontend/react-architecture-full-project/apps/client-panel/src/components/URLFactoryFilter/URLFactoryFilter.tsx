import { Box } from "@mui/material";

import { type HTMLDivProps, Popover, SearchInput, useTranslationV2 } from "ui";

import { popoverContentStyles } from "./inlineStyles";
import { useFactoryFilterState } from "./URLFactoryFilter.hooks";

type Props = HTMLDivProps;

export const URLFactoryFilter = (props: Props) => {
    const t = useTranslationV2();
    const {
        onOpen,
        searchValue,
        onChangeHandler,
        isFetching,
        isError,
        formattedData,
        popoverProps,
        handleFactorySelection,
        handleRemoveFilter,
        selectedFactoryName,
        onPopoverClose,
    } = useFactoryFilterState();

    return (
        <>
            <div {...props} role="button" onClick={onOpen}>
                <div className="text">{selectedFactoryName || t("workcycles.factory")}</div>
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
                        className="factory-item"
                        role="button"
                        tabIndex={0}
                        onClick={handleRemoveFilter}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                handleRemoveFilter();
                            }
                        }}
                        aria-label="Remove factory filter"
                    >
                        {t("none")}
                    </div>
                    {/* Render factory list */}
                    {formattedData &&
                        formattedData.length > 0 &&
                        formattedData.map((factory) => (
                            <div
                                key={factory.id}
                                className="factory-item"
                                role="button"
                                tabIndex={0}
                                onClick={() => handleFactorySelection(factory.id, factory.name)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        handleFactorySelection(factory.id, factory.name);
                                    }
                                }}
                                aria-label={`Select factory ${factory.name}`}
                            >
                                {factory.name}
                            </div>
                        ))}
                </Box>
            </Popover>
        </>
    );
};
