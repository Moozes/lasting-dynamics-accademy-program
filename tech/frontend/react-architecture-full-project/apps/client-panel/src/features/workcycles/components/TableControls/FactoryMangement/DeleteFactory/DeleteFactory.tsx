import { useState } from "react";

import { Box } from "@mui/material";

import { Modal, useTranslationV2 } from "ui";

import { TFactory } from "@app-types/index";

import { ConfirmDeleteDialog } from "../../ConfirmDeleteDialog";
import { SearchAndSelect } from "../../SearchAndSelect";

import { useDeleteFactory } from "./DeleteFactory.hooks";

export const DeleteFactory = ({ ...props }) => {
    const t = useTranslationV2();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedFactory, setSelectedFactory] = useState<TFactory | null>(null);

    const { factories, handleSelectFactory, handleDeleteFactory } = useDeleteFactory(
        selectedFactory,
        setSelectedFactory,
        setModalOpen
    );

    const onModalClose = () => {
        setSelectedFactory(null);
        setModalOpen(false);
    };

    return (
        <div {...props}>
            <span>
                <Box onClick={() => setModalOpen(true)} className="delete-factory-button">
                    {t("workcycles.delete_factory")}
                </Box>
            </span>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                {!selectedFactory ? (
                    <SearchAndSelect
                        options={factories.map((factory: TFactory) => ({
                            label: factory.name,
                            value: factory.id || "",
                        }))}
                        setSelectedValue={handleSelectFactory}
                    />
                ) : (
                    <ConfirmDeleteDialog
                        onDelete={handleDeleteFactory}
                        setModalOpen={setModalOpen}
                        onModalClose={onModalClose}
                        title={t("workcycles.delete_factory_title")}
                        description={t("workcycles.delete_factory_description")}
                        className="delete-factory-dialog"
                    />
                )}
            </Modal>
        </div>
    );
};
