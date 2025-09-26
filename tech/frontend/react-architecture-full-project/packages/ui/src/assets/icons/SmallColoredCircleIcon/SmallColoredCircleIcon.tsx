import type { HTMLDivProps } from "ui";

type Props = HTMLDivProps & {
    bgColor?: string;
    height?: string;
    width?: string;
};

export const SmallColoredCircleIcon = (props: Props) => {
    return <div {...props} />;
};
