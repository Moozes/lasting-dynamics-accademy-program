import { AlertOctagon, Btn, DeleteTrashIcon, type HTMLDivProps, useTranslationV2 } from "ui";

type Props = HTMLDivProps & {
    onDelete: () => void;
    setModalOpen: (open: boolean) => void;
    onModalClose: () => void;
    title: string;
    description: string;
};

export const ConfirmDeleteDialog = ({ onDelete, setModalOpen, onModalClose, title, description, ...props }: Props) => {
    const t = useTranslationV2();

    const handleCancel = () => {
        setModalOpen(false);
        onModalClose();
    };

    const handleDelete = () => {
        onDelete();
        onModalClose();
    };

    return (
        <div {...props}>
            <div className="warning-icon">
                <AlertOctagon className="icon" />
            </div>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <div className="buttons">
                <Btn className="button cancel" variant="secondary-contained" onClick={handleCancel} type="button">
                    {t("Cancel")}
                </Btn>
                <Btn
                    className="button delete"
                    variant="danger-outlined"
                    onClick={handleDelete}
                    startIcon={<DeleteTrashIcon />}
                >
                    {t("Delete")}
                </Btn>
            </div>
        </div>
    );
};
