import type { HTMLDivProps } from "ui";

import ExclamationHexagon from "../../assets/icons/ExclamationHexagon";

type Props = HTMLDivProps & {
    inline?: boolean;
};

export const AlertCard = ({ inline, className, children, ...props }: Props) => {
    const inlineClassName = inline ? "inline" : "";
    return (
        <div {...props} className={`${className} ${inlineClassName}`}>
            <div className="content">
                <ExclamationHexagon className="icon" />
                <span className="content">{children}</span>
            </div>
        </div>
    );
};
