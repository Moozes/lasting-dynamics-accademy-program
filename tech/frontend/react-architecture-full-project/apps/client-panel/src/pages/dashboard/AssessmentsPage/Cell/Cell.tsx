import type { HTMLDivProps } from "ui";

type Props = HTMLDivProps & {
    width?: string;
};

export const Cell = ({ children, ...props }: Props) => {
    return (
        <div title={children as string} {...props}>
            {children}
        </div>
    );
};
