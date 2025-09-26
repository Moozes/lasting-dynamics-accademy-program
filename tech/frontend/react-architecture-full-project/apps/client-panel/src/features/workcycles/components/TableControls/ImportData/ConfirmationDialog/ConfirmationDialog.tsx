import { Btn, type HTMLDivProps, ImportIcon, Modal, useTranslationV2 } from "ui";

type ConfirmationDialogProps = HTMLDivProps & {
    confirmationModalOpen: boolean;
    setConfirmationModalOpen: (open: boolean) => void;
    onConfirm: () => void;
    importType: string;
};

export const ConfirmationDialog = ({
    confirmationModalOpen,
    setConfirmationModalOpen,
    onConfirm,
    importType,
    ...props
}: ConfirmationDialogProps) => {
    const t = useTranslationV2();

    return (
        <Modal open={confirmationModalOpen} onClose={() => setConfirmationModalOpen(false)}>
            <div {...props}>
                <div className="import-icon">
                    <ImportIcon className="icon" />
                </div>
                <div className="title">{t("workcycles.confirm_import_title")}</div>
                <div className="description">
                    {t("workcycles.confirm_import_description", {
                        importType,
                    })}
                </div>
                <div className="buttons">
                    <Btn
                        className="button cancel"
                        variant="secondary-contained"
                        onClick={() => setConfirmationModalOpen(false)}
                    >
                        {t("Cancel")}
                    </Btn>
                    <Btn className="button confirm" variant="primary-contained" onClick={onConfirm}>
                        {t("import")}
                    </Btn>
                </div>
            </div>
        </Modal>
    );
};
