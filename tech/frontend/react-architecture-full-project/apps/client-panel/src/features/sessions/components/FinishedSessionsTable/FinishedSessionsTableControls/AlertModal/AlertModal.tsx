import { Box, IconButton } from "@mui/material";

import { AlertOctagon, Btn, Modal, useTranslationV2 } from "ui";

import { modalContentStyles } from "./inlineStyles";

type Props = { open: boolean; onClose: () => void; title: string; list: string[] };

export const AlertModal = ({ open, onClose, title, list }: Props) => {
    const t = useTranslationV2();
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalContentStyles}>
                <div className="info">
                    <IconButton className="icon-button">
                        <AlertOctagon className="icon" />
                    </IconButton>
                    <div className="title">{title}</div>
                    <ul className="list">
                        {list.map((item) => (
                            <li key={item}> {item} </li>
                        ))}
                    </ul>
                </div>
                <div className="actions">
                    <Btn className="close-button" onClick={() => onClose()}>
                        {t("close")}
                    </Btn>
                </div>
            </Box>
        </Modal>
    );
};
