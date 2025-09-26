import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { debounce } from "lodash";

import { usePopover } from "ui";

import { readAllOrganizationNames } from "@queries/index";

export const useSearchData = () => {
    const [searchValue, setSearchValue] = useState("");
    const [debouncedSearchValue, setDebouncedSearchValue] = useState(searchValue);
    const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
    };
    useEffect(() => {
        // Debounce input state
        const handler = debounce(() => setDebouncedSearchValue(searchValue), 500); // Adjust the delay as needed
        handler();
        // Cleanup the debounce handler
        return () => handler.cancel();
    }, [searchValue]);

    const { data, isFetching, isError } = useQuery(
        ["organizations", "names", { search: debouncedSearchValue }],
        () => readAllOrganizationNames({ search: debouncedSearchValue }),
        { enabled: Boolean(debouncedSearchValue) }
    );

    return {
        searchValue,
        onChangeHandler,
        data,
        isFetching,
        isError,
    };
};

type TFormatedData = { name: string; checked: boolean }[];

export const useOrganizationFilterState = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { onOpen, onClose, ...popoverProps } = usePopover();
    const { searchValue, onChangeHandler, data, isFetching, isError } = useSearchData();
    const [formatedData, setFormatedData] = useState<TFormatedData | undefined>(undefined);
    useEffect(() => {
        if (data) {
            setFormatedData(data.data.organization_names.map((name) => ({ name, checked: false })));
        }
    }, [data]);
    const handleOrganizationSelection = (index: number) => {
        setFormatedData((prev) =>
            prev?.map((organization, idx) =>
                index === idx ? { ...organization, checked: !organization.checked } : organization
            )
        );
    };
    const onPopoverClose = () => {
        onClose();
        // initilize with existing search params
        const newSearchParams = new URLSearchParams(searchParams);
        if (formatedData) {
            const checkedOrganizations = formatedData
                .filter((organization) => organization.checked)
                .map((organization) => organization.name)
                .join(",");
            if (checkedOrganizations) {
                newSearchParams.set("organization_names", checkedOrganizations);
            } else {
                newSearchParams.delete("organization_names");
            }
            setSearchParams(newSearchParams);
        }
    };

    return {
        onOpen,

        searchValue,
        onChangeHandler,

        isFetching,
        isError,
        formatedData,

        popoverProps,
        onPopoverClose,
        handleOrganizationSelection,
    };
};
