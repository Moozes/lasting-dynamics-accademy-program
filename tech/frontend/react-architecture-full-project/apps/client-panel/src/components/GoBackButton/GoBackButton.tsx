import { To, useNavigate } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

import { GoBackButtonStyle, GoBackIconStyle } from "./inlineStyles";

type Props = IconButtonProps & { to?: To };

export default function GoBackButton({ to, ...props }: Props) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (to) {
            navigate(to);
        } else navigate(-1);
    };

    return (
        <IconButton sx={GoBackButtonStyle} {...props} onClick={handleClick}>
            <ArrowBackIcon sx={GoBackIconStyle} />
        </IconButton>
    );
}
