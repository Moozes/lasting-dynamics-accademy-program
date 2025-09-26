import { Box } from "@mui/material";

import { type HTMLDivProps, Popover, SearchInput, useTranslationV2 } from "ui";
import { usePopover } from "ui";

import { popoverContentStyles, popoverStyles } from "./inlineStyles";
import { useSearchAndSelectState } from "./SearchAndSelect.hooks";

type Option = {
    label: string;
    value: string;
};

type Props = HTMLDivProps & {
    options: Option[];
    setSelectedValue: (id: string) => void;
};

export const SearchAndSelect = ({ options, setSelectedValue, ...props }: Props) => {
    const t = useTranslationV2();
    const { onOpen, onClose, ...popoverProps } = usePopover();

    const { searchValue, filteredOptions, handleSearch } = useSearchAndSelectState(options);

    const handleSelectOption = (id: string) => {
        setSelectedValue(id);
        onClose();
    };

    return (
        <div {...props}>
            <SearchInput
                className="search-input"
                placeholder={t("Search")}
                value={searchValue}
                onChange={handleSearch}
                onClick={onOpen}
            />
            <Popover onClose={onClose} {...popoverProps} sx={popoverStyles}>
                <Box sx={popoverContentStyles}>
                    {filteredOptions.map((option) => (
                        <div
                            key={option.value}
                            className="option-item"
                            role="button"
                            onClick={() => handleSelectOption(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </Box>
            </Popover>
        </div>
    );
};
