import { Box, Typography } from "@mui/material";

import { InfoCircleIcon, Modal } from "ui";

import { modalContentStyles } from "./inlineStyles";

type Props = {
    onClose: () => void;
    infoArray: string[];
    open: boolean;
};

export const InfoDialog = ({ onClose, infoArray, open }: Props) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalContentStyles} className="content-box">
                <InfoCircleIcon />
                <Box className="text-center">
                    <ul className="info-list">
                        {infoArray.map((info) => (
                            <li key={info}>
                                <Typography variant="body1">{info}</Typography>
                            </li>
                        ))}
                    </ul>
                </Box>
            </Box>
        </Modal>
    );
};
