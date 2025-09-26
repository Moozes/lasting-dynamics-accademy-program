import { Dispatch, SetStateAction } from "react";

import { HomeIcon, type HTMLDivProps, LockIcon, SettingsIcon2, UserIcon, useTranslationV2 } from "ui";

import { AddTicketButton } from "./AddTicketButton";
import { PrivacyAndDataDeletionPolicyLink } from "./PrivacyAndDataDeletionPolicyLink";
import { PrivacyPolicyLink } from "./PrivacyPolicyLink";

type Props = HTMLDivProps & {
    tab: number;
    setTab: Dispatch<SetStateAction<number>>;
};

export const Sidebar = ({ tab, setTab, ...props }: Props) => {
    const t = useTranslationV2();
    const getClassName = (listItemTab: number) => `list-item ${listItemTab === tab ? "active" : ""}`;
    return (
        <div {...props}>
            <div className="top">
                <div className="title">{t("Settings")}</div>
                <div className={getClassName(0)} role="button" onClick={() => setTab(0)}>
                    <HomeIcon className="stroke" />
                    <div className="list-item-text">{t("Organization")}</div>
                </div>
                <div className={getClassName(1)} role="button" onClick={() => setTab(1)}>
                    <UserIcon className="stroke" />
                    <div className="list-item-text">{t("account_information")}</div>
                </div>
                <div className={getClassName(2)} role="button" onClick={() => setTab(2)}>
                    <LockIcon className="stroke" />
                    <div className="list-item-text">{t("security_and_privacy")}</div>
                </div>
                <div className={getClassName(3)} role="button" onClick={() => setTab(3)}>
                    <SettingsIcon2 className="stroke" />
                    <div className="list-item-text">{t("display_preferences")}</div>
                </div>
            </div>
            <div className="bottom">
                <AddTicketButton className="add-ticket-button" />
                <div className="policy-links">
                    <PrivacyPolicyLink />
                    <span className="separator">|</span>
                    <PrivacyAndDataDeletionPolicyLink />
                </div>
            </div>
        </div>
    );
};
