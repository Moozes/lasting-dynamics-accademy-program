import MuiClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { HTMLDivProps } from "ui";

type Props = HTMLDivProps & {
    text: string;
    onRemove: () => void;
};

const Label = ({ text, onRemove, ...props }: Props) => {
    return (
        <div {...props}>
            <Typography variant="h6">{text}</Typography>
            <IconButton onClick={onRemove} className="icon-button">
                <MuiClearIcon />
            </IconButton>
        </div>
    );
};

export const StyledLabel = styled(Label)(({ theme }) => ({
    color: theme.color_system.text.secondary,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 14px",
    border: `1px solid ${theme.color_system.text.primary}`,
    borderRadius: 5,
    "& > .icon-button": {
        padding: 4,
        color: "inherit",
    },
}));
