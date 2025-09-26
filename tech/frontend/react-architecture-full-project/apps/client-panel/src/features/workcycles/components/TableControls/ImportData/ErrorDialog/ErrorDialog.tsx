import { AlertOctagon, Btn, type HTMLDivProps, Modal, useTranslationV2 } from "ui";

type ErrorDialogProps = HTMLDivProps & {
    errorModalOpen: boolean;
    setErrorModalOpen: (open: boolean) => void;
    onRetry: () => void;
};

export const ErrorDialog = ({ errorModalOpen, setErrorModalOpen, onRetry, ...props }: ErrorDialogProps) => {
    const t = useTranslationV2();

    return (
        <Modal open={errorModalOpen} onClose={() => setErrorModalOpen(false)}>
            <div {...props}>
                <div className="error-icon">
                    <AlertOctagon className="icon" />
                </div>
                <div className="title">{t("Import Error")}</div>
                <div className="description">
                    {t("The CSV file format or data types are incorrect. Please check your file and try again.")}
                </div>
                <div className="buttons">
                    <Btn
                        className="button cancel"
                        variant="secondary-contained"
                        onClick={() => setErrorModalOpen(false)}
                    >
                        {t("Cancel")}
                    </Btn>
                    <Btn className="button retry" variant="primary-contained" onClick={onRetry}>
                        {t("Retry")}
                    </Btn>
                </div>
            </div>
        </Modal>
    );
};
