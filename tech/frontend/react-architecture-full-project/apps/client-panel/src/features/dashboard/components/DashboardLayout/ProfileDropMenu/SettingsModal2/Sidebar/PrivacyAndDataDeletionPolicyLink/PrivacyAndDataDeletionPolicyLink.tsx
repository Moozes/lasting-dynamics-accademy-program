import { type HTMLDivProps, useTranslationV2 } from "ui";

import routes from "@routes/routes";

type Props = HTMLDivProps;

export const PrivacyAndDataDeletionPolicyLink = (props: Props) => {
    const t = useTranslationV2();
    const onClick = () => {
        window.open(routes.privacyAndDataDeletionPolicy, "_blank");
    };

    return (
        <div {...props} onClick={onClick} role="link">
            {t("privacyAndDataDeletionPolicyPage.data_deletion_policy")}
        </div>
    );
};
