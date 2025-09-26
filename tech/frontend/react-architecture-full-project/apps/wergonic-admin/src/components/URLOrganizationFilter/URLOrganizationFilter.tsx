/* eslint-disable jsx-a11y/label-has-associated-control */
import { Box } from "@mui/material";

import { Checkbox, type HTMLDivProps, OrganizationIcon, Popover, SearchInput, useTranslationV2 } from "ui";

import { popoverContentStyles } from "./inlineStyles";
import { useOrganizationFilterState } from "./URLOrganizationFilter.hooks";

type Props = HTMLDivProps;

export const URLOrganizationFilter = (props: Props) => {
    const t = useTranslationV2();
    const {
        onOpen,

        searchValue,
        onChangeHandler,

        isFetching,
        isError,
        formatedData,

        popoverProps,
        onPopoverClose,
        handleOrganizationSelection,
    } = useOrganizationFilterState();
    return (
        <>
            <div {...props} role="button" onClick={onOpen}>
                <OrganizationIcon className="icon" />
                <div className="text"> {t("Organization")} </div>
            </div>
            <Popover onClose={onPopoverClose} {...popoverProps}>
                <Box sx={popoverContentStyles}>
                    <SearchInput
                        value={searchValue}
                        onChange={onChangeHandler}
                        className="search-input"
                        placeholder={`${t("Search")}...`}
                    />
                    {isFetching && <div className="center">{t("loading")}...</div>}
                    {isError && <div className="center">{t("error")}</div>}
                    {formatedData &&
                        formatedData.map((organization, index) => (
                            <label key={organization.name} className="organization-item">
                                <div className="organization-name">{organization.name}</div>
                                <Checkbox
                                    size="small"
                                    checked={organization.checked}
                                    onChange={() => handleOrganizationSelection(index)}
                                />
                            </label>
                        ))}
                </Box>
            </Popover>
        </>
    );
};
