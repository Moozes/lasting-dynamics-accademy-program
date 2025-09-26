import { Tooltip as MuiTooltip, TooltipProps } from "@mui/material";

type Props = TooltipProps;

export const Tooltip = ({ className, ...props }: Props) => {
    return (
        <MuiTooltip
            {...props}
            classes={{ popper: className }}
            arrow
            slotProps={{
                popper: {
                    modifiers: [
                        {
                            name: "offset",
                            options: {
                                // distance from anchor == height of arrow == 8px
                                offset: [0, -8],
                            },
                        },
                    ],
                },
            }}
        />
    );
};
