import { useState } from "react";

import { Box } from "@mui/material";

import { type HTMLDivProps, Modal, useTranslationV2 } from "ui";

import { TTaskModel } from "@app-types/index";

import { SearchAndSelect } from "../../SearchAndSelect";

import { useEditTaskModel } from "./EditTaskModel.hooks";
import { EditTaskModelForm } from "./EditTaskModelForm";

type Props = HTMLDivProps;

export const EditTaskModel = ({ ...props }: Props) => {
    const t = useTranslationV2();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTaskModel, setSelectedTaskModel] = useState<TTaskModel | null>(null);
    const { taskModels, handleSelectTaskModel } = useEditTaskModel(setSelectedTaskModel);

    const onModalClose = () => {
        setSelectedTaskModel(null);
        setModalOpen(false);
    };

    return (
        <div {...props}>
            <span>
                <Box onClick={() => setModalOpen(true)} className="edit-taskmodel-button">
                    {t("workcycles.edit_model")}
                </Box>
            </span>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                {!selectedTaskModel ? (
                    <SearchAndSelect
                        options={taskModels.map((taskModel: TTaskModel) => ({
                            label: taskModel.name,
                            value: taskModel.id || "",
                        }))}
                        setSelectedValue={handleSelectTaskModel}
                    />
                ) : (
                    <EditTaskModelForm
                        setModalOpen={setModalOpen}
                        item={selectedTaskModel}
                        onModalClose={onModalClose}
                    />
                )}
            </Modal>
        </div>
    );
};
