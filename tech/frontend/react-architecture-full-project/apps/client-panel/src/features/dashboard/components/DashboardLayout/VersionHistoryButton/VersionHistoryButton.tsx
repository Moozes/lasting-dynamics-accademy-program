import { useState } from "react";

import { type HTMLDivProps, useTranslationV2 } from "ui";

import { VERSION_HISTORY } from "./versionHistory";
import { StyledVersionHistoryDialog as VersionHistoryDialog } from "./VersionHistoryDialog.styles";

type Props = HTMLDivProps;

export const VersionHistoryButton = (props: Props) => {
    const t = useTranslationV2();
    const [open, setOpen] = useState(false);
    const latesVersion = VERSION_HISTORY[VERSION_HISTORY.length - 1].version;
    const versionString = t("version");
    return (
        <div {...props}>
            <div role="button" className="version-string" onClick={() => setOpen(true)}>
                {`${versionString} ${latesVersion}`}
            </div>
            <VersionHistoryDialog onClose={() => setOpen(false)} open={open} />
        </div>
    );
};
