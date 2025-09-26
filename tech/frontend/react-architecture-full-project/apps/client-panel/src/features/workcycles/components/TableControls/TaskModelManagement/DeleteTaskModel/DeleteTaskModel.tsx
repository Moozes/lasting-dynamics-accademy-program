import { useState } from "react";

import { Box } from "@mui/material";

import { type HTMLDivProps, Modal, useTranslationV2 } from "ui";

import { TTaskModel } from "@app-types/index";

import { ConfirmDeleteDialog } from "../../ConfirmDeleteDialog";
import { SearchAndSelect } from "../../SearchAndSelect";

import { useDeleteTaskModel } from "./DeleteTaskModel.hooks";

type Props = HTMLDivProps;

export const DeleteTaskModel = ({ ...props }: Props) => {
    const t = useTranslationV2();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTaskModel, setSelectedTaskModel] = useState<TTaskModel | null>(null);
    const { taskModels, handleSelectTaskModel, handleDeleteTaskModel } = useDeleteTaskModel(
        selectedTaskModel,
        setSelectedTaskModel,
        setModalOpen
    );

    const onModalClose = () => {
        setSelectedTaskModel(null);
        setModalOpen(false);
    };

    return (
        <div {...props}>
            <span>
                <Box onClick={() => setModalOpen(true)} className="delete-taskmodel-button">
                    {t("workcycles.delete_model")}
                </Box>
            </span>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                {!selectedTaskModel ? (
                    <SearchAndSelect
                        options={taskModels.map((tm: TTaskModel) => ({
                            label: tm.name,
                            value: tm.id || "",
                        }))}
                        setSelectedValue={handleSelectTaskModel}
                    />
                ) : (
                    <ConfirmDeleteDialog
                        onDelete={handleDeleteTaskModel}
                        setModalOpen={setModalOpen}
                        onModalClose={onModalClose}
                        title={t("workcycles.delete_model_title")}
                        description={t("workcycles.delete_model_description")}
                        className="delete-task-model-dialog"
                    />
                )}
            </Modal>
        </div>
    );
};
