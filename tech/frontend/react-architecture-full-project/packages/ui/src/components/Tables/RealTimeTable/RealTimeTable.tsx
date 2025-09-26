/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-nested-ternary */
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Column, useAsyncDebounce, useGlobalFilter, useRowSelect, useTable } from "react-table";

import {
    Box,
    IconButton,
    InputBase,
    LinearProgress,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableRow,
    useTheme,
} from "@mui/material";

import SearchIcon from "../../../assets/icons/SearchIcon";
// import { ColumnAsc } from "../../../assets/icons/tableSorting/ColumnAsc";
// import { ColumnDesc } from "../../../assets/icons/tableSorting/ColumnDesc";
// import { ColumnNotSorted } from "../../../assets/icons/tableSorting/ColumnNotSorted";
import { useTranslationV2 } from "../../../i18n/hooks/useTranslation";
import { Btn } from "../../Btn";
import Typography from "../../Typography";
import * as styles from "../styles";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "../utils";

export const RealTimeTable = ({
    columns,
    data,
    isTableLoadingData,
    hideColumns,
    // sortingKeyMap,
    getMoreData,
    noMoreData,
    displayMessage,
    showSearchBar,
}: {
    columns: Column[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
    isTableLoadingData?: boolean;
    MultipleDeleteButton?: React.ElementType;
    AddRowButton?: React.ReactNode;
    hideColumns?: string[];
    sortingKeyMap?: Map<string, string>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    authenticatedUser: any;
    getMoreData: () => void;
    noMoreData: boolean;
    displayMessage?: string;
    showSearchBar?: boolean;
}) => {
    const t = useTranslationV2();
    const theme = useTheme();
    const [searchParams, setSearchParams] = useSearchParams();
    // const [URLOrderKeys, setURLOrderQuery] = useState(() => {
    //     return new Set(!searchParams.get("ordering") ? [] : searchParams.get("ordering")?.split(","));
    // });
    const {
        getTableProps,
        headerGroups,
        rows,
        prepareRow,
        setGlobalFilter,
        state: { globalFilter },
    } = useTable(
        {
            columns,
            data,
            manualGlobalFilter: true,
            initialState: {
                pageIndex: Number(searchParams.get("page") || DEFAULT_PAGE) - 1,
                pageSize: Number(searchParams.get("page_size") || DEFAULT_PAGE_SIZE),
                hiddenColumns: hideColumns || [],
            },
        },
        useGlobalFilter,
        useRowSelect
    );

    const [searchValue, setSearchValue] = useState(() => {
        return searchParams.get("search") || globalFilter;
    });

    const onChangeSearchHandler = useAsyncDebounce((value) => {
        setGlobalFilter(value || null);
        if (value) {
            searchParams.set("search", value);
        } else {
            searchParams.delete("search");
        }
        setSearchParams(searchParams);
    }, 500);

    // const onColumnClickhandler = (cellKey: string) => {
    //     const newURLKeys = new Set([...URLOrderKeys]);
    //     const sortKey = sortingKeyMap?.has(cellKey.split("header_")[1])
    //         ? sortingKeyMap.get(cellKey.split("header_")[1])
    //         : cellKey.split("header_")[1];

    //     if (!newURLKeys.has(`${sortKey}`) && !newURLKeys.has(`-${sortKey}`) && newURLKeys.size === 0) {
    //         newURLKeys.add(`-${sortKey}`);
    //     } else if (!newURLKeys.has(`${sortKey}`) && !newURLKeys.has(`-${sortKey}`) && newURLKeys.size > 0) {
    //         newURLKeys.clear();
    //         newURLKeys.add(`-${sortKey}`);
    //     } else if (newURLKeys.has(`-${sortKey}`)) {
    //         newURLKeys.delete(`-${sortKey}`);
    //         newURLKeys.add(`${sortKey}`);
    //     } else if (newURLKeys.has(`${sortKey}`)) {
    //         newURLKeys.clear();
    //     }

    //     setURLOrderQuery(newURLKeys);
    //     if (newURLKeys.size === 0) {
    //         searchParams.delete("ordering");
    //     } else {
    //         searchParams.set("ordering", [...newURLKeys].join(","));
    //     }
    //     setSearchParams(searchParams);
    // };

    return (
        <>
            {showSearchBar && (
                <Box display="flex" justifyContent="space-between" alignItems="flex-end" mb={3}>
                    <Box>
                        <Box
                            sx={styles.SearchInputContainer2}
                            display="flex"
                            justifyContent="start"
                            alignItems="center"
                        >
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
                            />
                        </Box>
                    </Box>
                    <Box display="flex" gap={1} />
                </Box>
            )}
            <Box width="100%">{isTableLoadingData && <LinearProgress sx={styles.TableLinearProgressStyle} />}</Box>
            <Box sx={styles.TableContainerStyle}>
                <Table {...getTableProps()} size="small" sx={styles.TableStyle}>
                    <TableHead sx={styles.TableHeadStyle2}>
                        {headerGroups.map((headerGroup) => {
                            const { key: rowKey, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();
                            return (
                                <TableRow {...restHeaderGroupProps} key={rowKey}>
                                    {headerGroup.headers.map((column) => {
                                        const { key: cellKey, ...rest } = column.getHeaderProps();
                                        // const columnHeader = sortingKeyMap?.has(cellKey.toString().split("header_")[1])
                                        //     ? sortingKeyMap.get(cellKey.toString().split("header_")[1])
                                        //     : cellKey.toString().split("header_")[1];

                                        if (cellKey.toString().includes("noSort_actions")) {
                                            return (
                                                <TableCell
                                                    {...rest}
                                                    key={cellKey}
                                                    sx={{
                                                        ...styles.TableHeadCellStyle,
                                                        position: "sticky",
                                                        right: 0,
                                                        bgcolor: (theme) => theme.color_system.divider.light_grey,
                                                    }}
                                                >
                                                    {column.render("Header")}
                                                </TableCell>
                                            );
                                        }
                                        return (
                                            <TableCell
                                                padding="none"
                                                {...rest}
                                                key={cellKey}
                                                sx={styles.TableHeadCellStyle2}
                                                // onClick={() => {
                                                //     if (cellKey.toString().startsWith("header_noSort")) return;
                                                //     onColumnClickhandler(cellKey.toString());
                                                // }}
                                            >
                                                <Box
                                                    display="flex"
                                                    flexDirection="row"
                                                    gap={1}
                                                    justifyContent="flex-start"
                                                    alignItems="center"
                                                >
                                                    <Box sx={styles.TableHeadCellTextStyle}>
                                                        {column.render("Header")}
                                                    </Box>
                                                    {/* {cellKey != "header_selection" &&
                                                        !cellKey.toString().startsWith("header_noSort") && (
                                                            <Box paddingTop={0.8}>
                                                                {URLOrderKeys.has(`-${columnHeader}`) && <ColumnDesc />}

                                                                {URLOrderKeys.has(`${columnHeader}`) && <ColumnAsc />}

                                                                {!URLOrderKeys.has(`${columnHeader}`) &&
                                                                    !URLOrderKeys.has(`-${columnHeader}`) && (
                                                                        <ColumnNotSorted />
                                                                    )}
                                                            </Box>
                                                        )} */}
                                                </Box>
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableHead>
                    <TableBody sx={styles.TableBodyStyle2}>
                        {rows.map((row) => {
                            prepareRow(row);
                            const { key: rowkey, ...restRowProps } = row.getRowProps();
                            return (
                                <TableRow
                                    sx={{
                                        opacity: () => {
                                            if (typeof row.values.is_active == "undefined" || row.values.is_active) {
                                                return 1;
                                            }
                                            return 0.3;
                                        },
                                        background: (theme) => theme.color_system.background.paper,
                                    }}
                                    {...restRowProps}
                                    key={rowkey}
                                >
                                    {row.cells.map((cell) => {
                                        const { key: cellKey, ...restOfCellProps } = cell.getCellProps();
                                        if (cellKey.toString().includes("noSort_actions")) {
                                            return (
                                                <TableCell
                                                    {...restOfCellProps}
                                                    key={cellKey}
                                                    sx={[
                                                        styles.TableBodyCellStyle2 as any,
                                                        {
                                                            position: "sticky",
                                                            right: 0,
                                                            bgcolor: (theme) => theme.color_system.background.paper,
                                                        },
                                                    ]}
                                                >
                                                    {cell.render("Cell")}
                                                </TableCell>
                                            );
                                        }
                                        return (
                                            <TableCell
                                                {...restOfCellProps}
                                                key={cellKey}
                                                sx={styles.TableBodyCellStyle2}
                                            >
                                                {cell.render("Cell")}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                    <TableFooter sx={styles.TableFooterStyle2}>
                        <TableRow>
                            <TableCell colSpan={columns.length + 3} sx={styles.TableFooterCellStyle2}>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Box
                                        display="flex"
                                        justifyContent="space-between"
                                        gap={1}
                                        alignItems="center"
                                        position="sticky"
                                        left={18}
                                    >
                                        <Typography variant="body2" color={theme.color_system.text.primary}>
                                            {displayMessage}
                                        </Typography>
                                    </Box>
                                    {!noMoreData && (
                                        <Box
                                            sx={styles.TablepaginationStyle}
                                            display="flex"
                                            justifyContent="space-between"
                                            gap={1}
                                            alignItems="center"
                                        >
                                            <Btn onClick={getMoreData} disabled={isTableLoadingData} variant="text">
                                                {t("Load more")}
                                            </Btn>
                                        </Box>
                                    )}
                                </Box>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </Box>
        </>
    );
};
