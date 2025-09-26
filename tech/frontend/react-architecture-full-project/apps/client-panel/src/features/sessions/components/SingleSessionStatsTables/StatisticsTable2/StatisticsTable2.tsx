/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-nested-ternary */
import { Column, useGlobalFilter, usePagination, useRowSelect, useSortBy, useTable } from "react-table";

import { Box, Table, TableBody, TableCell, TableHead, TableRow, useTheme } from "@mui/material";

import { Typography } from "ui";

import * as styles from "@features/sessions/components/styles";

export const StatisticsTable2 = ({
    columns,
    data,
    hideColumns,
    disableSorting = true,
    emptyTableMessage = "No data",
}: {
    columns: Column[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
    hideColumns?: string[];
    disableSorting?: boolean;
    emptyTableMessage?: string;
}) => {
    const { getTableProps, headerGroups, page, prepareRow } = useTable(
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
    const muiTheme = useTheme();

    return (
        <Box sx={styles.TableContainerStyle}>
            <Table {...getTableProps()} size="small" sx={styles.TableStyle}>
                <TableHead>
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
                                            sx={styles.PercentileTableHeadCellStyle}
                                        >
                                            <Box
                                                display="flex"
                                                flexDirection="row"
                                                gap={1}
                                                justifyContent="center"
                                                alignItems="center"
                                            >
                                                <Box sx={(theme) => theme.typography.body1}>
                                                    {column.render("Header")}
                                                </Box>
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
                                        {row.cells.map((cell, index) => {
                                            const { key: cellKey, ...restOfCellProps } = cell.getCellProps();
                                            return (
                                                <TableCell
                                                    align="center"
                                                    {...restOfCellProps}
                                                    key={cellKey}
                                                    sx={styles.PercentileTableBodyCellStyle(index, muiTheme)}
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
            </Table>
        </Box>
    );
};
