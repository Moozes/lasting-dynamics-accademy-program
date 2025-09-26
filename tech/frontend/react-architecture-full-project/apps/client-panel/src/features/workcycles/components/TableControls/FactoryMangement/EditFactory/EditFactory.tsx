import { useState } from "react";

import { Box } from "@mui/material";

import { Modal, useTranslationV2 } from "ui";

import { TFactory } from "@app-types/index";

import { SearchAndSelect } from "../../SearchAndSelect";

import { useEditFactory } from "./EditFactory.hooks";
import { EditFactoryForm } from "./EditFactoryForm";

export const EditFactory = ({ ...props }) => {
    const t = useTranslationV2();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedFactory, setSelectedFactory] = useState<TFactory | null>(null);

    const { factories, handleSelectFactory } = useEditFactory(setSelectedFactory);

    const onModalClose = () => {
        setSelectedFactory(null);
        setModalOpen(false);
    };

    return (
        <div {...props}>
            <span>
                <Box onClick={() => setModalOpen(true)} className="edit-factory-button">
                    {t("workcycles.edit_factory")}
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
                    <EditFactoryForm setModalOpen={setModalOpen} item={selectedFactory} onModalClose={onModalClose} />
                )}
            </Modal>
        </div>
    );
};
