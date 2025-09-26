import { Box } from "@mui/material";

import { TabPanelProps } from "./Tabs.types";

export const TabPanel = (props: TabPanelProps) => {
    const { children, value, id } = props;
    return <div hidden={value !== id}>{value === id && <Box>{children}</Box>}</div>;
};
