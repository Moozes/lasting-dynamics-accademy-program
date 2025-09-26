import type { HTMLDivProps } from "ui";

type Props = HTMLDivProps & { width?: string; height?: string; borderRadius?: string; backgroundColor?: string };

export const OvalShape = (props: Props) => {
    return <div {...props} />;
};
