import { Dispatch, SetStateAction } from "react";
import { Row } from "react-table";

import { AlertOctagon, Btn, DeleteTrashIcon, useTranslationV2 } from "ui";

import { TTask } from "@app-types/index";

import { useDeleteTaskForm } from "./DeleteTaskForm.hooks";

type Props = {
    setModalOpen: Dispatch<SetStateAction<boolean>>;
    row: Row<TTask>;
};

export const DeleteTaskForm = ({ setModalOpen, row, ...props }: Props) => {
    const t = useTranslationV2();

    const { handleDelete, isLoading } = useDeleteTaskForm(row, setModalOpen);

    return (
        <div {...props}>
            <div className="warning-icon">
                <AlertOctagon className="icon" />
            </div>
            <div className="title">{t("workcycles.confirm_task_deletion")}</div>
            <div className="description">{t("workcycles.confirm_task_deletion_description")}</div>
            <div className="buttons">
                <Btn
                    className="button cancel"
                    variant="secondary-contained"
                    onClick={() => setModalOpen(false)}
                    type="button"
                >
                    {t("Cancel")}
                </Btn>
                <Btn
                    className="button delete"
                    variant="danger-outlined"
                    onClick={handleDelete}
                    startIcon={<DeleteTrashIcon />}
                    disabled={isLoading}
                    loading={isLoading}
                >
                    {t("Delete")}
                </Btn>
            </div>
        </div>
    );
};
