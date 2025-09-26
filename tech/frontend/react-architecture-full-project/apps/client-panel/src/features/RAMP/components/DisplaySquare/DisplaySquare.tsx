import type { HTMLDivProps } from "ui";

type Props = HTMLDivProps & { value: string; color: "normal" | "disabled"; width: string; height: string };

export const DisplaySquare = ({ value, color, className, width, height, ...props }: Props) => {
    let calculatedClassName = className || "";
    calculatedClassName += ` ${color}`;
    return (
        <div className={calculatedClassName} {...props}>
            {value}
        </div>
    );
};
