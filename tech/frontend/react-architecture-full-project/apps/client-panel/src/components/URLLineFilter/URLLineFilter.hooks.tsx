import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";

import { usePopover } from "ui";

import { useGetAllLinesQuery } from "@queries/index";

export const useLineFilterState = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [debouncedSearchValue, setDebouncedSearchValue] = useState<string>(searchValue);
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedLineName, setSelectedLineName] = useState<string>("");

    const { onOpen, onClose, ...popoverProps } = usePopover();

    useEffect(() => {
        const handler = debounce(() => setDebouncedSearchValue(searchValue), 300);
        handler();
        return () => handler.cancel();
    }, [searchValue]);

    const { data, isFetching, isError } = useGetAllLinesQuery({
        URLsearchterm: debouncedSearchValue,
    });

    const [formattedData, setFormattedData] = useState<{ id: string; name: string }[]>([]);

    useEffect(() => {
        if (data?.data && Array.isArray(data.data)) {
            setFormattedData(
                data.data.map((line: { id: string; name: string }) => ({
                    id: line.id,
                    name: line.name,
                }))
            );
        }
    }, [data]);

    const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
    };

    const handleLineSelection = (id: string, name: string) => {
        setSelectedLineName(name);
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("task_model__workstation__line", id);
        setSearchParams(newSearchParams);
        onClose();
    };

    const handleRemoveFilter = () => {
        setSelectedLineName("");
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.delete("task_model__workstation__line");
        setSearchParams(newSearchParams);
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
        handleLineSelection,
        handleRemoveFilter,
        selectedLineName,
        onPopoverClose: onClose,
    };
};
