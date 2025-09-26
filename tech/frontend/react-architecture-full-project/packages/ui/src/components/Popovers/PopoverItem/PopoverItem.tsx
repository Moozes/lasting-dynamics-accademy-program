import { Box, BoxProps } from "@mui/material";

type Props = BoxProps & {
    disabled?: boolean;
    selected?: boolean;
};

export const PopoverItem = ({ disabled, selected, className, ...props }: Props) => {
    const containerClassName = [className, disabled ? "disabled" : "", selected ? "selected" : ""].join(" ");
    return <Box className={containerClassName} {...props} />;
};
