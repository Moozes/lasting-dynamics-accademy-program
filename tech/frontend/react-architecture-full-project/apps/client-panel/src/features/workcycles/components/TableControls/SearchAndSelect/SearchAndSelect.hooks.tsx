import { FormEvent, useEffect, useState } from "react";

type Option = {
    label: string;
    value: string;
};

export const useSearchAndSelectState = (options: Option[]) => {
    const [searchValue, setSearchValue] = useState("");
    const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);

    const handleSearch = (e: FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value.toLowerCase();
        setSearchValue(value);

        const filtered = options.filter((option) => option.label.toLowerCase().includes(value));
        setFilteredOptions(filtered);
    };

    useEffect(() => {
        setFilteredOptions(options);
    }, [options]);

    return {
        searchValue,
        filteredOptions,
        handleSearch,
    };
};
