/* eslint-disable react/no-unescaped-entities */
import { HTMLProps } from "react";

import { useTranslationV2 } from "ui";

import { PrivacyAndDataDeletionPolicyPageIllustration } from "@assets/index";

export const PrivacyAndDataDeletionPolicyPage = (props: HTMLProps<HTMLDivElement>) => {
    const t = useTranslationV2();

    const text = t("privacyAndDataDeletionPolicyPage", { returnObjects: true, defaultValue: {} }) as Record<
        string,
        string
    >;
    return (
        <div {...props}>
            <div className="page-title">{text.privacy_and_data_deletion_policy}</div>
            <div className="card">
                <div className="info">
                    <div className="text">{text.text_1}</div>
                    <div className="text">{text.text_2}</div>
                    <ol>
                        <li>
                            {text.text_3} <a href="mailto:support@wergonic.com">support@wergonic.com</a>.
                        </li>
                        <li>{text.text_4}</li>
                        <li>
                            {text.text_5}
                            <ul>
                                <li>{text.text_6}</li>
                                <li>{text.text_7}</li>
                            </ul>
                        </li>
                        <li>{text.text_8}</li>
                    </ol>
                    <div className="text">{text.text_9}</div>
                    <div className="non-admin-text">{text.text_10}</div>
                    <div>{text.text_11}</div>
                    <div>{text.text_12}</div>
                </div>
                <div className="illustration-container">
                    <PrivacyAndDataDeletionPolicyPageIllustration className="illustration" />
                </div>
            </div>
        </div>
    );
};
