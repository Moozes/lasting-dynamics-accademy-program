import { Dispatch, SetStateAction } from "react";

import { type HTMLDivProps, SettingsIcon, useTranslationV2 } from "ui";

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
                    <SettingsIcon className="fill" />
                    <div className="list-item-text">{t("settings.ai_engine_settings")}</div>
                </div>
            </div>
        </div>
    );
};
