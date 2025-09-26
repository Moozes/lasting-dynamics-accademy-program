import { type HTMLDivProps, InfoIcon, useTranslationV2 } from "ui";

type Props = HTMLDivProps;

export const AlertMessage = (props: Props) => {
    const t = useTranslationV2();
    return (
        <div {...props}>
            <InfoIcon />
            <div className="message">{t("users_management.add_new_user.add_new_user_alert")}</div>
        </div>
    );
};
