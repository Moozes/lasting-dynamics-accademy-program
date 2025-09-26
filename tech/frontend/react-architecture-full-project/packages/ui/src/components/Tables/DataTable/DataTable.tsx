/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-nested-ternary */
import { Column, useGlobalFilter, usePagination, useRowSelect, useSortBy, useTable } from "react-table";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
    Box,
    IconButton,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableRow,
} from "@mui/material";

import { ColumnAsc } from "../../../assets/icons/tableSorting/ColumnAsc";
import { ColumnDesc } from "../../../assets/icons/tableSorting/ColumnDesc";
import { ColumnNotSorted } from "../../../assets/icons/tableSorting/ColumnNotSorted";
import Typography from "../../Typography";
import * as styles from "../styles";

export const DataTable = ({
    columns,
    data,
    hideColumns,
    disableSorting = false,
    emptyTableMessage = "No data",
}: {
    columns: Column[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
    hideColumns?: string[];
    disableSorting?: boolean;
    emptyTableMessage?: string;
}) => {
    const pageSizeMenuOptions = ["5", "10", "15", "20"];
    const {
        getTableProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        prepareRow,
        setPageSize,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: {
                pageIndex: 0,
                hiddenColumns: hideColumns || [],
            },
            disableSortBy: disableSorting,
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
        useRowSelect
    );

    return (
        <Box sx={styles.TableContainerStyle}>
            <Table {...getTableProps()} size="small" sx={styles.TableStyle}>
                <TableHead sx={styles.TableHeadStyle2}>
                    {headerGroups.map((headerGroup) => {
                        const { key: rowKey, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();
                        return (
                            <TableRow {...restHeaderGroupProps} key={rowKey}>
                                {headerGroup.headers.map((column) => {
                                    const { key: cellKey, ...rest } = column.getHeaderProps(
                                        column.getSortByToggleProps()
                                    );
                                    return (
                                        <TableCell
                                            padding="none"
                                            {...rest}
                                            key={cellKey}
                                            sx={styles.TableHeadCellStyle3}
                                        >
                                            <Box
                                                display="flex"
                                                flexDirection="row"
                                                gap={1}
                                                justifyContent="flex-start"
                                                alignItems="center"
                                            >
                                                <Box sx={(theme) => theme.typography.body1}>
                                                    {column.render("Header")}
                                                </Box>
                                                {column.canSort && cellKey != "header_selection" && (
                                                    <Box paddingTop={0.8}>
                                                        {column.isSorted ? (
                                                            column.isSortedDesc ? (
                                                                <ColumnDesc />
                                                            ) : (
                                                                <ColumnAsc />
                                                            )
                                                        ) : (
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
                <TableBody sx={styles.DataTableBodyStyle}>
                    {data.length > 0 ? (
                        <>
                            {page.map((row) => {
                                prepareRow(row);
                                const { key: rowkey, ...restRowProps } = row.getRowProps();
                                return (
                                    <TableRow {...restRowProps} key={rowkey}>
                                        {row.cells.map((cell) => {
                                            const { key: cellKey, ...restOfCellProps } = cell.getCellProps();
                                            return (
                                                <TableCell
                                                    {...restOfCellProps}
                                                    key={cellKey}
                                                    sx={styles.TableBodyCellStyle3}
                                                >
                                                    {cell.render("Cell")}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </>
                    ) : (
                        <TableRow>
                            <TableCell colSpan={3} align="center" sx={styles.TableBodyemptyCellStyle}>
                                <Typography variant="body1">{emptyTableMessage}</Typography>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
                {data.length > 10 && (
                    <TableFooter sx={styles.TableFooterStyle}>
                        <TableRow>
                            <TableCell colSpan={columns.length + 3} sx={styles.TableFooterCellStyle}>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Box display="flex" justifyContent="space-between" gap={1} alignItems="center">
                                        <Typography variant="body2">Rows</Typography> :{" "}
                                        <Select
                                            sx={styles.TableSelectMenuStyle}
                                            onChange={(e) => {
                                                setPageSize(parseInt(e.target.value as string, 10));
                                            }}
                                            size="small"
                                            label="Rows"
                                            value={pageSize}
                                        >
                                            {pageSizeMenuOptions.map((menuOption) => (
                                                <MenuItem
                                                    value={menuOption}
                                                    key={menuOption}
                                                    selected={pageSize === parseInt(menuOption, 10)}
                                                >
                                                    {menuOption}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" gap={1} alignItems="center">
                                        <IconButton
                                            onClick={() => {
                                                previousPage();
                                            }}
                                            color="primary"
                                            size="small"
                                            disabled={!canPreviousPage}
                                        >
                                            <ChevronLeftIcon fontSize="small" />
                                        </IconButton>{" "}
                                        <Typography variant="body2">{pageIndex + 1}</Typography>
                                        of {pageIndex}{" "}
                                        <Typography variant="body2" weight="bold">
                                            {pageOptions.length}
                                        </Typography>{" "}
                                        <IconButton
                                            onClick={() => {
                                                nextPage();
                                            }}
                                            color="primary"
                                            size="small"
                                            disabled={!canNextPage}
                                        >
                                            <ChevronRightIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                )}
            </Table>
        </Box>
    );
};
