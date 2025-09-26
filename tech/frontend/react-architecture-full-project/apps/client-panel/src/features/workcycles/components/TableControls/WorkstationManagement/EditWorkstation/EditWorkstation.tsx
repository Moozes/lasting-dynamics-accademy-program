import { useState } from "react";

import { Box } from "@mui/material";

import { type HTMLDivProps, Modal, useTranslationV2 } from "ui";

import { TWorkstation } from "@app-types/index";

import { SearchAndSelect } from "../../SearchAndSelect";

import { useEditWorkstation } from "./EditWorkstation.hooks";
import { EditWorkstationForm } from "./EditWorkstationForm";

type Props = HTMLDivProps;

export const EditWorkstation = ({ ...props }: Props) => {
    const t = useTranslationV2();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedWorkstation, setSelectedWorkstation] = useState<TWorkstation | null>(null);

    const { workstations, handleSelectWorkstation } = useEditWorkstation(setSelectedWorkstation);

    const onModalClose = () => {
        setSelectedWorkstation(null);
        setModalOpen(false);
    };

    return (
        <div {...props}>
            <span>
                <Box onClick={() => setModalOpen(true)} className="edit-workstation-button">
                    {t("workcycles.edit_workstation")}
                </Box>
            </span>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                {!selectedWorkstation ? (
                    <SearchAndSelect
                        options={workstations.map((workstation: TWorkstation) => ({
                            label: workstation.name,
                            value: workstation.id || "",
                        }))}
                        setSelectedValue={handleSelectWorkstation}
                    />
                ) : (
                    <EditWorkstationForm
                        setModalOpen={setModalOpen}
                        item={selectedWorkstation}
                        onModalClose={onModalClose}
                    />
                )}
            </Modal>
        </div>
    );
};
