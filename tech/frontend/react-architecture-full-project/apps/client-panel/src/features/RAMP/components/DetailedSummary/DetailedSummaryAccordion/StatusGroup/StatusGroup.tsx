import type { HTMLDivProps } from "ui";

type Props = HTMLDivProps & {
    dangerValue: string;
    mediumValue: string;
    normalValue: string;
};

export const StatusGroup = ({ dangerValue, mediumValue, normalValue, ...props }: Props) => {
    return (
        <div {...props}>
            <div className="danger">{dangerValue}</div>
            <div className="medium">
                <div className="oval" />
                <div className="value">{mediumValue}</div>
            </div>
            <div className="normal">
                <div className="oval" />
                <div className="value">{normalValue}</div>
            </div>
        </div>
    );
};
