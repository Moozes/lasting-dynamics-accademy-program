import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAsyncDebounce } from "react-table";

import Box, { BoxProps } from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase, { InputBaseProps } from "@mui/material/InputBase";

import SearchIcon from "../../assets/icons/SearchIcon";
import { useTranslationV2 } from "../../i18n/hooks/useTranslation";
import { resetURLPageParam } from "../../utils/functions";

import * as styles from "./inlineStyles";

type Props = BoxProps & {
    inputProps?: InputBaseProps;
};

export const URLSearchInput = ({ inputProps, ...props }: Props) => {
    const t = useTranslationV2();
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState(() => {
        return searchParams.get("search");
    });
    const onChangeSearchHandler = useAsyncDebounce((value) => {
        if (value) {
            searchParams.set("search", value);
        } else {
            searchParams.delete("search");
        }
        resetURLPageParam(searchParams);
        setSearchParams(searchParams);
    }, 500);

    return (
        <Box {...props}>
            <Box sx={styles.SearchInputContainer2} display="flex" justifyContent="start" alignItems="center">
                <IconButton type="button" aria-label="search" sx={styles.SearchInputIconButton2}>
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={styles.SearchInput2}
                    placeholder={t("Search")}
                    name="search"
                    type="text"
                    value={searchValue || ""}
                    autoComplete="off"
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                        onChangeSearchHandler(e.target.value);
                    }}
                    {...inputProps}
                />
            </Box>
        </Box>
    );
};
