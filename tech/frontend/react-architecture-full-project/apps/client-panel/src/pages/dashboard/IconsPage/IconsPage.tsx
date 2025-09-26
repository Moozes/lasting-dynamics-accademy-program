/* eslint-disable react/no-array-index-key */
import { FC } from "react";

import Box from "@mui/material/Box";

import { iconsList } from "./IconsPage.helpers";

const IconContainer = ({ Icon }: { Icon: FC }) => (
    <Box border="1px solid red" padding="5px">
        <Box textAlign="center">
            <Icon />
        </Box>
        <Box>{Icon.name}</Box>
    </Box>
);

export const IconsPage = () => {
    return (
        <Box display="flex" flexWrap="wrap" gap="10px">
            {iconsList.map((elm, idx) => (
                <IconContainer key={idx} Icon={elm} />
            ))}
        </Box>
    );
};
