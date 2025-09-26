import { Box } from "@mui/material";

import { type HTMLDivProps } from "ui";
import Typography from "ui/src/components/Typography";

import { TColumn, TFirmware } from "@app-types/index";

type Props = HTMLDivProps & {
    columns: TColumn[];
    firmwareData: TFirmware[];
    emptyTableMessage?: string;
};

export const BasicTable = ({ columns, firmwareData, emptyTableMessage = "No data", ...props }: Props) => {
    return (
        <div {...props}>
            <Box className="table-container">
                <div className="table-head">
                    <div className="table-row">
                        {columns.map((column) => (
                            <div key={column.accessor} className="table-head-cell">
                                {typeof column.Header === "function" ? column.Header({ column }) : column.Header}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="table-body">
                    {firmwareData.length > 0 ? (
                        firmwareData.map((row) => (
                            <div key={row.id} className="table-row">
                                {columns.map((column) => (
                                    <div key={column.accessor} className="table-body-cell">
                                        {column.Cell
                                            ? column.Cell({ value: row[column.accessor], row })
                                            : row[column.accessor] ?? ""}
                                    </div>
                                ))}
                            </div>
                        ))
                    ) : (
                        <div className="empty-row">
                            <div className="empty-cell">
                                <Typography variant="body1">{emptyTableMessage}</Typography>
                            </div>
                        </div>
                    )}
                </div>
            </Box>
        </div>
    );
};
