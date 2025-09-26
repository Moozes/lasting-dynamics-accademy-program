import { Link } from "react-router-dom";

import { type HTMLDivProps, useTranslationV2 } from "ui";

type Props = HTMLDivProps & { sessionId: string | null | undefined };

export const LinkToSession = ({ sessionId, ...props }: Props) => {
    const t = useTranslationV2();
    // const to = sessionId ? `/dashboard/sessions/${sessionId}/details?tab=Posture` : "";
    // const className = `link ${!sessionId ? "link-null" : ""}`;

    const to = `/dashboard/sessions/${sessionId}/details?tab=Posture`;
    const className = "link";
    return sessionId === undefined || sessionId === null ? null : (
        <div {...props}>
            <Link to={to} className={className}>
                {t("assessments.generation_session_link")}
            </Link>
        </div>
    );
};
