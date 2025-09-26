import { Dispatch, SetStateAction } from "react";

import { Btn, FormikCheckbox, type HTMLDivProps, useTranslationV2 } from "ui";

type Props = HTMLDivProps & {
    currentForm: number;
    setCurrentForm: Dispatch<SetStateAction<1 | 2>>;
    setOpen: Dispatch<SetStateAction<boolean>>;
    submitButtonText: string;
    isAddUserLoading: boolean;
    isValidating: boolean;
};

export const Actions = ({
    currentForm,
    setCurrentForm,
    setOpen,
    submitButtonText,
    isAddUserLoading,
    isValidating,
    ...props
}: Props) => {
    const t = useTranslationV2();
    return (
        <div {...props}>
            <label>
                <FormikCheckbox id="send_email_to_creator" name="send_email_to_creator" />
                <div className="text">{t("users_management.add_new_user.add_new_user_checkbox_message")}</div>
            </label>
            <div className="empty" />
            {currentForm === 1 && (
                <Btn className="action-button" variant="secondary-contained" onClick={() => setOpen(false)}>
                    {t("Cancel")}
                </Btn>
            )}
            {currentForm === 2 && (
                <Btn className="action-button" variant="secondary-contained" onClick={() => setCurrentForm(1)}>
                    {t("Previous")}
                </Btn>
            )}
            <Btn
                type="submit"
                disabled={isAddUserLoading || isValidating}
                className="action-button"
                variant="primary-contained"
            >
                {submitButtonText}
            </Btn>
        </div>
    );
};
