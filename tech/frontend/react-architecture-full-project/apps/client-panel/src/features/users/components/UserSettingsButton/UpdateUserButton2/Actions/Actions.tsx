import { Dispatch, SetStateAction } from "react";

import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import { Btn, type HTMLDivProps, useTranslationV2 } from "ui";

import { ISelectedUser } from "@app-types/index";

import { useDeleteUser } from "./Actions.hooks";

type Props = HTMLDivProps &
    ISelectedUser & {
        currentForm: number;
        setCurrentForm: Dispatch<SetStateAction<1 | 2>>;
        closeMenuAndModal: () => void;
        isUpdateUserLoading: boolean;
    };

export const Actions = ({
    selectedUser,
    currentForm,
    setCurrentForm,
    closeMenuAndModal,
    isUpdateUserLoading,
    ...props
}: Props) => {
    const t = useTranslationV2();
    const submitButtonText = currentForm === 1 ? t("Next") : t("Save Changes");

    const { deleteUser, isDeleteUserLoading } = useDeleteUser(selectedUser.id as string, closeMenuAndModal);

    return (
        <div {...props}>
            <Btn
                loading={isDeleteUserLoading}
                type="button"
                startIcon={<DeleteForeverOutlinedIcon />}
                variant="danger-outlined"
                onClick={() => deleteUser()}
            >
                {t("Delete")}
            </Btn>
            <div className="empty" />
            {currentForm === 1 && (
                <Btn className="action-button" variant="secondary-contained" onClick={() => closeMenuAndModal()}>
                    {t("Cancel")}
                </Btn>
            )}
            {currentForm === 2 && (
                <Btn className="action-button" variant="secondary-contained" onClick={() => setCurrentForm(1)}>
                    {t("Previous")}
                </Btn>
            )}
            <Btn type="submit" disabled={isUpdateUserLoading} className="action-button" variant="primary-contained">
                {submitButtonText}
            </Btn>
        </div>
    );
};
