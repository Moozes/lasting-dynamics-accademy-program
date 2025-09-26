import { Column } from "react-table";
import { round } from "lodash";

import { Box, IconButton, Tooltip } from "@mui/material";

import { OutlinedSelect, QuestionCircleIcon, Typography } from "ui";

import { i18n } from "@utils/index";

import { percentiles, TaskData } from "../../types";

import { PercentileTableProps } from "./SingleSessionStatsTables.types";

const ANGLE_PERCENTILE_OPTIONS = [
    { value: "10", label: "Percentile 10" },
    { value: "50", label: "Percentile 50" },
    { value: "90", label: "Percentile 90" },
    { value: "99", label: "Percentile 99" },
];
const VELOCITY_PERCENTILE_OPTIONS = [
    { value: "50", label: "Percentile 50" },
    { value: "90", label: "Percentile 90" },
];

export const getPercentileValue = (percentile: string, limb: string, rowData?: percentiles): number | undefined => {
    /* eslint-disable no-else-return */
    if (rowData) {
        if (percentile === "10") {
            return rowData.percentile_10[limb];
        } else if (percentile === "50") {
            return rowData.percentile_50[limb];
        } else if (percentile === "90") {
            return rowData.percentile_90[limb];
        } else if (percentile === "99") {
            return rowData.percentile_99[limb];
        }
    }
    return 0;
};

export const getPercentileColumns = ({
    anglePercentile,
    setAnglePercentile,
    velocityPercentile,
    setVelocityPercentile,
}: PercentileTableProps): Column[] => {
    return [
        {
            Header: () => null,
            accessor: "tableSide",
            columns: [
                {
                    Header: () => <span>{i18n.t("Activity")}</span>,
                    accessor: "task",
                    id: "task",
                    Cell: ({ value }) => <span>{value}</span>,
                },
            ],
        },
        {
            Header: () => <span>{i18n.t("Time")}</span>,
            accessor: "timeColumn",
            columns: [
                {
                    Header: () => <span>{i18n.t("In_Seconds")}</span>,
                    accessor: "total_duration",
                    id: "total_duration",
                    Cell: ({ value }) => <Typography variant="h6">{round(value / 1000, 2)}</Typography>,
                },
                {
                    Header: () => <span>{i18n.t("In_Minutes")}</span>,
                    accessor: "total_duration",
                    id: "total_duration_minutes",
                    Cell: ({ value }) => <Typography variant="h6">{Math.floor(value / 60000)} </Typography>,
                },
            ],
        },

        {
            Header: () => <Box />,
            accessor: "emptyColumn",
            id: "emptyColumn",
            Cell: () => null, // Empty Cell
        },
        {
            Header: () => (
                <Box display="flex" alignItems="center" gap={2}>
                    <span>{i18n.t("Angle")}</span>
                    <OutlinedSelect
                        id="select1"
                        value={anglePercentile}
                        options={ANGLE_PERCENTILE_OPTIONS}
                        onChange={(e) => {
                            setAnglePercentile(e.target.value as string);
                        }}
                    />
                </Box>
            ),
            accessor: "angleColumn",
            id: "angleColumn",
            columns: [
                {
                    Header: () => <span>{i18n.t("Back")}</span>,
                    accessor: "Trunk",
                    id: "Back posture",
                    columns: [
                        {
                            id: "Back F/B",
                            Header: () => (
                                <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                                    <span>{i18n.t("F/B")} </span>
                                    <Tooltip title={i18n.t("forward_backward_mouvment")}>
                                        <IconButton>
                                            <QuestionCircleIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            ),
                            // @ts-ignore
                            accessor: (row: TaskData) => {
                                const rowData = row.forward_bending;
                                return getPercentileValue(anglePercentile, "trunk", rowData);
                            },
                            Cell: ({ value }) => <Typography variant="h6">{value}</Typography>,
                        },
                        {
                            id: "Back SB",
                            Header: () => (
                                <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                                    <span>{i18n.t("SB")}</span>
                                    <Tooltip title={i18n.t("side_mouvement")}>
                                        <IconButton>
                                            <QuestionCircleIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            ),
                            // @ts-ignore
                            accessor: (row: TaskData) => {
                                const rowData = row.side_bending;
                                return getPercentileValue(anglePercentile, "trunk", rowData);
                            },
                            Cell: ({ value }) => <Typography variant="h6">{value}</Typography>,
                        },
                    ],
                },
                {
                    Header: () => <span>{i18n.t("right_arm")}</span>,
                    // @ts-ignore
                    accessor: "Right Arm",
                    id: "Right_Arm posture",
                    columns: [
                        {
                            id: "Right Arm F/B",
                            Header: () => (
                                <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                                    <span>{i18n.t("F/B")} </span>
                                    <Tooltip title={i18n.t("forward_backward_mouvment")}>
                                        <IconButton>
                                            <QuestionCircleIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            ),
                            // @ts-ignore
                            accessor: (row: TaskData) => {
                                const rowData = row.forward_bending;
                                return getPercentileValue(anglePercentile, "rightArm", rowData);
                            },
                            Cell: ({ value }) => <Typography variant="h6">{value}</Typography>,
                        },
                        {
                            id: "Right Arm SB",
                            Header: () => (
                                <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                                    <span>{i18n.t("SB")}</span>
                                    <Tooltip title={i18n.t("side_mouvement")}>
                                        <IconButton>
                                            <QuestionCircleIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            ),
                            // @ts-ignore
                            accessor: (row: TaskData) => {
                                const rowData = row.side_bending;
                                return getPercentileValue(anglePercentile, "rightArm", rowData);
                            },
                            Cell: ({ value }) => <Typography variant="h6">{value}</Typography>,
                        },
                        {
                            id: "Right Arm EA",
                            Header: () => (
                                <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                                    <span>{i18n.t("EA")}</span>
                                    <Tooltip title={i18n.t("elvation_angle")}>
                                        <IconButton>
                                            <QuestionCircleIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            ),
                            // @ts-ignore
                            accessor: (row: TaskData) => {
                                const rowData = row.elevation_angle;
                                return getPercentileValue(anglePercentile, "rightArm", rowData);
                            },
                            Cell: ({ value }) => <Typography variant="h6">{value}</Typography>,
                        },
                    ],
                },
                {
                    Header: () => <span>{i18n.t("left_arm")}</span>,
                    // @ts-ignore
                    accessor: "Left Arm",
                    id: "Left_Arm posture",
                    columns: [
                        {
                            id: "Left Arm F/B",
                            Header: () => (
                                <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                                    <span>{i18n.t("F/B")} </span>
                                    <Tooltip title={i18n.t("forward_backward_mouvment")}>
                                        <IconButton>
                                            <QuestionCircleIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            ),
                            // @ts-ignore
                            accessor: (row: TaskData) => {
                                const rowData = row.forward_bending;
                                return getPercentileValue(anglePercentile, "leftArm", rowData);
                            },
                            Cell: ({ value }) => <Typography variant="h6">{value}</Typography>,
                        },
                        {
                            id: "Left Arm SB",
                            Header: () => (
                                <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                                    <span>{i18n.t("SB")}</span>
                                    <Tooltip title={i18n.t("side_mouvement")}>
                                        <IconButton>
                                            <QuestionCircleIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            ),
                            // @ts-ignore
                            accessor: (row: TaskData) => {
                                const rowData = row.side_bending;
                                return getPercentileValue(anglePercentile, "leftArm", rowData);
                            },
                            Cell: ({ value }) => <Typography variant="h6">{value}</Typography>,
                        },
                        {
                            id: "Left Arm EA",
                            Header: () => (
                                <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
                                    <span>{i18n.t("EA")}</span>
                                    <Tooltip title={i18n.t("elvation_angle")}>
                                        <IconButton>
                                            <QuestionCircleIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            ),
                            // @ts-ignore
                            accessor: (row: TaskData) => {
                                const rowData = row.elevation_angle;
                                return getPercentileValue(anglePercentile, "leftArm", rowData);
                            },
                            Cell: ({ value }) => <Typography variant="h6">{value}</Typography>,
                        },
                    ],
                },
            ],
        },
        {
            Header: () => <Box />,
            accessor: "emptyColumn2",
            id: "emptyColumn2",
            Cell: () => null, // Empty Cell
        },
        {
            Header: () => (
                <Box display="flex" alignItems="center" gap={2}>
                    <span>{i18n.t("Velocity")}</span>
                    <OutlinedSelect
                        id="select2"
                        value={velocityPercentile}
                        options={VELOCITY_PERCENTILE_OPTIONS}
                        onChange={(e) => {
                            setVelocityPercentile(e.target.value as string);
                        }}
                    />
                </Box>
            ),
            accessor: "velocityColumn",
            id: "velocityColumn",
            columns: [
                {
                    Header: () => <span>{i18n.t("Back")}</span>,
                    accessor: "Back speed of mouvement",
                    id: "Back speed_of_movement",
                    columns: [
                        {
                            id: "Back speed_of_movement value",
                            // @ts-ignore
                            accessor: (row: TaskData) => {
                                const rowData = row.angular_velocity;
                                return getPercentileValue(velocityPercentile, "trunk", rowData);
                            },
                            Cell: ({ value }) => <Typography variant="h6">{value}</Typography>,
                        },
                    ],
                },
                {
                    Header: () => <span>{i18n.t("right_arm")}</span>,
                    // @ts-ignore
                    accessor: "Right Arm speed of mouvement",
                    id: "Right_Arm speed_of_movement",
                    columns: [
                        {
                            id: "Right_Arm speed_of_movement value",
                            // @ts-ignore
                            accessor: (row: TaskData) => {
                                const rowData = row.angular_velocity;
                                return getPercentileValue(velocityPercentile, "rightArm", rowData);
                            },
                            Cell: ({ value }) => <Typography variant="h6">{value}</Typography>,
                        },
                    ],
                },
                {
                    Header: () => <span>{i18n.t("left_Arm")}</span>,
                    // @ts-ignore
                    accessor: "Left Arm speed of mouvement",
                    id: "Left_Arm speed_of_movement",
                    columns: [
                        {
                            id: "Left_Arm speed_of_movement value",
                            // @ts-ignore
                            accessor: (row: TaskData) => {
                                const rowData = row.angular_velocity;
                                return getPercentileValue(velocityPercentile, "leftArm", rowData);
                            },
                            Cell: ({ value }) => <Typography variant="h6">{value}</Typography>,
                        },
                    ],
                },
            ],
        },
    ];
};
