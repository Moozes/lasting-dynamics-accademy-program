import { type HTMLDivProps, useTranslationV2 } from "ui";

import routes from "@routes/routes";

type Props = HTMLDivProps;

export const PrivacyPolicyLink = (props: Props) => {
    const t = useTranslationV2();
    const onClick = () => {
        window.open(routes.privacyPolicy, "_blank");
    };

    return (
        <div {...props} onClick={onClick} role="link">
            {t("privacyPolicyPage.privacy_policy")}
        </div>
    );
};
