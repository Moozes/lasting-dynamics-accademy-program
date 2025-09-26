import type { HTMLDivProps } from "ui";

type Props = HTMLDivProps & { value: string };

export const NumberCircle = ({ value, ...props }: Props) => {
    return <div {...props}>{value}</div>;
};
