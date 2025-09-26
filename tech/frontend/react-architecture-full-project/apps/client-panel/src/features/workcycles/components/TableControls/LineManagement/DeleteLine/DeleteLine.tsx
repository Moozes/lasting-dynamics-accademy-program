import { useState } from "react";

import { Box } from "@mui/material";

import { Modal, useTranslationV2 } from "ui";

import { TLine } from "@app-types/index";

import { ConfirmDeleteDialog } from "../../ConfirmDeleteDialog";
import { SearchAndSelect } from "../../SearchAndSelect";

import { useDeleteLine } from "./DeleteLine.hooks";

export const DeleteLine = ({ ...props }) => {
    const t = useTranslationV2();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedLine, setSelectedLine] = useState<TLine | null>(null);
    const { lines, handleSelectLine, handleDeleteLine } = useDeleteLine(selectedLine, setSelectedLine, setModalOpen);

    const onModalClose = () => {
        setSelectedLine(null);
        setModalOpen(false);
    };

    return (
        <div {...props}>
            <span>
                <Box onClick={() => setModalOpen(true)} className="delete-line-button">
                    {t("workcycles.delete_line")}
                </Box>
            </span>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                {!selectedLine ? (
                    <SearchAndSelect
                        options={lines.map((line: TLine) => ({
                            label: line.name,
                            value: line.id || "",
                        }))}
                        setSelectedValue={handleSelectLine}
                    />
                ) : (
                    <ConfirmDeleteDialog
                        onDelete={() => handleDeleteLine()}
                        setModalOpen={setModalOpen}
                        onModalClose={onModalClose}
                        title={t("workcycles.delete_line_title")}
                        description={t("workcycles.delete_line_description")}
                        className="delete-line-dialog"
                    />
                )}
            </Modal>
        </div>
    );
};
