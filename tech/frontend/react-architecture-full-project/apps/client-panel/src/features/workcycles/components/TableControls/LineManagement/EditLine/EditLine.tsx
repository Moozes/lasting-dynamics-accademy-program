import { useState } from "react";

import { Box } from "@mui/material";

import { Modal, useTranslationV2 } from "ui";

import { TLine } from "@app-types/index";

import { SearchAndSelect } from "../../SearchAndSelect";

import { useEditLine } from "./EditLine.hooks";
import { EditLineForm } from "./EditLineForm";

export const EditLine = ({ ...props }) => {
    const t = useTranslationV2();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedLine, setSelectedLine] = useState<TLine | null>(null);

    const { lines, handleSelectLine } = useEditLine(setSelectedLine);

    const onModalClose = () => {
        setSelectedLine(null);
        setModalOpen(false);
    };

    return (
        <div {...props}>
            <span>
                <Box onClick={() => setModalOpen(true)} className="edit-line-button">
                    {t("workcycles.edit_line")}
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
                    <EditLineForm setModalOpen={setModalOpen} item={selectedLine} onModalClose={onModalClose} />
                )}
            </Modal>
        </div>
    );
};
