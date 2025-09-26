import { useState } from "react";

import { Box } from "@mui/material";

import { type HTMLDivProps, Modal, useTranslationV2 } from "ui";

import { TWorkstation } from "@app-types/index";

import { ConfirmDeleteDialog } from "../../ConfirmDeleteDialog";
import { SearchAndSelect } from "../../SearchAndSelect";

import { useDeleteWorkstation } from "./DeleteWorkstation.hooks";

type Props = HTMLDivProps;

export const DeleteWorkstation = ({ ...props }: Props) => {
    const t = useTranslationV2();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedWorkstation, setSelectedWorkstation] = useState<TWorkstation | null>(null);
    const { workstations, handleSelectWorkstation, handleDeleteWorkstation } = useDeleteWorkstation(
        selectedWorkstation,
        setSelectedWorkstation,
        setModalOpen
    );

    const onModalClose = () => {
        setSelectedWorkstation(null);
        setModalOpen(false);
    };

    return (
        <div {...props}>
            <span>
                <Box onClick={() => setModalOpen(true)} className="delete-workstation-button">
                    {t("workcycles.delete_workstation")}
                </Box>
            </span>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                {!selectedWorkstation ? (
                    <SearchAndSelect
                        options={workstations.map((ws: TWorkstation) => ({
                            label: ws.name,
                            value: ws.id || "",
                        }))}
                        setSelectedValue={handleSelectWorkstation}
                    />
                ) : (
                    <ConfirmDeleteDialog
                        onDelete={() => handleDeleteWorkstation()}
                        setModalOpen={setModalOpen}
                        onModalClose={onModalClose}
                        title={t("workcycles.confirm_workstation_deletion")}
                        description={t("workcycles.confirm_workstation_deletion_description")}
                        className="delete-workstation-dialog"
                    />
                )}
            </Modal>
        </div>
    );
};
