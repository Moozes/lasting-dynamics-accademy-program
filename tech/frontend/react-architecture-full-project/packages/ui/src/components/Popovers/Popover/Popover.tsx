import { Popover as MuiPopover, PopoverProps } from "@mui/material";

import { defaultPositionAndPaperProps } from "./inlineStyles";

// Mui popover with repetitive default props (position and paper styles)
// these default props are overridable from the outside with {...props}
export const Popover = (props: PopoverProps) => <MuiPopover {...defaultPositionAndPaperProps} {...props} />;
