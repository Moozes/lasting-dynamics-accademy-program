/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-nested-ternary */
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Column, Row } from "react-table";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
    Box,
    IconButton,
    LinearProgress,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableRow,
    useTheme,
} from "@mui/material";

import { ColumnAsc } from "../../../assets/icons/tableSorting/ColumnAsc";
import { ColumnDesc } from "../../../assets/icons/tableSorting/ColumnDesc";
import { ColumnNotSorted } from "../../../assets/icons/tableSorting/ColumnNotSorted";
import { useTranslationV2 } from "../../../i18n/hooks/useTranslation";
import Typography from "../../Typography";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "../utils";

import * as styles from "./inlineStyles";
import { usePaginatedTableV2 } from "./PaginatedTableV2.hooks";

export const PaginatedTableV2 = ({
    columns,
    meta,
    isTableLoadingData,
    sortingKeyMap,
    displayMessage,
    paginatedTableProps,
    isRowDisabled,
}: {
    columns: Column[];
    meta: { next: string; previous: string; pageCount: number };
    isTableLoadingData: boolean;
    sortingKeyMap?: Map<string, string>;
    displayMessage?: string;
    paginatedTableProps: ReturnType<typeof usePaginatedTableV2>;
    isRowDisabled?: (row: Row) => boolean;
}) => {
    const pageSizeMenuOptions = ["5", "10", "15", "20"];
    const t = useTranslationV2();
    const theme = useTheme();
    const [searchParams, setSearchParams] = useSearchParams();
    const [URLOrderKeys, setURLOrderQuery] = useState(() => {
        return new Set(!searchParams.get("ordering") ? [] : searchParams.get("ordering")?.split(","));
    });

    const onColumnClickhandler = (cellKey: string) => {
        const newURLKeys = new Set([...URLOrderKeys]);
        const sortKey = sortingKeyMap?.has(cellKey.split("header_")[1])
            ? sortingKeyMap.get(cellKey.split("header_")[1])
            : cellKey.split("header_")[1];
        if (!newURLKeys.has(`${sortKey}`) && !newURLKeys.has(`-${sortKey}`)) {
            newURLKeys.add(`-${sortKey}`);
        } else if (newURLKeys.has(`-${sortKey}`)) {
            newURLKeys.delete(`-${sortKey}`);
            newURLKeys.add(`${sortKey}`);
        } else if (newURLKeys.has(`${sortKey}`)) {
            newURLKeys.delete(`${sortKey}`);
        }

        setURLOrderQuery(newURLKeys);
        if (newURLKeys.size === 0) {
            searchParams.delete("ordering");
        } else {
            searchParams.set("ordering", [...newURLKeys].join(","));
        }
        setSearchParams(searchParams);
    };

    return (
        <>
            <Box width="100%">{isTableLoadingData && <LinearProgress sx={styles.TableLinearProgressStyle} />}</Box>
            <Box sx={styles.TableContainerStyle}>
                <Table {...paginatedTableProps.getTableProps()} size="small" sx={styles.TableStyle}>
                    <TableHead sx={styles.TableHeadStyle2}>
                        {paginatedTableProps.headerGroups.map((headerGroup) => {
                            const { key: rowKey, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();
                            return (
                                <TableRow {...restHeaderGroupProps} key={rowKey}>
                                    {headerGroup.headers.map((column) => {
                                        const { key: cellKey, ...rest } = column.getHeaderProps(
                                            column.getSortByToggleProps()
                                        );
                                        const columnHeader = sortingKeyMap?.has(cellKey.toString().split("header_")[1])
                                            ? sortingKeyMap.get(cellKey.toString().split("header_")[1])
                                            : cellKey.toString().split("header_")[1];
                                        if (cellKey.toString().includes("noSort_actions")) {
                                            return (
                                                <TableCell {...rest} key={cellKey} sx={styles.TableHeadCellStyle}>
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
                                                onClick={() => {
                                                    if (cellKey.toString().startsWith("header_noSort")) return;
                                                    onColumnClickhandler(cellKey.toString());
                                                }}
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
                                                    {cellKey != "header_selection" &&
                                                        !cellKey.toString().startsWith("header_noSort") && (
                                                            <Box paddingTop={0.8}>
                                                                {URLOrderKeys.has(`-${columnHeader}`) && <ColumnDesc />}

                                                                {URLOrderKeys.has(`${columnHeader}`) && <ColumnAsc />}

                                                                {!URLOrderKeys.has(`${columnHeader}`) &&
                                                                    !URLOrderKeys.has(`-${columnHeader}`) && (
                                                                        <ColumnNotSorted />
                                                                    )}
                                                            </Box>
                                                        )}
                                                </Box>
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableHead>
                    <TableBody sx={styles.TableBodyStyle2}>
                        {paginatedTableProps.page.map((row) => {
                            paginatedTableProps.prepareRow(row);
                            const { key: rowkey, ...restRowProps } = row.getRowProps();
                            const isDisabled = isRowDisabled ? isRowDisabled(row) : false;
                            return (
                                <TableRow sx={styles.tableRowStyles(isDisabled)} {...restRowProps} key={rowkey}>
                                    {row.cells.map((cell) => {
                                        const { key: cellKey, ...restOfCellProps } = cell.getCellProps();
                                        if (cellKey.toString().includes("noSort_actions")) {
                                            return (
                                                <TableCell
                                                    {...restOfCellProps}
                                                    key={cellKey}
                                                    sx={styles.TableBodyStickyCellStyle}
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
                        {displayMessage && (
                            <TableRow>
                                <TableCell colSpan={columns.length + 3} sx={styles.TableFooterCellStyle3}>
                                    <Typography variant="body2" color={theme.color_system.text.primary}>
                                        {t(displayMessage)}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        )}
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
                                            {t("Rows")}
                                        </Typography>{" "}
                                        :{" "}
                                        <Select
                                            sx={styles.TableSelectMenuStyle2}
                                            onChange={(e) => {
                                                paginatedTableProps.setPageSize(parseInt(e.target.value, 10));
                                                searchParams.set("page_size", e.target.value);
                                                setSearchParams(searchParams);
                                            }}
                                            size="small"
                                            label="Rows"
                                            value={searchParams.get("page_size") || DEFAULT_PAGE_SIZE}
                                        >
                                            {pageSizeMenuOptions.map((menuOption) => (
                                                <MenuItem
                                                    value={menuOption}
                                                    key={menuOption}
                                                    selected={searchParams.get("page_size") === menuOption}
                                                    sx={styles.TableSelectMenuItemStyle}
                                                >
                                                    {menuOption}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Box>
                                    <Box
                                        sx={styles.TablepaginationStyle}
                                        display="flex"
                                        justifyContent="space-between"
                                        gap={1}
                                        alignItems="center"
                                    >
                                        <IconButton
                                            onClick={() => {
                                                if (searchParams.get("page") == "1") {
                                                    return;
                                                }
                                                searchParams.set(
                                                    "page",
                                                    String(parseInt(searchParams.get("page") || DEFAULT_PAGE, 10) - 1)
                                                );
                                                setSearchParams(searchParams);
                                            }}
                                            color="primary"
                                            size="small"
                                            disabled={!meta.previous}
                                        >
                                            <ChevronLeftIcon fontSize="small" sx={styles.ChevronIconStyles} />
                                        </IconButton>{" "}
                                        <Typography variant="body2" sx={styles.ActivePageNumberStyles}>
                                            {searchParams.get("page") || DEFAULT_PAGE}
                                        </Typography>
                                        <Typography
                                            fontSize="18px"
                                            fontWeight="300"
                                            color={theme.color_system.text.primary}
                                        >
                                            of{" "}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            weight="bold"
                                            color={theme.color_system.text.primary}
                                        >
                                            {meta.pageCount}
                                        </Typography>{" "}
                                        <IconButton
                                            onClick={() => {
                                                if (
                                                    parseInt(searchParams.get("page") || DEFAULT_PAGE, 10) ==
                                                    meta.pageCount
                                                ) {
                                                    return;
                                                }
                                                searchParams.set(
                                                    "page",
                                                    String(parseInt(searchParams.get("page") || DEFAULT_PAGE, 10) + 1)
                                                );
                                                setSearchParams(searchParams);
                                            }}
                                            color="primary"
                                            size="small"
                                            disabled={!meta.next}
                                        >
                                            <ChevronRightIcon fontSize="small" sx={styles.ChevronIconStyles} />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </Box>
        </>
    );
};
