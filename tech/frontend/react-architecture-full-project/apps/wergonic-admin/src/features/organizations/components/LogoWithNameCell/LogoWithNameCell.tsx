import { Row } from "react-table";

import { Avatar } from "@mui/material";

import { type HTMLDivProps } from "ui";

import { TOrganization } from "@app-types/index";

type Props = HTMLDivProps & {
    value: string;
    row: Row<TOrganization>;
};

export const LogoWithNameCell = ({ value, row, ...props }: Props) => {
    const logoSrc = row.original.logo ? row.original.logo : "";
    return (
        <div {...props}>
            <Avatar src={logoSrc} className="avatar" />
            {value}
        </div>
    );
};
