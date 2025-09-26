import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";

import { usePopover } from "ui";

import { useGetAllFactoriesQuery } from "@queries/index";

export const useFactoryFilterState = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [debouncedSearchValue, setDebouncedSearchValue] = useState<string>(searchValue);
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedFactoryName, setSelectedFactoryName] = useState<string>("");

    const { onOpen, onClose, ...popoverProps } = usePopover();

    useEffect(() => {
        const handler = debounce(() => {
            setDebouncedSearchValue(searchValue);
        }, 300);
        handler();
        return () => handler.cancel();
    }, [searchValue]);

    const { data, isFetching, isError } = useGetAllFactoriesQuery({
        URLsearchterm: debouncedSearchValue,
    });

    const [formattedData, setFormattedData] = useState<{ id: string; name: string }[]>([]);

    useEffect(() => {
        if (data?.data && Array.isArray(data.data)) {
            setFormattedData(
                data.data.map((factory: { id: string; name: string }) => ({
                    id: factory.id,
                    name: factory.name,
                }))
            );
        }
    }, [data]);

    const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
    };

    const handleFactorySelection = (id: string, name: string) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("task_model__workstation__line__factory", id);
        setSearchParams(newSearchParams);

        setSelectedFactoryName(name);
        onClose();
    };

    const handleRemoveFilter = () => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.delete("task_model__workstation__line__factory");
        setSearchParams(newSearchParams);
        setSelectedFactoryName("");
        onClose();
    };

    return {
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
        onPopoverClose: onClose,
    };
};
