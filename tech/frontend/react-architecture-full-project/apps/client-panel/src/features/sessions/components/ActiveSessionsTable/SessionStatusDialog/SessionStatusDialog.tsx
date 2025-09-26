import { FC, useMemo, useReducer } from "react";

import { Box } from "@mui/material";

import { DataTable, Typography, useTranslationV2 } from "ui";

import { BasicDialog } from "@components/index";

import { useColumns } from "./SessionStatusDialog.hooks";
import { IDevice } from "./SessionStatusDialog.types";

interface SessionStatusDialogProps {
    status: string;
    color: string;
    devices: IDevice[];
}

export const SessionStatusDialog: FC<SessionStatusDialogProps> = ({ color, status, devices }) => {
    const t = useTranslationV2();
    const [isStatusDialogOpen, setIsStatusDialogOpen] = useReducer((state) => !state, false);
    const columns = useColumns(devices);
    const devicesData = useMemo(() => devices || [], [devices]);
    return (
        <>
            <Box onClick={setIsStatusDialogOpen} sx={{ p: 0.3, cursor: "pointer" }}>
                <Typography variant="h6" sx={{ color, py: 0.3 }}>
                    {status}
                </Typography>
            </Box>
            <BasicDialog
                dialogOpen={isStatusDialogOpen}
                header={t("Status")}
                toggleDialog={setIsStatusDialogOpen}
                showActions={false}
            >
                <DataTable columns={columns} data={devicesData} hideColumns={["last_timestamp"]} disableSorting />
            </BasicDialog>
        </>
    );
};
